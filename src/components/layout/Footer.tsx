import React from 'react';
import { FileText, Shield, Heart } from 'lucide-react';

interface Props {
  onNavigate: (view: 'home' | 'editor' | 'templates' | 'categories' | 'dashboard' | 'guide') => void;
  isBn: boolean;
}

export const Footer: React.FC<Props> = ({ onNavigate, isBn }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                <FileText className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                CV by Rábbi
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isBn
                ? 'বাংলাদেশের চাকরিপ্রার্থী, শিক্ষার্থী ও প্রফেশনালদের জন্য তৈরি সর্বাধুনিক এটিএস-ফ্রেন্ডলি সিভি ও রেজুমি বিল্ডার।'
                : 'Advanced professional CV & Resume builder tailored for Bangladeshi and international career opportunities.'}
            </p>
            <p className="text-xs text-indigo-400 font-medium">
              {isBn ? '"আপনার স্বপ্নের ক্যারিয়ারের প্রথম পদক্ষেপ।"' : '"Build Your Future, One CV at a Time."'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isBn ? 'সিভি টেমপ্লেট' : 'Templates & Styles'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('templates')} className="hover:text-white transition-colors">
                  {isBn ? 'মডার্ন প্রফেশনাল' : 'Modern Professional'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('templates')} className="hover:text-white transition-colors">
                  {isBn ? 'এটিএস স্ট্যান্ডার্ড ১০০' : 'ATS-Friendly Standard'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('templates')} className="hover:text-white transition-colors">
                  {isBn ? 'কর্পোরেট ও এক্সিকিউটিভ' : 'Corporate & Executive'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('templates')} className="hover:text-white transition-colors">
                  {isBn ? 'বাংলাদেশ সরকারি চাকরির ফরম্যাট' : 'BD Govt Job Standard'}
                </button>
              </li>
            </ul>
          </div>

          {/* Career Tracks */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isBn ? 'ক্যারিয়ার ট্র্যাক' : 'Career Tracks'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  {isBn ? 'সদ্য গ্র্যাজুয়েট ও ইন্টার্নশিপ' : 'Fresh Graduate & Internship'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  {isBn ? 'আইটি ও সফটওয়্যার ডেভেলপার' : 'IT & Software Engineers'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  {isBn ? 'ব্যাংকিং ও ফাইন্যান্স' : 'Banking & Finance'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guide')} className="hover:text-white transition-colors">
                  {isBn ? 'বিডি সিভি রাইটিং নির্দেশিকা' : 'BD CV Writing Guidelines'}
                </button>
              </li>
            </ul>
          </div>

          {/* Privacy & Architecture */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isBn ? 'প্রাইভেসি ও লোকাল স্টোরেজ' : 'Local-First Privacy'}</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isBn
                ? 'আপনার ব্যক্তিগত ছবি, স্বাক্ষর এবং সিভির তথ্য আপনার ব্রাউজার ও ডিভাইসেই সম্পূর্ণ নিরাপদে সংরক্ষিত থাকে। কোনো বহিরাগত সার্ভারে ডাটা পাচার হয় না।'
                : 'All photos, signatures, and CV documents are saved locally in your browser IndexedDB. Your private data remains yours.'}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} CV by Rábbi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for ambitious career seekers in Bangladesh & worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
