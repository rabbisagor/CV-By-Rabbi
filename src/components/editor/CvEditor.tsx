import React, { useState, useEffect } from 'react';
import { CvData, PersonalInfo } from '../../types/cv';
import { StorageService } from '../../services/storage';
import { PersonalInfoForm } from './PersonalInfoForm';
import { EducationForm } from './EducationForm';
import { ExperienceForm } from './ExperienceForm';
import { InternshipForm } from './InternshipForm';
import { SkillsForm } from './SkillsForm';
import { AdditionalSectionsForm } from './AdditionalSectionsForm';
import { CustomizationPanel } from './CustomizationPanel';
import { PhotoUploadModal } from './PhotoUploadModal';
import { SignatureUploadModal } from './SignatureUploadModal';
import { AtsCheckerModal } from './AtsCheckerModal';
import { AiAssistantModal } from './AiAssistantModal';
import { A4PagePreview } from '../preview/A4PagePreview';
import { SAMPLE_CV_EN, SAMPLE_CV_BN } from '../../data/sampleCV';
import {
  User,
  GraduationCap,
  Briefcase,
  Award,
  Wrench,
  Layers,
  Palette,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  FileText,
  RotateCcw,
  Languages,
  LayoutTemplate,
  Eye,
  Edit3
} from 'lucide-react';

interface Props {
  initialCv: CvData;
  isBn: boolean;
  onOpenTemplates: () => void;
}

