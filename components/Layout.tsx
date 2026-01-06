
import React from 'react';
import { useTranslation } from '../i18n';
import { Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showNav = true }) => {
  const { t, language, setLanguage } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0f1012] text-gray-100 flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0f1012]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#9d8189] fill-current" />
            <h1 className="text-xl font-bold tracking-tight text-white">{t.title}</h1>
          </div>
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 hover:bg-white/10 transition-colors"
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-16 pb-24 overflow-y-auto">
        <div className="max-w-md mx-auto px-6 pt-6">
          {children}
        </div>
      </main>

      {/* Disclaimer Modal / Footer element if needed */}
      <div className="max-w-md mx-auto px-6 mb-4">
        <p className="text-[10px] text-gray-500 text-center opacity-60 leading-relaxed">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default Layout;
