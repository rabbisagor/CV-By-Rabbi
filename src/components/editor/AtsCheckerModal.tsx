import React from 'react';
import { CvData } from '../../types/cv';
import { evaluateAtsScore } from '../../services/ats';
import { X, CheckCircle2, AlertTriangle, XCircle, ShieldCheck, HelpCircle } from 'lucide-react';

interface Props {
  cv: CvData;
  onClose: () => void;
  isBn: boolean;
}

export const AtsCheckerModal: React.FC<Props> = ({ cv, onClose, isBn }) => {
  const report = evaluateAtsScore(cv);

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-600 border-emerald-500 bg-emerald-50';
    if (score >= 70) return 'text-blue-600 border-blue-500 bg-blue-50';
    if (score >= 50) return 'text-amber-600 border-amber-500 bg-amber-50';
    return 'text-rose-600 border-rose-500 bg-rose-50';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h3 className="font-bold text-slate-800 text-sm">
              {isBn ? 'এটিএস (ATS) রেডিনেস অ্যাসেসমেন্ট' : 'ATS Readiness Assessment'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Score Hero */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div
              className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center shrink-0 ${getScoreColor(
                report.score
              )}`}
            >
              <span className="text-3xl font-extrabold tracking-tight">{report.score}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">/ 100</span>
            </div>

            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {isBn ? 'স্কোর রেটিং:' : 'Score Rating:'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-800">
                  {isBn ? report.ratingBn : report.rating}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isBn
                  ? 'এই স্কোরটি নির্দেশ করে আপনার সিভি আন্তর্জাতিক কোম্পানি ও অনলাইন জব পোর্টালের রোবট স্ক্রিনারে কত সহজে পঠিত হতে পারবে।'
                  : 'This score evaluates how efficiently automated applicant tracking systems (ATS) can parse your keywords, hierarchy, and work milestones.'}
              </p>
            </div>
          </div>

          {/* Checklist items */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {isBn ? 'চেকলিস্ট পর্যালোচনা' : 'Detailed Evaluation Checklist'}
            </h4>

            <div className="space-y-2">
              {report.items.map((item) => {
                const isPass = item.status === 'pass';
                const isWarn = item.status === 'warning';
                return (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl border border-slate-200 bg-white flex items-start gap-3"
                  >
                    <div className="mt-0.5 shrink-0">
                      {isPass && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {isWarn && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                      {!isPass && !isWarn && <XCircle className="w-4 h-4 text-rose-500" />}
                    </div>
                    <div className="flex-1 text-xs">
                      <div className="flex justify-between items-baseline mb-0.5">
                        <span className="font-semibold text-slate-800">
                          {isBn ? item.titleBn : item.titleEn}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          +{item.scoreImpact} pts
                        </span>
                      </div>
                      <p className="text-slate-500 text-[11px]">
                        {isBn ? item.recommendationBn : item.recommendationEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actionable recommendations */}
          <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl space-y-2">
            <h5 className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isBn ? 'এটিএস অপটিমাইজেশন টিপস' : 'Pro ATS Optimization Tips'}</span>
            </h5>
            <ul className="list-disc ml-4 space-y-1 text-xs text-indigo-950/80">
              {(isBn ? report.tipsBn : report.tipsEn).map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <p className="text-[10px] text-slate-400 leading-normal text-center italic">
            * {isBn
              ? 'ঘোষণা: এটিএস স্কোরটি একটি নমুনা গুণগত মূল্যায়ন, কোনো সুনির্দিষ্ট প্রতিষ্ঠানে চাকরি পাওয়ার গ্যারান্টি প্রদান করে না।'
              : 'Disclaimer: The ATS score is an assistive evaluation of document structure and does not guarantee employer hiring decisions.'}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs"
          >
            {isBn ? 'বুঝেছি' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
