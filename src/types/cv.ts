export type Language = 'en' | 'bn';

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  boardOrUniversity?: string;
  departmentOrMajor?: string;
  passingYear: string;
  result: string; // e.g. CGPA 3.82, GPA 5.00, First Class
  scale?: string; // e.g. 4.00, 5.00
  achievements?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  jobTitle: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Freelance' | 'Internship' | string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  responsibilities: string[];
  achievements?: string;
}

export interface InternshipItem {
  id: string;
  organization: string;
  position: string;
  department?: string;
  duration?: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  learningOutcomes?: string;
  supervisor?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level?: number }[]; // level 1-5 or 1-100
}

export interface ProjectItem {
  id: string;
  title: string;
  role?: string;
  technologies?: string;
  link?: string;
  github?: string;
  description: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  designation: string;
  organization: string;
  email: string;
  phone: string;
  relationship?: string;
}

export interface CustomSectionItem {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
}

export interface CustomSection {
  id: string;
  title: string;
  items: CustomSectionItem[];
}

export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  presentAddress: string;
  permanentAddress?: string;
  nationality?: string;
  fatherName?: string;
  motherName?: string;
  dateOfBirth?: string;
  gender?: string;
  maritalStatus?: string;
  religion?: string;
  bloodGroup?: string;
  nidOrPassport?: string;
  linkedIn?: string;
  github?: string;
  portfolio?: string;
  photoUrl?: string;
  signatureUrl?: string;
}

export interface CvCustomization {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  headingColor: string;
  accentBg: string;
  fontFamily: 'SolaimanLipi' | 'Inter' | 'Roboto' | 'Playfair Display' | 'Fira Code';
  fontSize: 'compact' | 'normal' | 'spacious';
  lineSpacing: 'tight' | 'normal' | 'relaxed';
  pageMargin: 'compact' | 'normal' | 'relaxed';
  photoShape: 'circle' | 'square' | 'rounded';
  photoSize: number; // in px, e.g. 96, 120, 140
  showIcons: boolean;
  showDividers: boolean;
  dividerStyle: 'solid' | 'dashed' | 'double' | 'gradient';
  headerAlignment: 'left' | 'center' | 'split';
}

export type SectionType =
  | 'objective'
  | 'summary'
  | 'experience'
  | 'internship'
  | 'education'
  | 'skills'
  | 'projects'
  | 'certifications'
  | 'training'
  | 'achievements'
  | 'volunteer'
  | 'extracurricular'
  | 'publications'
  | 'references'
  | 'custom';

export interface SectionMeta {
  id: SectionType | string;
  title: string;
  enabled: boolean;
  order: number;
}

export interface CvData {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  documentLanguage: Language;
  templateId: string;
  categoryId?: string;
  personalInfo: PersonalInfo;
  careerObjective: string;
  professionalSummary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  internships: InternshipItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  training: { id: string; title: string; institute: string; duration: string; year: string }[];
  achievements: { id: string; title: string; organization?: string; year?: string; description?: string }[];
  volunteer: { id: string; role: string; organization: string; period: string; details: string }[];
  extracurricular: { id: string; activity: string; role?: string; details?: string }[];
  publications: { id: string; title: string; publisher: string; year: string; link?: string }[];
  references: ReferenceItem[];
  customSections: CustomSection[];
  sectionsMeta: SectionMeta[];
  customization: CvCustomization;
  declaration?: {
    text: string;
    place?: string;
    date?: string;
    showSignature: boolean;
  };
}

export interface CvCategory {
  id: string;
  titleEn: string;
  titleBn: string;
  group: 'education' | 'career' | 'profession';
  icon: string;
  descriptionEn: string;
  descriptionBn: string;
  candidateProfileEn: string;
  candidateProfileBn: string;
  recommendedTemplates: string[];
  recommendedSections: string[];
  tipsEn: string[];
  tipsBn: string[];
}

export interface TemplateDefinition {
  id: string;
  nameEn: string;
  nameBn: string;
  category: string;
  descriptionEn: string;
  descriptionBn: string;
  tags: string[];
  isAtsOptimized: boolean;
  previewColor: string;
  layoutType: 'sidebar' | 'single' | 'two-column' | 'academic' | 'executive' | 'modern' | 'minimalist' | 'classic' | 'creative' | 'corporate';
}
