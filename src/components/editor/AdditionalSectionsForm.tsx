import React, { useState } from 'react';
import { CvData, ProjectItem, CertificationItem, ReferenceItem } from '../../types/cv';
import { Plus, Trash2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  cv: CvData;
  onChange: (cv: CvData) => void;
  isBn: boolean;
  onOpenAiHelper?: (action: 'objective' | 'summary', onSelectText: (text: string) => void) => void;
}

export const AdditionalSectionsForm: React.FC<Props> = ({
  cv,
  onChange,
  isBn,
  onOpenAiHelper,
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'projects' | 'certifications' | 'references' | 'declaration'>('summary');

  // Objective & Summary
  const handleObjectiveChange = (text: string) => {
    onChange({ ...cv, careerObjective: text });
  };

  const handleSummaryChange = (text: string) => {
    onChange({ ...cv, professionalSummary: text });
  };

  // Projects
  const handleAddProject = () => {
    const newProj: ProjectItem = {
      id: 'proj-' + Date.now(),
      title: '',
      role: '',
      technologies: '',
      link: '',
      description: '',
    };
    onChange({ ...cv, projects: [...cv.projects, newProj] });
  };

  const handleUpdateProject = (id: string, field: keyof ProjectItem, val: string) => {
    onChange({
      ...cv,
      projects: cv.projects.map((p) => (p.id === id ? { ...p, [field]: val } : p)),
    });
  };

  const handleDeleteProject = (id: string) => {
    onChange({
      ...cv,
      projects: cv.projects.filter((p) => p.id !== id),
    });
  };

  // Certifications
  const handleAddCert = () => {
    const newCert: CertificationItem = {
      id: 'cert-' + Date.now(),
      name: '',
      issuer: '',
      issueDate: '',
    };
    onChange({ ...cv, certifications: [...cv.certifications, newCert] });
  };

  const handleUpdateCert = (id: string, field: keyof CertificationItem, val: string) => {
    onChange({
      ...cv,
      certifications: cv.certifications.map((c) => (c.id === id ? { ...c, [field]: val } : c)),
    });
  };

  const handleDeleteCert = (id: string) => {
    onChange({
      ...cv,
      certifications: cv.certifications.filter((c) => c.id !== id),
    });
  };

  // References
  const handleAddRef = () => {
    const newRef: ReferenceItem = {
      id: 'ref-' + Date.now(),
      name: '',
      designation: '',
      organization: '',
      email: '',
      phone: '',
      relationship: '',
    };
    onChange({ ...cv, references: [...cv.references, newRef] });
  };

  const handleUpdateRef = (id: string, field: keyof ReferenceItem, val: string) => {
    onChange({
      ...cv,
      references: cv.references.map((r) => (r.id === id ? { ...r, [field]: val } : r)),
    });
  };

  const handleDeleteRef = (id: string) => {
    onChange({
      ...cv,
      references: cv.references.filter((r) => r.id !== id),
    });
  };

  // Declaration
  const handleDeclarationChange = (field: 'text' | 'place' | 'date', val: string) => {
    onChange({
      ...cv,
      declaration: {
        text: cv.declaration?.text || '',
        place: cv.declaration?.place || '',
        date: cv.declaration?.date || '',
        showSignature: cv.declaration?.showSignature ?? true,
        [field]: val,
      },
    });
  };

  return (
    <div className="space-y-4">
      {/* Sub tabs */}
      <div className="flex border-b border-slate-200 overflow-x-auto gap-1 text-xs font-semibold">
        {[
          { id: 'summary', label: isBn ? 'সামারি ও অবজেক্টিভ' : 'Summary & Objective' },
          { id: 'projects', label: isBn ? 'প্রজেক্ট' : 'Projects' },
          { id: 'certifications', label: isBn ? 'সনদ ও ট্রেনিং' : 'Certificates' },
          { id: 'references', label: isBn ? 'রেফারেন্স' : 'References' },
          { id: 'declaration', label: isBn ? 'অঙ্গীকারনামা' : 'Declaration' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'border-indigo-600 text-indigo-700 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. Summary & Objective */}
      {activeTab === 'summary' && (
        <div className="space-y-5">
          {/* Professional Summary */}
          <div className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-800">
                {isBn ? 'পেশাগত সারসংক্ষেপ (Professional Summary)' : 'Professional Summary'}
              </label>
              {onOpenAiHelper && (
                <button
                  type="button"
                  onClick={() =>
                    onOpenAiHelper('summary', (text) => handleSummaryChange(text))
                  }
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isBn ? 'এআই দিয়ে লিখুন' : 'Write with AI'}</span>
                </button>
              )}
            </div>
            <textarea
              rows={3}
              value={cv.professionalSummary}
              onChange={(e) => handleSummaryChange(e.target.value)}
              placeholder={
                isBn
                  ? 'আপনার ক্যারিয়ারের মূল অর্জন ও শক্তির ৩-৪ বাক্যের আকর্ষণীয় বিবরণ...'
                  : '3-4 sentences outlining your core expertise, career highlights, and value proposition...'
              }
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white leading-relaxed"
            />
          </div>

          {/* Career Objective */}
          <div className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-800">
                {isBn ? 'ক্যারিয়ার অবজেক্টিভ (Career Objective)' : 'Career Objective'}
              </label>
              {onOpenAiHelper && (
                <button
                  type="button"
                  onClick={() =>
                    onOpenAiHelper('objective', (text) => handleObjectiveChange(text))
                  }
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isBn ? 'এআই দিয়ে লিখুন' : 'Write with AI'}</span>
                </button>
              )}
            </div>
            <textarea
              rows={2}
              value={cv.careerObjective}
              onChange={(e) => handleObjectiveChange(e.target.value)}
              placeholder={
                isBn
                  ? 'আপনার পেশাগত লক্ষ্য ও প্রতিষ্ঠানের প্রতি অবদানের আকাঙ্ক্ষা...'
                  : 'Tailored 2-3 sentences expressing your immediate career goals...'
              }
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* 2. Projects */}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-500">
              {isBn ? 'সফটওয়্যার বা প্রাতিষ্ঠানিক প্রজেক্টের বিবরণ যুক্ত করুন।' : 'Showcase notable client or portfolio projects.'}
            </p>
            <button
              type="button"
              onClick={handleAddProject}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isBn ? '+ প্রজেক্ট যোগ' : '+ Add Project'}</span>
            </button>
          </div>

          {cv.projects.map((proj) => (
            <div key={proj.id} className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={proj.title}
                  onChange={(e) => handleUpdateProject(proj.id, 'title', e.target.value)}
                  placeholder="Project Title"
                  className="font-bold text-xs text-slate-800 bg-transparent border-b border-dashed border-slate-300 px-1 py-0.5 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteProject(proj.id)}
                  className="p-1 text-slate-400 hover:text-rose-500"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={proj.role || ''}
                  onChange={(e) => handleUpdateProject(proj.id, 'role', e.target.value)}
                  placeholder="Your Role (e.g. Lead Developer / UI Designer)"
                  className="px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none bg-white"
                />
                <input
                  type="text"
                  value={proj.technologies || ''}
                  onChange={(e) => handleUpdateProject(proj.id, 'technologies', e.target.value)}
                  placeholder="Tech Stack (e.g. React, Node.js, AWS)"
                  className="px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none bg-white"
                />
              </div>

              <input
                type="text"
                value={proj.link || ''}
                onChange={(e) => handleUpdateProject(proj.id, 'link', e.target.value)}
                placeholder="Live Link / GitHub URL"
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none bg-white"
              />

              <textarea
                rows={2}
                value={proj.description}
                onChange={(e) => handleUpdateProject(proj.id, 'description', e.target.value)}
                placeholder="Project summary and tangible impact delivered..."
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none bg-white"
              />
            </div>
          ))}
        </div>
      )}

      {/* 3. Certifications */}
      {activeTab === 'certifications' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-500">
              {isBn ? 'আন্তর্জাতিক ও পেশাগত সনদসমূহ।' : 'Industry accredited credentials & certifications.'}
            </p>
            <button
              type="button"
              onClick={handleAddCert}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isBn ? '+ সনদ যোগ' : '+ Add Certificate'}</span>
            </button>
          </div>

          {cv.certifications.map((c) => (
            <div key={c.id} className="p-3 bg-slate-50/70 border border-slate-200 rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <input
                type="text"
                value={c.name}
                onChange={(e) => handleUpdateCert(c.id, 'name', e.target.value)}
                placeholder="Certificate Name"
                className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
              />
              <input
                type="text"
                value={c.issuer}
                onChange={(e) => handleUpdateCert(c.id, 'issuer', e.target.value)}
                placeholder="Issuing Organization"
                className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
              />
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={c.issueDate}
                  onChange={(e) => handleUpdateCert(c.id, 'issueDate', e.target.value)}
                  placeholder="Date / Year"
                  className="w-24 px-2 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteCert(c.id)}
                  className="p-1 text-slate-400 hover:text-rose-500 ml-auto"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. References */}
      {activeTab === 'references' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-500">
              {isBn ? 'কমপক্ষে ১-২ জন গ্রহণযোগ্য ব্যক্তির রেফারেন্স দিন।' : 'Include 1-2 reliable academic or professional referees.'}
            </p>
            <button
              type="button"
              onClick={handleAddRef}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isBn ? '+ রেফারেন্স যোগ' : '+ Add Referee'}</span>
            </button>
          </div>

          {cv.references.map((ref) => (
            <div key={ref.id} className="p-3 bg-slate-50/70 border border-slate-200 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={ref.name}
                  onChange={(e) => handleUpdateRef(ref.id, 'name', e.target.value)}
                  placeholder="Full Name (e.g. Dr. Mohammad Kaykobad)"
                  className="font-bold text-xs text-slate-800 bg-transparent border-b border-dashed border-slate-300 px-1 py-0.5 focus:outline-none flex-1"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteRef(ref.id)}
                  className="p-1 text-slate-400 hover:text-rose-500 ml-2"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  value={ref.designation}
                  onChange={(e) => handleUpdateRef(ref.id, 'designation', e.target.value)}
                  placeholder="Designation (e.g. Professor / Director)"
                  className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                />
                <input
                  type="text"
                  value={ref.organization}
                  onChange={(e) => handleUpdateRef(ref.id, 'organization', e.target.value)}
                  placeholder="Organization / Company"
                  className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                />
                <input
                  type="email"
                  value={ref.email}
                  onChange={(e) => handleUpdateRef(ref.id, 'email', e.target.value)}
                  placeholder="Email Address"
                  className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                />
                <input
                  type="tel"
                  value={ref.phone}
                  onChange={(e) => handleUpdateRef(ref.id, 'phone', e.target.value)}
                  placeholder="Phone Number"
                  className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 5. Declaration */}
      {activeTab === 'declaration' && (
        <div className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBn ? 'অঙ্গীকারনামার বক্তব্য' : 'Declaration Statement'}
            </label>
            <textarea
              rows={2}
              value={cv.declaration?.text || ''}
              onChange={(e) => handleDeclarationChange('text', e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'স্থান (Place)' : 'Place'}
              </label>
              <input
                type="text"
                value={cv.declaration?.place || ''}
                onChange={(e) => handleDeclarationChange('place', e.target.value)}
                placeholder="Dhaka, Bangladesh"
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'তারিখ (Date)' : 'Date'}
              </label>
              <input
                type="text"
                value={cv.declaration?.date || ''}
                onChange={(e) => handleDeclarationChange('date', e.target.value)}
                placeholder="10/11/2026"
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
