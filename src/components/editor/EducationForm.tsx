import React from 'react';
import { EducationItem } from '../../types/cv';
import { Plus, Trash2, ChevronUp, ChevronDown, GraduationCap } from 'lucide-react';

interface Props {
  items: EducationItem[];
  onChange: (items: EducationItem[]) => void;
  isBn: boolean;
}

export const EducationForm: React.FC<Props> = ({ items, onChange, isBn }) => {
  const handleAdd = () => {
    const newItem: EducationItem = {
      id: 'edu-' + Date.now(),
      degree: '',
      institution: '',
      boardOrUniversity: '',
      departmentOrMajor: '',
      passingYear: '',
      result: '',
      scale: '4.00',
    };
    onChange([...items, newItem]);
  };

  const handleUpdate = (id: string, field: keyof EducationItem, value: string) => {
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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-xs text-slate-500">
          {isBn
            ? 'সর্বশেষ বা সর্বোচ্চ অর্জিত ডিগ্রিটি সবার উপরে রাখুন (Reverse Chronological)।'
            : 'List your highest qualification first (Reverse Chronological Order).'}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{isBn ? '+ ডিগ্রি যোগ করুন' : '+ Add Qualification'}</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl">
          <GraduationCap className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
          <p className="text-xs text-slate-600 font-medium">
            {isBn ? 'কোনো শিক্ষাগত তথ্য যোগ করা হয়নি' : 'No education records added yet'}
          </p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold"
          >
            {isBn ? 'প্রথম ডিগ্রি যোগ করুন' : 'Add First Education'}
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
                  <span>{item.degree || (isBn ? 'নতুন ডিগ্রি' : 'New Qualification')}</span>
                </span>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleMove(index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30 rounded hover:bg-white"
                    title="Move up"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMove(index, 'down')}
                    disabled={index === items.length - 1}
                    className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30 rounded hover:bg-white"
                    title="Move down"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'ডিগ্রির নাম' : 'Degree / Examination Name'} *
                  </label>
                  <input
                    type="text"
                    value={item.degree}
                    onChange={(e) => handleUpdate(item.id, 'degree', e.target.value)}
                    placeholder={isBn ? 'উদা: B.Sc. in CSE / MBA / HSC' : 'e.g. B.Sc. in CSE / MBA / HSC'}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'শিক্ষা প্রতিষ্ঠানের নাম' : 'Institution / College / University'} *
                  </label>
                  <input
                    type="text"
                    value={item.institution}
                    onChange={(e) => handleUpdate(item.id, 'institution', e.target.value)}
                    placeholder={isBn ? 'উদা: ঢাকা বিশ্ববিদ্যালয় / বুয়েট' : 'e.g. University of Dhaka / BUET'}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'বোর্ড বা বিশ্ববিদ্যালয়' : 'Board / University'}
                  </label>
                  <input
                    type="text"
                    value={item.boardOrUniversity || ''}
                    onChange={(e) => handleUpdate(item.id, 'boardOrUniversity', e.target.value)}
                    placeholder={isBn ? 'উদা: ঢাকা বোর্ড / জাতীয় বিশ্ববিদ্যালয়' : 'e.g. Dhaka Board / National University'}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'বিভাগ বা সাবজেক্ট' : 'Department / Major / Subject'}
                  </label>
                  <input
                    type="text"
                    value={item.departmentOrMajor || ''}
                    onChange={(e) => handleUpdate(item.id, 'departmentOrMajor', e.target.value)}
                    placeholder={isBn ? 'উদা: কম্পিউটার সায়েন্স / বিজ্ঞান' : 'e.g. Computer Science / Finance / Science'}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isBn ? 'পাসের বছর' : 'Passing Year'}
                    </label>
                    <input
                      type="text"
                      value={item.passingYear}
                      onChange={(e) => handleUpdate(item.id, 'passingYear', e.target.value)}
                      placeholder="2022"
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isBn ? 'ফলাফল (CGPA/GPA)' : 'Result / CGPA'}
                    </label>
                    <input
                      type="text"
                      value={item.result}
                      onChange={(e) => handleUpdate(item.id, 'result', e.target.value)}
                      placeholder="CGPA 3.82"
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBn ? 'বিশেষ কৃতিত্ব / সম্মাননা' : 'Honors / Achievements'}
                  </label>
                  <input
                    type="text"
                    value={item.achievements || ''}
                    onChange={(e) => handleUpdate(item.id, 'achievements', e.target.value)}
                    placeholder={isBn ? 'উদা: ডিনস লিস্ট স্কলার / মেধা বৃত্তি' : "e.g. Dean's Honor Roll, First Class"}
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
