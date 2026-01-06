
import React from 'react';
import { useTranslation } from '../i18n';
import { UserRole } from '../types';
import { User, Stethoscope, Heart } from 'lucide-react';

interface OnboardingProps {
  onComplete: (role: UserRole) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const { t, setLanguage, language } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-[#0f1012] text-white">
      <div className="mb-12 text-center">
        <div className="inline-flex p-4 rounded-3xl bg-[#9d8189]/20 mb-6">
          <Heart className="w-12 h-12 text-[#9d8189] fill-[#9d8189]/50" />
        </div>
        <h1 className="text-4xl font-bold mb-3 tracking-tight">{t.title}</h1>
        <p className="text-gray-400 text-sm max-w-[240px] mx-auto">{t.welcome}</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest text-center mb-2">
          {t.roleSelect}
        </h2>
        
        <button 
          onClick={() => onComplete('USER')}
          className="w-full flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#9d8189] transition-all group"
        >
          <div className="p-3 rounded-2xl bg-[#9d8189]/10 group-hover:bg-[#9d8189]/20 transition-colors">
            <User className="w-6 h-6 text-[#9d8189]" />
          </div>
          <span className="text-lg font-medium">{t.userRole}</span>
        </button>

        <button 
          onClick={() => onComplete('THERAPIST')}
          className="w-full flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#9d8189] transition-all group"
        >
          <div className="p-3 rounded-2xl bg-[#9d8189]/10 group-hover:bg-[#9d8189]/20 transition-colors">
            <Stethoscope className="w-6 h-6 text-[#9d8189]" />
          </div>
          <span className="text-lg font-medium">{t.therapistRole}</span>
        </button>
      </div>

      <div className="mt-16 flex gap-4">
        <button 
          onClick={() => setLanguage('en')}
          className={`text-sm px-4 py-2 rounded-full border transition-all ${language === 'en' ? 'border-[#9d8189] text-[#9d8189] bg-[#9d8189]/10' : 'border-white/10 text-gray-500'}`}
        >
          English
        </button>
        <button 
          onClick={() => setLanguage('ar')}
          className={`text-sm px-4 py-2 rounded-full border transition-all ${language === 'ar' ? 'border-[#9d8189] text-[#9d8189] bg-[#9d8189]/10' : 'border-white/10 text-gray-500'}`}
        >
          العربية
        </button>
      </div>

      <div className="mt-auto py-8">
        <p className="text-[10px] text-gray-600 text-center max-w-xs leading-relaxed italic">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
