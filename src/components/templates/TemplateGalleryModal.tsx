import React, { useState } from 'react';
import { TEMPLATES } from '../../data/templates';
import { TemplateDefinition } from '../../types/cv';
import { Check, ShieldCheck, Sparkles, Filter, X } from 'lucide-react';

interface Props {
  currentTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
  onClose?: () => void;
  isBn: boolean;
}

export const TemplateGalleryModal: React.FC<Props> = ({
  currentTemplateId,
  onSelectTemplate,
  onClose,
  isBn,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tags = ['All', 'ATS 100%', 'Two-Column', 'Single-Column', 'Corporate', 'Executive', 'Sidebar', 'Classic'];

  const filteredTemplates = TEMPLATES.filter((tpl) => {
    const matchesTag =
      selectedTag === 'All' ||
      (selectedTag === 'ATS 100%' && tpl.isAtsOptimized) ||
      tpl.tags.includes(selectedTag);

    const matchesSearch =
      tpl.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpl.nameBn.includes(searchQuery) ||
      tpl.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {isBn ? 'প্রফেশনাল সিভি টেমপ্লেট লাইব্রেরি' : 'Professional CV Template Library'}
            </h2>
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-full">
              {TEMPLATES.length} {isBn ? 'টি অনন্য ডিজাইন' : 'Unique Styles'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {isBn
              ? 'যেকোনো টেমপ্লেটে পরিবর্তন করুন; আপনার পূর্বের সকল তথ্য ১০০% সুরক্ষিত থাকবে।'
              : 'Switch templates anytime without losing previously entered data. Every template is calibrated for true A4 print.'}
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

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Tag chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tag === 'All' ? (isBn ? 'সকল টেমপ্লেট' : 'All Templates') : tag}
            </button>
          ))}
        </div>

        {/* Search input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={isBn ? 'টেমপ্লেটের নাম খুঁজুন...' : 'Search template styles...'}
          className="px-3.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white sm:w-64"
        />
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTemplates.map((tpl) => {
          const isSelected = currentTemplateId === tpl.id;
          return (
            <div
              key={tpl.id}
              className={`group bg-white rounded-2xl border transition-all overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'border-indigo-600 ring-2 ring-indigo-600/20 shadow-lg'
                  : 'border-slate-200 hover:border-indigo-400 hover:shadow-md'
              }`}
            >
              {/* Card visual mockup header */}
              <div
                className="h-44 p-4 relative overflow-hidden flex flex-col justify-between bg-slate-50"
                style={{
                  borderTop: `4px solid ${tpl.previewColor}`,
                }}
              >
                {/* Visual miniature representation */}
                <div className="bg-white p-3 rounded-lg shadow-xs border border-slate-200/80 h-full flex flex-col justify-between text-[8px] text-slate-400 select-none pointer-events-none">
                  <div className="flex items-center gap-2 border-b pb-1.5" style={{ borderColor: tpl.previewColor + '40' }}>
                    <div className="w-6 h-6 rounded-full bg-slate-200 shrink-0"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-20 rounded" style={{ backgroundColor: tpl.previewColor }}></div>
                      <div className="h-1.5 w-12 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-1 my-1">
                    <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                    <div className="h-1.5 w-4/5 bg-slate-100 rounded"></div>
                    <div className="h-1.5 w-2/3 bg-slate-100 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 border-t pt-1">
                    <div className="h-2 bg-slate-100 rounded"></div>
                    <div className="h-2 bg-slate-100 rounded"></div>
                  </div>
                </div>

                {/* Badge tags */}
                <div className="absolute top-2 right-2 flex gap-1">
                  {tpl.isAtsOptimized && (
                    <span className="bg-emerald-600/90 backdrop-blur-xs text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs flex items-center gap-0.5">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      ATS
                    </span>
                  )}
                  {isSelected && (
                    <span className="bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs flex items-center gap-0.5">
                      <Check className="w-2.5 h-2.5" />
                      Active
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer details */}
              <div className="p-4 space-y-2.5">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                    {isBn ? tpl.nameBn : tpl.nameEn}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">{tpl.category}</p>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {isBn ? tpl.descriptionBn : tpl.descriptionEn}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {tpl.tags.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectTemplate(tpl.id);
                      if (onClose) onClose();
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                    }`}
                  >
                    {isSelected ? (isBn ? 'বর্তমান' : 'Active') : (isBn ? 'ব্যবহার করুন' : 'Use This')}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
