import React, { useState } from 'react';
import { TEMPLATES } from '../../data/templates';
import { CV_CATEGORIES } from '../../data/categories';
import {
  FileText,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Download,
  Languages,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  Eye,
  Check,
  Star,
  Zap,
  Globe
} from 'lucide-react';
import { TemplateRenderer } from '../preview/TemplateRenderer';
import { SAMPLE_CV_EN, SAMPLE_CV_BN } from '../../data/sampleCV';

interface Props {
  onStartCreate: () => void;
  onExploreTemplates: () => void;
  onBrowseCategories: () => void;
  onSelectCategory: (catId: string) => void;
  onSelectTemplate: (templateId: string) => void;
  onOpenGuide: () => void;
  isBn: boolean;
}

export const HomeView: React.FC<Props> = ({
  onStartCreate,
  onExploreTemplates,
  onBrowseCategories,
  onSelectCategory,
  onSelectTemplate,
  onOpenGuide,
  isBn,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroSampleLang, setHeroSampleLang] = useState<'en' | 'bn'>('en');

  const faqs = [
    {
      qEn: 'Are the CVs downloaded from CV by Rábbi ATS-friendly?',
      qBn: 'সিভি বাই রাব্বি থেকে ডাউনলোড করা সিভি কি এটিএস (ATS) ফ্রেন্ডলি?',
      aEn: 'Yes! All templates follow industry-standard semantic document hierarchy and can be exported as true vector A4 PDFs with selectable text that applicant tracking systems parse without error.',
      aBn: 'হ্যাঁ! আমাদের প্রতিটি টেমপ্লেট আন্তর্জাতিক মান বজায় রেখে তৈরি। ট্রু ভেক্টর A4 সাইজ পিডিএফ হিসেবে এক্সপোর্ট হয় যাতে রিক্রুটিং সফটওয়্যার এবং এইচআর কোনো ত্রুটি ছাড়া টেক্সট স্ক্যান করতে পারে।',
    },
    {
      qEn: 'Does this platform support Bangla font properly without breaking ligatures?',
      qBn: 'বাংলা ফন্ট ও যুক্তবর্ণ কি পিডিএফ এক্সপোর্টে সঠিকভাবে রেন্ডার হবে?',
      aEn: 'Absolutely. We embed authentic SolaimanLipi and Noto Sans Bengali typography with full Unicode ligature support so words and matras never break or misalign in PDF and print exports.',
      aBn: 'একদম নিশ্চিত। আমরা সোলাইমানলিপি ও গুগল নোটো সান্স বেঙ্গলি ফন্ট সরাসরি এম্বেড করেছি, যার ফলে পিডিএফ বা প্রিন্টে কোনো যুক্তবর্ণ বা মাত্রা ভাঙবে না।',
    },
    {
      qEn: 'Is my personal data, photo, and signature safe?',
      qBn: 'আমার ব্যক্তিগত তথ্য, ছবি ও স্বাক্ষর কি নিরাপদ?',
      aEn: '100% safe. CV by Rábbi operates on a privacy-first, local-first architecture. All your information stays stored in your own browser IndexedDB and is never harvested or sold.',
      aBn: '১০০% নিরাপদ। আপনার যাবতীয় তথ্য, ছবি ও স্বাক্ষর আপনার ডিভাইসের ব্রাউজার IndexedDB-তে সংরক্ষিত থাকে। কোনো বহিরাগত সার্ভারে ব্যক্তিগত ডাটা পাঠানো হয় না।',
    },
    {
      qEn: 'Can I switch templates after filling in my information?',
      qBn: 'তথ্য পূরণ করার পর কি টেমপ্লেট পরিবর্তন করা যাবে?',
      aEn: 'Yes! All 20+ templates share our universal CV data structure. You can switch between any template instantly without losing a single character.',
      aBn: 'হ্যাঁ! যেকোনো সময় টেমপ্লেট পরিবর্তন করতে পারবেন। কোনো তথ্যই মুছে যাবে না বা হারাবে না।',
    },
    {
      qEn: 'Can I create a traditional Bangladesh Government Job CV here?',
      qBn: 'এখানে কি বাংলাদেশ সরকারি চাকরির স্ট্যান্ডার্ড ফরম্যাটে সিভি তৈরি সম্ভব?',
      aEn: 'Yes, our "Bangladesh Govt Standard" template provides the exact official layout including father/mother names, permanent address, board/result table, and handwritten signature line.',
      aBn: 'অবশ্যই। আমাদের রয়েছে বিশেষ "Bangladesh Govt Standard" টেমপ্লেট যা পিতা-মাতার নাম, স্থায়ী ঠিকানা, বোর্ড পরীক্ষার ছক এবং স্বাক্ষরের নির্ধারিত স্থান সমর্থন করে।',
    },
  ];

  const popularTemplates = TEMPLATES.slice(0, 8);
  const featuredCategories = CV_CATEGORIES.slice(0, 8);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 bg-linear-to-b from-indigo-50/50 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>
                  {isBn
                    ? 'বাংলাদেশি ও আন্তর্জাতিক চাকরিপ্রার্থীদের জন্য সেরা প্ল্যাটফর্ম'
                    : 'The Premier CV Builder for Bangladeshi & Global Careers'}
                </span>
              </div>

              {/* Headings */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {isBn
                  ? 'তৈরি করুন আপনার স্বপ্নের চাকরির জন্য প্রফেশনাল সিভি।'
                  : 'Create a Professional CV That Gets You Noticed.'}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {isBn
                  ? 'মাত্র কয়েক মিনিটে তৈরি করুন আকর্ষণীয়, প্রফেশনাল ও এটিএস ফ্রেন্ডলি সিভি। ২০টিরও বেশি ইউনিক টেমপ্লেট থেকে পছন্দ করুন, ইচ্ছামতো সাজান এবং হাই-কোয়ালিটি A4 সাইজ PDF ডাউনলোড করুন।'
                  : 'Create beautiful, professional, ATS-friendly CVs in minutes. Choose a template, customize your information, and download your CV in high-quality PDF.'}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  type="button"
                  onClick={onStartCreate}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all active:scale-95"
                >
                  <span>{isBn ? 'আমার সিভি তৈরি করুন' : 'Create My CV'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onExploreTemplates}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-sm font-semibold transition-all shadow-xs"
                >
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>{isBn ? 'টেমপ্লেটগুলো দেখুন' : 'Explore Templates'}</span>
                </button>
              </div>

              {/* Key Trust Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200 text-left">
                <div>
                  <p className="text-lg font-black text-slate-900">20+</p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {isBn ? 'অনন্য টেমপ্লেট' : 'Distinct Templates'}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900">26</p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {isBn ? 'ক্যারিয়ার ট্র্যাক' : 'Career Categories'}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900">100%</p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {isBn ? 'এটিএস অপটিমাইজড' : 'ATS Parseable'}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900">বাংলা/En</p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {isBn ? 'সোলাইমানলিপি' : 'Bilingual Ready'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Miniature CV Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-2 z-10 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 animate-bounce">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ATS Score: 98/100</span>
                </div>

                {/* Miniature Preview Container */}
                <div className="rounded-2xl border-4 border-slate-900/10 shadow-2xl bg-white overflow-hidden p-2">
                  <div className="flex items-center justify-between pb-2 px-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Live A4 Engine</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setHeroSampleLang(heroSampleLang === 'en' ? 'bn' : 'en')}
                        className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700"
                      >
                        {heroSampleLang === 'en' ? 'বাংলা প্রিভিউ' : 'English Preview'}
                      </button>
                    </div>
                  </div>

                  {/* Scaled preview card */}
                  <div className="h-[430px] overflow-hidden flex justify-center bg-slate-100 rounded-lg p-2">
                    <div className="transform scale-[0.46] origin-top bg-white shadow-md">
                      <TemplateRenderer
                        cv={heroSampleLang === 'en' ? SAMPLE_CV_EN : SAMPLE_CV_BN}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR TEMPLATES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {isBn ? 'জনপ্রিয় সিভি টেমপ্লেটসমূহ' : 'Popular CV Templates'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBn
                ? 'আন্তর্জাতিক ও দেশীয় চাকরির জন্য বিশেষভাবে তৈরিকৃত ২০টি আলাদা লেআউট।'
                : 'Professionally crafted, distinctive layouts designed for impact.'}
            </p>
          </div>
          <button
            onClick={onExploreTemplates}
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
          >
            <span>{isBn ? 'সবগুলো টেমপ্লেট দেখুন (২০+)' : 'View All 20+ Templates'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularTemplates.map((tpl) => (
            <div
              key={tpl.id}
              onClick={() => onSelectTemplate(tpl.id)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition-all p-4 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div
                  className="h-32 rounded-xl mb-3 p-3 flex flex-col justify-between relative overflow-hidden"
                  style={{ backgroundColor: tpl.previewColor + '10', borderTop: `3px solid ${tpl.previewColor}` }}
                >
                  <div className="space-y-1">
                    <div className="h-2 w-16 rounded" style={{ backgroundColor: tpl.previewColor }}></div>
                    <div className="h-1.5 w-10 bg-slate-300 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-3/4 bg-slate-200 rounded"></div>
                  </div>
                  {tpl.isAtsOptimized && (
                    <span className="absolute top-2 right-2 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      ATS 100%
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                  {isBn ? tpl.nameBn : tpl.nameEn}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">{tpl.category}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center mt-3">
                <span className="text-[10px] text-slate-400">{tpl.tags[0]}</span>
                <span className="text-xs font-bold text-indigo-600 group-hover:underline">
                  {isBn ? 'ব্যবহার করুন →' : 'Use Template →'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BROWSE CV CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {isBn ? 'ক্যারিয়ার ক্যাটাগরি অনুসারে সিভি' : 'CV by Education & Career Level'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBn
                ? 'সদ্য স্নাতক, ডিপ্লোমা, অভিজ্ঞ পেশাজীবী বা সরকারি চাকরির সুনির্দিষ্ট ট্র্যাক।'
                : 'Tailored formats for fresh graduates, polytechnic diplomas, software engineers, and experienced managers.'}
            </p>
          </div>
          <button
            onClick={onBrowseCategories}
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
          >
            <span>{isBn ? 'সকল ২৬টি ক্যাটাগরি দেখুন' : 'Explore All 26 Tracks'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded">
                  {cat.group}
                </span>
              </div>
              <h4 className="font-bold text-slate-800 text-sm">{isBn ? cat.titleBn : cat.titleEn}</h4>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {isBn ? cat.descriptionBn : cat.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (4 STEPS) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {isBn ? 'সহজ ৪ ধাপে প্রস্তুত আপনার প্রফেশনাল সিভি' : 'How CV by Rábbi Works'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {isBn
                ? 'কোনো জটিলতা ছাড়াই মিনিটের মধ্যে মনের মতো সিভি বানিয়ে চাকরির আবেদন করুন।'
                : 'Effortless, intuitive creation designed for instant real-world job applications.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                titleEn: 'Choose Your Career Track',
                titleBn: 'ক্যারিয়ার ট্র্যাক বা টেমপ্লেট পছন্দ',
                descEn: 'Select from 26 career categories or jump directly to one of our 20+ distinct templates.',
                descBn: '২৬টি ক্যাটাগরি বা ২০+ প্রিমিয়াম ডিজাইনের যেকোনো একটি দিয়ে শুরু করুন।',
              },
              {
                step: '02',
                titleEn: 'Fill In Your Information',
                titleBn: 'আপনার তথ্যাবলি পূরণ করুন',
                descEn: 'Enter personal details, education, work achievements, and upload photo/signature.',
                descBn: 'সহজ ফর্মে ব্যক্তিগত তথ্য, শিক্ষা, কাজের অর্জন ও স্বাক্ষর যুক্ত করুন।',
              },
              {
                step: '03',
                titleEn: 'Check ATS & Enhance with AI',
                titleBn: 'এটিএস স্কোর ও এআই সহায়তা',
                descEn: 'Verify your keyword parsing score and let Gemini AI improve your bullet points.',
                descBn: 'স্কোর দেখে নিন এবং জেমিনাই এআই দিয়ে বাক্য আরও আকর্ষণীয় করুন।',
              },
              {
                step: '04',
                titleEn: 'Download True A4 PDF',
                titleBn: 'ডাউনলোড করুন হাই-কোয়ালিটি A4 PDF',
                descEn: 'Export vector A4 PDF, PNG, or print directly with perfect Bengali & English fonts.',
                descBn: 'এক ক্লিকে নির্ভুল ফন্টসহ ডাউনলোড করুন প্রিন্ট-রেডি হাই-রেজুলিউশন PDF।',
              },
            ].map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                <span className="text-2xl font-black text-indigo-400">{st.step}</span>
                <h3 className="font-bold text-sm text-white">{isBn ? st.titleBn : st.titleEn}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{isBn ? st.descBn : st.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ATS-FRIENDLY & FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-r from-indigo-900 to-slate-900 text-white space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
              ATS-FRIENDLY ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {isBn
                ? 'কেন আপনার সিভিটি এটিএস ফ্রেন্ডলি হওয়া জরুরি?'
                : 'Why You Need an ATS-Compliant CV in Today’s Market'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isBn
                ? 'বর্তমানে শীর্ষ কর্পোরেট প্রতিষ্ঠান, ব্যাংক ও বহুজাতিক কোম্পানিগুলোতে হাজার হাজার সিভি আসে। সফটওয়্যার যাতে আপনার নাম, ডিগ্রি বা কাজের অভিজ্ঞতা কোনো বাধা ছাড়াই পড়তে পারে, সেভাবেই CV by Rábbi-এর প্রতিটি টেমপ্লেট ডিজাইন করা হয়েছে।'
                : 'Over 85% of corporate employers and large organizations use automated applicant tracking systems (ATS) to scan resumes before a human recruiter ever sees them. Our layouts ensure zero parsing loss.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800 text-xs">
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-sm">✓ Standard Semantic Titles</h4>
              <p className="text-slate-400">Standardized headings so scrapers never drop your experience or education records.</p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-sm">✓ True Selectable Text</h4>
              <p className="text-slate-400">PDFs contain real vector glyphs instead of raster images for 100% keyword extraction.</p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-sm">✓ SolaimanLipi Unicode</h4>
              <p className="text-slate-400">Flawless Bengali diacritics and ligatures matching Bangladesh Government standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {isBn ? 'সাধারণ জিজ্ঞাসাসমূহ (FAQ)' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isBn ? 'সিভি তৈরি ও ডাউনলোড সংক্রান্ত জরুরি তথ্যাবলি।' : 'Clear answers to common questions about CV by Rábbi.'}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex justify-between items-center gap-3 font-semibold text-xs sm:text-sm text-slate-800 hover:text-indigo-600"
                >
                  <span>{isBn ? faq.qBn : faq.qEn}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {isBn ? faq.aBn : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
