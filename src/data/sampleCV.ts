import { CvData } from '../types/cv';

export const SAMPLE_CV_EN: CvData = {
  id: 'sample-en-1',
  title: 'Tanvir Ahmed — Senior Software Engineer',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  documentLanguage: 'en',
  templateId: 'modern-professional',
  categoryId: 'it-software',
  personalInfo: {
    fullName: 'Tanvir Ahmed',
    professionalTitle: 'Lead Full-Stack Software Engineer',
    email: 'tanvir.ahmed.dev@gmail.com',
    phone: '+880 1712-345678',
    presentAddress: 'House 42, Road 11, Banani, Dhaka-1213, Bangladesh',
    permanentAddress: 'Village: Uttarpara, P.O: Comilla Sadar, Comilla',
    nationality: 'Bangladeshi',
    fatherName: 'Late Rafiqul Ahmed',
    motherName: 'Nasreen Begum',
    dateOfBirth: '1995-10-15',
    gender: 'Male',
    maritalStatus: 'Married',
    religion: 'Islam',
    bloodGroup: 'B+',
    nidOrPassport: '19951912345678901',
    linkedIn: 'https://linkedin.com/in/tanvir-ahmed-dev',
    github: 'https://github.com/tanvir-dev',
    portfolio: 'https://tanvirahmed.io',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    signatureUrl: '',
  },
  careerObjective: 'Proactive Lead Engineer with 6+ years of expertise in distributed microservices, TypeScript/React ecosystem, and high-concurrency cloud systems. Seeking to spearhead cutting-edge fintech architectures that scale to millions of active users while mentoring engineering talent.',
  professionalSummary: 'Senior Software Engineer with extensive experience designing resilient cloud architectures, real-time web applications, and fintech payment gateways. Track record of reducing API latency by 45% and leading cross-functional squads to deliver high-availability platforms on time.',
  education: [
    {
      id: 'edu-1',
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Bangladesh University of Engineering and Technology (BUET)',
      boardOrUniversity: 'BUET',
      departmentOrMajor: 'Computer Science and Engineering',
      passingYear: '2018',
      result: 'CGPA 3.84',
      scale: '4.00',
      achievements: 'Graduated with Honors, Champion of Inter-University Hackathon 2017'
    },
    {
      id: 'edu-2',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Notre Dame College, Dhaka',
      boardOrUniversity: 'Dhaka Board',
      departmentOrMajor: 'Science',
      passingYear: '2013',
      result: 'GPA 5.00',
      scale: '5.00',
      achievements: 'Golden GPA-5, Dhaka Board Merit Scholarship'
    }
  ],
  experience: [
    {
      id: 'exp-1',
      company: 'Brain Station 23 Ltd.',
      jobTitle: 'Lead Software Engineer',
      employmentType: 'Full-time',
      location: 'Dhaka, Bangladesh',
      startDate: '2021-03',
      endDate: '',
      isCurrent: true,
      responsibilities: [
        'Architected high-throughput payment microservices processing over $12M monthly transactions with 99.99% uptime.',
        'Spearheaded migration of legacy monolith to Node.js / React micro-frontends, reducing page load times by 40%.',
        'Directly mentored a squad of 8 software engineers, introducing CI/CD pipelines and automated integration tests.'
      ],
      achievements: 'Received "Excellence in Engineering" award in 2023 for zero-downtime database migration.'
    },
    {
      id: 'exp-2',
      company: 'TigerIT Bangladesh',
      jobTitle: 'Software Engineer',
      employmentType: 'Full-time',
      location: 'Dhaka, Bangladesh',
      startDate: '2018-06',
      endDate: '2021-02',
      isCurrent: false,
      responsibilities: [
        'Developed national biometric identity verification modules using Java Spring Boot and PostgreSQL.',
        'Engineered caching strategies with Redis, decreasing server query response time from 380ms to 65ms.',
        'Collaborated with government stakeholders and international compliance auditors.'
      ],
      achievements: 'Delivered national border control integration 2 weeks ahead of scheduled deadline.'
    }
  ],
  internships: [
    {
      id: 'intern-1',
      organization: 'Samsung R&D Institute Bangladesh (SRBD)',
      position: 'Software Engineering Intern',
      department: 'Mobile R&D Division',
      duration: '3 Months',
      startDate: '2017-06',
      endDate: '2017-09',
      responsibilities: [
        'Implemented image optimization algorithms in Android C++ NDK environment.',
        'Conducted benchmarking tests on camera pipeline latency across flagship devices.'
      ],
      learningOutcomes: 'Mastered production Android architecture and high-performance native code optimization.',
      supervisor: 'Engr. Mahmudul Hasan, Lead Architect'
    }
  ],
  skills: [
    {
      id: 'skill-tech',
      name: 'Technical Skills',
      skills: [
        { name: 'TypeScript / JavaScript', level: 95 },
        { name: 'React / Next.js', level: 90 },
        { name: 'Node.js / Express', level: 92 },
        { name: 'PostgreSQL / MongoDB', level: 88 },
        { name: 'Docker / Kubernetes', level: 80 },
        { name: 'AWS / Cloud Architecture', level: 82 }
      ]
    },
    {
      id: 'skill-soft',
      name: 'Soft Skills',
      skills: [
        { name: 'Engineering Leadership', level: 90 },
        { name: 'Agile / Scrum Methodologies', level: 95 },
        { name: 'Stakeholder Communication', level: 88 },
        { name: 'System Troubleshooting', level: 92 }
      ]
    },
    {
      id: 'skill-lang',
      name: 'Languages',
      skills: [
        { name: 'Bengali (Native)', level: 100 },
        { name: 'English (Fluent / Professional)', level: 95 }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'AmarPay Payment Orchestrator',
      role: 'Principal Architect',
      technologies: 'Node.js, TypeScript, Redis, PostgreSQL, Docker',
      link: 'https://amarpay-demo.com',
      github: 'https://github.com/tanvir-dev/amarpay-engine',
      description: 'Unified multi-gateway merchant aggregator integrating bKash, Nagad, Rocket, and Visa/Mastercard with intelligent auto-retry and real-time reconciliation.',
      highlights: [
        'Handles 1,200+ requests per second at peak traffic with under 50ms latency.',
        'Features automated fraud-detection heuristics reducing chargebacks by 32%.'
      ]
    },
    {
      id: 'proj-2',
      title: 'DevCollab — Realtime Developer Workspace',
      role: 'Creator & Maintainer',
      technologies: 'React, WebSockets, Tailwind CSS, Monaco Editor',
      link: 'https://devcollab.live',
      github: 'https://github.com/tanvir-dev/devcollab',
      description: 'Open-source collaborative code editor with video conferencing and live compilation in the browser.',
      highlights: [
        'Gathered 1.4k+ GitHub stars and 20k+ active developer sessions worldwide.'
      ]
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: '2023-04',
      credentialUrl: 'https://aws.amazon.com/verify'
    },
    {
      id: 'cert-2',
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'The Linux Foundation',
      issueDate: '2022-09',
      credentialUrl: 'https://cncf.io/verify'
    }
  ],
  training: [
    {
      id: 'train-1',
      title: 'Advanced Microservices & Event-Driven Architecture',
      institute: 'Fintech Engineering Academy',
      duration: '6 Weeks',
      year: '2022'
    }
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'National ICT Award Finalist',
      organization: 'BASIS & Ministry of ICT, Bangladesh',
      year: '2022',
      description: 'Recognized for pioneering digital payment innovation for SMEs.'
    }
  ],
  volunteer: [
    {
      id: 'vol-1',
      role: 'Volunteer Mentor',
      organization: 'Bangladesh Open Source Network (BdOSN)',
      period: '2020 – Present',
      details: 'Mentoring university women in technology and organizing programming bootcamps across divisions.'
    }
  ],
  extracurricular: [
    {
      id: 'extra-1',
      activity: 'BUET Debating Club',
      role: 'General Secretary (2016-2017)',
      details: 'Organized National Parliamentary Debate Tournament with 48 participating universities.'
    }
  ],
  publications: [
    {
      id: 'pub-1',
      title: 'Optimized Real-Time Data Streaming for Edge Devices in Low-Bandwidth Networks',
      publisher: 'IEEE International Conference on Computer and Information Technology (ICCIT)',
      year: '2019',
      link: 'https://doi.org/10.1109/ICCIT.2019.8987654'
    }
  ],
  references: [
    {
      id: 'ref-1',
      name: 'Dr. Mohammad Kaykobad',
      designation: 'Professor, Department of CSE',
      organization: 'BUET, Dhaka',
      email: 'kaykobad@cse.buet.ac.bd',
      phone: '+880 1711-000001',
      relationship: 'Undergraduate Academic Advisor'
    },
    {
      id: 'ref-2',
      name: 'M. M. Raisul Islam',
      designation: 'Chief Technology Officer (CTO)',
      organization: 'Brain Station 23 Ltd.',
      email: 'raisul@brainstation-23.com',
      phone: '+880 1711-222333',
      relationship: 'Current Senior Manager & Director'
    }
  ],
  customSections: [],
  sectionsMeta: [
    { id: 'summary', title: 'Professional Summary', enabled: true, order: 1 },
    { id: 'experience', title: 'Work Experience', enabled: true, order: 2 },
    { id: 'education', title: 'Education', enabled: true, order: 3 },
    { id: 'projects', title: 'Key Projects', enabled: true, order: 4 },
    { id: 'skills', title: 'Skills & Proficiencies', enabled: true, order: 5 },
    { id: 'certifications', title: 'Certifications', enabled: true, order: 6 },
    { id: 'internship', title: 'Internship Experience', enabled: true, order: 7 },
    { id: 'achievements', title: 'Achievements & Awards', enabled: true, order: 8 },
    { id: 'volunteer', title: 'Volunteer & Leadership', enabled: true, order: 9 },
    { id: 'publications', title: 'Publications', enabled: true, order: 10 },
    { id: 'references', title: 'References', enabled: true, order: 11 },
  ],
  customization: {
    primaryColor: '#1d4ed8',
    secondaryColor: '#0f172a',
    textColor: '#334155',
    headingColor: '#0f172a',
    accentBg: '#f8fafc',
    fontFamily: 'Inter',
    fontSize: 'normal',
    lineSpacing: 'normal',
    pageMargin: 'normal',
    photoShape: 'rounded',
    photoSize: 110,
    showIcons: true,
    showDividers: true,
    dividerStyle: 'solid',
    headerAlignment: 'split',
  },
  declaration: {
    text: 'I hereby declare that the particulars given above are true and correct to the best of my knowledge and belief.',
    place: 'Dhaka, Bangladesh',
    date: new Date().toLocaleDateString('en-GB'),
    showSignature: true,
  }
};

