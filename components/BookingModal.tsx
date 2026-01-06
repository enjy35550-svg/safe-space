
import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { Therapist } from '../types';
import { X, Calendar, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface BookingModalProps {
  therapist: Therapist;
  onClose: () => void;
}

type Step = 'PROFILE' | 'SCHEDULE' | 'CONFIRM' | 'SUCCESS';

const BookingModal: React.FC<BookingModalProps> = ({ therapist, onClose }) => {
  const { t, language } = useTranslation();
  const [step, setStep] = useState<Step>('PROFILE');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [hasConsent, setHasConsent] = useState(false);

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const renderStep = () => {
    switch (step) {
      case 'PROFILE':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#9d8189] to-[#d4a373] flex items-center justify-center font-bold text-white text-3xl mb-4 shadow-lg">
                {therapist.firstName[0]}
              </div>
              <h2 className="text-2xl font-bold text-white">{therapist.firstName}</h2>
              <p className="text-[#9d8189] font-medium">{therapist.specialization}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">{t.profile}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{therapist.bio}</p>
            </div>
            <button
              onClick={() => setStep('SCHEDULE')}
              className="w-full py-4 bg-[#9d8189] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#9d8189]/90 transition-all"
            >
              {t.bookSession}
              <ChevronRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        );

      case 'SCHEDULE':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-xl font-bold text-white mb-4">{t.selectTime}</h2>
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {therapist.availability.length > 0 ? (
                therapist.availability.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      selectedSlot === slot
                        ? 'bg-[#9d8189]/20 border-[#9d8189] text-white shadow-[0_0_15px_rgba(157,129,137,0.2)]'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-[#9d8189]" />
                      <span className="text-sm font-medium">{formatTime(slot)}</span>
                    </div>
                    {selectedSlot === slot && <CheckCircle2 className="w-5 h-5 text-[#9d8189]" />}
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8 italic">{t.noAvailability}</p>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep('PROFILE')}
                className="flex-1 py-4 bg-white/5 border border-white/10 text-gray-400 rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                {t.cancel}
              </button>
              <button
                disabled={!selectedSlot}
                onClick={() => setStep('CONFIRM')}
                className="flex-[2] py-4 bg-[#9d8189] text-white rounded-2xl font-bold disabled:opacity-50 transition-all"
              >
                {t.confirmBooking}
              </button>
            </div>
          </div>
        );

      case 'CONFIRM':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-xl font-bold text-white">{t.confirmBooking}</h2>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#9d8189]/20 flex items-center justify-center font-bold text-[#9d8189]">
                  {therapist.firstName[0]}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter">Therapist</p>
                  <p className="text-white font-bold">{therapist.firstName}</p>
                </div>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#9d8189]/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#9d8189]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter">Time</p>
                  <p className="text-white font-bold">{selectedSlot && formatTime(selectedSlot)}</p>
                </div>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-1">
                <input
                  type="checkbox"
                  checked={hasConsent}
                  onChange={(e) => setHasConsent(e.target.checked)}
                  className="peer hidden"
                />
                <div className="w-5 h-5 rounded border border-white/20 peer-checked:bg-[#9d8189] peer-checked:border-[#9d8189] transition-all flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                {t.consent}
              </span>
            </label>

            <div className="flex gap-3">
              <button
                onClick={() => setStep('SCHEDULE')}
                className="flex-1 py-4 bg-white/5 border border-white/10 text-gray-400 rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                {t.cancel}
              </button>
              <button
                disabled={!hasConsent}
                onClick={() => setStep('SUCCESS')}
                className="flex-[2] py-4 bg-[#9d8189] text-white rounded-2xl font-bold disabled:opacity-50 transition-all"
              >
                {t.confirmBooking}
              </button>
            </div>
          </div>
        );

      case 'SUCCESS':
        return (
          <div className="flex flex-col items-center text-center py-8 space-y-6 animate-in zoom-in duration-500">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">{t.bookingConfirmed}</h2>
            <p className="text-gray-400 text-sm max-w-[280px] leading-relaxed">
              {t.bookingConfirmedMsg}
            </p>
            <button
              onClick={onClose}
              className="w-full py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"
            >
              {t.backToHome}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={step === 'SUCCESS' ? onClose : undefined} 
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#161719] rounded-t-[40px] sm:rounded-[40px] p-8 shadow-2xl border-t sm:border border-white/10 animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-8 duration-500 overflow-hidden">
        {step !== 'SUCCESS' && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        
        {step !== 'SUCCESS' && step !== 'PROFILE' && (
           <button 
           onClick={() => setStep(step === 'SCHEDULE' ? 'PROFILE' : 'SCHEDULE')}
           className="absolute top-6 left-6 p-2 rounded-full bg-white/5 text-gray-500 hover:text-white transition-colors"
         >
           <ChevronLeft className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
         </button>
        )}

        <div className="mt-4">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
