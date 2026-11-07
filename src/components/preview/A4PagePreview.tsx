import React, { useRef, useState } from 'react';
import { CvData } from '../../types/cv';
import { TemplateRenderer } from './TemplateRenderer';
import { ZoomIn, ZoomOut, Maximize2, FileDown, Printer, CheckCircle } from 'lucide-react';
import { ExportService } from '../../services/export';

interface Props {
  cv: CvData;
  isBn: boolean;
}

export const A4PagePreview: React.FC<Props> = ({ cv, isBn }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number>(0.85); // Default comfortable 85% scale on laptops
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 1.4));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.45));
  const handleResetZoom = () => setZoom(0.85);

  const handleDownload = async (type: 'pdf' | 'png' | 'jpg') => {
    if (!containerRef.current || isExporting) return;
    setIsExporting(true);
    setExportSuccess(null);

    const safeTitle = (cv.personalInfo.fullName || cv.title || 'CV_by_Rabbi')
      .replace(/[^a-zA-Z0-9_\-\u0980-\u09FF]/g, '_');

    try {
      if (type === 'pdf') {
        await ExportService.downloadPdf(containerRef.current, `${safeTitle}_CV.pdf`);
      } else if (type === 'png') {
        await ExportService.downloadPng(containerRef.current, `${safeTitle}_CV.png`);
      } else if (type === 'jpg') {
        await ExportService.downloadJpg(containerRef.current, `${safeTitle}_CV.jpg`);
      }
      setExportSuccess(`${type.toUpperCase()} exported successfully!`);
      setTimeout(() => setExportSuccess(null), 3500);
    } catch (err) {
      console.error(err);
      alert('Failed to export. Please try printing to PDF as alternative.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-100/90 relative">
      {/* Top Toolbar */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between shadow-xs z-10">
        <div className="flex items-center space-x-2 text-xs text-slate-600">
          <span className="font-semibold text-slate-800">
            {isBn ? 'প্রকৃত A4 মাপ' : 'Standard A4 Size'}:
          </span>
          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono text-[11px]">
            210 × 297 mm
          </span>
          {exportSuccess && (
            <span className="flex items-center gap-1 text-emerald-600 font-medium ml-2 animate-pulse">
              <CheckCircle className="w-3.5 h-3.5" />
              {exportSuccess}
            </span>
          )}
        </div>

        {/* Zoom & Quick Actions */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button
              onClick={handleZoomOut}
              title={isBn ? 'জুম কমান' : 'Zoom Out'}
              className="p-1.5 hover:bg-white rounded text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono px-2 text-slate-700">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              title={isBn ? 'জুম বাড়ান' : 'Zoom In'}
              className="p-1.5 hover:bg-white rounded text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetZoom}
              title={isBn ? 'রিসেট' : 'Fit'}
              className="p-1.5 hover:bg-white rounded text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => handleDownload('pdf')}
              disabled={isExporting}
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-colors disabled:opacity-50"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{isExporting ? (isBn ? 'তৈরি হচ্ছে...' : 'Exporting...') : 'PDF'}</span>
            </button>
            <button
              onClick={() => handleDownload('png')}
              disabled={isExporting}
              className="inline-flex items-center gap-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
              title="Download PNG"
            >
              PNG
            </button>
            <button
              onClick={() => ExportService.print()}
              className="p-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg transition-colors"
              title={isBn ? 'সিভি প্রিন্ট' : 'Print CV'}
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scaled A4 Preview Board */}
      <div className="flex-1 overflow-auto p-6 flex justify-center items-start">
        <div
          ref={containerRef}
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease-out',
          }}
          className="a4-page-shadow rounded-sm bg-white"
        >
          <TemplateRenderer cv={cv} />
        </div>
      </div>
    </div>
  );
};
