import React from 'react';
import { CvData } from '../../types/cv';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap
} from 'lucide-react';

interface Props {
  cv: CvData;
  pageNumber?: number;
  totalPages?: number;
}

export const TemplateRenderer: React.FC<Props> = ({ cv, pageNumber = 1, totalPages = 1 }) => {
  const { customization } = cv;
  const isBn = cv.documentLanguage === 'bn';

  const fontClass =
    customization.fontFamily === 'SolaimanLipi' || isBn
      ? 'font-bangla'
      : customization.fontFamily === 'Playfair Display'
      ? 'font-serif'
      : customization.fontFamily === 'Fira Code'
      ? 'font-mono'
      : 'font-english';

  const fontSizeClass =
    customization.fontSize === 'compact'
      ? 'text-xs leading-snug'
      : customization.fontSize === 'spacious'
      ? 'text-base leading-relaxed'
      : 'text-sm leading-normal';

  const photoBorderClass =
    customization.photoShape === 'circle'
      ? 'rounded-full'
      : customization.photoShape === 'rounded'
      ? 'rounded-xl'
      : 'rounded-none';

  // Common contact info icons
  const renderContactList = (layout: 'horizontal' | 'vertical' | 'grid', textColor = '#475569') => {
    const items = [
      cv.personalInfo.email && {
        icon: Mail,
        text: cv.personalInfo.email,
        href: `mailto:${cv.personalInfo.email}`,
      },
      cv.personalInfo.phone && {
        icon: Phone,
        text: cv.personalInfo.phone,
        href: `tel:${cv.personalInfo.phone}`,
      },
      cv.personalInfo.presentAddress && {
        icon: MapPin,
        text: cv.personalInfo.presentAddress,
      },
      cv.personalInfo.linkedIn && {
        icon: Linkedin,
        text: cv.personalInfo.linkedIn.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, ''),
        href: cv.personalInfo.linkedIn,
      },
      cv.personalInfo.github && {
        icon: Github,
        text: cv.personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, ''),
        href: cv.personalInfo.github,
      },
      cv.personalInfo.portfolio && {
        icon: Globe,
        text: cv.personalInfo.portfolio.replace(/^https?:\/\//, ''),
        href: cv.personalInfo.portfolio,
      },
    ].filter(Boolean) as { icon: any; text: string; href?: string }[];

    if (layout === 'horizontal') {
      return (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs" style={{ color: textColor }}>
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span key={idx} className="inline-flex items-center gap-1.5">
                {customization.showIcons && <Icon className="w-3.5 h-3.5 opacity-80 shrink-0" />}
                <span>{item.text}</span>
              </span>
            );
          })}
        </div>
      );
    }

    if (layout === 'grid') {
      return (
        <div className="grid grid-cols-2 gap-2 text-xs" style={{ color: textColor }}>
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 truncate">
                {customization.showIcons && <Icon className="w-3.5 h-3.5 opacity-80 shrink-0" />}
                <span className="truncate">{item.text}</span>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="flex flex-col space-y-1.5 text-xs" style={{ color: textColor }}>
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2">
              {customization.showIcons && <Icon className="w-3.5 h-3.5 opacity-80 shrink-0" />}
              <span className="break-all">{item.text}</span>
            </div>
          );
        })}
      </div>
    );
  };

  // Profile Photo component
  const renderPhoto = (size = customization.photoSize || 100) => {
    if (!cv.personalInfo.photoUrl) return null;
    return (
      <div
        className={`overflow-hidden shrink-0 shadow-sm border-2 border-white ${photoBorderClass}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img
          src={cv.personalInfo.photoUrl}
          alt={cv.personalInfo.fullName}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  // Signature component
  const renderSignature = () => {
    if (!cv.declaration?.showSignature) return null;
    return (
      <div className="mt-6 pt-4 flex justify-between items-end border-t border-slate-200 text-xs text-slate-600">
        <div>
          {cv.declaration?.date && <p><strong>{isBn ? 'তারিখ:' : 'Date:'}</strong> {cv.declaration.date}</p>}
          {cv.declaration?.place && <p><strong>{isBn ? 'স্থান:' : 'Place:'}</strong> {cv.declaration.place}</p>}
        </div>
        <div className="text-center">
          {cv.personalInfo.signatureUrl ? (
            <img
              src={cv.personalInfo.signatureUrl}
              alt="Signature"
              className="h-10 max-w-[140px] mx-auto object-contain mb-1"
            />
          ) : (
            <div className="h-8 border-b border-slate-400 w-36 mb-1"></div>
          )}
          <p className="font-semibold">{cv.personalInfo.fullName || (isBn ? 'স্বাক্ষর' : 'Signature')}</p>
        </div>
      </div>
    );
  };

  // Section Header Generator
  const renderSectionHeading = (title: string, style: 'banner' | 'underline' | 'pill' | 'minimal' = 'underline') => {
    if (style === 'banner') {
      return (
        <div
          className="py-1 px-2.5 rounded-sm font-semibold uppercase text-xs tracking-wider mb-2.5 text-white"
          style={{ backgroundColor: customization.primaryColor }}
        >
          {title}
        </div>
      );
    }
    if (style === 'pill') {
      return (
        <div
          className="inline-block px-3 py-0.5 rounded-full font-semibold uppercase text-xs tracking-wider mb-2"
          style={{ backgroundColor: customization.accentBg, color: customization.primaryColor }}
        >
          {title}
        </div>
      );
    }
    if (style === 'minimal') {
      return (
        <div className="mb-2">
          <h3
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: customization.headingColor }}
          >
            {title}
          </h3>
        </div>
      );
    }
    return (
      <div className="mb-2.5 border-b pb-1" style={{ borderColor: customization.primaryColor + '40' }}>
        <h3
          className="text-xs font-bold uppercase tracking-wider flex items-center justify-between"
          style={{ color: customization.primaryColor }}
        >
          <span>{title}</span>
          <span className="w-8 h-0.5 rounded-full" style={{ backgroundColor: customization.primaryColor }}></span>
        </h3>
      </div>
    );
  };

  // Common Sections Content
  const renderExperienceList = () => {
    if (!cv.experience || cv.experience.length === 0) return null;
    return (
      <div className="space-y-3">
        {cv.experience.map((exp) => (
          <div key={exp.id} className="relative">
            <div className="flex justify-between items-baseline">
              <h4 className="font-semibold text-slate-800 text-xs">{exp.jobTitle}</h4>
              <span className="text-[11px] text-slate-500 font-medium">
                {exp.startDate} – {exp.isCurrent ? (isBn ? 'বর্তমান' : 'Present') : exp.endDate}
              </span>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-600 mb-1">
              <span className="font-medium" style={{ color: customization.primaryColor }}>
                {exp.company}
              </span>
              {exp.location && <span className="text-slate-400">{exp.location}</span>}
            </div>
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-slate-600 text-[11px]">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            )}
            {exp.achievements && (
              <p className="mt-1 text-[11px] text-slate-700 italic bg-slate-50 p-1 rounded border-l-2" style={{ borderColor: customization.primaryColor }}>
                <strong>{isBn ? 'অর্জন:' : 'Achievement:'}</strong> {exp.achievements}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderEducationList = () => {
    if (!cv.education || cv.education.length === 0) return null;
    return (
      <div className="space-y-2.5">
        {cv.education.map((edu) => (
          <div key={edu.id}>
            <div className="flex justify-between items-baseline">
              <h4 className="font-semibold text-slate-800 text-xs">{edu.degree}</h4>
              <span className="text-[11px] text-slate-500">{edu.passingYear}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-medium">{edu.institution}</p>
            {(edu.departmentOrMajor || edu.result) && (
              <div className="flex justify-between text-[11px] text-slate-500 mt-0.5">
                {edu.departmentOrMajor && <span>{edu.departmentOrMajor}</span>}
                {edu.result && <span className="font-semibold text-slate-700">{edu.result}</span>}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderSkillsList = (style: 'chips' | 'bars' | 'bullets' = 'chips') => {
    if (!cv.skills || cv.skills.length === 0) return null;
    return (
      <div className="space-y-2">
        {cv.skills.map((cat) => (
          <div key={cat.id}>
            {cat.name && <h5 className="text-[11px] font-semibold text-slate-700 mb-1">{cat.name}</h5>}
            {style === 'chips' ? (
              <div className="flex flex-wrap gap-1">
                {cat.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] rounded font-medium border"
                    style={{
                      backgroundColor: customization.accentBg,
                      borderColor: customization.primaryColor + '30',
                      color: customization.primaryColor,
                    }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            ) : style === 'bars' ? (
              <div className="space-y-1">
                {cat.skills.map((s, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[10px] text-slate-600 mb-0.5">
                      <span>{s.name}</span>
                      {s.level && <span>{s.level}%</span>}
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${s.level || 85}%`, backgroundColor: customization.primaryColor }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {cat.skills.map((s) => s.name).join(' • ')}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderProjects = () => {
    if (!cv.projects || cv.projects.length === 0) return null;
    return (
      <div className="space-y-2.5">
        {cv.projects.map((proj) => (
          <div key={proj.id}>
            <div className="flex justify-between items-baseline">
              <h4 className="font-semibold text-slate-800 text-xs">
                {proj.title}
                {proj.role && <span className="font-normal text-slate-500 text-[10px]"> — {proj.role}</span>}
              </h4>
              {proj.link && (
                <span className="text-[10px] text-blue-600 underline truncate max-w-[150px]">{proj.link}</span>
              )}
            </div>
            {proj.technologies && (
              <p className="text-[10px] font-mono text-slate-500 mb-0.5">{proj.technologies}</p>
            )}
            <p className="text-[11px] text-slate-600 leading-relaxed">{proj.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderReferences = () => {
    if (!cv.references || cv.references.length === 0) return null;
    return (
      <div className="grid grid-cols-2 gap-3">
        {cv.references.map((ref) => (
          <div key={ref.id} className="p-2 rounded bg-slate-50/70 border border-slate-200/60 text-[11px]">
            <h5 className="font-bold text-slate-800">{ref.name}</h5>
            <p className="text-slate-600">{ref.designation}</p>
            <p className="text-slate-500 font-medium">{ref.organization}</p>
            <p className="text-slate-600 mt-1">{ref.phone}</p>
            <p className="text-slate-500">{ref.email}</p>
          </div>
        ))}
      </div>
    );
  };

  // -------------------------------------------------------------
  // TEMPLATE 1: Modern Professional (Top Banner + 2 Columns)
  // -------------------------------------------------------------
  if (cv.templateId === 'modern-professional') {
    return (
      <div className={`a4-page p-8 ${fontClass} ${fontSizeClass} flex flex-col justify-between`}>
        <div>
          {/* Header */}
          <div
            className="p-6 rounded-xl text-white mb-6 flex justify-between items-center"
            style={{ backgroundColor: customization.primaryColor }}
          >
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight">{cv.personalInfo.fullName}</h1>
              <p className="text-sm font-medium opacity-90">{cv.personalInfo.professionalTitle}</p>
              <div className="pt-2">{renderContactList('horizontal', 'rgba(255,255,255,0.9)')}</div>
            </div>
            {renderPhoto(90)}
          </div>

          {/* Body 2 columns */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 space-y-5">
              {cv.professionalSummary && (
                <div>
                  {renderSectionHeading(isBn ? 'পেশাগত সারসংক্ষেপ' : 'Professional Summary')}
                  <p className="text-slate-600 text-xs leading-relaxed">{cv.professionalSummary}</p>
                </div>
              )}
              {cv.careerObjective && !cv.professionalSummary && (
                <div>
                  {renderSectionHeading(isBn ? 'ক্যারিয়ার অবজেক্টিভ' : 'Career Objective')}
                  <p className="text-slate-600 text-xs leading-relaxed">{cv.careerObjective}</p>
                </div>
              )}
              {cv.experience.length > 0 && (
                <div>
                  {renderSectionHeading(isBn ? 'কাজের অভিজ্ঞতা' : 'Work Experience')}
                  {renderExperienceList()}
                </div>
              )}
              {cv.projects.length > 0 && (
                <div>
                  {renderSectionHeading(isBn ? 'প্রজেক্ট' : 'Key Projects')}
                  {renderProjects()}
                </div>
              )}
            </div>

            <div className="col-span-4 space-y-5 border-l border-slate-100 pl-4">
              <div>
                {renderSectionHeading(isBn ? 'শিক্ষাগত যোগ্যতা' : 'Education')}
                {renderEducationList()}
              </div>
              <div>
                {renderSectionHeading(isBn ? 'দক্ষতাসমূহ' : 'Skills & Tools')}
                {renderSkillsList('chips')}
              </div>
              {cv.certifications.length > 0 && (
                <div>
                  {renderSectionHeading(isBn ? 'প্রফেশনাল সনদ' : 'Certifications')}
                  <div className="space-y-1.5 text-[11px]">
                    {cv.certifications.map((c) => (
                      <div key={c.id}>
                        <p className="font-semibold text-slate-800">{c.name}</p>
                        <p className="text-slate-500">{c.issuer} • {c.issueDate}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {cv.references.length > 0 && (
                <div>
                  {renderSectionHeading(isBn ? 'রেফারেন্স' : 'References')}
                  <div className="space-y-2 text-[10px]">
                    {cv.references.slice(0, 2).map((r) => (
                      <div key={r.id}>
                        <p className="font-bold text-slate-800">{r.name}</p>
                        <p className="text-slate-600">{r.designation}, {r.organization}</p>
                        <p className="text-slate-500">{r.email}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {renderSignature()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // TEMPLATE 2: Minimalist Clean (Typography & Space)
  // -------------------------------------------------------------
  if (cv.templateId === 'minimalist') {
    return (
      <div className={`a4-page p-10 ${fontClass} ${fontSizeClass} flex flex-col justify-between`}>
        <div>
          <div className="border-b pb-4 mb-6">
            <h1 className="text-3xl font-extralight tracking-tight text-slate-900 mb-1">
              {cv.personalInfo.fullName}
            </h1>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-3">
              {cv.personalInfo.professionalTitle}
            </p>
            {renderContactList('horizontal', '#64748b')}
          </div>

          <div className="space-y-6">
            {(cv.professionalSummary || cv.careerObjective) && (
              <div>
                {renderSectionHeading(isBn ? 'সংক্ষিপ্ত বিবরণ' : 'About Me', 'minimal')}
                <p className="text-slate-600 text-xs leading-relaxed max-w-2xl">
                  {cv.professionalSummary || cv.careerObjective}
                </p>
              </div>
            )}

            {cv.experience.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'কাজের অভিজ্ঞতা' : 'Experience', 'minimal')}
                {renderExperienceList()}
              </div>
            )}

            <div className="grid grid-cols-2 gap-8">
              <div>
                {renderSectionHeading(isBn ? 'শিক্ষা' : 'Education', 'minimal')}
                {renderEducationList()}
              </div>
              <div>
                {renderSectionHeading(isBn ? 'দক্ষতা' : 'Skills', 'minimal')}
                {renderSkillsList('bullets')}
              </div>
            </div>

            {cv.projects.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'প্রজেক্ট' : 'Selected Projects', 'minimal')}
                {renderProjects()}
              </div>
            )}
          </div>
        </div>

        {renderSignature()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // TEMPLATE 3: Corporate Structured (Navy & Card Blocks)
  // -------------------------------------------------------------
  if (cv.templateId === 'corporate') {
    return (
      <div className={`a4-page p-8 ${fontClass} ${fontSizeClass} flex flex-col justify-between`}>
        <div>
          <div className="flex justify-between items-center border-b-2 pb-4 mb-5" style={{ borderColor: customization.primaryColor }}>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
                {cv.personalInfo.fullName}
              </h1>
              <p className="text-sm font-semibold" style={{ color: customization.primaryColor }}>
                {cv.personalInfo.professionalTitle}
              </p>
              <div className="pt-1">{renderContactList('horizontal')}</div>
            </div>
            {renderPhoto(95)}
          </div>

          <div className="space-y-5">
            {cv.professionalSummary && (
              <div className="p-3 bg-slate-50 rounded border-l-4" style={{ borderColor: customization.primaryColor }}>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: customization.primaryColor }}>
                  {isBn ? 'পেশাগত সারসংক্ষেপ' : 'Executive Overview'}
                </h4>
                <p className="text-slate-700 text-xs leading-relaxed">{cv.professionalSummary}</p>
              </div>
            )}

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8 space-y-4">
                {cv.experience.length > 0 && (
                  <div>
                    {renderSectionHeading(isBn ? 'কর্ম অভিজ্ঞতা' : 'Professional Experience', 'banner')}
                    {renderExperienceList()}
                  </div>
                )}
                {cv.projects.length > 0 && (
                  <div>
                    {renderSectionHeading(isBn ? 'প্রধান প্রজেক্ট' : 'Key Projects & Deliverables', 'banner')}
                    {renderProjects()}
                  </div>
                )}
              </div>

              <div className="col-span-4 space-y-4">
                <div>
                  {renderSectionHeading(isBn ? 'শিক্ষাগত যোগ্যতা' : 'Academic Credentials', 'banner')}
                  {renderEducationList()}
                </div>
                <div>
                  {renderSectionHeading(isBn ? 'মূল দক্ষতাসমূহ' : 'Core Competencies', 'banner')}
                  {renderSkillsList('bars')}
                </div>
                {cv.certifications.length > 0 && (
                  <div>
                    {renderSectionHeading(isBn ? 'প্রফেশনাল সনদ' : 'Certifications', 'banner')}
                    <div className="space-y-2 text-[11px]">
                      {cv.certifications.map((c) => (
                        <div key={c.id} className="p-1.5 bg-slate-50 border rounded">
                          <p className="font-semibold text-slate-800">{c.name}</p>
                          <p className="text-slate-500 text-[10px]">{c.issuer} ({c.issueDate})</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {renderSignature()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // TEMPLATE 4: Executive Leadership (Charcoal & Gold Elegance)
  // -------------------------------------------------------------
  if (cv.templateId === 'executive') {
    return (
      <div className={`a4-page p-10 ${fontClass} ${fontSizeClass} flex flex-col justify-between`}>
        <div>
          <div className="text-center border-b pb-5 mb-6">
            {renderPhoto(90) && (
              <div className="flex justify-center mb-3">{renderPhoto(90)}</div>
            )}
            <h1 className="text-2xl font-serif font-bold tracking-wider uppercase text-slate-900 mb-1">
              {cv.personalInfo.fullName}
            </h1>
            <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: customization.primaryColor }}>
              {cv.personalInfo.professionalTitle}
            </p>
            <div className="flex justify-center mt-3">{renderContactList('horizontal', '#64748b')}</div>
          </div>

          <div className="space-y-6">
            {cv.professionalSummary && (
              <div className="text-center max-w-xl mx-auto italic text-slate-700 text-xs leading-relaxed border-l-2 border-r-2 px-4" style={{ borderColor: customization.primaryColor }}>
                "{cv.professionalSummary}"
              </div>
            )}

            <div>
              {renderSectionHeading(isBn ? 'নেতৃত্ব ও কর্মদক্ষতা' : 'Executive Career Milestones', 'minimal')}
              {renderExperienceList()}
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                {renderSectionHeading(isBn ? 'উচ্চশিক্ষা ও একাডেমি' : 'Education & Credentials', 'minimal')}
                {renderEducationList()}
              </div>
              <div>
                {renderSectionHeading(isBn ? 'কৌশলগত দক্ষতা' : 'Strategic Competencies', 'minimal')}
                {renderSkillsList('chips')}
              </div>
            </div>

            {cv.references.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'সম্মানীয় রেফারেন্স' : 'Executive References', 'minimal')}
                {renderReferences()}
              </div>
            )}
          </div>
        </div>

        {renderSignature()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // TEMPLATE 5: ATS Standard 100 (Clean Single-Column Text Flow)
  // -------------------------------------------------------------
  if (cv.templateId === 'ats-friendly') {
    return (
      <div className={`a4-page p-8 font-english text-xs leading-relaxed text-black flex flex-col justify-between`}>
        <div>
          <div className="text-center border-b-2 border-black pb-3 mb-4">
            <h1 className="text-xl font-bold uppercase tracking-wider text-black">
              {cv.personalInfo.fullName}
            </h1>
            <p className="text-xs font-semibold text-black mt-0.5">
              {cv.personalInfo.professionalTitle}
            </p>
            <p className="text-[11px] text-black mt-1">
              {[cv.personalInfo.presentAddress, cv.personalInfo.phone, cv.personalInfo.email, cv.personalInfo.linkedIn]
                .filter(Boolean)
                .join(' | ')}
            </p>
          </div>

          <div className="space-y-4">
            {(cv.professionalSummary || cv.careerObjective) && (
              <div>
                <h3 className="font-bold uppercase text-xs border-b border-black pb-0.5 mb-1.5">
                  {isBn ? 'পেশাগত উদ্দেশ্য' : 'PROFESSIONAL SUMMARY'}
                </h3>
                <p className="text-[11px] text-justify">{cv.professionalSummary || cv.careerObjective}</p>
              </div>
            )}

            {cv.experience.length > 0 && (
              <div>
                <h3 className="font-bold uppercase text-xs border-b border-black pb-0.5 mb-2">
                  {isBn ? 'কাজের অভিজ্ঞতা' : 'WORK EXPERIENCE'}
                </h3>
                <div className="space-y-2.5">
                  {cv.experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between font-bold text-[11px]">
                        <span>{exp.jobTitle} — {exp.company}</span>
                        <span>{exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}</span>
                      </div>
                      {exp.location && <p className="italic text-[10px] text-gray-700">{exp.location}</p>}
                      <ul className="list-disc ml-4 mt-1 space-y-0.5 text-[11px]">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {cv.education.length > 0 && (
              <div>
                <h3 className="font-bold uppercase text-xs border-b border-black pb-0.5 mb-1.5">
                  {isBn ? 'শিক্ষাগত যোগ্যতা' : 'EDUCATION'}
                </h3>
                <div className="space-y-1.5">
                  {cv.education.map((edu) => (
                    <div key={edu.id} className="flex justify-between text-[11px]">
                      <div>
                        <span className="font-bold">{edu.degree}</span>, {edu.institution}
                        {edu.departmentOrMajor && <span className="italic"> ({edu.departmentOrMajor})</span>}
                      </div>
                      <div className="text-right font-medium">
                        {edu.result && <span>{edu.result} | </span>}
                        <span>{edu.passingYear}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {cv.skills.length > 0 && (
              <div>
                <h3 className="font-bold uppercase text-xs border-b border-black pb-0.5 mb-1">
                  {isBn ? 'দক্ষতাসমূহ' : 'TECHNICAL & PROFESSIONAL SKILLS'}
                </h3>
                <div className="text-[11px] space-y-0.5">
                  {cv.skills.map((c) => (
                    <p key={c.id}>
                      <strong>{c.name}:</strong> {c.skills.map((s) => s.name).join(', ')}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {renderSignature()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // TEMPLATE 6: Modern Sidebar (Deep Left Column & Bright Body)
  // -------------------------------------------------------------
  if (cv.templateId === 'modern-sidebar' || cv.templateId === 'creative') {
    return (
      <div className={`a4-page ${fontClass} ${fontSizeClass} flex flex-row min-h-[297mm]`}>
        {/* Left Sidebar */}
        <div
          className="w-72 p-6 text-white shrink-0 flex flex-col justify-between"
          style={{ backgroundColor: customization.primaryColor }}
        >
          <div className="space-y-6">
            <div className="text-center">
              {renderPhoto(110) && (
                <div className="flex justify-center mb-3">{renderPhoto(110)}</div>
              )}
              <h2 className="text-lg font-bold leading-tight">{cv.personalInfo.fullName}</h2>
              <p className="text-xs opacity-90 mt-1">{cv.personalInfo.professionalTitle}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold border-b border-white/20 pb-1 mb-2">
                {isBn ? 'যোগাযোগ' : 'Contact'}
              </h4>
              {renderContactList('vertical', 'rgba(255,255,255,0.95)')}
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold border-b border-white/20 pb-1 mb-2">
                {isBn ? 'দক্ষতাসমূহ' : 'Key Skills'}
              </h4>
              <div className="space-y-2">
                {cv.skills.flatMap((cat) => cat.skills).slice(0, 8).map((s, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between text-[10px] mb-0.5">
                      <span>{s.name}</span>
                    </div>
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: `${s.level || 85}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {cv.education.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold border-b border-white/20 pb-1 mb-2">
                  {isBn ? 'শিক্ষা' : 'Education'}
                </h4>
                <div className="space-y-2 text-[11px]">
                  {cv.education.map((edu) => (
                    <div key={edu.id} className="opacity-95">
                      <p className="font-semibold">{edu.degree}</p>
                      <p className="text-[10px] opacity-80">{edu.institution} ({edu.passingYear})</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-[10px] opacity-75 pt-4 text-center">
            CV by Rábbi
          </div>
        </div>

        {/* Right Main Body */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div className="space-y-5">
            {(cv.professionalSummary || cv.careerObjective) && (
              <div>
                {renderSectionHeading(isBn ? 'প্রোফাইল সারসংক্ষেপ' : 'Professional Profile')}
                <p className="text-slate-600 text-xs leading-relaxed">
                  {cv.professionalSummary || cv.careerObjective}
                </p>
              </div>
            )}

            {cv.experience.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'কাজের অভিজ্ঞতা' : 'Experience')}
                {renderExperienceList()}
              </div>
            )}

            {cv.projects.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'প্রজেক্ট' : 'Projects')}
                {renderProjects()}
              </div>
            )}

            {cv.certifications.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'সনদসমূহ' : 'Certifications')}
                <div className="space-y-1 text-xs">
                  {cv.certifications.map((c) => (
                    <p key={c.id}>
                      <strong>{c.name}</strong> — {c.issuer} ({c.issueDate})
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {renderSignature()}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // TEMPLATE 7: Government Job BD Official Format
  // -------------------------------------------------------------
  if (cv.templateId === 'government-job') {
    return (
      <div className={`a4-page p-8 ${fontClass} ${fontSizeClass} flex flex-col justify-between text-slate-900`}>
        <div>
          {/* Header */}
          <div className="text-center border-b pb-4 mb-4 relative">
            {renderPhoto(80) && (
              <div className="absolute top-0 right-0">{renderPhoto(80)}</div>
            )}
            <h1 className="text-xl font-bold uppercase tracking-wide">CURRICULUM VITAE</h1>
            <p className="text-xs uppercase font-semibold text-slate-700">{isBn ? 'জীবনবৃত্তান্ত' : 'OF'}</p>
            <h2 className="text-lg font-bold text-slate-900 mt-1">{cv.personalInfo.fullName}</h2>
            <p className="text-xs text-slate-600">{cv.personalInfo.presentAddress}</p>
            <p className="text-xs text-slate-600">Mobile: {cv.personalInfo.phone} | Email: {cv.personalInfo.email}</p>
          </div>

          <div className="space-y-4">
            {/* Career Objective */}
            {cv.careerObjective && (
              <div>
                <h4 className="font-bold text-xs uppercase mb-1 underline">
                  {isBn ? 'ক্যারিয়ার অবজেক্টিভ:' : '01. CAREER OBJECTIVE:'}
                </h4>
                <p className="text-xs leading-relaxed text-justify">{cv.careerObjective}</p>
              </div>
            )}

            {/* Educational Qualification Table */}
            <div>
              <h4 className="font-bold text-xs uppercase mb-1.5 underline">
                {isBn ? 'শিক্ষাগত যোগ্যতা:' : '02. EDUCATIONAL QUALIFICATIONS:'}
              </h4>
              <table className="w-full border-collapse border border-slate-400 text-[11px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-400 p-1.5 text-left">{isBn ? 'ডিগ্রির নাম' : 'Degree / Examination'}</th>
                    <th className="border border-slate-400 p-1.5 text-left">{isBn ? 'বোর্ড / বিশ্ববিদ্যালয়' : 'Board / University'}</th>
                    <th className="border border-slate-400 p-1.5 text-left">{isBn ? 'গ্রুপ / বিভাগ' : 'Group / Subject'}</th>
                    <th className="border border-slate-400 p-1.5 text-center">{isBn ? 'পাসের বছর' : 'Passing Year'}</th>
                    <th className="border border-slate-400 p-1.5 text-center">{isBn ? 'ফলাফল' : 'Result (CGPA/GPA)'}</th>
                  </tr>
                </thead>
                <tbody>
                  {cv.education.map((edu, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="border border-slate-400 p-1.5 font-medium">{edu.degree}</td>
                      <td className="border border-slate-400 p-1.5">{edu.boardOrUniversity || edu.institution}</td>
                      <td className="border border-slate-400 p-1.5">{edu.departmentOrMajor || 'N/A'}</td>
                      <td className="border border-slate-400 p-1.5 text-center">{edu.passingYear}</td>
                      <td className="border border-slate-400 p-1.5 text-center font-semibold">{edu.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Experience */}
            {cv.experience.length > 0 && (
              <div>
                <h4 className="font-bold text-xs uppercase mb-1.5 underline">
                  {isBn ? 'কাজের অভিজ্ঞতা:' : '03. WORKING EXPERIENCE:'}
                </h4>
                {renderExperienceList()}
              </div>
            )}

            {/* Personal Details Table */}
            <div>
              <h4 className="font-bold text-xs uppercase mb-1.5 underline">
                {isBn ? 'ব্যক্তিগত তথ্যাবলি:' : '04. PERSONAL DETAILS:'}
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs border p-3 rounded bg-slate-50/50">
                <p><strong>{isBn ? 'পিতার নাম:' : "Father's Name:"}</strong> {cv.personalInfo.fatherName || 'Late Md. Rafiqul'}</p>
                <p><strong>{isBn ? 'মাতার নাম:' : "Mother's Name:"}</strong> {cv.personalInfo.motherName || 'Nasreen Begum'}</p>
                <p><strong>{isBn ? 'স্থায়ী ঠিকানা:' : 'Permanent Address:'}</strong> {cv.personalInfo.permanentAddress || cv.personalInfo.presentAddress}</p>
                <p><strong>{isBn ? 'জাতীয়তা:' : 'Nationality:'}</strong> {cv.personalInfo.nationality || 'Bangladeshi'}</p>
                <p><strong>{isBn ? 'জন্ম তারিখ:' : 'Date of Birth:'}</strong> {cv.personalInfo.dateOfBirth || '15-10-1996'}</p>
                <p><strong>{isBn ? 'ধর্ম:' : 'Religion:'}</strong> {cv.personalInfo.religion || 'Islam'}</p>
                <p><strong>{isBn ? 'বৈবাহিক অবস্থা:' : 'Marital Status:'}</strong> {cv.personalInfo.maritalStatus || 'Single'}</p>
                <p><strong>{isBn ? 'জাতীয় পরিচয়পত্র / NID:' : 'National ID No:'}</strong> {cv.personalInfo.nidOrPassport || '1996123456789'}</p>
              </div>
            </div>

            {/* Declaration */}
            <div className="pt-2 text-xs text-justify">
              <p className="italic">
                "{cv.declaration?.text || 'I hereby declare that all the information furnished above is true and correct to the best of my knowledge.'}"
              </p>
            </div>
          </div>
        </div>

        {renderSignature()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // DEFAULT / GENERAL TEMPLATE FALLBACK: High Quality Two-Column Grid
  // (Handles Fresh Graduate, Academic, Technical, Medical, Business, Classic, Two-Column, Clean-Single)
  // -------------------------------------------------------------
  return (
    <div className={`a4-page p-8 ${fontClass} ${fontSizeClass} flex flex-col justify-between`}>
      <div>
        {/* Top Header */}
        <div className="flex justify-between items-start border-b pb-4 mb-5">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {cv.personalInfo.fullName}
            </h1>
            <p className="text-sm font-semibold" style={{ color: customization.primaryColor }}>
              {cv.personalInfo.professionalTitle}
            </p>
            <div className="pt-1">{renderContactList('horizontal')}</div>
          </div>
          {renderPhoto()}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 space-y-4">
            {(cv.professionalSummary || cv.careerObjective) && (
              <div>
                {renderSectionHeading(isBn ? 'পেশাগত সারসংক্ষেপ' : 'Professional Summary')}
                <p className="text-slate-600 text-xs leading-relaxed">
                  {cv.professionalSummary || cv.careerObjective}
                </p>
              </div>
            )}

            {cv.experience.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'কর্ম অভিজ্ঞতা' : 'Experience')}
                {renderExperienceList()}
              </div>
            )}

            {cv.internships.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'ইন্টার্নশিপ' : 'Internship Experience')}
                <div className="space-y-2 text-xs">
                  {cv.internships.map((int) => (
                    <div key={int.id}>
                      <div className="flex justify-between font-semibold text-slate-800">
                        <span>{int.position} — {int.organization}</span>
                        <span className="text-slate-500 text-[11px]">{int.duration}</span>
                      </div>
                      <p className="text-slate-600 text-[11px] mt-0.5">{int.responsibilities.join(' • ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {cv.projects.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'প্রজেক্ট' : 'Projects')}
                {renderProjects()}
              </div>
            )}
          </div>

          <div className="col-span-4 space-y-4 border-l border-slate-100 pl-4">
            <div>
              {renderSectionHeading(isBn ? 'শিক্ষাগত যোগ্যতা' : 'Education')}
              {renderEducationList()}
            </div>

            <div>
              {renderSectionHeading(isBn ? 'দক্ষতাসমূহ' : 'Skills')}
              {renderSkillsList('chips')}
            </div>

            {cv.certifications.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'সনদপত্র' : 'Certifications')}
                <div className="space-y-1.5 text-[11px]">
                  {cv.certifications.map((c) => (
                    <div key={c.id}>
                      <p className="font-semibold text-slate-800">{c.name}</p>
                      <p className="text-slate-500">{c.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {cv.references.length > 0 && (
              <div>
                {renderSectionHeading(isBn ? 'রেফারেন্স' : 'References')}
                <div className="space-y-2 text-[10px]">
                  {cv.references.map((r) => (
                    <div key={r.id}>
                      <p className="font-bold text-slate-800">{r.name}</p>
                      <p className="text-slate-600">{r.designation}, {r.organization}</p>
                      <p className="text-slate-500">{r.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {renderSignature()}
    </div>
  );
};
