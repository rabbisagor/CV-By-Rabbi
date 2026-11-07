/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CvData, CvCategory } from './types/cv';
import { StorageService } from './services/storage';
import { SAMPLE_CV_EN, SAMPLE_CV_BN, createBlankCv } from './data/sampleCV';
import { CV_CATEGORIES } from './data/categories';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/home/HomeView';
import { CvEditor } from './components/editor/CvEditor';
import { TemplateGalleryModal } from './components/templates/TemplateGalleryModal';
import { CategoryListModal } from './components/categories/CategoryListModal';
import { MyCvsDashboard } from './components/dashboard/MyCvsDashboard';
import { BdCvGuideModal } from './components/guide/BdCvGuideModal';

type AppView = 'home' | 'editor' | 'templates' | 'categories' | 'dashboard' | 'guide';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeCv, setActiveCv] = useState<CvData>(SAMPLE_CV_EN);
  const [uiLang, setUiLang] = useState<'en' | 'bn'>('en');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Modal overlays
  const [showTemplateModal, setShowTemplateModal] = useState<boolean>(false);

  // Initialize stored CVs
  useEffect(() => {
    StorageService.getAllCVs()
      .then((all) => {
        if (all.length > 0) {
          const lastActiveId = StorageService.getLastActiveId();
          const target = all.find((c) => c.id === lastActiveId) || all[0];
          setActiveCv(target);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  const handleToggleUiLang = () => {
    setUiLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleCreateNewCv = () => {
    const fresh = createBlankCv(uiLang);
    StorageService.saveCV(fresh).then(() => {
      setActiveCv(fresh);
      setCurrentView('editor');
    });
  };

  const handleSelectCv = (cv: CvData) => {
    setActiveCv(cv);
    setCurrentView('editor');
  };

  const handleSelectTemplate = (templateId: string) => {
    const updated: CvData = {
      ...activeCv,
      templateId,
    };
    setActiveCv(updated);
    StorageService.saveCV(updated);
    setShowTemplateModal(false);
    setCurrentView('editor');
  };

  const handleSelectCategory = (category: CvCategory) => {
    // Pick the recommended template for this category
    const recommendedTemplate = category.recommendedTemplates[0] || 'modern-professional';
    const updated: CvData = {
      ...activeCv,
      categoryId: category.id,
      templateId: recommendedTemplate,
    };
    setActiveCv(updated);
    StorageService.saveCV(updated);
    setCurrentView('editor');
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-50 text-slate-600 text-xs gap-3">
        <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="font-bold tracking-wider uppercase text-slate-800">
          CV by Rábbi — Loading...
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${uiLang === 'bn' ? 'font-bangla' : 'font-english'}`}>
      {/* Universal Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        uiLang={uiLang}
        onToggleUiLang={handleToggleUiLang}
        onNewCv={handleCreateNewCv}
      />

      {/* Main Routed Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onStartCreate={() => setCurrentView('editor')}
            onExploreTemplates={() => setCurrentView('templates')}
            onBrowseCategories={() => setCurrentView('categories')}
            onSelectCategory={(catId) => {
              const cat = CV_CATEGORIES.find((c) => c.id === catId);
              if (cat) handleSelectCategory(cat);
              else setCurrentView('editor');
            }}
            onSelectTemplate={handleSelectTemplate}
            onOpenGuide={() => setCurrentView('guide')}
            isBn={uiLang === 'bn'}
          />
        )}

        {currentView === 'editor' && (
          <CvEditor
            initialCv={activeCv}
            isBn={uiLang === 'bn'}
            onOpenTemplates={() => setShowTemplateModal(true)}
          />
        )}

        {currentView === 'templates' && (
          <TemplateGalleryModal
            currentTemplateId={activeCv.templateId}
            onSelectTemplate={handleSelectTemplate}
            isBn={uiLang === 'bn'}
          />
        )}

        {currentView === 'categories' && (
          <CategoryListModal
            onSelectCategory={handleSelectCategory}
            isBn={uiLang === 'bn'}
          />
        )}

        {currentView === 'dashboard' && (
          <MyCvsDashboard
            onSelectCv={handleSelectCv}
            onCreateNew={handleCreateNewCv}
            isBn={uiLang === 'bn'}
          />
        )}

        {currentView === 'guide' && (
          <BdCvGuideModal
            isBn={uiLang === 'bn'}
          />
        )}
      </main>

      {/* Template Modal when inside Editor */}
      {showTemplateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-6xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
            <TemplateGalleryModal
              currentTemplateId={activeCv.templateId}
              onSelectTemplate={handleSelectTemplate}
              onClose={() => setShowTemplateModal(false)}
              isBn={uiLang === 'bn'}
            />
          </div>
        </div>
      )}

      {/* Universal Footer (hidden in Editor view to preserve full split screen experience) */}
      {currentView !== 'editor' && (
        <Footer onNavigate={(view) => setCurrentView(view)} isBn={uiLang === 'bn'} />
      )}
    </div>
  );
}
