import { CvData } from '../types/cv';
import { SAMPLE_CV_EN, SAMPLE_CV_BN } from '../data/sampleCV';

const DB_NAME = 'cv_by_rabbi_db';
const STORE_NAME = 'cv_projects';
const DB_VERSION = 1;

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB is not available in this environment'));
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return dbPromise;
}

export const StorageService = {
  async getAllCVs(): Promise<CvData[]> {
    try {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();
        req.onsuccess = () => {
          let list = req.result as CvData[];
          if (!list || list.length === 0) {
            // Seed with sample projects on first run!
            list = [SAMPLE_CV_EN, SAMPLE_CV_BN];
            StorageService.saveCV(SAMPLE_CV_EN).catch(console.error);
            StorageService.saveCV(SAMPLE_CV_BN).catch(console.error);
          }
          resolve(list.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
        };
        req.onerror = () => reject(req.error);
      });
    } catch {
      // Fallback to localStorage
      try {
        const local = localStorage.getItem('cv_by_rabbi_projects');
        if (local) return JSON.parse(local);
        return [SAMPLE_CV_EN, SAMPLE_CV_BN];
      } catch {
        return [SAMPLE_CV_EN, SAMPLE_CV_BN];
      }
    }
  },

  async getCVById(id: string): Promise<CvData | null> {
    try {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      });
    } catch {
      const all = await this.getAllCVs();
      return all.find((cv) => cv.id === id) || null;
    }
  },

  async saveCV(cv: CvData): Promise<void> {
    const updatedCV = {
      ...cv,
      updatedAt: new Date().toISOString(),
    };

    try {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.put(updatedCV);
        req.onsuccess = () => {
          localStorage.setItem('cv_by_rabbi_last_active_id', updatedCV.id);
          resolve();
        };
        req.onerror = () => reject(req.error);
      });
    } catch {
      // LocalStorage backup
      try {
        const all = await this.getAllCVs();
        const index = all.findIndex((item) => item.id === updatedCV.id);
        if (index >= 0) {
          all[index] = updatedCV;
        } else {
          all.push(updatedCV);
        }
        localStorage.setItem('cv_by_rabbi_projects', JSON.stringify(all));
        localStorage.setItem('cv_by_rabbi_last_active_id', updatedCV.id);
      } catch (err) {
        console.error('Failed to save to localStorage fallback', err);
      }
    }
  },

  async deleteCV(id: string): Promise<void> {
    try {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.delete(id);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch {
      const all = await this.getAllCVs();
      const filtered = all.filter((c) => c.id !== id);
      localStorage.setItem('cv_by_rabbi_projects', JSON.stringify(filtered));
    }
  },

  async duplicateCV(id: string): Promise<CvData | null> {
    const original = await this.getCVById(id);
    if (!original) return null;

    const duplicated: CvData = {
      ...JSON.parse(JSON.stringify(original)),
      id: 'cv-' + Date.now(),
      title: `${original.title} (Copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await this.saveCV(duplicated);
    return duplicated;
  },

  exportAsJson(cv: CvData) {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(cv, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${cv.title.replace(/[^a-zA-Z0-9_\-\u0980-\u09FF]/g, '_')}_backup.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  async importFromJson(jsonString: string): Promise<CvData> {
    const parsed = JSON.parse(jsonString) as CvData;
    if (!parsed.personalInfo || !parsed.templateId) {
      throw new Error('Invalid CV backup format');
    }
    const newCv: CvData = {
      ...parsed,
      id: 'cv-' + Date.now(),
      title: `${parsed.title || 'Restored CV'} (Imported)`,
      updatedAt: new Date().toISOString(),
    };
    await this.saveCV(newCv);
    return newCv;
  },

  getLastActiveId(): string | null {
    try {
      return localStorage.getItem('cv_by_rabbi_last_active_id');
    } catch {
      return null;
    }
  },
};
