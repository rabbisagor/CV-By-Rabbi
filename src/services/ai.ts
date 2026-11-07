export interface AiRequest {
  action: 'objective' | 'summary' | 'improve_bullet' | 'suggest_skills' | 'translate' | 'tailor';
  prompt: string;
  language?: 'en' | 'bn';
  role?: string;
  context?: string;
}

export interface AiResponse {
  result: string;
  source: 'gemini' | 'curated' | 'fallback';
  warning?: string;
}

export const AiService = {
  async generate(req: AiRequest): Promise<AiResponse> {
    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      console.warn('AI API network error, using local fallback:', err);
      // Return smart local fallback
      return {
        result: getClientFallback(req),
        source: 'fallback',
        warning: 'Working in offline fallback mode.',
      };
    }
  },
};

function getClientFallback(req: AiRequest): string {
  const isBn = req.language === 'bn';
  if (req.action === 'objective') {
    return isBn
      ? `একজন নিবেদিতপ্রাণ ও লক্ষ্য-ভিত্তিক ${req.role || 'পেশাজীবী'} হিসেবে একটি আধুনিক প্রতিষ্ঠানে সুযোগ সন্ধান করছি, যেখানে আমার অর্জিত জ্ঞান প্রয়োগ করে প্রতিষ্ঠানকে সামনের দিকে এগিয়ে নিতে পারব।`
      : `Energetic and driven ${req.role || 'graduate'} committed to leveraging core competencies, strong analytical mindset, and collaborative skills to drive tangible value for organizational objectives.`;
  }
  if (req.action === 'summary') {
    return isBn
      ? `অভিজ্ঞতাসম্পন্ন ${req.role || 'পেশাজীবী'}, যিনি দ্রুত সমস্যা সমাধান, দল পরিচালনা এবং গুণগত মান বজায় রেখে লক্ষ্য অর্জনে বিশ্বাসী। প্রজেক্ট ডেলিভারিতে ধারাবাহিক সাফল্যের রেকর্ড রয়েছে।`
      : `Results-focused ${req.role || 'professional'} with proven track record in streamlining operational workflows, leading cross-functional teams, and achieving milestone targets with precision.`;
  }
  if (req.action === 'improve_bullet') {
    return isBn
      ? `কাজের সুশৃঙ্খল পরিকল্পনা ও দলগত সমন্বয়ের মাধ্যমে সামগ্রিক উৎপাদনশীলতা ও গুণগত মান উল্লেখযোগ্য হারে বৃদ্ধি করেছি।`
      : `Orchestrated core team workflows and resolved critical bottlenecks, elevating overall deliverable efficiency by 30% while adhering strictly to industry standards.`;
  }
  if (req.action === 'suggest_skills') {
    return isBn
      ? 'প্রজেক্ট ম্যানেজমেন্ট, যোগাযোগ দক্ষতা, সমস্যা সমাধান, মাইক্রোসফট এক্সেল, প্রেজেন্টেশন, দলগত কাজ, সময়ানুবর্তিতা'
      : 'Strategic Planning, Project Execution, Cross-functional Leadership, Data Analysis, Client Relations, Critical Thinking, Agile Frameworks';
  }
  return req.prompt;
}
