import React, { useState } from 'react';
import { CV_CATEGORIES } from '../../data/categories';
import { CvCategory } from '../../types/cv';
import { GraduationCap, Briefcase, Wrench, ArrowRight, Lightbulb, CheckCircle2, X } from 'lucide-react';

interface Props {
  onSelectCategory: (category: CvCategory) => void;
  onClose?: () => void;
  isBn: boolean;
}

export const CategoryListModal: React.FC<Props> = ({
  onSelectCategory,
  onClose,
  isBn,
}) => {
  const [activeGroup, setActiveGroup] = useState<'all' | 'education' | 'career' | 'profession'>('all');
  const [selectedCat, setSelectedCat] = useState<CvCategory | null>(CV_CATEGORIES[0]);

  const filteredCategories = CV_CATEGORIES.filter((c) => {
    if (activeGroup === 'all') return true;
    return c.group === activeGroup;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {isBn ? 'সিভি ক্যাটাগরি ও বিশেষায়িত নির্দেশিকা' : 'CV Categories & Career Tracks'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {isBn
              ? 'আপনার শিক্ষাগত পটভূমি বা পেশা অনুযায়ী নিখুঁত সেকশন ও টেমপ্লেটের সুপারিশ।'
              : 'Choose your academic level or industry track to receive targeted section recommendations and writing tips.'}
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

      {/* Filter tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {[
          { id: 'all', label: isBn ? 'সকল ক্যাটাগরি (২৬)' : 'All Tracks (26)' },
          { id: 'education', label: isBn ? 'শিক্ষাগত যোগ্যতা (৮)' : 'Education-Based (8)', icon: GraduationCap },
          { id: 'career', label: isBn ? 'ক্যারিয়ার পর্যায় (৬)' : 'Career-Based (6)', icon: Briefcase },
          { id: 'profession', label: isBn ? 'পেশা ও ইন্ডাস্ট্রি (১২)' : 'Profession-Based (12)', icon: Wrench },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveGroup(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeGroup === tab.id
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Master Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
          {filteredCategories.map((cat) => {
            const isCurrent = selectedCat?.id === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCat(cat)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800">
                    {isBn ? cat.titleBn : cat.titleEn}
                  </h4>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-indigo-100">
                    {cat.group}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {isBn ? cat.descriptionBn : cat.descriptionEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Detail Pane */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 sticky top-24">
          {selectedCat ? (
            <>
              <div className="border-b border-slate-100 pb-4 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                    {selectedCat.group.toUpperCase()} TRACK
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {isBn ? selectedCat.titleBn : selectedCat.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {isBn ? selectedCat.descriptionBn : selectedCat.descriptionEn}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectCategory(selectedCat)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/20 transition-all shrink-0 ml-2"
                >
                  <span>{isBn ? 'এই ট্র্যাক নিয়ে শুরু' : 'Apply & Build'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Suitable Candidate Profile */}
              <div>
                <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'কারা এই ক্যাটাগরির অন্তর্ভুক্ত:' : 'Suitable Candidate Profile:'}
                </h5>
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/80 leading-relaxed">
                  {isBn ? selectedCat.candidateProfileBn : selectedCat.candidateProfileEn}
                </p>
              </div>

              {/* Recommended Sections */}
              <div>
                <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {isBn ? 'প্রস্তাবিত সিভি সেকশনসমূহ:' : 'Recommended CV Sections:'}
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCat.recommendedSections.map((sec, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{sec}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Writing Tips */}
              <div>
                <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>{isBn ? 'বিশেষ সিভি রাইটিং টিপস:' : 'Expert Writing Advice:'}</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {(isBn ? selectedCat.tipsBn : selectedCat.tipsEn).map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                      <span className="text-indigo-600 font-bold shrink-0">#{idx + 1}</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="text-xs text-slate-400 text-center py-12">
              {isBn ? 'বাম পাশ থেকে একটি ক্যাটাগরি বেছে নিন।' : 'Select a category track from the left to view guidance.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
