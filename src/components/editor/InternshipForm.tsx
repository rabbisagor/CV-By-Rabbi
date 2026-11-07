import React from 'react';
import { InternshipItem } from '../../types/cv';
import { Plus, Trash2, Award } from 'lucide-react';

interface Props {
  items: InternshipItem[];
  onChange: (items: InternshipItem[]) => void;
  isBn: boolean;
}

export const InternshipForm: React.FC<Props> = ({ items, onChange, isBn }) => {
  const handleAdd = () => {
    const newItem: InternshipItem = {
      id: 'intern-' + Date.now(),
      organization: '',
      position: '',
      department: '',
      duration: '3 Months',
      startDate: '',
      endDate: '',
      responsibilities: [''],
      learningOutcomes: '',
      supervisor: '',
    };
    onChange([...items, newItem]);
  };

  const handleUpdate = (id: string, field: keyof InternshipItem, value: any) => {
    onChange(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleDelete = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-xs text-slate-500">
          {isBn
            ? 'সদ্য গ্র্যাজুয়েট ও ইন্টার্নদের জন্য এই বিভাগটি অত্যন্ত ফলপ্রসূ।'
            : 'Crucial for fresh graduates and students highlighting early corporate exposure.'}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{isBn ? '+ ইন্টার্নশিপ যোগ' : '+ Add Internship'}</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-6 border-2 border-dashed border-slate-200 rounded-xl">
          <Award className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
          <p className="text-xs text-slate-500">
            {isBn ? 'ইন্টার্নশিপের তথ্য যোগ করতে ক্লিক করুন' : 'Click to add an internship experience'}
          </p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-2 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium"
          >
            {isBn ? '+ নতুন ইন্টার্নশিপ' : '+ Add Record'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                <span className="text-xs font-bold text-slate-800">
                  {item.position || (isBn ? 'ইন্টার্ন পদবি' : 'Intern Position')} — {item.organization || (isBn ? 'প্রতিষ্ঠান' : 'Company')}
                </span>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="p-1 text-rose-500 hover:text-rose-700 rounded hover:bg-rose-50"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'প্রতিষ্ঠান বা কোম্পানির নাম' : 'Organization Name'} *
                  </label>
                  <input
                    type="text"
                    value={item.organization}
                    onChange={(e) => handleUpdate(item.id, 'organization', e.target.value)}
                    placeholder="e.g. Grameenphone / Unilever"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'ইন্টার্নশিপ পদবি' : 'Internship Position'} *
                  </label>
                  <input
                    type="text"
                    value={item.position}
                    onChange={(e) => handleUpdate(item.id, 'position', e.target.value)}
                    placeholder="e.g. HR Intern / Software Engineering Intern"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'বিভাগ (Department)' : 'Department'}
                  </label>
                  <input
                    type="text"
                    value={item.department || ''}
                    onChange={(e) => handleUpdate(item.id, 'department', e.target.value)}
                    placeholder="e.g. Marketing / Engineering"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'স্থায়িত্ব (Duration)' : 'Duration'}
                  </label>
                  <input
                    type="text"
                    value={item.duration || ''}
                    onChange={(e) => handleUpdate(item.id, 'duration', e.target.value)}
                    placeholder="e.g. 3 Months / 6 Months"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'মূল দায়িত্ব ও অভিজ্ঞতা' : 'Key Responsibilities'}
                  </label>
                  <textarea
                    rows={2}
                    value={item.responsibilities.join('\n')}
                    onChange={(e) => handleUpdate(item.id, 'responsibilities', e.target.value.split('\n'))}
                    placeholder={isBn ? 'প্রতি লাইনে একটি করে দায়িত্ব লিখুন...' : 'Enter each responsibility on a new line...'}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'শিক্ষণীয় ফলাফল / অর্জন (Learning Outcomes)' : 'Learning Outcomes & Takeaways'}
                  </label>
                  <input
                    type="text"
                    value={item.learningOutcomes || ''}
                    onChange={(e) => handleUpdate(item.id, 'learningOutcomes', e.target.value)}
                    placeholder={isBn ? 'উদা: কর্পোরেট কাজের প্রক্রিয়া ও ডেটা অ্যানালাইসিসে গভীর জ্ঞান লাভ' : 'e.g. Mastered enterprise CI/CD workflows and agile sprints'}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
