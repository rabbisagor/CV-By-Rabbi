import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '10mb' }));

// Helper to get GoogleGenAI client if key exists
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

// AI assistant endpoint
app.post('/api/ai/generate', async (req: Request, res: Response) => {
  const { action, prompt, language = 'en', role, context } = req.body;

  try {
    const ai = getGeminiClient();

    if (!ai) {
      // Fallback response generator if API key is not configured
      const fallbackResponse = getLocalFallback(action, role, language, prompt);
      return res.json({ result: fallbackResponse, source: 'curated' });
    }

    let systemInstruction = `You are a professional senior resume and CV writing expert specialized in both Bangladeshi and international job markets.
Generate polished, high-impact, ATS-optimized content.
Language requirement: Generate response strictly in ${language === 'bn' ? 'Bangla (বাংলা)' : 'English'}.
Do not include conversational filler, preamble, markdown formatting ticks (e.g. \`\`\`), or disclaimers. Provide only the clean text ready to be inserted directly into the CV.`;

    let userPrompt = prompt;

    if (action === 'objective') {
      userPrompt = `Write a compelling 2-3 sentence Career Objective for a ${role || 'job candidate'} in Bangladesh/International market. Context: ${context || prompt || 'Entry-level professional with strong dedication and quick learning ability.'}`;
    } else if (action === 'summary') {
      userPrompt = `Write a high-impact, professional executive summary (3-4 sentences) for a ${role || 'professional'}. Highlight core competencies, drive, and value delivered. Context: ${context || prompt}`;
    } else if (action === 'improve_bullet') {
      userPrompt = `Rewrite this job responsibility bullet point to be achievement-oriented, starting with a strong action verb and highlighting tangible impact/results: "${prompt}"`;
    } else if (action === 'suggest_skills') {
      userPrompt = `Suggest 8-12 top in-demand skills (comma-separated list only) for the role: ${role || prompt}. Include both technical and essential soft skills.`;
    } else if (action === 'translate') {
      userPrompt = `Translate the following CV text accurately and professionally into ${language === 'bn' ? 'Bangla' : 'English'}:\n"${prompt}"`;
    } else if (action === 'tailor') {
      userPrompt = `Given this job description: "${prompt}", provide 3 key bullet points tailoring relevant qualifications and strengths for this vacancy.`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const text = response.text?.trim() || '';
    return res.json({ result: text, source: 'gemini' });
  } catch (error: any) {
    console.error('AI generation error:', error?.message || error);
    const fallback = getLocalFallback(action, role, language, prompt);
    return res.json({ result: fallback, source: 'fallback', warning: error?.message });
  }
});

function getLocalFallback(action: string, role?: string, language: string = 'en', prompt?: string): string {
  const isBn = language === 'bn';

  if (action === 'objective') {
    if (isBn) {
      return `একজন উদ্যমী এবং ফলাফল-ভিত্তিক ${role || 'পেশাজীবী'} হিসেবে একটি প্রগতিশীল প্রতিষ্ঠানে সুযোগ অনুসন্ধান করছি, যেখানে আমার শিক্ষাগত জ্ঞান ও দক্ষতা প্রয়োগ করে প্রতিষ্ঠানের লক্ষ্য অর্জনে সক্রিয় অবদান রাখতে পারি।`;
    }
    return `Motivated and goal-oriented ${role || 'graduate'} seeking an opportunity in a dynamic organization where I can leverage my academic foundation, problem-solving skills, and proactive attitude to contribute to company growth while advancing professionally.`;
  }

  if (action === 'summary') {
    if (isBn) {
      return `অভিজ্ঞ ও দক্ষ ${role || 'পেশাজীবী'}, যিনি দলগত ব্যবস্থাপনা, সমস্যা সমাধান এবং কার্যকর যোগাযোগে পারদর্শী। কাজের গুণগত মান বজায় রেখে নির্ধারিত সময়ে লক্ষ্য অর্জনে প্রতিশ্রুতিবদ্ধ।`;
    }
    return `Dedicated ${role || 'professional'} with proven ability to optimize workflows, collaborate cross-functionally, and deliver high-quality outcomes under tight deadlines. Passionate about innovation, strategic execution, and continuous professional development.`;
  }

  if (action === 'improve_bullet') {
    if (isBn) {
      return `দক্ষতার সাথে কার্যপ্রক্রিয়া পরিচালনা করে দলের সামগ্রিক উৎপাদনশীলতা এবং সেবার গুণগত মান উল্লেখযোগ্যভাবে বৃদ্ধি করেছি।`;
    }
    return `Spearheaded daily operational initiatives, streamlining collaborative workflows and boosting task efficiency by 25% while maintaining rigorous quality standards.`;
  }

  if (action === 'suggest_skills') {
    if (isBn) {
      return 'কমিউনিকেশন, সমস্যা সমাধান, দলগত কাজ, সময় ব্যবস্থাপনা, ডেটা বিশ্লেষণ, মাইক্রোসফট অফিস, নেতৃত্ব, প্রকল্প পরিকল্পনা';
    }
    return 'Project Management, Cross-functional Collaboration, Data Analysis, Critical Thinking, Communication, Strategic Planning, Problem Solving, Agile Methodologies';
  }

  return prompt || 'Professional CV Content';
}

// Development and production server handling
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

startServer();