export const SAMPLE_CV_BN: CvData = {
  id: 'sample-bn-1',
  title: 'সাদিয়া ইসলাম — মানবসম্পদ কর্মকর্তা (বাংলা সিভি)',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  documentLanguage: 'bn',
  templateId: 'corporate',
  categoryId: 'entry-level',
  personalInfo: {
    fullName: 'সাদিয়া ইসলাম',
    professionalTitle: 'মানবসম্পদ ও প্রশাসনিক কর্মকর্তা (HR & Admin)',
    email: 'sadia.islam.hr@gmail.com',
    phone: '+৮৮০১৭১২-৯৮৭৬৫৪',
    presentAddress: 'বাড়ি #১৫, রোড #৪, ধানমন্ডি, ঢাকা-১২০৫',
    permanentAddress: 'গ্রাম: চরপাড়া, ডাকঘর: সদর, ময়মনসিংহ',
    nationality: 'বাংলাদেশী',
    fatherName: 'মো: রফিকুল ইসলাম',
    motherName: 'ফাতেমা বেগম',
    dateOfBirth: '১৯৯৭-০৫-১২',
    gender: 'মহিলা',
    maritalStatus: 'অবিবাহিত',
    religion: 'ইসলাম',
    bloodGroup: 'এ+',
    nidOrPassport: '১৯৯৭০৫১২৩৪৫৬৭৮৯০',
    linkedIn: 'https://linkedin.com/in/sadia-islam-hr',
    github: '',
    portfolio: '',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    signatureUrl: '',
  },
  careerObjective: 'একজন দূরদর্শী ও উদ্যমী মানবসম্পদ পেশাজীবী হিসেবে একটি স্বনামধন্য প্রতিষ্ঠানে কাজ করতে আগ্রহী, যেখানে প্রতিভা সংগ্রহ, কর্মীবান্ধব পরিবেশ সৃষ্টি এবং সাংগঠনিক উন্নয়নে সক্রিয় ভূমিকা রাখতে পারব।',
  professionalSummary: 'মানবসম্পদ ব্যবস্থাপনা ও প্রশাসন বিষয়ে ৩ বছরের বাস্তব অভিজ্ঞতাসম্পন্ন পেশাজীবী। কর্মী নিয়োগ, অনবোর্ডিং, বেতন ভাতা ব্যবস্থাপনা ও শ্রম আইন বাস্তবায়নে বিশেষ পারদর্শী। সততা, সময়ানুবর্তিতা এবং কার্যকর যোগাযোগের মাধ্যমে লক্ষ্য অর্জনে দৃঢ়প্রতিজ্ঞ।',
  education: [
    {
      id: 'edu-bn-1',
      degree: 'মাস্টার্স অব বিজনেস অ্যাডমিনিস্ট্রেশন (এমবিএ)',
      institution: 'ঢাকা বিশ্ববিদ্যালয়',
      boardOrUniversity: 'ঢাকা বিশ্ববিদ্যালয়',
      departmentOrMajor: 'মানবসম্পদ ব্যবস্থাপনা (HRM)',
      passingYear: '২০২১',
      result: 'সিজিপিএ ৩.৭৫',
      scale: '৪.০০',
      achievements: 'ডিনস মেরিট লিস্ট ও বিজনেস কেস চ্যাম্পিয়ন'
    },
    {
      id: 'edu-bn-2',
      degree: 'ব্যাচেলর অব বিজনেস অ্যাডমিনিস্ট্রেশন (বিবিএ)',
      institution: 'ঢাকা বিশ্ববিদ্যালয়',
      boardOrUniversity: 'ঢাকা বিশ্ববিদ্যালয়',
      departmentOrMajor: 'ম্যানেজমেন্ট',
      passingYear: '২০১৯',
      result: 'সিজিপিএ ৩.৭০',
      scale: '৪.০০',
      achievements: 'মেধা বৃত্তি প্রাপ্ত'
    },
    {
      id: 'edu-bn-3',
      degree: 'উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)',
      institution: 'ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ, ঢাকা',
      boardOrUniversity: 'ঢাকা বোর্ড',
      departmentOrMajor: 'ব্যবসায় শিক্ষা',
      passingYear: '২০১৫',
      result: 'জিপিএ ৫.০০',
      scale: '৫.০০',
      achievements: 'বোর্ড ট্যালেন্টপুল বৃত্তি'
    }
  ],
  experience: [
    {
      id: 'exp-bn-1',
      company: 'স্কয়ার ফার্মাসিউটিক্যালস লিমিটেড',
      jobTitle: 'সিনিয়র এক্সিকিউটিভ — এইচআর অ্যান্ড অ্যাডমিন',
      employmentType: 'ফুল-টাইম',
      location: 'ঢাকা, বাংলাদেশ',
      startDate: '২০২২-০১',
      endDate: '',
      isCurrent: true,
      responsibilities: [
        'বাৎসরিক ১৫০+ নতুন কর্মীর মেধা নির্বাচন, সাক্ষাৎকার ও চূড়ান্ত নিয়োগ প্রক্রিয়া সফলভাবে সম্পন্নকরণ।',
        'কর্মীদের বার্ষিক পারফরম্যান্স মূল্যায়ন (KPI) ও প্রশিক্ষণ পরিকল্পনা প্রণয়ন।',
        'বাংলাদেশ শ্রম আইন ২০০৬ ও বিধিমালা ২০১৫ অনুযায়ী কোম্পানির যাবতীয় নিয়মাবলি বাস্তবায়ন।'
      ],
      achievements: 'কর্মীদের সন্তুষ্টি সূচক ৮২% থেকে ৯৪%-এ উন্নীত করার স্বীকৃতি হিসেবে বেস্ট পারফর্মার স্বীকৃতি।'
    },
    {
      id: 'exp-bn-2',
      company: 'প্রাণ-আরএফএল গ্রুপ',
      jobTitle: 'এইচআর অফিসার',
      employmentType: 'ফুল-টাইম',
      location: 'ঢাকা, বাংলাদেশ',
      startDate: '২০১৯-১০',
      endDate: '২০২১-১২',
      isCurrent: false,
      responsibilities: [
        'দৈনিক উপস্থিতি, ছুটি ও মাসিক বেতন-ভাতা সফটওয়্যারে প্রক্রিয়াকরণ।',
        'নতুন কর্মীদের জন্য পরিচিতিমূলক ওরিয়েন্টেশন প্রোগ্রাম পরিচালনা।',
        'কর্মী অসন্তোষ নিরসন ও অভিযোগ নিষ্পত্তিতে কার্যকর সহায়তা প্রদান।'
      ],
      achievements: 'ম্যানুয়াল ফাইলিং সিস্টেমকে ডিজিটালাইজ করে সময় ৬০% হ্রাসকরণ।'
    }
  ],
  internships: [
    {
      id: 'intern-bn-1',
      organization: 'গ্রামীণফোন লিমিটেড',
      position: 'ট্যালেন্ট অ্যাকুইজিশন ইন্টার্ন',
      department: 'পিপল অ্যান্ড অর্গানাইজেশন',
      duration: '৩ মাস',
      startDate: '২০১৯-০২',
      endDate: '২০১৯-০৫',
      responsibilities: [
        'সিভি বাছাই ও প্রাথমিক ফোন ইন্টারভিউ গ্রহণ।',
        'ক্যাম্পাস রিক্রুটমেন্ট ড্রাইভ আয়োজনে কেন্দ্রীয় সমন্বয়।'
      ],
      learningOutcomes: 'টেলিকম ইন্ডাস্ট্রির বৃহৎ পরিসরের কর্মী ব্যবস্থাপনা ও কর্পোরেট সংস্কৃতির বাস্তব ধারণা অর্জন।'
    }
  ],
  skills: [
    {
      id: 'skill-bn-pro',
      name: 'পেশাগত দক্ষতা',
      skills: [
        { name: 'ট্যালেন্ট অ্যাকুইজিশন ও রিক্রুটমেন্ট', level: 95 },
        { name: 'বাংলাদেশ শ্রম আইন (BLA)', level: 90 },
        { name: 'এইচআর সফটওয়্যার (HRIS / SAP)', level: 85 },
        { name: 'কর্মক্ষমতা মূল্যায়ন (KPI)', level: 90 },
        { name: 'বেতন ও উপস্থিতি প্রশাসন', level: 88 }
      ]
    },
    {
      id: 'skill-bn-soft',
      name: 'ব্যক্তিগত দক্ষতা',
      skills: [
        { name: 'কার্যকর যোগাযোগ ও মধ্যস্থতা', level: 95 },
        { name: 'নেতৃত্ব ও টিমওয়ার্ক', level: 92 },
        { name: 'সংকট সমাধান ও ইতিবাচক দৃষ্টিভঙ্গি', level: 90 },
        { name: 'সময় ব্যবস্থাপনা ও নিয়মানুবর্তিতা', level: 95 }
      ]
    },
    {
      id: 'skill-bn-comp',
      name: 'কম্পিউটার ও ভাষা',
      skills: [
        { name: 'মাইক্রোসফট এক্সেল ও পাওয়ারপয়েন্ট', level: 90 },
        { name: 'বাংলা টাইপিং ও প্রমিত ভাষা', level: 95 },
        { name: 'ইংরেজি (ফ্লুয়েন্ট)', level: 90 }
      ]
    }
  ],
  projects: [],
  certifications: [
    {
      id: 'cert-bn-1',
      name: 'পোস্ট গ্র্যাজুয়েট ডিপ্লোমা ইন হিউম্যান রিসোর্স ম্যানেজমেন্ট (PGDHRM)',
      issuer: 'বিআইএম (BIM - Bangladesh Institute of Management)',
      issueDate: '২০২২',
      credentialUrl: ''
    }
  ],
  training: [
    {
      id: 'train-bn-1',
      title: 'বাংলাদেশ শ্রম আইন এবং শিল্প সম্পর্ক বিষয়ক ব্যবহারিক প্রশিক্ষণ',
      institute: 'ঢাকা চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রিজ (DCCI)',
      duration: '৩ দিন',
      year: '২০২৩'
    }
  ],
  achievements: [
    {
      id: 'ach-bn-1',
      title: 'জাতীয় বিতর্ক চ্যাম্পিয়ন (বাংলা)',
      organization: 'জাতীয় বিতর্ক ফেডারেশন',
      year: '২০১৮',
      description: 'আন্তঃবিশ্ববিদ্যালয় বিতর্ক প্রতিযোগিতায় শ্রেষ্ঠ বিতার্কিক নির্বাচিত।'
    }
  ],
  volunteer: [
    {
      id: 'vol-bn-1',
      role: 'সদস্য, যুব রক্তদান উইং',
      organization: 'বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি',
      period: '২০১৭ – বর্তমান',
      details: 'জরুরি প্রয়োজনে স্বেচ্ছায় রক্ত সংগ্রহ ও প্রাকৃতিক দুর্যোগে ত্রাণ বিতরণ কার্যক্রমে অংশগ্রহণ।'
    }
  ],
  extracurricular: [],
  publications: [],
  references: [
    {
      id: 'ref-bn-1',
      name: 'ড. মো: রফিকুল ইসলাম',
      designation: 'অধ্যাপক ও সাবেক চেয়ারম্যান',
      organization: 'ম্যানেজমেন্ট বিভাগ, ঢাকা বিশ্ববিদ্যালয়',
      email: 'm.islam@du.ac.bd',
      phone: '+৮৮০১৭১১-১১২২৩৩',
      relationship: 'শিক্ষক ও একাডেমিক সুপারভাইজার'
    },
    {
      id: 'ref-bn-2',
      name: 'খালিদ মাহমুদ',
      designation: 'হেড অব এইচআর',
      organization: 'স্কয়ার ফার্মাসিউটিক্যালস লিমিটেড',
      email: 'khalid.hr@squaregroup.com',
      phone: '+৮৮০১৭১১-৪৫৫৬৬৭',
      relationship: 'বর্তমান বিভাগীয় প্রধান'
    }
  ],
  customSections: [],
  sectionsMeta: [
    { id: 'summary', title: 'পেশাগত সংক্ষিপ্ত বিবরণ', enabled: true, order: 1 },
    { id: 'experience', title: 'কর্ম অভিজ্ঞতা', enabled: true, order: 2 },
    { id: 'education', title: 'শিক্ষাগত যোগ্যতা', enabled: true, order: 3 },
    { id: 'skills', title: 'দক্ষতাসমূহ', enabled: true, order: 4 },
    { id: 'internship', title: 'ইন্টার্নশিপ', enabled: true, order: 5 },
    { id: 'certifications', title: 'প্রফেশনাল সনদ', enabled: true, order: 6 },
    { id: 'training', title: 'বিশেষ প্রশিক্ষণ', enabled: true, order: 7 },
    { id: 'achievements', title: 'অর্জন ও পুরস্কার', enabled: true, order: 8 },
    { id: 'volunteer', title: 'সামাজিক ও স্বেচ্ছাসেবী কাজ', enabled: true, order: 9 },
    { id: 'references', title: 'তথ্য নির্দেশক (রেফারেন্স)', enabled: true, order: 10 },
  ],
  customization: {
    primaryColor: '#0f766e',
    secondaryColor: '#1e293b',
    textColor: '#334155',
    headingColor: '#0f172a',
    accentBg: '#f0fdfa',
    fontFamily: 'SolaimanLipi',
    fontSize: 'normal',
    lineSpacing: 'normal',
    pageMargin: 'normal',
    photoShape: 'circle',
    photoSize: 110,
    showIcons: true,
    showDividers: true,
    dividerStyle: 'solid',
    headerAlignment: 'split',
  },
  declaration: {
    text: 'আমি এই মর্মে অঙ্গীকার করছি যে, উপরে বর্ণিত যাবতীয় তথ্য আমার জ্ঞান ও বিশ্বাসমতে সত্য ও সঠিক।',
    place: 'ঢাকা, বাংলাদেশ',
    date: new Date().toLocaleDateString('bn-BD'),
    showSignature: true,
  }
};

