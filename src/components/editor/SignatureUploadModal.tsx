import React, { useState, useRef } from 'react';
import { X, Upload, Trash2, Check, PenTool } from 'lucide-react';

interface Props {
  signatureUrl?: string;
  showSignature?: boolean;
  onSave: (signatureUrl: string, showSignature: boolean) => void;
  onClose: () => void;
  isBn: boolean;
}

export const SignatureUploadModal: React.FC<Props> = ({
  signatureUrl = '',
  showSignature = true,
  onSave,
  onClose,
  isBn,
}) => {
  const [currentUrl, setCurrentUrl] = useState<string>(signatureUrl);
  const [enabled, setEnabled] = useState<boolean>(showSignature);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 3 * 1024 * 1024) {
      alert(isBn ? 'স্বাক্ষরের সাইজ ৩ মেগাবাইটের কম হতে হবে।' : 'File size must be under 3MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setCurrentUrl(event.target.result as string);
        setEnabled(true);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onSave(currentUrl, enabled);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <PenTool className="w-4 h-4 text-indigo-600" />
            <h3 className="font-bold text-slate-800 text-sm">
              {isBn ? 'হাতে লেখা স্বাক্ষর সংযুক্তি' : 'Handwritten Signature'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <div>
              <p className="text-xs font-semibold text-slate-800">
                {isBn ? 'সিভিতে স্বাক্ষর প্রদর্শন করুন' : 'Display Signature on CV'}
              </p>
              <p className="text-[11px] text-slate-500">
                {isBn ? 'অঙ্গীকারনামা বা ফুটার অংশে স্বাক্ষর থাকবে' : 'Placed under declaration / footer'}
              </p>
            </div>
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
              className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
            />
          </div>

          {/* Signature Preview Box */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl min-h-[120px]">
            {currentUrl ? (
              <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs max-w-[200px]">
                <img src={currentUrl} alt="Signature Preview" className="h-12 object-contain mx-auto" />
              </div>
            ) : (
              <div className="text-center text-slate-400">
                <PenTool className="w-8 h-8 mx-auto mb-1 opacity-50" />
                <p className="text-xs font-medium">
                  {isBn ? 'স্বচ্ছ ব্যাকগ্রাউন্ডযুক্ত (PNG) স্বাক্ষর সুপারিশকৃত' : 'Transparent PNG signature recommended'}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/png,image/jpeg,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{isBn ? 'স্বাক্ষর ফাইল নির্বাচন করুন' : 'Upload Signature'}</span>
            </button>
            {currentUrl && (
              <button
                type="button"
                onClick={() => setCurrentUrl('')}
                className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                title="Remove"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          <p className="text-[11px] text-slate-500 leading-normal bg-amber-50 text-amber-800 p-2.5 rounded-lg border border-amber-200">
            💡 {isBn
              ? 'টিপস: সাদা কাগজে কালো বা নীল কালিতে স্বাক্ষর করে মোবাইল দিয়ে ছবি তুলে এখানে আপলোড করতে পারেন।'
              : 'Tip: Sign clearly on plain white paper, take a sharp photo or scan, and crop to size.'}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-5 py-4 bg-slate-50 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
          >
            {isBn ? 'বাতিল' : 'Cancel'}
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{isBn ? 'প্রয়োগ করুন' : 'Save Signature'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
