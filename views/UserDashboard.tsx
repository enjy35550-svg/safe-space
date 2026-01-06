
import React, { useState } from 'react';
import Layout from '../components/Layout';
import MoodSelector from '../components/MoodSelector';
import BookingModal from '../components/BookingModal';
import { useTranslation } from '../i18n';
import { Mood, Therapist } from '../types';
import { Send, Mic, AlertCircle, Calendar, MessageCircle, ChevronRight } from 'lucide-react';
import { mockTherapists } from '../services/mockData';

const UserDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [mood, setMood] = useState<Mood | undefined>();
  const [message, setMessage] = useState('');
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);

  return (
    <Layout>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#9d8189]">{t.moodPrompt}</h2>
        <MoodSelector onSelect={setMood} selected={mood} />
      </section>

      <section className="mb-8">
        <div className="relative group">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.placeholderMsg}
            className="w-full h-40 bg-white/5 border border-white/10 rounded-3xl p-5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#9d8189] focus:ring-1 focus:ring-[#9d8189] transition-all resize-none"
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-400">
              <Mic className="w-5 h-5" />
            </button>
            <button 
              disabled={!message.trim()}
              className="p-3 rounded-2xl bg-[#9d8189] hover:bg-[#9d8189]/80 disabled:opacity-50 transition-colors text-white"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-red-900/10 border border-red-500/20 rounded-3xl p-5">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-red-500 mb-1">{t.emergencyTitle}</h3>
            <p className="text-xs text-red-400/80 leading-relaxed">
              {t.emergencyNotice}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">{t.therapists}</h2>
          <button className="text-[#9d8189] text-sm font-medium hover:underline">
            {t.viewSpecialists}
          </button>
        </div>
        
        <div className="space-y-4">
          {mockTherapists.map(therapist => (
            <button 
              key={therapist.id} 
              onClick={() => setSelectedTherapist(therapist)}
              className="w-full bg-white/5 border border-white/10 rounded-3xl p-5 flex items-center justify-between hover:border-[#9d8189]/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9d8189] to-[#d4a373] flex items-center justify-center font-bold text-white text-lg shrink-0">
                  {therapist.firstName[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">{therapist.firstName}</h3>
                  <p className="text-xs text-gray-500">{therapist.specialization}</p>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 hover:bg-[#9d8189]/10 text-[#9d8189] transition-colors">
                <ChevronRight className={`w-5 h-5 ${document.documentElement.dir === 'rtl' ? 'rotate-180' : ''}`} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      {selectedTherapist && (
        <BookingModal 
          therapist={selectedTherapist} 
          onClose={() => setSelectedTherapist(null)} 
        />
      )}

      {/* Floating Action Menu for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-4 bg-[#1a1b1e]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-40">
        <button className="flex flex-col items-center gap-1 group">
          <MessageCircle className="w-6 h-6 text-[#9d8189] group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-medium text-gray-400">{t.writeMessage}</span>
        </button>
        <div className="w-px h-6 bg-white/10" />
        <button className="flex flex-col items-center gap-1 group">
          <Calendar className="w-6 h-6 text-[#9d8189] group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-medium text-gray-400">{t.sessions}</span>
        </button>
      </div>
    </Layout>
  );
};

export default UserDashboard;
