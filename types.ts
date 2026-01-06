
export type Language = 'en' | 'ar';

export type UserRole = 'USER' | 'THERAPIST' | null;

export enum Mood {
  SAD = 'SAD',
  ANXIOUS = 'ANXIOUS',
  STRESSED = 'STRESSED',
  LOST = 'LOST'
}

export interface Therapist {
  id: string;
  firstName: string;
  specialization: string;
  bio: string;
  availability: string[]; // ISO strings
}

export interface Session {
  id: string;
  therapistId: string;
  userId: string;
  dateTime: string;
  status: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'COMPLETED';
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  type: 'TEXT' | 'VOICE';
  timestamp: string;
}

export interface Translation {
  title: string;
  welcome: string;
  roleSelect: string;
  userRole: string;
  therapistRole: string;
  disclaimer: string;
  emergencyTitle: string;
  emergencyNotice: string;
  moodPrompt: string;
  writeMessage: string;
  recordVoice: string;
  bookSession: string;
  therapists: string;
  specialization: string;
  sessions: string;
  settings: string;
  language: string;
  consent: string;
  accept: string;
  cancel: string;
  confirmBooking: string;
  upcomingSessions: string;
  dashboard: string;
  anonymous: string;
  send: string;
  placeholderMsg: string;
  viewSpecialists: string;
  selectTime: string;
  profile: string;
  bookingConfirmed: string;
  bookingConfirmedMsg: string;
  backToHome: string;
  noAvailability: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    title: "saffe space",
    welcome: "Your safe place for emotional healing.",
    roleSelect: "Who are you?",
    userRole: "I need support",
    therapistRole: "I am a therapist",
    disclaimer: "This platform provides emotional support and session organization only and is not a substitute for medical or psychological treatment.",
    emergencyTitle: "In Crisis?",
    emergencyNotice: "If you are in immediate danger, please contact your local emergency services or a crisis hotline.",
    moodPrompt: "How are you feeling today?",
    writeMessage: "Express yourself...",
    recordVoice: "Record Voice Note",
    bookSession: "Book a Session",
    therapists: "Find a Therapist",
    specialization: "Specialization",
    sessions: "My Sessions",
    settings: "Settings",
    language: "Language",
    consent: "I agree to the professional guidelines and understand this is not emergency medical care.",
    accept: "Accept",
    cancel: "Cancel",
    confirmBooking: "Confirm Booking",
    upcomingSessions: "Upcoming Sessions",
    dashboard: "Dashboard",
    anonymous: "Continue Anonymously",
    send: "Send",
    placeholderMsg: "Type your thoughts here...",
    viewSpecialists: "View Specialists",
    selectTime: "Select Time Slot",
    profile: "Profile",
    bookingConfirmed: "Booking Confirmed!",
    bookingConfirmedMsg: "Your session has been successfully requested. The therapist will review it shortly.",
    backToHome: "Back to Home",
    noAvailability: "No slots available currently."
  },
  ar: {
    title: "سيف سبيس",
    welcome: "ملاذك الآمن للتعافي النفسي.",
    roleSelect: "من أنت؟",
    userRole: "أحتاج إلى دعم",
    therapistRole: "أنا معالج مختص",
    disclaimer: "هذا التطبيق مخصص للدعم النفسي وتنظيم الجلسات، ولا يُعد بديلاً عن العلاج الطبي أو التشخيص النفسي.",
    emergencyTitle: "في حالة طوارئ؟",
    emergencyNotice: "إذا كنت في خطر حقيقي، يرجى الاتصال بخدمات الطوارئ المحلية أو الخط الساخن للأزمات فوراً.",
    moodPrompt: "كيف تشعر اليوم؟",
    writeMessage: "عبر عن مشاعرك...",
    recordVoice: "تسجيل رسالة صوتية",
    bookSession: "حجز جلسة",
    therapists: "ابحث عن معالج",
    specialization: "التخصص",
    sessions: "جلساتي",
    settings: "الإعدادات",
    language: "اللغة",
    consent: "أوافق على الإرشادات المهنية وأدرك أن هذا ليس رعاية طبية طارئة.",
    accept: "موافق",
    cancel: "إلغاء",
    confirmBooking: "تأكيد الحجز",
    upcomingSessions: "الجلسات القادمة",
    dashboard: "لوحة التحكم",
    anonymous: "الاستمرار مجهول الهوية",
    send: "إرسال",
    placeholderMsg: "اكتب أفكارك هنا...",
    viewSpecialists: "عرض المختصين",
    selectTime: "اختر موعد الجلسة",
    profile: "الملف الشخصي",
    bookingConfirmed: "تم تأكيد الحجز!",
    bookingConfirmedMsg: "تم إرسال طلب الجلسة بنجاح. سيقوم المعالج بمراجعته قريباً.",
    backToHome: "العودة للرئيسية",
    noAvailability: "لا توجد مواعيد متاحة حالياً."
  }
};
