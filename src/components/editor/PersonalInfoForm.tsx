import React, { useState } from 'react';
import { PersonalInfo } from '../../types/cv';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Github, ChevronDown, ChevronUp, Image, PenTool } from 'lucide-react';

interface Props {
  info: PersonalInfo;
  onChange: (info: PersonalInfo) => void;
  isBn: boolean;
  onOpenPhotoModal: () => void;
  onOpenSignatureModal: () => void;
}

export const PersonalInfoForm: React.FC<Props> = ({
  info,
  onChange,
  isBn,
  onOpenPhotoModal,
  onOpenSignatureModal,
}) => {
  const [showOptional, setShowOptional] = useState<boolean>(false);

  const updateField = (field: keyof PersonalInfo, value: string) => {
    onChange({
      ...info,
      [field]: value,
    });
  };

  return (
    <div className="space-y-4">
      {/* Photo & Signature Quick Banner */}
      <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
        <div className="flex items-center space-x-3">
          {info.photoUrl ? (
            <img
              src={info.photoUrl}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-slate-300"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
              <User className="w-6 h-6" />
            </div>
          )}
          <div>
            <p className="text-xs font-semibold text-slate-800">
              {isBn ? 'প্রোফাইল ছবি ও স্বাক্ষর' : 'Profile Photo & Signature'}
            </p>
            <p className="text-[11px] text-slate-500">
              {info.photoUrl ? (isBn ? 'ছবি যুক্ত আছে' : 'Photo uploaded') : (isBn ? 'ছবি যুক্ত করুন' : 'Add professional photo')}
            </p>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={onOpenPhotoModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <Image className="w-3.5 h-3.5 text-indigo-600" />
            <span>{isBn ? 'ছবি' : 'Photo'}</span>
          </button>
          <button
            type="button"
            onClick={onOpenSignatureModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <PenTool className="w-3.5 h-3.5 text-indigo-600" />
            <span>{isBn ? 'স্বাক্ষর' : 'Signature'}</span>
          </button>
        </div>
      </div>

      {/* Core Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBn ? 'পূর্ণ নাম' : 'Full Name'} *
          </label>
          <input
            type="text"
            value={info.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder={isBn ? 'উদা: তানভীর আহমেদ' : 'e.g. Tanvir Ahmed'}
            className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBn ? 'পেশাগত পদবি' : 'Professional Title'} *
          </label>
          <input
            type="text"
            value={info.professionalTitle}
            onChange={(e) => updateField('professionalTitle', e.target.value)}
            placeholder={isBn ? 'উদা: সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার' : 'e.g. Senior Software Engineer'}
            className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBn ? 'ইমেইল অ্যাড্রেস' : 'Email Address'} *
          </label>
          <div className="relative">
            <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="email"
              value={info.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="name@gmail.com"
              className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBn ? 'ফোন নম্বর' : 'Phone Number'} *
          </label>
          <div className="relative">
            <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="tel"
              value={info.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="+880 1712-345678"
              className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBn ? 'বর্তমান ঠিকানা (শহর ও জেলা)' : 'Present Address'} *
          </label>
          <div className="relative">
            <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={info.presentAddress}
              onChange={(e) => updateField('presentAddress', e.target.value)}
              placeholder={isBn ? 'বাড়ি ৪২, রোড ১১, বনানী, ঢাকা-১২১৩' : 'House 42, Road 11, Banani, Dhaka-1213'}
              className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Social and Portfolio links */}
      <div className="pt-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-2">
          {isBn ? 'প্রোফাইল ও ওয়েবসাইট লিঙ্কসমূহ' : 'Profiles & Portfolio Links'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative">
            <Linkedin className="w-3.5 h-3.5 text-blue-600 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={info.linkedIn || ''}
              onChange={(e) => updateField('linkedIn', e.target.value)}
              placeholder="LinkedIn URL"
              className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>
          <div className="relative">
            <Github className="w-3.5 h-3.5 text-slate-700 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={info.github || ''}
              onChange={(e) => updateField('github', e.target.value)}
              placeholder="GitHub URL"
              className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>
          <div className="relative">
            <Globe className="w-3.5 h-3.5 text-emerald-600 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={info.portfolio || ''}
              onChange={(e) => updateField('portfolio', e.target.value)}
              placeholder="Portfolio / Website"
              className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Toggle Bangladeshi & Official Demographics (BD Govt & Formal Jobs) */}
      <div className="pt-2 border-t border-slate-200">
        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          className="flex items-center justify-between w-full p-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 transition-colors"
        >
          <span>
            {isBn
              ? 'পারিবারিক ও অন্যান্য তথ্যাবলি (সরকারি ও করপোরেট চাকরির জন্য)'
              : 'Family & Official Demographics (For BD Govt & Formal Jobs)'}
          </span>
          {showOptional ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
        </button>

        {showOptional && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3 p-3 bg-slate-50/70 border border-slate-200 rounded-xl">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'পিতার নাম' : "Father's Name"}
              </label>
              <input
                type="text"
                value={info.fatherName || ''}
                onChange={(e) => updateField('fatherName', e.target.value)}
                placeholder={isBn ? 'পিতার নাম' : "Father's Name"}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'মাতার নাম' : "Mother's Name"}
              </label>
              <input
                type="text"
                value={info.motherName || ''}
                onChange={(e) => updateField('motherName', e.target.value)}
                placeholder={isBn ? 'মাতার নাম' : "Mother's Name"}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'স্থায়ী ঠিকানা' : 'Permanent Address'}
              </label>
              <input
                type="text"
                value={info.permanentAddress || ''}
                onChange={(e) => updateField('permanentAddress', e.target.value)}
                placeholder={isBn ? 'গ্রাম, ডাকঘর, থানা ও জেলা' : 'Village, P.O, Upazila & District'}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'জন্ম তারিখ' : 'Date of Birth'}
              </label>
              <input
                type="date"
                value={info.dateOfBirth || ''}
                onChange={(e) => updateField('dateOfBirth', e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'জাতীয়তা' : 'Nationality'}
              </label>
              <input
                type="text"
                value={info.nationality || 'Bangladeshi'}
                onChange={(e) => updateField('nationality', e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'ধর্ম' : 'Religion'}
              </label>
              <input
                type="text"
                value={info.religion || ''}
                onChange={(e) => updateField('religion', e.target.value)}
                placeholder={isBn ? 'উদা: ইসলাম, হিন্দু' : 'e.g. Islam, Hinduism'}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'বৈবাহিক অবস্থা' : 'Marital Status'}
              </label>
              <select
                value={info.maritalStatus || ''}
                onChange={(e) => updateField('maritalStatus', e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              >
                <option value="">{isBn ? 'নির্বাচন করুন' : 'Select Status'}</option>
                <option value="Single">{isBn ? 'অবিবাহিত (Single)' : 'Single'}</option>
                <option value="Married">{isBn ? 'বিবাহিত (Married)' : 'Married'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'জাতীয় পরিচয়পত্র / NID' : 'National ID (NID)'}
              </label>
              <input
                type="text"
                value={info.nidOrPassport || ''}
                onChange={(e) => updateField('nidOrPassport', e.target.value)}
                placeholder="NID Number"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBn ? 'রক্তের গ্রুপ' : 'Blood Group'}
              </label>
              <select
                value={info.bloodGroup || ''}
                onChange={(e) => updateField('bloodGroup', e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              >
                <option value="">{isBn ? 'নির্বাচন করুন' : 'Select Blood Group'}</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
