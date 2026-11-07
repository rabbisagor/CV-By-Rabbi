import React, { useState, useRef } from 'react';
import { X, Upload, Trash2, Check, RefreshCw } from 'lucide-react';

interface Props {
  photoUrl?: string;
  photoShape: 'circle' | 'square' | 'rounded';
  photoSize: number;
  onSave: (photoUrl: string, shape: 'circle' | 'square' | 'rounded', size: number) => void;
  onClose: () => void;
  isBn: boolean;
}

export const PhotoUploadModal: React.FC<Props> = ({
  photoUrl = '',
  photoShape = 'circle',
  photoSize = 110,
  onSave,
  onClose,
  isBn,
}) => {
  const [currentUrl, setCurrentUrl] = useState<string>(photoUrl);
  const [shape, setShape] = useState<'circle' | 'square' | 'rounded'>(photoShape);
  const [size, setSize] = useState<number>(photoSize);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert(isBn ? 'ছবির সাইজ সর্বোচ্চ ৫ মেগাবাইট হতে পারবে।' : 'File size must be under 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setCurrentUrl(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSamplePhoto = () => {
    setCurrentUrl('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80');
  };

  const handleSave = () => {
    onSave(currentUrl, shape, size);
    onClose();
  };

  const shapeClass =
    shape === 'circle' ? 'rounded-full' : shape === 'rounded' ? 'rounded-2xl' : 'rounded-none';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-800 text-sm">
            {isBn ? 'প্রোফাইল ছবি কাস্টমাইজেশন' : 'Profile Photo Settings'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Live Preview */}
          <div className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
            {currentUrl ? (
              <div
                className={`overflow-hidden border-2 border-indigo-500 shadow-md ${shapeClass}`}
                style={{ width: `${size}px`, height: `${size}px` }}
              >
                <img src={currentUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                <Upload className="w-8 h-8" />
              </div>
            )}
            <p className="text-xs text-slate-500 mt-2 font-medium">
              {currentUrl ? (isBn ? 'লাইভ প্রিভিউ' : 'Live Preview') : (isBn ? 'ছবি নির্বাচন করুন' : 'No photo chosen')}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{isBn ? 'ডিভাইস থেকে আপলোড' : 'Upload from Device'}</span>
            </button>
            <button
              type="button"
              onClick={handleSamplePhoto}
              className="inline-flex items-center gap-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors"
              title="Use sample portrait"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isBn ? 'নমুনা' : 'Sample'}</span>
            </button>
            {currentUrl && (
              <button
                type="button"
                onClick={() => setCurrentUrl('')}
                className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                title={isBn ? 'ছবি মুছে ফেলুন' : 'Remove Photo'}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Shape Controls */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              {isBn ? 'ছবির আকার (Shape)' : 'Photo Shape'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['circle', 'rounded', 'square'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setShape(s)}
                  className={`py-2 text-xs font-medium rounded-lg border text-center transition-all ${
                    shape === s
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {s === 'circle' ? (isBn ? 'বৃত্তাকার' : 'Circular') : s === 'rounded' ? (isBn ? 'রাউন্ডেড' : 'Rounded') : (isBn ? 'চারকোনা' : 'Square')}
                </button>
              ))}
            </div>
          </div>

          {/* Size slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>{isBn ? 'ছবির মাপ (সাইজ)' : 'Photo Dimension'}</span>
              <span className="text-indigo-600 font-mono">{size}px</span>
            </div>
            <input
              type="range"
              min={80}
              max={140}
              step={5}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>
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
            <span>{isBn ? 'সংরক্ষণ করুন' : 'Apply Photo'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
