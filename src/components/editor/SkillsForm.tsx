import React, { useState } from 'react';
import { SkillCategory } from '../../types/cv';
import { Plus, Trash2, X, Sparkles } from 'lucide-react';

interface Props {
  categories: SkillCategory[];
  onChange: (categories: SkillCategory[]) => void;
  isBn: boolean;
  onOpenAiHelper?: (role: string, onSelectSkills: (skillsStr: string) => void) => void;
}

export const SkillsForm: React.FC<Props> = ({
  categories,
  onChange,
  isBn,
  onOpenAiHelper,
}) => {
  const [newSkillText, setNewSkillText] = useState<{ [catId: string]: string }>({});

  const handleAddCategory = () => {
    const newCat: SkillCategory = {
      id: 'cat-' + Date.now(),
      name: isBn ? 'নতুন দক্ষতার বিভাগ' : 'New Skill Group',
      skills: [],
    };
    onChange([...categories, newCat]);
  };

  const handleUpdateCatName = (catId: string, name: string) => {
    onChange(categories.map((c) => (c.id === catId ? { ...c, name } : c)));
  };

  const handleDeleteCat = (catId: string) => {
    onChange(categories.filter((c) => c.id !== catId));
  };

  const handleAddSkill = (catId: string) => {
    const text = newSkillText[catId]?.trim();
    if (!text) return;

    // Check if comma-separated
    const skillsToAdd = text
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    onChange(
      categories.map((c) => {
        if (c.id !== catId) return c;
        const existingNames = new Set(c.skills.map((s) => s.name.toLowerCase()));
        const unique = skillsToAdd
          .filter((name) => !existingNames.has(name.toLowerCase()))
          .map((name) => ({ name, level: 85 }));
        return {
          ...c,
          skills: [...c.skills, ...unique],
        };
      })
    );

    setNewSkillText((prev) => ({ ...prev, [catId]: '' }));
  };

  const handleRemoveSkill = (catId: string, skillIdx: number) => {
    onChange(
      categories.map((c) => {
        if (c.id !== catId) return c;
        return {
          ...c,
          skills: c.skills.filter((_, idx) => idx !== skillIdx),
        };
      })
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-xs text-slate-500">
          {isBn
            ? 'কমা (,) দিয়ে এক সাথে একাধিক স্কিল যুক্ত করতে পারেন।'
            : 'Separate multiple skills with commas to add them in bulk.'}
        </p>
        <button
          type="button"
          onClick={handleAddCategory}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{isBn ? '+ স্কিল গ্রুপ যোগ' : '+ Add Skill Group'}</span>
        </button>
      </div>

      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat.id} className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
              <input
                type="text"
                value={cat.name}
                onChange={(e) => handleUpdateCatName(cat.id, e.target.value)}
                placeholder="Skill Group Name"
                className="font-bold text-xs text-slate-800 bg-transparent border-b border-dashed border-slate-300 focus:outline-none focus:border-indigo-600 px-1 py-0.5"
              />
              <div className="flex items-center space-x-2">
                {onOpenAiHelper && (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenAiHelper(cat.name, (skillsStr) => {
                        setNewSkillText((prev) => ({
                          ...prev,
                          [cat.id]: (prev[cat.id] ? prev[cat.id] + ', ' : '') + skillsStr,
                        }));
                      })
                    }
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{isBn ? 'এআই সাজেশন' : 'AI Suggest'}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteCat(cat.id)}
                  className="p-1 text-slate-400 hover:text-rose-500"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Existing skill chips */}
            <div className="flex flex-wrap gap-1.5 min-h-[32px] p-2 bg-white rounded-lg border border-slate-200">
              {cat.skills.length === 0 ? (
                <span className="text-xs text-slate-400 italic">
                  {isBn ? 'কোনো স্কিল যোগ করা হয়নি' : 'No skills in this group yet'}
                </span>
              ) : (
                cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200"
                  >
                    <span>{skill.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(cat.id, sIdx)}
                      className="text-slate-400 hover:text-rose-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* Input to add skill */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkillText[cat.id] || ''}
                onChange={(e) =>
                  setNewSkillText((prev) => ({ ...prev, [cat.id]: e.target.value }))
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill(cat.id);
                  }
                }}
                placeholder={
                  isBn
                    ? 'উদা: পাইথন, রিঅ্যাক্ট, এসকিউএল (কমা দিয়ে একাধিক লিখুন)'
                    : 'e.g. Python, React, SQL, Project Management (comma separated)'
                }
                className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
              <button
                type="button"
                onClick={() => handleAddSkill(cat.id)}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                {isBn ? 'যোগ করুন' : 'Add'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
