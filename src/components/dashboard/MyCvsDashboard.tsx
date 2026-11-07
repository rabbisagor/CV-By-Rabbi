import React, { useState, useEffect, useRef } from 'react';
import { CvData } from '../../types/cv';
import { StorageService } from '../../services/storage';
import {
  Plus,
  Copy,
  Trash2,
  Edit,
  Download,
  Upload,
  FileText,
  Calendar,
  Languages,
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';
import { SAMPLE_CV_EN, SAMPLE_CV_BN } from '../../data/sampleCV';

interface Props {
  onSelectCv: (cv: CvData) => void;
  onCreateNew: () => void;
  isBn: boolean;
}

export const MyCvsDashboard: React.FC<Props> = ({ onSelectCv, onCreateNew, isBn }) => {
  const [cvList, setCvList] = useState<CvData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [editingTitleId, setEditingTitleId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const list = await StorageService.getAllCVs();
      setCvList(list);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDuplicate = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await StorageService.duplicateCV(id);
      await loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (
      window.confirm(
        isBn
          ? 'আপনি কি নিশ্চিত যে এই সিভিটি স্থায়ীভাবে মুছে ফেলতে চান?'
          : 'Are you sure you want to permanently delete this CV?'
      )
    ) {
      try {
        await StorageService.deleteCV(id);
        await loadData();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleBackupJson = (cv: CvData, e: React.MouseEvent) => {
    e.stopPropagation();
    StorageService.exportAsJson(cv);
  };

  const handleRestoreJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const content = event.target?.result as string;
        const restored = await StorageService.importFromJson(content);
        await loadData();
        onSelectCv(restored);
      } catch (err) {
        alert(isBn ? 'ব্যাকআপ ফাইলটি সঠিক নয়।' : 'Invalid JSON backup file.');
      }
    };
    reader.readAsText(file);
  };

  const startRename = (cv: CvData, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingTitleId(cv.id);
    setNewTitle(cv.title);
  };

  const saveRename = async (cv: CvData, e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (!newTitle.trim()) {
      setEditingTitleId(null);
      return;
    }
    const updated = { ...cv, title: newTitle.trim() };
    await StorageService.saveCV(updated);
    setEditingTitleId(null);
    await loadData();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {isBn ? 'আমার সিভি প্রজেক্ট ড্যাশবোর্ড' : 'My CVs & Projects'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {isBn
              ? 'আপনার সকল সিভি আপনার ডিভাইসের সুরক্ষিত IndexedDB-তে সংরক্ষিত রয়েছে।'
              : 'All your resumes are stored locally and privately in browser IndexedDB.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* JSON Restore Button */}
          <input
            type="file"
            ref={fileInputRef}
            accept=".json"
            onChange={handleRestoreJson}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors shadow-xs"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{isBn ? 'ব্যাকআপ রিস্টোর' : 'Import JSON'}</span>
          </button>

          {/* New CV Button */}
          <button
            type="button"
            onClick={onCreateNew}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/20 transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>{isBn ? 'নতুন সিভি তৈরি' : 'New Resume'}</span>
          </button>
        </div>
      </div>

      {/* Projects List */}
      {isLoading ? (
        <div className="text-center py-20 text-slate-400 text-xs">
          {isBn ? 'সিভিসমূহ লোড হচ্ছে...' : 'Loading CV projects...'}
        </div>
      ) : cvList.length === 0 ? (
        <div className="text-center py-16 bg-white border border-dashed border-slate-300 rounded-2xl p-8 space-y-4">
          <FileText className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            {isBn ? 'এখনো কোনো সিভি তৈরি করেননি' : 'No CV Projects Yet'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {isBn
              ? 'আমাদের ২০টির বেশি প্রিমিয়াম টেমপ্লেট দিয়ে আজই তৈরি করুন আকর্ষণীয় প্রফেশনাল সিভি।'
              : 'Get started with our 20+ ATS-friendly templates or load a realistic sample to jumpstart.'}
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={onCreateNew}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
            >
              {isBn ? 'নতুন সিভি শুরু করুন' : 'Create First CV'}
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvList.map((cv) => (
            <div
              key={cv.id}
              onClick={() => onSelectCv(cv)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition-all p-5 flex flex-col justify-between cursor-pointer space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Title & Rename */}
                <div className="flex items-start justify-between">
                  {editingTitleId === cv.id ? (
                    <input
                      type="text"
                      autoFocus
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      onBlur={(e) => saveRename(cv, e)}
                      onKeyDown={(e) => e.key === 'Enter' && saveRename(cv, e)}
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-bold border-b border-indigo-600 focus:outline-none w-full mr-2"
                    />
                  ) : (
                    <div className="flex items-center gap-1.5 flex-1 mr-2">
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {cv.title || 'Untitled CV'}
                      </h3>
                      <button
                        onClick={(e) => startRename(cv, e)}
                        className="p-1 text-slate-300 hover:text-slate-600 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Rename"
                      >
                        <Edit className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md uppercase">
                    {cv.documentLanguage === 'bn' ? 'বাংলা' : 'English'}
                  </span>
                </div>

                {/* Candidate summary */}
                <p className="text-xs text-slate-500 line-clamp-2">
                  {cv.personalInfo.fullName
                    ? `${cv.personalInfo.fullName} • ${cv.personalInfo.professionalTitle || 'Candidate'}`
                    : cv.professionalSummary || cv.careerObjective || (isBn ? 'খসড়া সিভি' : 'Draft Resume')}
                </p>

                {/* Metadata badges */}
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    <Layers className="w-3 h-3 text-slate-400" />
                    <span>{cv.templateId}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{new Date(cv.updatedAt).toLocaleDateString()}</span>
                  </span>
                </div>
              </div>

              {/* Action bar */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-600 group-hover:underline">
                  {isBn ? 'সিভি এডিট করুন →' : 'Open in Editor →'}
                </span>

                <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={(e) => handleBackupJson(cv, e)}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title={isBn ? 'JSON ব্যাকআপ ডাউনলোড' : 'Download JSON Backup'}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => handleDuplicate(cv.id, e)}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title={isBn ? 'কপি তৈরি করুন' : 'Duplicate'}
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => handleDelete(cv.id, e)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    title={isBn ? 'মুছে ফেলুন' : 'Delete'}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