export const createBlankCv = (language: 'en' | 'bn' = 'en'): CvData => {
  const isBn = language === 'bn';
  return {
    id: 'cv-' + Date.now(),
    title: isBn ? 'নতুন সিভি' : 'Untitled CV',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    documentLanguage: language,
    templateId: 'modern-professional',
    personalInfo: {
      fullName: '',
      professionalTitle: '',
      email: '',
      phone: '',
      presentAddress: '',
      permanentAddress: '',
      nationality: isBn ? 'বাংলাদেশী' : 'Bangladeshi',
      fatherName: '',
      motherName: '',
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      religion: '',
      bloodGroup: '',
      nidOrPassport: '',
      linkedIn: '',
      github: '',
      portfolio: '',
      photoUrl: '',
      signatureUrl: '',
    },
    careerObjective: '',
    professionalSummary: '',
    education: [],
    experience: [],
    internships: [],
    skills: [
      {
        id: 'skill-core',
        name: isBn ? 'মূল দক্ষতাসমূহ' : 'Core Skills',
        skills: []
      }
    ],
    projects: [],
    certifications: [],
    training: [],
    achievements: [],
    volunteer: [],
    extracurricular: [],
    publications: [],
    references: [],
    customSections: [],
    sectionsMeta: [
      { id: 'objective', title: isBn ? 'ক্যারিয়ার অবজেক্টিভ' : 'Career Objective', enabled: true, order: 1 },
      { id: 'summary', title: isBn ? 'পেশাগত বিবরণ' : 'Professional Summary', enabled: true, order: 2 },
      { id: 'education', title: isBn ? 'শিক্ষাগত যোগ্যতা' : 'Education', enabled: true, order: 3 },
      { id: 'experience', title: isBn ? 'কর্ম অভিজ্ঞতা' : 'Experience', enabled: true, order: 4 },
      { id: 'internship', title: isBn ? 'ইন্টার্নশিপ' : 'Internship', enabled: true, order: 5 },
      { id: 'skills', title: isBn ? 'দক্ষতা' : 'Skills', enabled: true, order: 6 },
      { id: 'projects', title: isBn ? 'প্রজেক্ট' : 'Projects', enabled: true, order: 7 },
      { id: 'certifications', title: isBn ? 'সনদপত্র' : 'Certifications', enabled: true, order: 8 },
      { id: 'training', title: isBn ? 'প্রশিক্ষণ' : 'Training', enabled: true, order: 9 },
      { id: 'achievements', title: isBn ? 'অর্জন' : 'Achievements', enabled: true, order: 10 },
      { id: 'references', title: isBn ? 'রেফারেন্স' : 'References', enabled: true, order: 11 },
    ],
    customization: {
      primaryColor: '#2563eb',
      secondaryColor: '#0f172a',
      textColor: '#334155',
      headingColor: '#0f172a',
      accentBg: '#f8fafc',
      fontFamily: isBn ? 'SolaimanLipi' : 'Inter',
      fontSize: 'normal',
      lineSpacing: 'normal',
      pageMargin: 'normal',
      photoShape: 'circle',
      photoSize: 110,
      showIcons: true,
      showDividers: true,
      dividerStyle: 'solid',
      headerAlignment: 'split',
    },
    declaration: {
      text: isBn 
        ? 'আমি এই মর্মে অঙ্গীকার করছি যে, উপরে বর্ণিত যাবতীয় তথ্য আমার জ্ঞান ও বিশ্বাসমতে সত্য ও সঠিক।' 
        : 'I hereby declare that all the information provided above is true and correct to the best of my knowledge.',
      place: isBn ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh',
      date: new Date().toLocaleDateString(isBn ? 'bn-BD' : 'en-GB'),
      showSignature: true,
    }
  };
};
