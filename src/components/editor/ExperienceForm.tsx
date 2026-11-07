import React from 'react';
import { ExperienceItem } from '../../types/cv';
import { Plus, Trash2, ChevronUp, ChevronDown, Briefcase, Sparkles } from 'lucide-react';

interface Props {
  items: ExperienceItem[];
  onChange: (items: ExperienceItem[]) => void;
  isBn: boolean;
  onOpenAiHelper?: (initialPrompt: string, onSelectText: (text: string) => void) => void;
}

export const ExperienceForm: React.FC<Props> = ({
  items,
  onChange,
  isBn,
  onOpenAiHelper,
}) => {
  const handleAdd = () => {
    const newItem: ExperienceItem = {
      id: 'exp-' + Date.now(),
      company: '',
      jobTitle: '',
      employmentType: 'Full-time',
      location: 'Dhaka, Bangladesh',
      startDate: '',
      endDate: '',
      isCurrent: true,
      responsibilities: [''],
    };
    onChange([newItem, ...items]);
  };

  const handleUpdate = (id: string, field: keyof ExperienceItem, value: any) => {
    onChange(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleDelete = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === items.length - 1)
    ) {
      return;
    }
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    onChange(newItems);
  };

  const handleBulletChange = (expId: string, bulletIdx: number, val: string) => {
    const exp = items.find((e) => e.id === expId);
    if (!exp) return;
    const newBullets = [...exp.responsibilities];
    newBullets[bulletIdx] = val;
    handleUpdate(expId, 'responsibilities', newBullets);
  };

  const handleAddBullet = (expId: string) => {
    const exp = items.find((e) => e.id === expId);
    if (!exp) return;
    handleUpdate(expId, 'responsibilities', [...exp.responsibilities, '']);
  };

  const handleRemoveBullet = (expId: string, bulletIdx: number) => {
    const exp = items.find((e) => e.id === expId);
    if (!exp) return;
    const newBullets = exp.responsibilities.filter((_, i) => i !== bulletIdx);
    handleUpdate(expId, 'responsibilities', newBullets);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-xs text-slate-500">
          {isBn
            ? 'পেশাগত কাজের দায়িত্ব সংখ্যা ও অর্জনসহ বর্ণনা করুন।'
            : 'Detail your responsibilities and quantified accomplishments.'}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{isBn ? '+ কাজের অভিজ্ঞতা যোগ' : '+ Add Work Experience'}</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl">
          <Briefcase className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
          <p className="text-xs text-slate-600 font-medium">
            {isBn ? 'এখনো কোনো কাজের অভিজ্ঞতা যোগ করা হয়নি' : 'No work experience added yet'}
          </p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold"
          >
            {isBn ? 'প্রথম কাজের অভিজ্ঞতা যোগ করুন' : 'Add First Experience'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3 relative group"
            >
              {/* Header card action bar */}
              <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 inline-flex items-center justify-center text-[11px]">
                    {index + 1}
                  </span>
                  <span>{item.jobTitle || (isBn ? 'নতুন পদবি' : 'Job Title')}</span>
                  {item.company && <span className="font-normal text-slate-500"> at {item.company}</span>}
                </span>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMove(index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30 rounded hover:bg-white"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMove(index, 'down')}
                    disabled={index === items.length - 1}
                    className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30 rounded hover:bg-white"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Company & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'কোম্পানি বা প্রতিষ্ঠানের নাম' : 'Company Name'} *
                  </label>
                  <input
                    type="text"
                    value={item.company}
                    onChange={(e) => handleUpdate(item.id, 'company', e.target.value)}
                    placeholder={isBn ? 'উদা: ব্রেন স্টেশন ২৩ / গ্রামীণফোন' : 'e.g. Brain Station 23 / Grameenphone'}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'কাজের পদবি' : 'Job Title / Position'} *
                  </label>
                  <input
                    type="text"
                    value={item.jobTitle}
                    onChange={(e) => handleUpdate(item.id, 'jobTitle', e.target.value)}
                    placeholder={isBn ? 'উদা: সফটওয়্যার ইঞ্জিনিয়ার' : 'e.g. Senior Software Engineer'}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'কাজের ধরন' : 'Employment Type'}
                  </label>
                  <select
                    value={item.employmentType}
                    onChange={(e) => handleUpdate(item.id, 'employmentType', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="Full-time">{isBn ? 'ফুল-টাইম (Full-time)' : 'Full-time'}</option>
                    <option value="Part-time">{isBn ? 'পার্ট-টাইম (Part-time)' : 'Part-time'}</option>
                    <option value="Contract">{isBn ? 'চুক্তিভিত্তিক (Contract)' : 'Contract'}</option>
                    <option value="Remote">{isBn ? 'রিমোট (Remote)' : 'Remote'}</option>
                    <option value="Freelance">{isBn ? 'ফ্রিল্যান্স (Freelance)' : 'Freelance'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'অবস্থান (শহর)' : 'Location'}
                  </label>
                  <input
                    type="text"
                    value={item.location || ''}
                    onChange={(e) => handleUpdate(item.id, 'location', e.target.value)}
                    placeholder="Dhaka, Bangladesh"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'শুরুর সময় (মাস/বছর)' : 'Start Date'}
                  </label>
                  <input
                    type="text"
                    value={item.startDate}
                    onChange={(e) => handleUpdate(item.id, 'startDate', e.target.value)}
                    placeholder="2021-03"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      {isBn ? 'শেষ সময়' : 'End Date'}
                    </label>
                    <label className="flex items-center gap-1 text-[11px] text-slate-600 font-medium cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.isCurrent}
                        onChange={(e) => handleUpdate(item.id, 'isCurrent', e.target.checked)}
                        className="rounded accent-indigo-600"
                      />
                      <span>{isBn ? 'বর্তমানে কর্মরত' : 'Currently working here'}</span>
                    </label>
                  </div>
                  {!item.isCurrent && (
                    <input
                      type="text"
                      value={item.endDate || ''}
                      onChange={(e) => handleUpdate(item.id, 'endDate', e.target.value)}
                      placeholder="2023-12"
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                  )}
                </div>
              </div>

              {/* Responsibilities bullet points */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-semibold text-slate-700">
                    {isBn ? 'দায়িত্ব ও অর্জনসমূহের বুলেট পয়েন্ট' : 'Key Responsibilities & Impact'}
                  </label>
                  <button
                    type="button"
                    onClick={() => handleAddBullet(item.id)}
                    className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    {isBn ? '+ বুলেট যোগ করুন' : '+ Add Bullet'}
                  </button>
                </div>

                {item.responsibilities.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs">•</span>
                    <input
                      type="text"
                      value={bullet}
                      onChange={(e) => handleBulletChange(item.id, bIdx, e.target.value)}
                      placeholder={
                        isBn
                          ? 'উদা: মাসিক ১৫% সেলস প্রবৃদ্ধি অর্জনে সক্রিয়ভাবে ভূমিকা পালন করেছি।'
                          : 'e.g. Architected microservices boosting system throughput by 35%.'
                      }
                      className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                    {onOpenAiHelper && (
                      <button
                        type="button"
                        onClick={() =>
                          onOpenAiHelper(bullet, (improvedText) =>
                            handleBulletChange(item.id, bIdx, improvedText)
                          )
                        }
                        className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded"
                        title={isBn ? 'এআই দিয়ে বুলেট উন্নত করুন' : 'Enhance with AI'}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {item.responsibilities.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveBullet(item.id, bIdx)}
                        className="p-1.5 text-slate-400 hover:text-rose-500"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Special Achievement */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBn ? 'বিশেষ অর্জন বা পদক (ঐচ্ছিক)' : 'Notable Achievement (Optional)'}
                </label>
                <input
                  type="text"
                  value={item.achievements || ''}
                  onChange={(e) => handleUpdate(item.id, 'achievements', e.target.value)}
                  placeholder={
                    isBn
                      ? 'উদা: ২০২৩ সালে শ্রেষ্ঠ পারফরমার পুরস্কার প্রাপ্ত।'
                      : 'e.g. Awarded Employee of the Year 2023 for leading database overhaul.'
                  }
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
