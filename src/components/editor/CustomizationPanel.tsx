import React from 'react';
import { CvCustomization } from '../../types/cv';
import { Palette, Type, Layout, RotateCcw } from 'lucide-react';

interface Props {
  customization: CvCustomization;
  onChange: (customization: CvCustomization) => void;
  isBn: boolean;
}

const PRESET_PALETTES = [
  { name: 'Classic Navy', primary: '#1d4ed8', secondary: '#0f172a', heading: '#0f172a', text: '#334155', accent: '#eff6ff' },
  { name: 'Executive Charcoal', primary: '#334155', secondary: '#0f172a', heading: '#0f172a', text: '#334155', accent: '#f8fafc' },
  { name: 'Emerald Trust', primary: '#059669', secondary: '#064e3b', heading: '#064e3b', text: '#334155', accent: '#ecfdf5' },
  { name: 'Teal Modern', primary: '#0f766e', secondary: '#134e4a', heading: '#134e4a', text: '#334155', accent: '#f0fdfa' },
  { name: 'Crimson Bold', primary: '#b91c1c', secondary: '#450a0a', heading: '#450a0a', text: '#334155', accent: '#fef2f2' },
  { name: 'Indigo Sleek', primary: '#4f46e5', secondary: '#312e81', heading: '#1e1b4b', text: '#334155', accent: '#eef2ff' },
  { name: 'Monochrome Noir', primary: '#18181b', secondary: '#09090b', heading: '#09090b', text: '#27272a', accent: '#f4f4f5' },
];

