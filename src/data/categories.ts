import { CvCategory } from '../types/cv';

export const CV_CATEGORIES: CvCategory[] = [
  // EDUCATION-BASED (8)
  {
    id: 'fresh-bachelor',
    group: 'education',
    titleEn: "Fresh Bachelor's Graduate",
    titleBn: "সদ্য স্নাতক (অনার্স) উত্তীর্ণ",
    icon: 'GraduationCap',
    descriptionEn: "Designed for university graduates seeking their first professional role.",
    descriptionBn: "বিশ্ববিদ্যালয় থেকে স্নাতক সম্পন্ন করা প্রার্থীদের জন্য উপযুক্ত সিভি কাঠামো।",
    candidateProfileEn: "BSc, BBA, BA, BSS graduates with strong academic foundation & project portfolio.",
    candidateProfileBn: "বিএসসি, বিবিএ, বিএ, বিএসএস সম্পন্নকারী শিক্ষার্থী যাদের প্রাতিষ্ঠানিক প্রজেক্ট ও ভালো সিজিপিএ রয়েছে।",
    recommendedTemplates: ['fresh-graduate', 'modern-professional', 'ats-friendly', 'academic'],
    recommendedSections: ['education', 'projects', 'skills', 'internship', 'extracurricular'],
    tipsEn: [
      "Place Education immediately beneath your Career Objective.",
      "Highlight final year thesis or capstone projects with tangible technical stack.",
      "Include academic honors, dean's list mentions, and extracurricular leadership."
    ],
    tipsBn: [
      "ক্যারিয়ার অবজেক্টিভের ঠিক পরেই শিক্ষাগত যোগ্যতা প্রাধান্য দিন।",
      "ফাইনাল ইয়ার থিসিস বা ক্যাপস্টোন প্রজেক্টের প্রযুক্তিগত বিবরণ অন্তর্ভুক্ত করুন।",
      "ক্লাব কার্যক্রম, ভলান্টিয়ারিং ও একাডেমিক সাফল্য স্পষ্টভাবে লিখুন।"
    ]
  },
  {
    id: 'fresh-master',
    group: 'education',
    titleEn: "Fresh Master's Graduate",
    titleBn: "সদ্য স্নাতকোত্তর (মাস্টার্স) উত্তীর্ণ",
    icon: 'Award',
    descriptionEn: "For candidates holding postgraduate degrees with research or specialized focus.",
    descriptionBn: "মাস্টার্স বা স্নাতকোত্তর সম্পন্নকারী প্রার্থীদের জন্য বিশেষায়িত ফরম্যাট।",
    candidateProfileEn: "MSc, MBA, MA, MSS holders with research depth and analytical capabilities.",
    candidateProfileBn: "এমএসসি, এমবিএ, এমএ বা এমএসএস ডিগ্রিধারী যাদের গবেষণাধর্মী বা বিশেষ জ্ঞান রয়েছে।",
    recommendedTemplates: ['academic', 'executive', 'corporate', 'modern-professional'],
    recommendedSections: ['education', 'publications', 'research', 'skills', 'experience'],
    tipsEn: [
      "Emphasize research methodology, thesis findings, or business case projects.",
      "Showcase publications, conference participations, or specialized certifications.",
      "Articulate high-level critical thinking and advanced domain knowledge."
    ],
    tipsBn: [
      "থিসিস ও রিসার্চ পেপারের মূল ফলাফল সংক্ষেপে তুলে ধরুন।",
      "জাতীয় ও আন্তর্জাতিক সেমিনার বা প্রকাশনা থাকলে অবশ্যই যোগ করুন।",
      "অ্যাডভান্সড অ্যানালিটিক্যাল স্কিল ও সফটওয়্যার দক্ষতার উল্লেখ করুন।"
    ]
  },
  {
    id: 'degree-pass',
    group: 'education',
    titleEn: "Degree Pass Graduate",
    titleBn: "ডিগ্রী পাস কোর্স গ্র্যাজুয়েট",
    icon: 'BookOpen',
    descriptionEn: "Structured for National University or affiliated colleges Degree (Pass) graduates.",
    descriptionBn: "জাতীয় বিশ্ববিদ্যালয় ও অধিভুক্ত কলেজের ডিগ্রী পাস কোর্স সম্পন্নকারীদের জন্য।",
    candidateProfileEn: "Degree Pass (BA/BSS/BSc/BBS) candidates ready for commercial and administrative roles.",
    candidateProfileBn: "ডিগ্রী পাস সম্পন্নকারী যারা কর্পোরেট বা প্রশাসনিক চাকরিতে প্রবেশ করতে চান।",
    recommendedTemplates: ['clean-single', 'classic', 'corporate', 'ats-friendly'],
    recommendedSections: ['education', 'skills', 'training', 'experience', 'personal-details'],
    tipsEn: [
      "Highlight practical computer training (MS Office, Tally, accounting software).",
      "Include communication skills, team cooperation, and reliability.",
      "Present educational board and passing years in a crisp, clear layout."
    ],
    tipsBn: [
      "কম্পিউটার অ্যাপ্লিকেশন প্রশিক্ষণ (Word, Excel, Tally ইত্যাদি) স্পষ্টভাবে উল্লেখ করুন।",
      "যোগাযোগ দক্ষতা ও কাজের প্রতি আন্তরিকতা ক্যারিয়ার অবজেক্টিভে তুলে ধরুন।",
      "সততা, নির্ভরযোগ্যতা ও ইতিবাচক মনোভাবের ওপর জোর দিন।"
    ]
  },
  {
    id: 'hsc-pass',
    group: 'education',
    titleEn: "HSC Pass Candidate",
    titleBn: "এইচএসসি উত্তীর্ণ প্রার্থী",
    icon: 'FileText',
    descriptionEn: "Tailored for Higher Secondary Certificate holders entering employment or part-time work.",
    descriptionBn: "উচ্চ মাধ্যমিক শেষ করে চাকরি, কল সেন্টার বা পার্ট-টাইম কাজে আগ্রহীদের জন্য।",
    candidateProfileEn: "HSC graduates looking for entry roles, front desk, retail, or tech support.",
    candidateProfileBn: "এইচএসসি পাস শিক্ষার্থী যারা দ্রুত ক্যারিয়ার শুরু করতে আগ্রহী।",
    recommendedTemplates: ['clean-single', 'minimalist', 'fresh-graduate', 'ats-friendly'],
    recommendedSections: ['education', 'skills', 'training', 'hobbies', 'declaration'],
    tipsEn: [
      "Highlight language proficiency (Bengali & English) and typing speed.",
      "Mention any extra computer or skill enhancement certificates.",
      "Keep the CV clean, error-free, and contained to a single page."
    ],
    tipsBn: [
      "বাংলা ও ইংরেজিতে কথা বলা ও টাইপিং দক্ষতা উল্লেখ করুন।",
      "কম্পিউটার লিটারেসি ও প্রশিক্ষণ কোর্সের বিস্তারিত দিন।",
      "সিভি এক পৃষ্ঠার মধ্যে পরিষ্কার ও পরিচ্ছন্ন রাখুন।"
    ]
  },
  {
    id: 'ssc-pass',
    group: 'education',
    titleEn: "SSC Pass Candidate",
    titleBn: "এসএসসি উত্তীর্ণ প্রার্থী",
    icon: 'Smile',
    descriptionEn: "For Secondary School Certificate holders seeking vocational and entry jobs.",
    descriptionBn: "মাধ্যমিক পরীক্ষা সম্পন্ন করে বৃত্তিমূলক বা প্রাথমিক চাকরির প্রার্থীদের জন্য।",
    candidateProfileEn: "SSC holders applying for technical training, trade jobs, or sales assistants.",
    candidateProfileBn: "এসএসসি পাস শিক্ষার্থী যারা কারিগরি কাজ, সেলস বা অফিস সহায়তায় কাজ করতে চান।",
    recommendedTemplates: ['clean-single', 'classic', 'minimalist', 'ats-friendly'],
    recommendedSections: ['education', 'training', 'skills', 'personal-details'],
    tipsEn: [
      "Include any technical vocational skills (electrical, computer, driving, hardware).",
      "Ensure personal contact details are completely accurate.",
      "Include verified references from teachers or respectable community figures."
    ],
    tipsBn: [
      "যেকোনো কারিগরি ট্রেড কোর্স বা হাতে-কলমে প্রশিক্ষণ থাকলে উল্লেখ করুন।",
      "সঠিক মোবাইল নম্বর এবং বর্তমান ঠিকানা প্রদান করুন।",
      "শিক্ষক বা পরিচিত দায়িত্বশীল ব্যক্তির রেফারেন্স যুক্ত করুন।"
    ]
  },
  {
    id: 'diploma-graduate',
    group: 'education',
    titleEn: "Diploma Graduate",
    titleBn: "ডিপ্লোমা ইন ইঞ্জিনিয়ারিং উত্তীর্ণ",
    icon: 'Cpu',
    descriptionEn: "Specifically crafted for Polytechnic and Technical Diploma holders in Bangladesh.",
    descriptionBn: "পলিটেকনিক ও কারিগরি শিক্ষা বোর্ডের ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য।",
    candidateProfileEn: "Diploma in Civil, Electrical, Mechanical, CSE, Electronics graduates.",
    candidateProfileBn: "সিভিল, ইলেকট্রিক্যাল, মেকানিক্যাল, কম্পিউটার বা টেক্সটাইল ডিপ্লোমা সম্পন্নকারী।",
    recommendedTemplates: ['engineering-resume', 'technical-resume', 'modern-sidebar', 'corporate'],
    recommendedSections: ['education', 'industrial-training', 'technical-skills', 'projects', 'certifications'],
    tipsEn: [
      "Highlight 8th-semester Industrial Attachment with company name and key learnings.",
      "List technical software (AutoCAD, SolidWorks, MATLAB, PLC, Proteus, etc.).",
      "Mention hands-on workshop experience and lab projects."
    ],
    tipsBn: [
      "৮ম সেমিস্টারের ইন্ডাস্ট্রিয়াল এটাচমেন্ট ও প্র্যাক্টিক্যাল কাজের অভিজ্ঞতা গুরুত্ব দিন।",
      "অটোক্যাড বা সংশ্লিষ্ট সফটওয়্যার দক্ষতার তালিকা দিন।",
      "ল্যাব প্রজেক্ট ও কারিগরি টুলস ব্যবহারের অভিজ্ঞতা লিখুন।"
    ]
  },
  {
    id: 'university-student',
    group: 'education',
    titleEn: "University Student",
    titleBn: "অধ্যয়নরত বিশ্ববিদ্যালয়ের শিক্ষার্থী",
    icon: 'BookMarked',
    descriptionEn: "For currently enrolled undergraduates applying for internships or part-time roles.",
    descriptionBn: "বিশ্ববিদ্যালয়ের চলমান শিক্ষার্থী যারা ইন্টার্নশিপ বা পার্ট-টাইম জবের আবেদন করছেন।",
    candidateProfileEn: "Undergraduate students in 2nd, 3rd, or 4th year seeking professional exposure.",
    candidateProfileBn: "২য়, ৩য় বা ৪র্থ বর্ষের শিক্ষার্থী যারা কর্পোরেট জগতে পরিচিতি পেতে চান।",
    recommendedTemplates: ['internship', 'fresh-graduate', 'creative', 'modern-professional'],
    recommendedSections: ['education', 'projects', 'extracurricular', 'skills', 'achievements'],
    tipsEn: [
      "State 'Expected Graduation: Year' clearly in the Education section.",
      "Showcase university club leadership (Debate, MUN, Tech club, Business club).",
      "List competitive hackathons, case competitions, or business plan awards."
    ],
    tipsBn: [
      "শিক্ষাগত যোগ্যতায় সম্ভাব্য পাসের বছর (Expected Graduation) উল্লেখ করুন।",
      "ক্লাবের পদমর্যাদা, ডিবেট, বিজনেস কেস কম্পিটিশন বা অলিম্পিয়াডের তথ্য দিন।",
      "প্রোগ্রামিং বা সফটওয়্যার প্রজেক্টের লাইভ লিঙ্ক বা গিটহাব যুক্ত করুন।"
    ]
  },
  {
    id: 'recent-graduate',
    group: 'education',
    titleEn: "Recent Graduate",
    titleBn: "সাম্প্রতিক গ্র্যাজুয়েট (১-২ বছর)",
    icon: 'Compass',
    descriptionEn: "For alumni who graduated within the past 1-2 years and possess short contracts or internships.",
    descriptionBn: "যাদের পাস করার ১-২ বছর হয়েছে এবং কিছু ইন্টার্নশিপ বা চুক্তিভিত্তিক অভিজ্ঞতা আছে।",
    candidateProfileEn: "Graduates transitioning into permanent officer or associate roles.",
    candidateProfileBn: "১-২ বছরের মধ্যে ডিগ্রি সম্পন্নকারী যারা স্থায়ী পদের জন্য প্রস্তুত।",
    recommendedTemplates: ['modern-professional', 'two-column', 'corporate', 'ats-friendly'],
    recommendedSections: ['experience', 'education', 'skills', 'certifications', 'projects'],
    tipsEn: [
      "Transition from education-first to experience-first as soon as you have 6+ months work history.",
      "Quantify your accomplishments (e.g. 'Handled 50+ client accounts', 'Designed 12 landing pages').",
      "Highlight fast adaptability and continuous professional development."
    ],
    tipsBn: [
      "ইন্টার্নশিপ বা কাজের অভিজ্ঞতা থাকলে শিক্ষাগত যোগ্যতার ওপরে অভিজ্ঞতা রাখুন।",
      "কাজে সংখ্যামূলক অর্জন উল্লেখ করুন (যেমন: ৫০+ ক্লায়েন্ট সাপোর্ট, ২০% সেলস গ্রোথ)।",
      "প্রফেশনাল সার্টিফিকেশন থাকলে অবশ্যই যুক্ত করুন।"
    ]
  },

  // CAREER-BASED (6)
  {
    id: 'internship-applicant',
    group: 'career',
    titleEn: "Internship Applicant",
    titleBn: "ইন্টার্নশিপ আবেদনকারী",
    icon: 'Briefcase',
    descriptionEn: "Optimized for students and graduates applying to competitive corporate internships.",
    descriptionBn: "টপ করপোরেট প্রতিষ্ঠান, ব্যাংক ও বহুজাতিক কোম্পানিতে ইন্টার্নশিপের জন্য।",
    candidateProfileEn: "Final year students needing mandatory internships or voluntary summer placements.",
    candidateProfileBn: "শেষ বর্ষের শিক্ষার্থী যাদের একাডেমিক প্রয়োজনে ইন্টার্নশিপ আবশ্যক।",
    recommendedTemplates: ['internship', 'modern-professional', 'creative', 'minimalist'],
    recommendedSections: ['objective', 'education', 'skills', 'projects', 'extracurricular'],
    tipsEn: [
      "Craft a tailored Career Objective addressing the specific organization.",
      "Highlight problem-solving capability, curiosity, and high emotional intelligence.",
      "Show proficiency in collaboration tools (Slack, Trello, Google Suite, Excel)."
    ],
    tipsBn: [
      "যে প্রতিষ্ঠানে আবেদন করছেন তার লক্ষ্য অনুযায়ী অবজেক্টিভ লিখুন।",
      "টিমওয়ার্ক, সময়ানুবর্তিতা এবং দ্রুত শেখার সক্ষমতা প্রকাশ করুন।",
      "মাইক্রোসফট এক্সেল এবং প্রেজেন্টেশন স্লাইড তৈরির দক্ষতা উল্লেখ করুন।"
    ]
  },
  {
    id: 'entry-level',
    group: 'career',
    titleEn: "Entry-Level Job Seeker",
    titleBn: "প্রাথমিক পর্যায়ের চাকরিপ্রার্থী (Entry Level)",
    icon: 'Target',
    descriptionEn: "For individuals targeting Executive, Management Trainee (MTO), or Junior positions.",
    descriptionBn: "ম্যানেজমেন্ট ট্রেইনি অফিসার (MTO) বা জুনিয়র এক্সিকিউটিভ পদে প্রার্থীদের জন্য।",
    candidateProfileEn: "Job seekers with 0-2 years experience aiming for foundational corporate careers.",
    candidateProfileBn: "০-২ বছরের অভিজ্ঞতা সম্পন্ন চাকরিপ্রার্থী।",
    recommendedTemplates: ['corporate', 'ats-friendly', 'modern-professional', 'clean-single'],
    recommendedSections: ['summary', 'experience', 'education', 'skills', 'references'],
    tipsEn: [
      "Use ATS keywords pulled directly from the target job circular.",
      "Demonstrate structured communication and readiness to take responsibility.",
      "Ensure professional email format (e.g. name.surname@gmail.com)."
    ],
    tipsBn: [
      "চাকরির বিজ্ঞপ্তিতে থাকা প্রধান কি-ওয়ার্ডগুলো সিভিতে ব্যবহার করুন।",
      "প্রফেশনাল ইমেইল অ্যাড্রেস ব্যবহার করুন (অযৌক্তিক ইউজারনেম পরিহার করুন)।",
      "সুস্পষ্ট ভাষায় কাজের পরিধি ও আগ্রহ প্রকাশ করুন।"
    ]
  },
  {
    id: 'experienced-professional',
    group: 'career',
    titleEn: "Experienced Professional",
    titleBn: "অভিজ্ঞ পেশাজীবী (৩-৭ বছর)",
    icon: 'TrendingUp',
    descriptionEn: "Crafted for mid-career professionals with 3-7 years of consistent track record.",
    descriptionBn: "৩ থেকে ৭ বছরের অভিজ্ঞতা সম্পন্ন পেশাজীবীদের জন্য উচ্চমানের প্রেজেন্টেশন।",
    candidateProfileEn: "Assistant Managers, Senior Engineers, Team Leads, Specialists.",
    candidateProfileBn: "সহকারী ব্যবস্থাপক, সিনিয়র ইঞ্জিনিয়ার, টিম লিডার বা স্পেশালিস্ট।",
    recommendedTemplates: ['executive', 'corporate', 'two-column', 'ats-friendly'],
    recommendedSections: ['summary', 'experience', 'achievements', 'skills', 'education'],
    tipsEn: [
      "Open with a powerful 3-sentence Executive Summary detailing your value proposition.",
      "Emphasize leadership, budget management, and operational efficiencies.",
      "Use strong action verbs: Spearheaded, Orchestrated, Optimized, Architected."
    ],
    tipsBn: [
      "সিভির শুরুতে শক্তিশালী প্রফেশনাল সামারি দিয়ে আপনার সাফল্য তুলে ধরুন।",
      "দল পরিচালনা, লক্ষ্য অর্জন এবং খরচ কমানোর সাফল্য উল্লেখ করুন।",
      "শক্তিশালী অ্যাকশন ভার্ব দিয়ে দায়িত্ব বর্ণনা করুন।"
    ]
  },
  {
    id: 'mid-level-pro',
    group: 'career',
    titleEn: "Mid-Level Professional",
    titleBn: "মিড-লেভেল ম্যানেজার ও প্রফেশনাল",
    icon: 'Layers',
    descriptionEn: "For functional leads and managers managing teams, budgets, and cross-department goals.",
    descriptionBn: "টিম ও বিভাগীয় দায়িত্ব পরিচালনাকারী মিড-লেভেল কর্মকর্তাদের জন্য।",
    candidateProfileEn: "Managers, Deputy Managers, Senior Consultants, Product Owners.",
    candidateProfileBn: "ম্যানেজার, ডেপুটি ম্যানেজার, সিনিয়র কনসালট্যান্ট বা প্রোডাক্ট ওনার।",
    recommendedTemplates: ['corporate', 'executive', 'modern-sidebar', 'ats-friendly'],
    recommendedSections: ['summary', 'experience', 'leadership', 'skills', 'education'],
    tipsEn: [
      "Quantify team size managed and revenue impact delivered.",
      "Highlight cross-departmental coordination and strategic milestone deliveries.",
      "List major corporate certifications (PMP, Six Sigma, Scrum, CMA, ACCA)."
    ],
    tipsBn: [
      "কতজন কর্মীর টিম পরিচালনা করেছেন এবং কী অগ্রগতি এনেছেন তা লিখুন।",
      "আন্তর্জাতিক বা স্বীকৃত পেশাগত সনদ থাকলে প্রাধান্য দিন।",
      "কৌশলগত সিদ্ধান্ত গ্রহণ ও সমস্যা সমাধানের দৃষ্টান্ত দিন।"
    ]
  },
  {
    id: 'senior-executive',
    group: 'career',
    titleEn: "Senior Executive & Director",
    titleBn: "সিনিয়র এক্সিকিউটিভ ও ডিরেক্টর",
    icon: 'ShieldCheck',
    descriptionEn: "For CXOs, General Managers, Directors, and Board-level candidates.",
    descriptionBn: "সিইও, জিএম, সিএফও, ডিরেক্টর বা শীর্ষ নীতি-নির্ধারণী কর্মকর্তাদের জন্য।",
    candidateProfileEn: "10+ years industry veterans leading enterprise strategies and P&L governance.",
    candidateProfileBn: "১০+ বছরের অভিজ্ঞ শীর্ষ কর্পোরেট নেতৃবৃন্দ।",
    recommendedTemplates: ['executive', 'elegant', 'classic', 'corporate'],
    recommendedSections: ['summary', 'experience', 'governance', 'education', 'memberships'],
    tipsEn: [
      "Focus heavily on strategic transformation, enterprise vision, and P&L results.",
      "Keep design understated, authoritative, and deeply refined.",
      "Highlight board memberships, industry council roles, and keynote deliveries."
    ],
    tipsBn: [
      "কর্পোরেট দূরদর্শিতা, লাভজনক রূপান্তর এবং বৃহৎ প্রজেক্ট পরিচালনায় গুরুত্ব দিন।",
      "মার্জিত ও আভিজাত্যপূর্ণ ডিজাইন বেছে নিন।",
      "পেশাগত অ্যাসোসিয়েশন ও পরিচালনা পর্ষদের সম্পৃক্ততা যোগ করুন।"
    ]
  },
  {
    id: 'career-change',
    group: 'career',
    titleEn: "Career Change Candidate",
    titleBn: "পেশা পরিবর্তনকারী (Career Switcher)",
    icon: 'Shuffle',
    descriptionEn: "Hybrid functional CV format highlighting transferable competencies and retraining.",
    descriptionBn: "নতুন পেশায় পদার্পণ করতে চাওয়া প্রার্থীদের জন্য যোগ্যতাভিত্তিক ফরম্যাট।",
    candidateProfileEn: "Switching from non-tech to tech, banking to marketing, or academia to corporate.",
    candidateProfileBn: "যাঁরা পূর্বের পেশা থেকে ভিন্ন কোনো সেক্টরে ক্যারিয়ার গড়তে চাচ্ছেন।",
    recommendedTemplates: ['modern-professional', 'two-column', 'clean-single', 'ats-friendly'],
    recommendedSections: ['summary', 'transferable-skills', 'projects', 'certifications', 'experience'],
    tipsEn: [
      "Emphasize transferable skills: analysis, client negotiation, project governance.",
      "Explain the strategic motive behind your pivot in your Executive Summary.",
      "Show proof of recent upskilling (bootcamps, specialized micro-degrees)."
    ],
    tipsBn: [
      "উভয় পেশার জন্য প্রযোজ্য সার্বজনীন দক্ষতাগুলোকে (Transferable Skills) শীর্ষে রাখুন।",
      "নতুন পেশার জন্য সাম্প্রতিক কোর্স বা প্রজেক্ট বিস্তারিতভাবে দেখান।",
      "পূর্বের কাজের অভিজ্ঞতা থেকে প্রাসঙ্গিক অর্জনগুলোকে নতুন পদের সাথে মিলিয়ে লিখুন।"
    ]
  },

  // PROFESSION-BASED (12)
  {
    id: 'it-software',
    group: 'profession',
    titleEn: "IT & Software Professional",
    titleBn: "আইটি ও সফটওয়্যার প্রফেশনাল",
    icon: 'Code',
    descriptionEn: "For Software Engineers, Full-stack Developers, DevOps, and QA Specialists.",
    descriptionBn: "সফটওয়্যার ডেভেলপার, ওয়েব ইঞ্জিনিয়ার ও আইটি বিশেষজ্ঞদের জন্য।",
    candidateProfileEn: "Frontend, Backend, Mobile, Full-stack, QA, Cloud/DevOps engineers.",
    candidateProfileBn: "প্রোগ্রামার ও আইটি এক্সপার্ট যাদের টেক-স্ট্যাক ও কোডিং পোর্টফোলিও রয়েছে।",
    recommendedTemplates: ['technical-resume', 'modern-sidebar', 'ats-friendly', 'creative'],
    recommendedSections: ['summary', 'technical-skills', 'projects', 'experience', 'education'],
    tipsEn: [
      "Categorize tech stack clearly: Languages, Frameworks, Cloud, Databases, CI/CD.",
      "Include GitHub and live application/deployment links.",
      "Explain technical architecture, scale (users, RPS), and system optimization."
    ],
    tipsBn: [
      "প্রোগ্রামিং ল্যাঙ্গুয়েজ, ফ্রেমওয়ার্ক এবং ডেটাবেস আলাদা বিভাগে সাজান।",
      "লাইভ প্রোজেক্ট লিঙ্ক ও অ্যাক্টিভ গিটহাব প্রোফাইল যুক্ত করুন।",
      "অ্যাপ্লিকেশনের ইউজার স্কেল ও পারফরম্যান্স অপটিমাইজেশন তুলে ধরুন।"
    ]
  },
  {
    id: 'engineering-pro',
    group: 'profession',
    titleEn: "Engineering Professional",
    titleBn: "ইঞ্জিনিয়ারিং প্রফেশনাল (EEE/Civil/ME)",
    icon: 'Wrench',
    descriptionEn: "For Civil, Electrical, Mechanical, and Textile Engineers.",
    descriptionBn: "সিভিল, ইলেকট্রিক্যাল, মেকানিক্যাল ও টেক্সটাইল প্রকৌশলীদের জন্য।",
    candidateProfileEn: "Site engineers, project coordinators, design & CAD specialists, plant engineers.",
    candidateProfileBn: "সাইট ইঞ্জিনিয়ার, প্রজেক্ট ম্যানেজার ও ডিজাইন স্পেশালিস্ট।",
    recommendedTemplates: ['engineering-resume', 'corporate', 'modern-professional', 'classic'],
    recommendedSections: ['summary', 'projects', 'technical-skills', 'experience', 'education'],
    tipsEn: [
      "Detail major infrastructure, building, electrical, or manufacturing projects.",
      "List engineering CAD/simulation tools (ETABS, AutoCAD, MATLAB, Revit, ANSYS).",
      "Highlight IEB membership number and safety compliance certifications."
    ],
    tipsBn: [
      "সরাসরি বাস্তবায়িত প্রজেক্টের বাজেট, আয়তন ও দায়িত্বের বিবরণ দিন।",
      "অটোক্যাড, ই-ট্যাবস বা ইন্ডাস্ট্রিয়াল সফটওয়্যারের অভিজ্ঞতা লিখুন।",
      "আইইবি (IEB) মেম্বারশিপ নম্বর যুক্ত করতে ভুলবেন না।"
    ]
  },
  {
    id: 'medical-healthcare',
    group: 'profession',
    titleEn: "Medical & Healthcare Professional",
    titleBn: "চিকিৎসক ও স্বাস্থ্যসেবা কর্মী",
    icon: 'HeartPulse',
    descriptionEn: "For MBBS, BDS doctors, Nurses, Pharmacists, and Clinical Specialists.",
    descriptionBn: "এমবিবিএস, বিডিএস চিকিৎসক, নার্স ও ফার্মাসিস্টদের জন্য।",
    candidateProfileEn: "Medical Officers, Resident Physicians, Specialized Doctors, Healthcare managers.",
    candidateProfileBn: "মেডিকেল অফিসার, ইন্টার্ন চিকিৎসক ও ক্লিনিক্যাল বিশেষজ্ঞ।",
    recommendedTemplates: ['medical-resume', 'academic', 'clean-single', 'classic'],
    recommendedSections: ['summary', 'clinical-rotations', 'registrations', 'education', 'research'],
    tipsEn: [
      "Include BMDC / Nursing Council registration number prominently at the top.",
      "Detail clinical ward rotations, ICU/CCU experience, and procedural proficiencies.",
      "List CME trainings, BLS/ACLS certifications, and medical conference presentations."
    ],
    tipsBn: [
      "বিএমডিসি (BMDC) রেজিস্ট্রেশন নম্বর নামের নিচেই স্পষ্টভাবে উল্লেখ করুন।",
      "ইনডোর, আউটডোর, ইমার্জেন্সি ও আইসিইউ ডিউটির অভিজ্ঞতা স্পষ্ট করুন।",
      "বিএলএস বা বিশেষ ক্লিনিক্যাল ট্রেনিং থাকলে যুক্ত করুন।"
    ]
  },
  {
    id: 'teaching-education',
    group: 'profession',
    titleEn: "Teaching & Education",
    titleBn: "শিক্ষকতা ও শিক্ষা ব্যবস্থাপনা",
    icon: 'BookOpenCheck',
    descriptionEn: "For School, College, University Lecturers, Trainers, and Academic Coordinators.",
    descriptionBn: "স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের শিক্ষক, প্রভাষক এবং ট্রেইনারদের জন্য।",
    candidateProfileEn: "Lecturers, Assistant Professors, School Teachers, Subject Specialists.",
    candidateProfileBn: "প্রভাষক, বিষয়ভিত্তিক শিক্ষক ও একাডেমি সমন্বয়কারী।",
    recommendedTemplates: ['academic', 'classic', 'clean-single', 'elegant'],
    recommendedSections: ['summary', 'teaching-experience', 'education', 'publications', 'research'],
    tipsEn: [
      "List courses taught, curriculum development, and student mentoring experience.",
      "Include research publications, peer-reviewed journals, and editorial contributions.",
      "Emphasize modern pedagogical methodologies and digital classroom proficiency."
    ],
    tipsBn: [
      "যেসব কোর্স বা বিষয় পড়িয়েছেন তার তালিকা দিন।",
      "রিসার্চ পেপার, প্রকাশনা ও কনফারেন্স পেপারের সঠিক সাইটেশন যুক্ত করুন।",
      "আধুনিক শিক্ষণ পদ্ধতি ও মাল্টিমিডিয়া ক্লাসরুম পরিচালনার দক্ষতা দেখান।"
    ]
  },
  {
    id: 'banking-finance',
    group: 'profession',
    titleEn: "Banking & Finance",
    titleBn: "ব্যাংকিং ও ফাইন্যান্স প্রফেশনাল",
    icon: 'Landmark',
    descriptionEn: "For Commercial Banking, Islamic Banking, Fintech, and Financial Analysts.",
    descriptionBn: "বাণিজ্যিক ও ইসলামিক ব্যাংক, আর্থিক প্রতিষ্ঠান ও ফিনটেকের প্রার্থীদের জন্য।",
    candidateProfileEn: "Probationary Officers (PO), Branch Managers, Credit Analysts, Accountants.",
    candidateProfileBn: "ব্যাংক কর্মকর্তা, ক্রেডিট অ্যানালিস্ট, অডিটর ও অ্যাকাউন্টস অফিসার।",
    recommendedTemplates: ['business-resume', 'corporate', 'executive', 'ats-friendly'],
    recommendedSections: ['summary', 'experience', 'financial-skills', 'education', 'certifications'],
    tipsEn: [
      "Highlight credit appraisal, portfolio size, deposit mobilization, and NPL recovery.",
      "Mention knowledge of Bangladesh Bank regulations, core banking software (CBS), and AML.",
      "Include JAIBB/DAIBB, CA/CMA partly qualified, or ACCA credentials."
    ],
    tipsBn: [
      "কোর ব্যাংকিং সফটওয়্যার ও বাংলাদেশ ব্যাংকের নীতিমালা সম্পর্কে জ্ঞান উল্লেখ করুন।",
      "ডিআইবিবি (DAIBB), সিএ বা এসিসিএ স্ট্যাটাস পরিষ্কারভাবে লিখুন।",
      "ডিপোজিট সংগ্রহ, লোন রিকভারি ও অ্যাকাউন্টস অডিটের সাফল্য তুলে ধরুন।"
    ]
  },
  {
    id: 'marketing-sales',
    group: 'profession',
    titleEn: "Marketing & Sales",
    titleBn: "মার্কেটিং ও সেলস প্রফেশনাল",
    icon: 'Megaphone',
    descriptionEn: "For Brand Managers, Digital Marketers, Territory Sales Officers, and Growth Leads.",
    descriptionBn: "ব্র্যান্ড ম্যানেজার, ডিজিটাল মার্কেটার ও সেলস অফিসারদের জন্য আকর্ষণীয় ফরম্যাট।",
    candidateProfileEn: "TSO, RSM, Area Sales Managers, Performance Marketers, Content Strategists.",
    candidateProfileBn: "সেলস ও ডিজিটাল মার্কেটিংয়ে অভিজ্ঞ কর্মী।",
    recommendedTemplates: ['creative', 'modern-professional', 'business-resume', 'two-column'],
    recommendedSections: ['summary', 'achievements', 'experience', 'marketing-skills', 'education'],
    tipsEn: [
      "Demonstrate sales quota achievement (e.g. 'Achieved 125% of annual sales target').",
      "Highlight digital ROI, ad spend management (Meta Ads, Google Ads), and CAC metrics.",
      "Showcase trade marketing, channel distributor management, and activation events."
    ],
    tipsBn: [
      "সেলস টার্গেট অর্জনের সুনির্দিষ্ট পারসেন্টেজ উল্লেখ করুন।",
      "মেটা অ্যাডস, গুগল অ্যাডস ও এসইও (SEO) দক্ষতা সংখ্যা দিয়ে দেখান।",
      "ডিস্ট্রিবিউটর ও ডিলার নেটওয়ার্ক পরিচালনার অভিজ্ঞতা তুলে ধরুন।"
    ]
  },
  {
    id: 'customer-service',
    group: 'profession',
    titleEn: "Customer Service & BPO",
    titleBn: "কাস্টমার সার্ভিস ও বিপিও (কল সেন্টার)",
    icon: 'Headphones',
    descriptionEn: "For Call Center Representatives, Support Agents, and Client Relations Officers.",
    descriptionBn: "কল সেন্টার, হেল্পডেস্ক ও ক্লায়েন্ট রিলেশনশিপ অফিসারদের জন্য।",
    candidateProfileEn: "Inbound/Outbound agents, Zendesk/Freshdesk specialists, Helpdesk operators.",
    candidateProfileBn: "গ্রাহকসেবা ও কল সেন্টারে কর্মরত বা নতুন আবেদনকারী।",
    recommendedTemplates: ['clean-single', 'minimalist', 'ats-friendly', 'modern-professional'],
    recommendedSections: ['summary', 'experience', 'skills', 'languages', 'education'],
    tipsEn: [
      "List customer satisfaction ratings (CSAT), first-call resolution (FCR), and volume handled.",
      "Highlight fluency in English and Bengali with neutral professional tone.",
      "Mention ticketing CRM proficiency (Zendesk, Salesforce Service Cloud, Freshdesk)."
    ],
    tipsBn: [
      "দৈনিক বা মাসিক কল হ্যান্ডলিং ক্ষমতা ও কাস্টমার সন্তুষ্টির প্রমাণ দিন।",
      "বাংলা ও ইংরেজিতে চমৎকার বাচনভঙ্গি ও ধৈর্যশীল আচরণের ওপর জোর দিন।",
      "সিআরএম (CRM) সফটওয়্যার ও দ্রুত টাইপিং স্পিড উল্লেখ করুন।"
    ]
  },
  {
    id: 'govt-job',
    group: 'profession',
    titleEn: "Government Job Applicant",
    titleBn: "সরকারি চাকরি প্রার্থী (BD Govt Job Format)",
    icon: 'Stamp',
    descriptionEn: "Adheres strictly to traditional Bangladesh Government & Semi-Government CV guidelines.",
    descriptionBn: "বাংলাদেশ সরকারি, স্বায়ত্তশাসিত ও আধা-সরকারি চাকরির নির্ধারিত ফর্ম্যাট।",
    candidateProfileEn: "BCS, Non-Cadre, Bank Recruitment, Autonomous Body, Ministry applicants.",
    candidateProfileBn: "বিসিএস, ব্যাংক ও সরকারি বিভিন্ন গ্রেডের পদের জন্য আবেদনকারী।",
    recommendedTemplates: ['government-job', 'classic', 'clean-single', 'corporate'],
    recommendedSections: ['personal-details', 'education-table', 'experience', 'declaration', 'signature'],
    tipsEn: [
      "Must include Father's name, Mother's name, Permanent address, and Religion.",
      "Education must be in a structured chronological or reverse table format with Board and GPA.",
      "Conclude with formal declaration of truthfulness and physical handwritten signature."
    ],
    tipsBn: [
      "পিতার নাম, মাতার নাম, স্থায়ী ঠিকানা ও ধর্ম অবশ্যই অন্তর্ভুক্ত করুন।",
      "বোর্ড ও বছরসহ শিক্ষাগত যোগ্যতার সুস্পষ্ট ছক তৈরি করুন।",
      "সত্যতা স্বীকারোক্তিমূলক ডিক্লারেশন এবং স্বাক্ষরের জায়গা বজায় রাখুন।"
    ]
  },
  {
    id: 'ngo-development',
    group: 'profession',
    titleEn: "NGO & Development Sector",
    titleBn: "এনজিও ও উন্নয়ন খাত (UN / INGO)",
    icon: 'Globe',
    descriptionEn: "For UN agencies, INGOs, BRAC, and national non-profit development programs.",
    descriptionBn: "ইউএন, ব্র্যাক ও আন্তর্জাতিক এনজিওর কাজের উপযোগী প্রফেশনাল প্রেজেন্টেশন।",
    candidateProfileEn: "Project Officers, M&E Specialists, Field Coordinators, WASH/Child Protection staff.",
    candidateProfileBn: "প্রকল্প কর্মকর্তা, মনিটরিং ও ফিল্ড কোঅর্ডিনেটর।",
    recommendedTemplates: ['corporate', 'modern-professional', 'ats-friendly', 'international'],
    recommendedSections: ['summary', 'project-experience', 'donor-reporting', 'skills', 'education'],
    tipsEn: [
      "Highlight community engagement, donor compliance (USAID, FCDO, EU), and M&E metrics.",
      "List emergency response, camp management, or rural field deployment experience.",
      "Showcase safeguard policy compliance, gender inclusion, and report writing skills."
    ],
    tipsBn: [
      "দাতা সংস্থার (USAID, UN, ব্র্যাক) প্রজেক্ট বাস্তবায়নের অভিজ্ঞতা লিখুন।",
      "ফিল্ড ভিজিট, রিপোর্টিং ও মনিটরিং দক্ষতার প্রমাণ দিন।",
      "কমিউনিটি মোবিলাইজেশন ও জেন্ডার সংবেদনশীলতার অভিজ্ঞতা যোগ করুন।"
    ]
  },
  {
    id: 'business-management',
    group: 'profession',
    titleEn: "Business & Management",
    titleBn: "ব্যবসা পরিচালনা ও প্রশাসন",
    icon: 'Building2',
    descriptionEn: "For Operations Managers, Business Analysts, Supply Chain, and Admin Executives.",
    descriptionBn: "অপারেশনস, সাপ্লাই চেইন, প্রকিউরমেন্ট ও সাধারণ প্রশাসনের জন্য।",
    candidateProfileEn: "Supply Chain Officers, Operations Leads, General Administration Managers.",
    candidateProfileBn: "ব্যবসা পরিচালনা ও সাপ্লাই চেইন সংশ্লিষ্ট কর্মকর্তা।",
    recommendedTemplates: ['business-resume', 'executive', 'corporate', 'two-column'],
    recommendedSections: ['summary', 'experience', 'kpi-achievements', 'skills', 'education'],
    tipsEn: [
      "Show vendor management, cost optimization, inventory control, and lead-time reductions.",
      "Include ERP systems experience (SAP, Oracle, ERPNext, Tally).",
      "Detail contract negotiations and risk mitigation initiatives."
    ],
    tipsBn: [
      "ব্যবসায়িক খরচ কমানো ও উৎপাদনশীলতা বৃদ্ধির পরিসংখ্যান দিন।",
      "ইআরপি (ERP) সফটওয়্যার ব্যবহারের অভিজ্ঞতা উল্লেখ করুন।",
      "সাপ্লাই চেইন ও ভেন্ডর ব্যবস্থাপনার মূল সাফল্য তুলে ধরুন।"
    ]
  },
  {
    id: 'freelance-remote',
    group: 'profession',
    titleEn: "Freelance & Remote Worker",
    titleBn: "ফ্রিল্যান্সার ও রিমোট ওয়ার্কার",
    icon: 'Laptop',
    descriptionEn: "Tailored for international Upwork, Fiverr, and global remote company contracts.",
    descriptionBn: "আন্তর্জাতিক রিমোট জব ও ফ্রিল্যান্স ক্লায়েন্টদের আকর্ষণের জন্য।",
    candidateProfileEn: "Remote designers, virtual assistants, copywriters, developers, data specialists.",
    candidateProfileBn: "গ্লোবাল রিমোট মার্কেটে কাজ করা ফ্রিল্যান্সার।",
    recommendedTemplates: ['creative', 'technical-resume', 'modern-sidebar', 'clean-single'],
    recommendedSections: ['summary', 'client-portfolio', 'skills', 'tools', 'testimonials'],
    tipsEn: [
      "Highlight async communication skills, time zone overlap, and self-management.",
      "Link to live portfolio (Figma, GitHub, Dribbble, Notion, personal domain).",
      "Feature client ratings (e.g. 'Top Rated Plus on Upwork with 100% Job Success')."
    ],
    tipsBn: [
      "রিমোট কাজের অভিজ্ঞতা ও স্বাধীনভাবে কাজ পরিচালনার সক্ষমতা লিখুন।",
      "কাজের পোর্টফোলিও ও ক্লায়েন্ট ফিডব্যাকের লিঙ্ক দিন।",
      "টাইম-জোন সমন্বয় ও ফ্লুয়েন্ট কমিউনিকেশন স্কিলের উল্লেখ করুন।"
    ]
  },
  {
    id: 'creative-designer',
    group: 'profession',
    titleEn: "Creative & Graphic Designer",
    titleBn: "ক্রিয়েটিভ ও গ্রাফিক ডিজাইনার",
    icon: 'Palette',
    descriptionEn: "Visually expressive format for UI/UX Designers, Motion Artists, and Art Directors.",
    descriptionBn: "ইউআই/ইউএক্স ডিজাইনার, ব্র্যান্ড ডিজাইনার ও ক্রিয়েটিভদের জন্য।",
    candidateProfileEn: "Graphic Designers, UI/UX Specialists, Brand Identity Developers, Animators.",
    candidateProfileBn: "ভিজ্যুয়াল ডিজাইনার ও সৃজনশীল পেশাজীবী।",
    recommendedTemplates: ['creative', 'modern-sidebar', 'elegant', 'two-column'],
    recommendedSections: ['summary', 'portfolio-links', 'skills-tools', 'experience', 'education'],
    tipsEn: [
      "Place prominent, clickable links to Behance, Dribbble, or Figma portfolio.",
      "Outline design system development, typography mastery, and user testing metrics.",
      "Categorize tools clearly: Figma, Illustrator, Photoshop, After Effects, Blender."
    ],
    tipsBn: [
      "বিহ্যান্স (Behance) ও ড্রিবল (Dribbble) পোর্টফোলিও লিঙ্ক উপরে রাখুন।",
      "ব্র্যান্ড আইডেন্টিটি বা ইউআই ডিজাইনের সফল কেস স্টাডি সংক্ষেপে দিন।",
      "ফিগমা, ফটোশপ ও ইলাস্ট্রেটর ব্যবহারের গভীরতা স্পষ্টভাবে লিখুন।"
    ]
  }
];
