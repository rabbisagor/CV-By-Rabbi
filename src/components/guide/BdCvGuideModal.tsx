import React, { useState } from 'react';
import { BookOpen, CheckCircle2, AlertCircle, FileText, Briefcase, GraduationCap, ShieldCheck, X } from 'lucide-react';

interface Props {
  onClose?: () => void;
  isBn: boolean;
}

export const BdCvGuideModal: React.FC<Props> = ({ onClose, isBn }) => {
  const [activeTab, setActiveTab] = useState<'fresher' | 'govt' | 'ats' | 'mistakes' | 'format'>('fresher');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {isBn ? 'বাংলাদেশি চাকরিপ্রার্থীদের সিভি রাইটিং মাস্টার গাইড' : 'Bangladesh Career & CV Writing Master Guide'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {isBn
              ? 'দেশীয় কর্পোরেট, সরকারি ও আন্তর্জাতিক চাকরির আবেদনের জন্য প্রমাণিত রূপরেখা।'
              : 'Proven architectural guidelines for MNCs, local conglomerates, Bangladesh Govt jobs, and remote vacancies.'}
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 self-start md:self-auto"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-semibold">
        {[
          { id: 'fresher', label: isBn ? 'সদ্য গ্র্যাজুয়েট ও ইন্টার্ন' : 'Fresh Graduate & Internship' },
          { id: 'govt', label: isBn ? 'সরকারি চাকরির ফরম্যাট' : 'BD Govt Job Custom' },
          { id: 'ats', label: isBn ? 'এটিএস (ATS) কৌশল' : 'ATS Screener Strategy' },
          { id: 'mistakes', label: isBn ? 'মারাত্মক ভুলসমূহ' : 'Fatal CV Mistakes' },
          { id: 'format', label: isBn ? 'ইংরেজি বনাম বাংলা সিভি' : 'English vs Bangla CV' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeTab === t.id
                ? 'bg-indigo-600 text-white shadow-xs font-bold'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Fresh Graduate */}
      {activeTab === 'fresher' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b pb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>{isBn ? 'অভিজ্ঞতাহীন অবস্থায় কীভাবে সিভি সাজাবেন?' : 'Structuring a Resume with Zero Prior Experience'}</span>
            </h3>
            <p>
              {isBn
                ? 'বাংলাদেশের অধিকাংশ ফ্রেশ গ্র্যাজুয়েট কাজের অভিজ্ঞতা না থাকায় হতাশায় পড়েন। অথচ রিক্রুটাররা ফ্রেশারদের থেকে ৫ বছরের কর্পোরেট অভিজ্ঞতা চান না—তারা খোঁজেন শেখার আগ্রহ, প্রকল্প করার প্রমাণ এবং একাগ্রতা।'
                : 'Recruiters do not expect 5 years of commercial experience from a fresh graduate. They look for practical capstone projects, academic rigor, rapid adaptability, and structured initiative.'}
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-800">{isBn ? 'ফ্রেশার সিভির ক্রমবিন্যাস:' : 'Recommended Sequence:'}</h4>
              <ol className="list-decimal ml-4 space-y-1">
                <li>{isBn ? 'নাম ও সক্রিয় যোগাযোগের তথ্য (ইমেইল, ফোন, লিংকডইন)' : 'Header: Name, Professional Title, Phone, Email, City'}</li>
                <li>{isBn ? 'ক্যারিয়ার অবজেক্টিভ (প্রতিষ্ঠানের লক্ষ্য অনুসারে নির্দিষ্ট)' : 'Tailored Career Objective (2-3 sentences)'}</li>
                <li>{isBn ? 'শিক্ষাগত যোগ্যতা (ডিগ্রি, সিজিপিএ, বিষয় ও সাল)' : 'Education: Degree, CGPA, Institution, Honors'}</li>
                <li>{isBn ? 'একাডেমিক প্রজেক্ট ও থিসিস (প্রযুক্তিগত বিস্তারিতসহ)' : 'Academic Capstone Projects & Thesis'}</li>
                <li>{isBn ? 'প্রযুক্তিগত ও ভাষাগত দক্ষতাসমূহ' : 'Technical Proficiencies & Soft Skills'}</li>
                <li>{isBn ? 'ক্লাব কার্যক্রম, সহশিক্ষা ও ভলান্টিয়ারিং' : 'Club Leadership, Hackathons & Volunteering'}</li>
              </ol>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b pb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isBn ? 'শক্তিশালী অবজেক্টিভ লেখার উদাহরণ' : 'Sample Impactful Career Objectives'}</span>
            </h3>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <p className="font-bold text-emerald-900">{isBn ? 'আইটি ও সিএসই গ্র্যাজুয়েটদের জন্য:' : 'For IT & CSE Graduates:'}</p>
              <p className="italic text-emerald-950">
                "Results-driven B.Sc. in CSE graduate from BUET with hands-on full-stack development experience in TypeScript and React. Seeking a Junior Software Engineer position at a fast-growing tech company to contribute to robust, scalable web products."
              </p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200 space-y-1">
              <p className="font-bold text-indigo-900">{isBn ? 'বিবিএ ও মানবসম্পদ গ্র্যাজুয়েটদের জন্য:' : 'For Business & HR Graduates:'}</p>
              <p className="italic text-indigo-950">
                "Proactive BBA graduate with major in Human Resource Management from University of Dhaka. Eager to leverage strong interpersonal skills, academic understanding of labor regulations, and talent acquisition drive in an MTO role."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Govt Job */}
      {activeTab === 'govt' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b pb-2">
            {isBn ? 'বাংলাদেশ সরকারি ও স্বায়ত্তশাসিত চাকরির বিশেষ নিয়মাবলি' : 'Official Guidelines for Bangladesh Government & Autonomous Vacancies'}
          </h3>
          <p>
            {isBn
              ? 'বাংলাদেশ সরকারি, ব্যাংক রিক্রুটমেন্ট ও স্বায়ত্তশাসিত প্রতিষ্ঠানে সিভি জমা দেওয়ার ক্ষেত্রে কিছু ঐতিহ্যবাহী প্রথা কঠোরভাবে মানা হয়। এগুলো না মানলে অনেক সময় আবেদন বাতিল হতে পারে।'
              : 'Bangladesh public sector, government projects, state-owned banks, and ministries follow distinct historical protocols. Failing to provide official demographics may lead to disqualification.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">{isBn ? '১. পারিবারিক ও ব্যক্তিগত তথ্য' : '1. Mandatory Demographics'}</h4>
              <p className="text-slate-600">
                {isBn
                  ? "পিতার নাম, মাতার নাম, স্থায়ী ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা), ধর্ম, জন্মতারিখ এবং বৈবাহিক অবস্থা অবশ্যই উল্লেখ করতে হবে।"
                  : "Father's Name, Mother's Name, Permanent Address (with Village/PO/Upazila), Religion, and Date of Birth must be present."}
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">{isBn ? '২. ছকযুক্ত শিক্ষাগত তথ্য' : '2. Structured Education Grid'}</h4>
              <p className="text-slate-600">
                {isBn
                  ? 'পরীক্ষার নাম, বোর্ড বা বিশ্ববিদ্যালয়, গ্রুপ/বিভাগ, পাসের সন এবং বিভাগ বা জিপিএ ছকের (Table) মাধ্যমে স্পষ্ট অক্ষো করতে হয়।'
                  : 'Degrees must be tabulated with Examination Name, Board/University, Passing Year, and Division/GPA in chronological order.'}
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">{isBn ? '৩. অঙ্গীকারনামা ও স্বাক্ষর' : '3. Legal Declaration & Signature'}</h4>
              <p className="text-slate-600">
                {isBn
                  ? 'সিভির শেষে "উপরে বর্ণিত তথ্যাবলি আমার জ্ঞানমতে সত্য" মর্মে ঘোষণা ও নিচে প্রার্থীর স্বাক্ষর ও তারিখ থাকা বাধ্যতামূলক।'
                  : 'A formal declaration stating that all information is truthful, accompanied by a handwritten signature and date, is mandatory.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: ATS */}
      {activeTab === 'ats' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b pb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isBn ? 'কীভাবে এটিএস (ATS) ১০০% পাস করবেন?' : 'How to Achieve 100% Parsing in Modern ATS Screeners'}</span>
          </h3>
          <p>
            {isBn
              ? 'বহুজাতিক প্রতিষ্ঠান (যেমন: Unilever, BAT, গ্রামীণফোন) এবং আন্তর্জাতিক রিমোট নিয়োগকারী প্রতিষ্ঠানগুলো প্রথমে সফটওয়্যারের মাধ্যমে শত শত সিভি স্ক্রিনিং করে।'
              : 'Global MNCs and international remote recruiters use Applicant Tracking Systems (Workday, Taleo, Greenhouse, Lever) to filter applicants before human HR reviews them.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-950 mb-1">✅ {isBn ? 'যা যা করবেন:' : 'What to Do:'}</h4>
              <ul className="list-disc ml-4 space-y-1 text-emerald-900">
                <li>{isBn ? 'স্ট্যান্ডার্ড শিরোনাম দিন (যেমন: Work Experience, Education, Skills)' : 'Use standard section titles (Work Experience, Education, Skills).'}</li>
                <li>{isBn ? 'সবসময় টেক্সট-সিলেক্টেবল পিডিএফ ফাইল হিসেবে জমা দিন।' : 'Submit in high-res vector PDF with real selectable text.'}</li>
                <li>{isBn ? 'সার্কুলারের সুনির্দিষ্ট কি-ওয়ার্ড আপনার সিভির বিবরণে অন্তর্ভুক্ত করুন।' : 'Mirror keywords verbatim from the job description.'}</li>
                <li>{isBn ? 'ফলাফলে পারসেন্টেজ বা সংখ্যা যোগ করুন (যেমন: 20% growth, 40+ clients)।' : 'Quantify metrics with percentages and hard numbers.'}</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-950 mb-1">❌ {isBn ? 'যা কখনো করবেন না:' : 'What Never to Do:'}</h4>
              <ul className="list-disc ml-4 space-y-1 text-rose-900">
                <li>{isBn ? 'ছবিকে পিডিএফ বানিয়ে জমা দেবেন না (এতে লেখা স্ক্যান হয় না)।' : 'Never submit a JPEG rasterized scan as a PDF.'}</li>
                <li>{isBn ? 'জটিল আর্টওয়ার্ক বা অস্পষ্ট আইকনের মধ্যে গুরুত্বপূর্ণ ফোন বা ইমেইল লুকাবেন না।' : 'Avoid placing email or phone inside vector shapes.'}</li>
                <li>{isBn ? 'স্কিল বারকে গ্রাফিক্স দিয়ে দেখাবেন না; টেক্সট আকারে স্কিল নাম লিখুন।' : 'Avoid percentage progress bars without plain text labels.'}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Mistakes */}
      {activeTab === 'mistakes' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b pb-2 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>{isBn ? 'বাংলাদেশের চাকরিপ্রার্থীদের ৭টি প্রধান ভুল' : '7 Most Common Fatal CV Mistakes in Bangladesh'}</span>
          </h3>
          <div className="space-y-3">
            {[
              {
                title: isBn ? '১. অপেশাদার ইমেইল অ্যাড্রেস' : '1. Unprofessional Email Addresses',
                desc: isBn
                  ? 'যেমন: king_shuvo123@yahoo.com বা angel_riya@gmail.com। সর্বদা নাম ও পদবি ভিত্তিক ইমেইল ব্যবহার করুন (যেমন: tanvir.ahmed.cse@gmail.com)।'
                  : 'Avoid childhood handles. Use professional name formats like firstname.lastname@gmail.com.',
              },
              {
                title: isBn ? '২. টাইপিং ও ব্যাকরণগত ভুল' : '2. Typos & Grammatical Slips',
                desc: isBn
                  ? 'একটি বানান ভুল পুরো সিভির বিশ্বাসযোগ্যতা নষ্ট করে দেয়। সাবমিটের আগে ৩ বার প্রুফরিড করুন।'
                  : 'A single typo damages credibility instantly. Always proofread multiple times.',
              },
              {
                title: isBn ? '৩. দায়িত্ব বনাম অর্জনের পার্থক্য না বোঝা' : '3. Listing Duties Instead of Accomplishments',
                desc: isBn
                  ? '"কাস্টমার সাপোর্ট দেওয়া আমার কাজ ছিল"—এটি দায়িত্ব। "মাসিক ৯৮% গ্রাহক সন্তুষ্টি বজায় রেখে ৫০০+ কল সমাধান করেছি"—এটি অর্জন।'
                  : 'Shift from passive job descriptions to outcome-focused achievement statements.',
              },
              {
                title: isBn ? '৪. সিভিতে মিথ্যা তথ্য বা অতিরঞ্জন' : '4. Fabricating Skills or Credentials',
                desc: isBn
                  ? 'যে সফটওয়্যার বা ভাষা সম্পর্কে আপনার সম্যক ধারণা নেই তা সিভিতে দেবেন না। ইন্টারভিউ বোর্ডে এক প্রশ্নেই ধরা পড়ে যাওয়ার সম্ভাবনা থাকে।'
                  : 'Never claim mastery over tools or libraries you cannot defend technically in an interview.',
              },
            ].map((m, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">{m.title}</h4>
                <p className="text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Format */}
      {activeTab === 'format' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b pb-2">
            {isBn ? 'কখন বাংলায় এবং কখন ইংরেজিতে সিভি পাঠাবেন?' : 'When to Use English vs Bengali (বাংলা) CVs'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-indigo-700 text-sm">বাংলা সিভি কোথায় প্রযোজ্য:</h4>
              <ul className="list-disc ml-4 space-y-1">
                <li>সরকারি ও আধা-সরকারি বিভিন্ন দপ্তরের নির্দিষ্ট পদে।</li>
                <li>এনজিওর মাঠপর্যায়ের কমিউনিটি ও সোশ্যাল ওয়ার্ক পদের জন্য।</li>
                <li>জাতীয় গণমাধ্যম, সংবাদপত্র ও বাংলা কন্টেন্ট রাইটিং পদে।</li>
                <li>যেখানে সার্কুলারে সুস্পষ্টভাবে "বাংলায় জীবনবৃত্তান্ত" চাওয়া হয়।</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-blue-700 text-sm">ইংরেজি সিভি কোথায় প্রযোজ্য:</h4>
              <ul className="list-disc ml-4 space-y-1">
                <li>যেকোনো বেসরকারি ব্যাংক ও আর্থিক প্রতিষ্ঠান।</li>
                <li>টেলিকম, আইটি, সফটওয়্যার ও ফার্মাসিউটিক্যালস কোম্পানি।</li>
                <li>বহুজাতিক কর্পোরেশন (MNCs) এবং আন্তর্জাতিক রিমোট চাকরি।</li>
                <li>যেখানে স্পষ্ট নির্দেশনা ছাড়া সাধারণ সার্কুলার দেওয়া হয়।</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
