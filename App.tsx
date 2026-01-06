
import React, { useState } from 'react';
import { LanguageProvider } from './i18n';
import Onboarding from './views/Onboarding';
import UserDashboard from './views/UserDashboard';
import TherapistDashboard from './views/TherapistDashboard';
import { UserRole } from './types';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(() => {
    const saved = localStorage.getItem('saffe-role');
    return (saved as UserRole) || null;
  });

  const handleCompleteOnboarding = (selectedRole: UserRole) => {
    setRole(selectedRole);
    if (selectedRole) {
      localStorage.setItem('saffe-role', selectedRole);
    }
  };

  return (
    <LanguageProvider>
      {!role && <Onboarding onComplete={handleCompleteOnboarding} />}
      {role === 'USER' && <UserDashboard />}
      {role === 'THERAPIST' && <TherapistDashboard />}
    </LanguageProvider>
  );
};

export default App;
