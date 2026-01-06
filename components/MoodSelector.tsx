
import React from 'react';
import { Mood } from '../types';

interface MoodSelectorProps {
  onSelect: (mood: Mood) => void;
  selected?: Mood;
}

const moods = [
  { type: Mood.SAD, emoji: '😔', labelEn: 'Sad', labelAr: 'حزين' },
  { type: Mood.ANXIOUS, emoji: '😰', labelEn: 'Anxious', labelAr: 'قلق' },
  { type: Mood.STRESSED, emoji: '😫', labelEn: 'Stressed', labelAr: 'مضغوط' },
  { type: Mood.LOST, emoji: '😶', labelEn: 'Lost', labelAr: 'تائه' },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelect, selected }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {moods.map((m) => (
        <button
          key={m.type}
          onClick={() => onSelect(m.type)}
          className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 border ${
            selected === m.type 
              ? 'bg-[#9d8189] border-[#9d8189] scale-105' 
              : 'bg-white/5 border-white/10 hover:border-white/20'
          }`}
        >
          <span className="text-2xl mb-1">{m.emoji}</span>
          <span className="text-[10px] uppercase tracking-wider font-semibold">
            {document.documentElement.dir === 'rtl' ? m.labelAr : m.labelEn}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
