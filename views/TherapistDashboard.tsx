
import React from 'react';
import Layout from '../components/Layout';
import { useTranslation } from '../i18n';
import { Users, Calendar, MessageSquare, Settings, Bell, Clock } from 'lucide-react';

const TherapistDashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-sm">You have 3 sessions scheduled for today.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
          <div className="p-3 rounded-2xl bg-blue-500/10 mb-3 inline-block">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-xs text-gray-500">Active Users</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
          <div className="p-3 rounded-2xl bg-purple-500/10 mb-3 inline-block">
            <Calendar className="w-6 h-6 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">8</div>
          <div className="text-xs text-gray-500">Upcoming Sessions</div>
        </div>
      </div>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">{t.upcomingSessions}</h2>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center text-sm font-bold">
                  U{i}
                </div>
                <div>
                  <h3 className="text-sm font-medium">Anonymous User {i}</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-500 mt-1">
                    <Clock className="w-3 h-3" />
                    <span>Today, 10:00 AM</span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1.5 rounded-xl bg-[#9d8189]/10 text-[#9d8189] text-[10px] font-bold border border-[#9d8189]/20">
                VIEW
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Messages</h2>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">
          <MessageSquare className="w-8 h-8 text-gray-600 mx-auto mb-3" />
          <p className="text-sm text-gray-500">No unread messages from your patients.</p>
        </div>
      </section>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 bg-[#1a1b1e]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-40">
        <button className="text-gray-400 hover:text-[#9d8189] transition-colors">
          <Bell className="w-6 h-6" />
        </button>
        <button className="text-gray-400 hover:text-[#9d8189] transition-colors">
          <Calendar className="w-6 h-6" />
        </button>
        <button className="text-gray-400 hover:text-[#9d8189] transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </Layout>
  );
};

export default TherapistDashboard;
