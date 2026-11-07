import { jsPDF } from 'jspdf';
import { toPng, toJpeg } from 'html-to-image';

export interface ExportOptions {
  filename?: string;
  quality?: number; // 0 to 1
  pixelRatio?: number; // 2 for crisp display
}

export const ExportService = {
  /**
   * Export all .a4-page elements to a single multi-page A4 PDF
   */
  async downloadPdf(containerElement: HTMLElement, filename = 'CV_by_Rabbi.pdf'): Promise<boolean> {
    try {
      // Find all page nodes
      const pageElements = containerElement.querySelectorAll<HTMLElement>('.a4-page');
      const pagesToProcess = pageElements.length > 0 ? Array.from(pageElements) : [containerElement];

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pdfWidth = 210;
      const pdfHeight = 297;

      for (let i = 0; i < pagesToProcess.length; i++) {
        const pageEl = pagesToProcess[i];

        // Capture crisp image of the A4 page at high resolution
        const imgData = await toPng(pageEl, {
          quality: 0.98,
          pixelRatio: 2.2,
          cacheBust: true,
          style: {
            transform: 'none',
            margin: '0',
          },
        });

        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      }

      pdf.save(filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
      return true;
    } catch (error) {
      console.error('PDF generation failed:', error);
      throw error;
    }
  },

  /**
   * Download single or first page as high-res PNG
   */
  async downloadPng(containerElement: HTMLElement, filename = 'CV_by_Rabbi.png'): Promise<boolean> {
    try {
      const pageEl = containerElement.querySelector<HTMLElement>('.a4-page') || containerElement;
      const dataUrl = await toPng(pageEl, {
        pixelRatio: 2.5,
        quality: 1,
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = filename.endsWith('.png') ? filename : `${filename}.png`;
      link.href = dataUrl;
      link.click();
      return true;
    } catch (error) {
      console.error('PNG generation failed:', error);
      throw error;
    }
  },

  /**
   * Download single or first page as high-res JPG
   */
  async downloadJpg(containerElement: HTMLElement, filename = 'CV_by_Rabbi.jpg'): Promise<boolean> {
    try {
      const pageEl = containerElement.querySelector<HTMLElement>('.a4-page') || containerElement;
      const dataUrl = await toJpeg(pageEl, {
        pixelRatio: 2.5,
        quality: 0.95,
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = filename.endsWith('.jpg') ? filename : `${filename}.jpg`;
      link.href = dataUrl;
      link.click();
      return true;
    } catch (error) {
      console.error('JPG generation failed:', error);
      throw error;
    }
  },

  /**
   * Print CV with print stylesheet
   */
  print() {
    window.print();
  },
};
