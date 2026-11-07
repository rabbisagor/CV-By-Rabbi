import React from 'react';
import {
  FileText,
  Sparkles,
  LayoutTemplate,
  FolderKanban,
  BookOpen,
  Languages,
  Plus,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

interface Props {
  currentView: 'home' | 'editor' | 'templates' | 'categories' | 'dashboard' | 'guide';
  onNavigate: (view: 'home' | 'editor' | 'templates' | 'categories' | 'dashboard' | 'guide') => void;
  uiLang: 'en' | 'bn';
  onToggleUiLang: () => void;
  onNewCv: () => void;
}

export const Navbar: React.FC<Props> = ({
  currentView,
  onNavigate,
  uiLang,
  onToggleUiLang,
  onNewCv,
}) => {
  const isBn = uiLang === 'bn';
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: isBn ? 'হোম' : 'Home' },
    { id: 'templates', label: isBn ? 'টেমপ্লেটস' : 'Templates' },
    { id: 'categories', label: isBn ? 'ক্যাটাগরি' : 'Categories' },
    { id: 'dashboard', label: isBn ? 'আমার সিভি' : 'My CVs' },
    { id: 'guide', label: isBn ? 'বিডি ক্যারিয়ার গাইড' : 'BD Career Guide' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 via-indigo-700 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <FileText className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  CV by Rábbi
                </span>
                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-1.5 py-0.2 rounded-md uppercase tracking-wider">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                {isBn ? 'আপনার স্বপ্নের ক্যারিয়ারের প্রথম পদক্ষেপ' : 'Build Your Future, One CV at a Time.'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as any)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleUiLang}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
              title={isBn ? 'Switch to English' : 'বাংলায় রূপান্তর করুন'}
            >
              <Languages className="w-3.5 h-3.5 text-indigo-600" />
              <span>{isBn ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Create CV Primary Button */}
            <button
              onClick={onNewCv}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>{isBn ? 'সিভি তৈরি করুন' : 'Create My CV'}</span>
            </button>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id as any);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
