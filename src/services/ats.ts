import { CvData } from '../types/cv';

export interface AtsCheckItem {
  id: string;
  category: 'contact' | 'structure' | 'experience' | 'skills' | 'formatting';
  titleEn: string;
  titleBn: string;
  status: 'pass' | 'warning' | 'fail';
  scoreImpact: number; // e.g. +10 or 0
  recommendationEn: string;
  recommendationBn: string;
}

export interface AtsReport {
  score: number; // 0 to 100
  rating: 'Excellent' | 'Good' | 'Needs Improvement' | 'Critical Issues';
  ratingBn: 'চমৎকার' | 'ভালো' | 'উন্নতি প্রয়োজন' | 'গুরুত্বপূর্ণ অসঙ্গতি';
  items: AtsCheckItem[];
  tipsEn: string[];
  tipsBn: string[];
}

export function evaluateAtsScore(cv: CvData): AtsReport {
  const items: AtsCheckItem[] = [];
  let totalScore = 0;

  // 1. Full Name
  if (cv.personalInfo.fullName.trim().length >= 3) {
    items.push({
      id: 'name',
      category: 'contact',
      titleEn: 'Candidate Name Clear & Prominent',
      titleBn: 'প্রার্থীর নাম স্পষ্ট ও সম্পূর্ণ',
      status: 'pass',
      scoreImpact: 10,
      recommendationEn: 'Your full name is properly identified.',
      recommendationBn: 'আপনার নাম সুস্পষ্টভাবে উল্লেখ করা হয়েছে।',
    });
    totalScore += 10;
  } else {
    items.push({
      id: 'name',
      category: 'contact',
      titleEn: 'Candidate Name Missing or Too Short',
      titleBn: 'প্রার্থীর নাম অসম্পূর্ণ বা বাদ পড়েছে',
      status: 'fail',
      scoreImpact: 0,
      recommendationEn: 'Add your professional full legal name at the top.',
      recommendationBn: 'সিভির শীর্ষে আপনার পূর্ণ প্রফেশনাল নাম লিখুন।',
    });
  }

  // 2. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(cv.personalInfo.email)) {
    items.push({
      id: 'email',
      category: 'contact',
      titleEn: 'Professional Email Address Provided',
      titleBn: 'বৈধ প্রফেশনাল ইমেইল অ্যাড্রেস যুক্ত',
      status: 'pass',
      scoreImpact: 10,
      recommendationEn: 'Email address is valid and parseable by ATS scanners.',
      recommendationBn: 'ইমেইল সঠিক ফরম্যাটে আছে যা সফটওয়্যার সহজেই রিড করতে পারে।',
    });
    totalScore += 10;
  } else {
    items.push({
      id: 'email',
      category: 'contact',
      titleEn: 'Valid Email Address Missing',
      titleBn: 'সঠিক ইমেইল অ্যাড্রেস প্রয়োজন',
      status: 'fail',
      scoreImpact: 0,
      recommendationEn: 'Provide a clean, formal email (e.g. yourname@domain.com).',
      recommendationBn: 'একটি আনুষ্ঠানিক ইমেইল ঠিকানা যুক্ত করুন।',
    });
  }

  // 3. Phone Number
  if (cv.personalInfo.phone.trim().length >= 8) {
    items.push({
      id: 'phone',
      category: 'contact',
      titleEn: 'Direct Phone Number Provided',
      titleBn: 'সরাসরি মোবাইল নম্বর যুক্ত',
      status: 'pass',
      scoreImpact: 8,
      recommendationEn: 'Phone number format is complete with area/country code.',
      recommendationBn: 'মোবাইল নম্বর স্পষ্টভাবে দেওয়া আছে।',
    });
    totalScore += 8;
  } else {
    items.push({
      id: 'phone',
      category: 'contact',
      titleEn: 'Contact Phone Number Missing',
      titleBn: 'মোবাইল নম্বর অনুপস্থিত',
      status: 'fail',
      scoreImpact: 0,
      recommendationEn: 'Add an active contact number with country code (+880).',
      recommendationBn: 'কান্ট্রি কোডসহ একটি সচল মোবাইল নম্বর দিন।',
    });
  }

  // 4. Present Address / Location
  if (cv.personalInfo.presentAddress.trim().length >= 5) {
    items.push({
      id: 'address',
      category: 'contact',
      titleEn: 'Geographic Location / City Identified',
      titleBn: 'বর্তমান অবস্থান ও শহর নির্দিষ্ট',
      status: 'pass',
      scoreImpact: 6,
      recommendationEn: 'Recruiters can filter candidates by your physical location.',
      recommendationBn: 'রিক্রুটাররা আপনার ভৌগোলিক অবস্থান সহজে চিহ্নিত করতে পারবেন।',
    });
    totalScore += 6;
  } else {
    items.push({
      id: 'address',
      category: 'contact',
      titleEn: 'City / Location Not Specified',
      titleBn: 'শহর বা বর্তমান ঠিকানা অনুপস্থিত',
      status: 'warning',
      scoreImpact: 2,
      recommendationEn: 'Include at least your City, Country (e.g. Dhaka, Bangladesh).',
      recommendationBn: 'কমপক্ষে আপনার শহর ও দেশের নাম (যেমন: ঢাকা, বাংলাদেশ) লিখুন।',
    });
    totalScore += 2;
  }

  // 5. Professional Summary or Objective
  const hasSummary = cv.professionalSummary.trim().length > 30;
  const hasObjective = cv.careerObjective.trim().length > 30;
  if (hasSummary || hasObjective) {
    items.push({
      id: 'summary',
      category: 'structure',
      titleEn: 'Executive Summary or Career Objective Included',
      titleBn: 'প্রফেশনাল সামারি বা অবজেক্টিভ অন্তর্ভুক্ত',
      status: 'pass',
      scoreImpact: 12,
      recommendationEn: 'Strong value proposition introduces your profile immediately.',
      recommendationBn: 'আপনার পেশাগত লক্ষ্য বা সামারি সিভির শুরুতে আকর্ষণ তৈরি করে।',
    });
    totalScore += 12;
  } else {
    items.push({
      id: 'summary',
      category: 'structure',
      titleEn: 'Missing Professional Summary or Objective',
      titleBn: 'সামারি বা ক্যারিয়ার অবজেক্টিভ যোগ করুন',
      status: 'fail',
      scoreImpact: 0,
      recommendationEn: 'Add a 2-3 sentence summary highlighting your core strengths.',
      recommendationBn: '২-৩ বাক্যে আপনার মূল দক্ষতা ও লক্ষ্যের বিবরণ দিন।',
    });
  }

  // 6. Education Details
  if (cv.education.length > 0) {
    const hasDegree = cv.education.every((e) => e.degree && e.institution);
    if (hasDegree) {
      items.push({
        id: 'education',
        category: 'structure',
        titleEn: 'Education History Formatted Correctly',
        titleBn: 'শিক্ষাগত যোগ্যতা সুবিন্যস্ত',
        status: 'pass',
        scoreImpact: 12,
        recommendationEn: 'Degrees, institutions, and passing credentials are recognized.',
        recommendationBn: 'ডিগ্রির নাম ও প্রতিষ্ঠানের তথ্য সঠিকভাবে দেওয়া আছে।',
      });
      totalScore += 12;
    } else {
      items.push({
        id: 'education',
        category: 'structure',
        titleEn: 'Incomplete Education Records',
        titleBn: 'অসম্পূর্ণ শিক্ষাগত তথ্য',
        status: 'warning',
        scoreImpact: 6,
        recommendationEn: 'Ensure all education records have both degree and institution name.',
        recommendationBn: 'প্রতিটি শিক্ষাগত এন্ট্রিতে ডিগ্রি ও প্রতিষ্ঠানের নাম পূরণ করুন।',
      });
      totalScore += 6;
    }
  } else {
    items.push({
      id: 'education',
      category: 'structure',
      titleEn: 'No Education Records Found',
      titleBn: 'কোনো শিক্ষাগত তথ্য নেই',
      status: 'fail',
      scoreImpact: 0,
      recommendationEn: 'Add your highest academic degree or educational qualifications.',
      recommendationBn: 'আপনার অর্জিত শিক্ষাগত যোগ্যতা যোগ করুন।',
    });
  }

  // 7. Work / Internship Experience
  const expCount = cv.experience.length + cv.internships.length;
  if (expCount > 0) {
    let hasActionBullets = false;
    cv.experience.forEach((e) => {
      if (e.responsibilities.some((r) => r.length > 20)) {
        hasActionBullets = true;
      }
    });
    if (hasActionBullets) {
      items.push({
        id: 'experience',
        category: 'experience',
        titleEn: 'Work Experience with Action Bullets',
        titleBn: 'কাজের অভিজ্ঞতায় অ্যাকশন বুলেট পয়েন্ট যুক্ত',
        status: 'pass',
        scoreImpact: 16,
        recommendationEn: 'Bullet points effectively communicate your daily impact.',
        recommendationBn: 'বুলেট পয়েন্ট দিয়ে আপনার কাজের সাফল্য সুন্দরভাবে তুলে ধরা হয়েছে।',
      });
      totalScore += 16;
    } else {
      items.push({
        id: 'experience',
        category: 'experience',
        titleEn: 'Work Experience Lacks Detailed Bullet Points',
        titleBn: 'কাজের বিবরণে বিস্তারিত বুলেটের অভাব',
        status: 'warning',
        scoreImpact: 8,
        recommendationEn: 'Add 2-3 specific bullet points for each position explaining measurable achievements.',
        recommendationBn: 'প্রতিটি পদের জন্য ২-৩টি নির্দিষ্ট অর্জন ও দায়িত্বের বুলেট পয়েন্ট দিন।',
      });
      totalScore += 8;
    }
  } else {
    items.push({
      id: 'experience',
      category: 'experience',
      titleEn: 'No Professional or Internship Experience Listed',
      titleBn: 'কোনো কাজের বা ইন্টার্নশিপ অভিজ্ঞতা নেই',
      status: 'warning',
      scoreImpact: 4,
      recommendationEn: 'If a fresher, add academic capstone projects, internships, or volunteer work.',
      recommendationBn: 'সদ্য পাস হলে একাডেমিক প্রজেক্ট বা ভলান্টিয়ারিং কাজের বিবরণ দিন।',
    });
    totalScore += 4;
  }

  // 8. Skills Quantity & Keywords
  const totalSkills = cv.skills.reduce((acc, cat) => acc + cat.skills.length, 0);
  if (totalSkills >= 6) {
    items.push({
      id: 'skills',
      category: 'skills',
      titleEn: `Sufficient Skills Keywords (${totalSkills} skills found)`,
      titleBn: `পর্যাপ্ত স্কিল কি-ওয়ার্ড (${totalSkills}টি দক্ষতা পাওয়া গেছে)`,
      status: 'pass',
      scoreImpact: 14,
      recommendationEn: 'Good keyword density for ATS skill scrapers and recruiters.',
      recommendationBn: 'এটিএস স্ক্রিনারের জন্য পর্যাপ্ত কি-ওয়ার্ড রয়েছে।',
    });
    totalScore += 14;
  } else if (totalSkills > 0) {
    items.push({
      id: 'skills',
      category: 'skills',
      titleEn: 'Low Skills Keyword Count',
      titleBn: 'দক্ষতার সংখ্যা কম',
      status: 'warning',
      scoreImpact: 7,
      recommendationEn: 'Add at least 6-10 relevant technical, software, or language skills.',
      recommendationBn: 'কমপক্ষে ৬ থেকে ১০টি প্রযুক্তিগত বা ভাষার দক্ষতা যোগ করুন।',
    });
    totalScore += 7;
  } else {
    items.push({
      id: 'skills',
      category: 'skills',
      titleEn: 'No Skills Listed',
      titleBn: 'কোনো স্কিল যোগ করা হয়নি',
      status: 'fail',
      scoreImpact: 0,
      recommendationEn: 'Recruiters filter by skills; please add your core proficiencies.',
      recommendationBn: 'চাকরির আবেদনের জন্য মূল দক্ষতাসমূহ অবশ্যই যুক্ত করুন।',
    });
  }

  // 9. Quantitative Results & Metrics
  const allText = JSON.stringify(cv);
  const metricRegex = /\b(\d+%|\$\d+|\d+\+|\d+k|\d+M|\b[0-9]{2,}\b)/i;
  if (metricRegex.test(allText)) {
    items.push({
      id: 'metrics',
      category: 'experience',
      titleEn: 'Measurable Metrics & Numbers Detected',
      titleBn: 'পরিমাপযোগ্য সংখ্যা ও ফলাফল বিদ্যমান',
      status: 'pass',
      scoreImpact: 12,
      recommendationEn: 'Numbers, percentages, and metrics make accomplishments credible.',
      recommendationBn: 'সংখ্যা ও শতকরা হার আপনার অর্জনকে বিশ্বাসযোগ্য করে তোলে।',
    });
    totalScore += 12;
  } else {
    items.push({
      id: 'metrics',
      category: 'experience',
      titleEn: 'No Quantitative Metrics Found',
      titleBn: 'কোনো সংখ্যামূলক ফলাফল পাওয়া যায়নি',
      status: 'warning',
      scoreImpact: 5,
      recommendationEn: 'Enhance bullets with figures (e.g. "Increased sales by 20%", "Trained 15 interns").',
      recommendationBn: 'কাজের ফলাফলে সংখ্যা যুক্ত করুন (যেমন: "২০% বৃদ্ধি", "১৫ জনকে প্রশিক্ষণ")।',
    });
    totalScore += 5;
  }

  // Ensure score is bounded [0, 100]
  const finalScore = Math.min(100, Math.max(0, totalScore));

  let rating: AtsReport['rating'] = 'Needs Improvement';
  let ratingBn: AtsReport['ratingBn'] = 'উন্নতি প্রয়োজন';

  if (finalScore >= 85) {
    rating = 'Excellent';
    ratingBn = 'চমৎকার';
  } else if (finalScore >= 70) {
    rating = 'Good';
    ratingBn = 'ভালো';
  } else if (finalScore < 50) {
    rating = 'Critical Issues';
    ratingBn = 'গুরুত্বপূর্ণ অসঙ্গতি';
  }

  return {
    score: finalScore,
    rating,
    ratingBn,
    items,
    tipsEn: [
      'Use standard headings (e.g., "Work Experience", "Education", "Skills") for flawless parsing.',
      'Always save and submit in standard PDF format with selectable text rather than an image screenshot.',
      'Mirror exact keywords from the employer\'s job circular within your bullet points and skills.',
      'Avoid placing vital information inside non-standard vector charts or rasterized drawings.'
    ],
    tipsBn: [
      'স্ট্যান্ডার্ড শিরোনাম ব্যবহার করুন যাতে রিক্রুটিং সফটওয়্যার কোনো সেকশন এড়িয়ে না যায়।',
      'ছবি বা স্ক্রিনশট নয়, সর্বদা হাই-কোয়ালিটি টেক্সট সিলেক্টেবল পিডিএফ জমা দিন।',
      'চাকরির বিজ্ঞপ্তিতে থাকা মূল টার্ম ও কি-ওয়ার্ডগুলো আপনার দক্ষতা ও অভিজ্ঞতায় প্রতিফলিত করুন।',
      'সবসময় বানান ও ব্যাকরণ নির্ভুল রাখুন।'
    ]
  };
}