export const CvEditor: React.FC<Props> = ({ initialCv, isBn, onOpenTemplates }) => {
  const [cv, setCv] = useState<CvData>(initialCv);
  const [activeSection, setActiveSection] = useState<
    'personal' | 'education' | 'experience' | 'internship' | 'skills' | 'additional' | 'customization'
  >('personal');

  const [mobileTab, setMobileTab] = useState<'edit' | 'preview'>('edit');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string>('Saved');

  // Modals
  const [showPhotoModal, setShowPhotoModal] = useState<boolean>(false);
  const [showSignatureModal, setShowSignatureModal] = useState<boolean>(false);
  const [showAtsModal, setShowAtsModal] = useState<boolean>(false);
  const [showAiModal, setShowAiModal] = useState<boolean>(false);
  const [aiHelperConfig, setAiHelperConfig] = useState<{
    action?: any;
    prompt?: string;
    role?: string;
    onApply?: (text: string) => void;
  } | null>(null);

  // Auto-save on modification (debounced 600ms)
  useEffect(() => {
    setIsSaving(true);
    setSaveStatus(isBn ? 'সংরক্ষণ হচ্ছে...' : 'Saving...');
    const timer = setTimeout(() => {
      StorageService.saveCV(cv)
        .then(() => {
          setIsSaving(false);
          setSaveStatus(isBn ? 'সংরক্ষিত' : 'Saved');
        })
        .catch(() => {
          setIsSaving(false);
          setSaveStatus('Error saving');
        });
    }, 600);
    return () => clearTimeout(timer);
  }, [cv, isBn]);

  const handleUpdateCv = (updated: CvData) => {
    setCv(updated);
  };

  const handleUpdatePersonalInfo = (info: PersonalInfo) => {
    setCv({ ...cv, personalInfo: info });
  };

  const handleToggleDocLanguage = () => {
    const nextLang = cv.documentLanguage === 'en' ? 'bn' : 'en';
    setCv({
      ...cv,
      documentLanguage: nextLang,
      customization: {
        ...cv.customization,
        fontFamily: nextLang === 'bn' ? 'SolaimanLipi' : 'Inter',
      },
    });
  };

  const handleLoadSample = () => {
    const sample = cv.documentLanguage === 'bn' ? SAMPLE_CV_BN : SAMPLE_CV_EN;
    if (
      window.confirm(
        isBn
          ? 'আপনি কি একটি সম্পূর্ণ নমুনা সিভি লোড করতে চান? আপনার বর্তমান ডাটা প্রতিস্থাপিত হবে।'
          : 'Load a complete sample CV? This will populate all fields with realistic professional content.'
      )
    ) {
      setCv({
        ...sample,
        id: cv.id,
        title: cv.title || sample.title,
      });
    }
  };

  const openAiHelperForField = (
    action: any,
    initialPrompt: string,
    onApply: (text: string) => void
  ) => {
    setAiHelperConfig({
      action,
      prompt: initialPrompt,
      role: cv.personalInfo.professionalTitle,
      onApply,
    });
    setShowAiModal(true);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-slate-50">
      {/* Editor Sub-Header Toolbar */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between shrink-0 shadow-xs z-20">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={cv.title}
            onChange={(e) => setCv({ ...cv, title: e.target.value })}
            placeholder="CV Title"
            className="font-bold text-xs sm:text-sm text-slate-800 border-b border-transparent hover:border-slate-300 focus:border-indigo-600 focus:outline-none px-1 py-0.5 max-w-[200px] sm:max-w-[320px] truncate"
          />
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
            <CheckCircle className={`w-3 h-3 ${isSaving ? 'text-amber-500 animate-spin' : 'text-emerald-500'}`} />
            <span>{saveStatus}</span>
          </div>
        </div>

        {/* Central & Right Controls */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Mobile Edit/Preview tab toggler */}
          <div className="flex lg:hidden bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setMobileTab('edit')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                mobileTab === 'edit' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
              }`}
            >
              <Edit3 className="w-3 h-3" />
              <span>{isBn ? 'এডিট' : 'Edit'}</span>
            </button>
            <button
              onClick={() => setMobileTab('preview')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                mobileTab === 'preview' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>{isBn ? 'প্রিভিউ' : 'Preview'}</span>
            </button>
          </div>

          {/* Document Language switcher */}
          <button
            type="button"
            onClick={handleToggleDocLanguage}
            title={isBn ? 'সিভির ভাষা পরিবর্তন করুন' : 'Toggle CV document language'}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <Languages className="w-3.5 h-3.5 text-indigo-600" />
            <span className="font-semibold">{cv.documentLanguage === 'bn' ? 'বাংলা সিভি' : 'English CV'}</span>
          </button>

          {/* Change Template button */}
          <button
            type="button"
            onClick={onOpenTemplates}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <LayoutTemplate className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden md:inline">{isBn ? 'টেমপ্লেট পরিবর্তন' : 'Templates'}</span>
          </button>

          {/* ATS Checker button */}
          <button
            type="button"
            onClick={() => setShowAtsModal(true)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBn ? 'এটিএস স্কোর' : 'ATS Check'}</span>
          </button>

          {/* AI Assistant button */}
          <button
            type="button"
            onClick={() => {
              setAiHelperConfig(null);
              setShowAiModal(true);
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-95 rounded-lg shadow-xs transition-opacity"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI</span>
          </button>

          {/* Sample CV loader */}
          <button
            type="button"
            onClick={handleLoadSample}
            title={isBn ? 'নমুনা তথ্য লোড করুন' : 'Load realistic sample data'}
            className="hidden xl:inline-flex items-center gap-1 px-2 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{isBn ? 'নমুনা' : 'Sample'}</span>
          </button>
        </div>
      </div>

      {/* Main Split Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Form Editor Panel */}
        <div
          className={`w-full lg:w-[48%] xl:w-[45%] flex flex-col bg-white border-r border-slate-200 ${
            mobileTab === 'preview' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {/* Section Navigation Tabs */}
          <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/80 px-2 py-1.5 gap-1 shrink-0">
            {[
              { id: 'personal', label: isBn ? 'ব্যক্তিগত তথ্য' : 'Personal', icon: User },
              { id: 'education', label: isBn ? 'শিক্ষা' : 'Education', icon: GraduationCap },
              { id: 'experience', label: isBn ? 'অভিজ্ঞতা' : 'Experience', icon: Briefcase },
              { id: 'internship', label: isBn ? 'ইন্টার্নশিপ' : 'Internship', icon: Award },
              { id: 'skills', label: isBn ? 'দক্ষতা' : 'Skills', icon: Wrench },
              { id: 'additional', label: isBn ? 'অন্যান্য সেকশন' : 'Sections', icon: Layers },
              { id: 'customization', label: isBn ? 'ডিজাইন' : 'Design', icon: Palette },
            ].map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id as any)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Content Area with Scroll */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {activeSection === 'personal' && (
              <PersonalInfoForm
                info={cv.personalInfo}
                onChange={handleUpdatePersonalInfo}
                isBn={isBn}
                onOpenPhotoModal={() => setShowPhotoModal(true)}
                onOpenSignatureModal={() => setShowSignatureModal(true)}
              />
            )}

            {activeSection === 'education' && (
              <EducationForm
                items={cv.education}
                onChange={(edu) => setCv({ ...cv, education: edu })}
                isBn={isBn}
              />
            )}

            {activeSection === 'experience' && (
              <ExperienceForm
                items={cv.experience}
                onChange={(exp) => setCv({ ...cv, experience: exp })}
                isBn={isBn}
                onOpenAiHelper={(initialPrompt, onSelectText) =>
                  openAiHelperForField('improve_bullet', initialPrompt, onSelectText)
                }
              />
            )}

            {activeSection === 'internship' && (
              <InternshipForm
                items={cv.internships}
                onChange={(internships) => setCv({ ...cv, internships })}
                isBn={isBn}
              />
            )}

            {activeSection === 'skills' && (
              <SkillsForm
                categories={cv.skills}
                onChange={(skills) => setCv({ ...cv, skills })}
                isBn={isBn}
                onOpenAiHelper={(role, onSelectSkills) =>
                  openAiHelperForField('suggest_skills', role, onSelectSkills)
                }
              />
            )}

            {activeSection === 'additional' && (
              <AdditionalSectionsForm
                cv={cv}
                onChange={handleUpdateCv}
                isBn={isBn}
                onOpenAiHelper={(action, onSelectText) =>
                  openAiHelperForField(action, '', onSelectText)
                }
              />
            )}

            {activeSection === 'customization' && (
              <CustomizationPanel
                customization={cv.customization}
                onChange={(cust) => setCv({ ...cv, customization: cust })}
                isBn={isBn}
              />
            )}
          </div>
        </div>

        {/* Right Side: Real-time A4 Preview Board */}
        <div
          className={`flex-1 h-full overflow-hidden ${
            mobileTab === 'edit' ? 'hidden lg:block' : 'block'
          }`}
        >
          <A4PagePreview cv={cv} isBn={isBn} />
        </div>
      </div>

      {/* Photo Upload Modal */}
      {showPhotoModal && (
        <PhotoUploadModal
          photoUrl={cv.personalInfo.photoUrl}
          photoShape={cv.customization.photoShape}
          photoSize={cv.customization.photoSize}
          isBn={isBn}
          onSave={(photoUrl, shape, size) => {
            setCv({
              ...cv,
              personalInfo: { ...cv.personalInfo, photoUrl },
              customization: {
                ...cv.customization,
                photoShape: shape,
                photoSize: size,
              },
            });
          }}
          onClose={() => setShowPhotoModal(false)}
        />
      )}

      {/* Signature Upload Modal */}
      {showSignatureModal && (
        <SignatureUploadModal
          signatureUrl={cv.personalInfo.signatureUrl}
          showSignature={cv.declaration?.showSignature ?? true}
          isBn={isBn}
          onSave={(signatureUrl, showSignature) => {
            setCv({
              ...cv,
              personalInfo: { ...cv.personalInfo, signatureUrl },
              declaration: {
                text: cv.declaration?.text || '',
                place: cv.declaration?.place || 'Dhaka, Bangladesh',
                date: cv.declaration?.date || new Date().toLocaleDateString('en-GB'),
                showSignature,
              },
            });
          }}
          onClose={() => setShowSignatureModal(false)}
        />
      )}

      {/* ATS Checker Modal */}
      {showAtsModal && (
        <AtsCheckerModal cv={cv} isBn={isBn} onClose={() => setShowAtsModal(false)} />
      )}

      {/* AI Assistant Modal */}
      {showAiModal && (
        <AiAssistantModal
          initialAction={aiHelperConfig?.action || 'summary'}
          initialPrompt={aiHelperConfig?.prompt || ''}
          roleName={aiHelperConfig?.role || cv.personalInfo.professionalTitle}
          docLanguage={cv.documentLanguage}
          isBn={isBn}
          onApplyText={(text) => {
            if (aiHelperConfig?.onApply) {
              aiHelperConfig.onApply(text);
            } else {
              // Default to summary
              setCv({ ...cv, professionalSummary: text });
            }
          }}
          onClose={() => setShowAiModal(false)}
        />
      )}
    </div>
  );
};