export const CustomizationPanel: React.FC<Props> = ({ customization, onChange, isBn }) => {
  const handleUpdate = (field: keyof CvCustomization, value: any) => {
    onChange({ ...customization, [field]: value });
  };

  const handleApplyPalette = (palette: (typeof PRESET_PALETTES)[0]) => {
    onChange({
      ...customization,
      primaryColor: palette.primary,
      secondaryColor: palette.secondary,
      headingColor: palette.heading,
      textColor: palette.text,
      accentBg: palette.accent,
    });
  };

  const handleReset = () => {
    onChange({
      primaryColor: '#1d4ed8',
      secondaryColor: '#0f172a',
      textColor: '#334155',
      headingColor: '#0f172a',
      accentBg: '#f8fafc',
      fontFamily: isBn ? 'SolaimanLipi' : 'Inter',
      fontSize: 'normal',
      lineSpacing: 'normal',
      pageMargin: 'normal',
      photoShape: 'circle',
      photoSize: 110,
      showIcons: true,
      showDividers: true,
      dividerStyle: 'solid',
      headerAlignment: 'split',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header and Reset */}
      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-indigo-600" />
          <span>{isBn ? 'ডিজাইন ও কালার কাস্টমাইজেশন' : 'Design Customization'}</span>
        </h4>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-slate-800"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{isBn ? 'ডিফল্ট রিসেট' : 'Reset'}</span>
        </button>
      </div>

      {/* Preset Palettes */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-2">
          {isBn ? 'রেডিমেড প্রফেশনাল কালার প্যালেট' : 'Professional Color Palettes'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PRESET_PALETTES.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleApplyPalette(p)}
              className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-left transition-all hover:shadow-xs"
            >
              <div
                className="w-4 h-4 rounded-full border border-white shadow-xs shrink-0"
                style={{ backgroundColor: p.primary }}
              />
              <span className="text-[11px] font-medium text-slate-700 truncate">{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBn ? 'প্রধান রং (Primary Color)' : 'Primary Color'}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={customization.primaryColor}
              onChange={(e) => handleUpdate('primaryColor', e.target.value)}
              className="w-8 h-8 rounded-lg border border-slate-300 cursor-pointer p-0.5"
            />
            <input
              type="text"
              value={customization.primaryColor}
              onChange={(e) => handleUpdate('primaryColor', e.target.value)}
              className="w-24 px-2 py-1 text-xs font-mono border border-slate-300 rounded-md uppercase"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBn ? 'শিরোনাম রং (Heading Color)' : 'Heading Color'}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={customization.headingColor}
              onChange={(e) => handleUpdate('headingColor', e.target.value)}
              className="w-8 h-8 rounded-lg border border-slate-300 cursor-pointer p-0.5"
            />
            <input
              type="text"
              value={customization.headingColor}
              onChange={(e) => handleUpdate('headingColor', e.target.value)}
              className="w-24 px-2 py-1 text-xs font-mono border border-slate-300 rounded-md uppercase"
            />
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="pt-2 border-t border-slate-200 space-y-3">
        <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
          <Type className="w-4 h-4 text-indigo-600" />
          <span>{isBn ? 'টাইপোগ্রাফি ও ফন্ট' : 'Typography & Font'}</span>
        </h5>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBn ? 'ফন্ট ফ্যামিলি' : 'Font Family'}
          </label>
          <select
            value={customization.fontFamily}
            onChange={(e) => handleUpdate('fontFamily', e.target.value)}
            className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
          >
            <option value="SolaimanLipi">SolaimanLipi / Noto Sans Bengali (বাংলা উপযোগী)</option>
            <option value="Inter">Inter (Clean Modern Sans)</option>
            <option value="Roboto">Roboto (Google Standard)</option>
            <option value="Playfair Display">Playfair Display (Serif / Editorial)</option>
            <option value="Fira Code">Fira Code (Technical / Monospace)</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBn ? 'ফন্ট সাইজ' : 'Font Size Scale'}
            </label>
            <select
              value={customization.fontSize}
              onChange={(e) => handleUpdate('fontSize', e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
            >
              <option value="compact">{isBn ? 'কমপ্যাক্ট (ছোট)' : 'Compact (Dense)'}</option>
              <option value="normal">{isBn ? 'নরমাল (স্ট্যান্ডার্ড)' : 'Normal (Standard)'}</option>
              <option value="spacious">{isBn ? 'স্পেসিয়াস (বড়)' : 'Spacious (Large)'}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBn ? 'লাইন স্পেসিং' : 'Line Spacing'}
            </label>
            <select
              value={customization.lineSpacing}
              onChange={(e) => handleUpdate('lineSpacing', e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
            >
              <option value="tight">{isBn ? 'টাইট (Tight)' : 'Tight'}</option>
              <option value="normal">{isBn ? 'নরমাল (Normal)' : 'Normal'}</option>
              <option value="relaxed">{isBn ? 'রিল্যাক্সড (Relaxed)' : 'Relaxed'}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Layout & Shape */}
      <div className="pt-2 border-t border-slate-200 space-y-3">
        <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
          <Layout className="w-4 h-4 text-indigo-600" />
          <span>{isBn ? 'লেআউট ও মার্জিন' : 'Layout & Margins'}</span>
        </h5>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBn ? 'পৃষ্ঠার মার্জিন' : 'Page Margins'}
            </label>
            <select
              value={customization.pageMargin}
              onChange={(e) => handleUpdate('pageMargin', e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
            >
              <option value="compact">{isBn ? 'কম মার্জিন (বেশি তথ্য)' : 'Compact Margins'}</option>
              <option value="normal">{isBn ? 'স্ট্যান্ডার্ড মার্জিন' : 'Normal Margins'}</option>
              <option value="relaxed">{isBn ? 'খোলামেলা মার্জিন' : 'Spacious Margins'}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBn ? 'ডিভাইডার স্টাইল' : 'Section Divider'}
            </label>
            <select
              value={customization.dividerStyle}
              onChange={(e) => handleUpdate('dividerStyle', e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
            >
              <option value="solid">{isBn ? 'সলিড লাইন' : 'Solid Line'}</option>
              <option value="dashed">{isBn ? 'ড্যাশড লাইন' : 'Dashed'}</option>
              <option value="double">{isBn ? 'ডাবল লাইন' : 'Double'}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
