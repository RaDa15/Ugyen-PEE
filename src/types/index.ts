export type StudyLevel = 'Undergraduate' | 'Postgraduate' | 'Vocational/Diploma' | 'Doctorate';

export interface Destination {
  id: string;
  code: string;
  name: string;
  tagline: string;
  flagEmoji: string;
  popularPoints: string;
  overview: string;
  whyStudy: string[];
  popularCourses: string[];
  intakes: string[];
  postStudyWork: string;
  averageTuition: string;
  costOfLiving: string;
  admissionRequirements: string[];
  visaGuidanceNote: string;
  image?: string;
}

export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  type: 'Public' | 'Private';
  established?: number;
  popularPrograms: string[];
  tuitionRange: string;
  intakes: string[];
  overview: string;
  ranking?: string;
  partnerStatus: boolean;
}

export interface Course {
  id: string;
  title: string;
  universityName: string;
  country: string;
  level: StudyLevel;
  field: string;
  duration: string;
  intake: string;
  estimatedFee: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortSummary: string;
  description: string;
  features: string[];
}

export interface JourneyMoment {
  id: string;
  title: string;
  category: string;
  description: string;
  dateStr: string;
  accent: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  destination: string;
  university: string;
  course: string;
  year: string;
  quote: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Admission' | 'Visa' | 'Documents' | 'Scholarships';
  question: string;
  answer: string;
}

export interface EnquirySubmission {
  name: string;
  email: string;
  phone: string;
  interestedCountry: string;
  studyLevel: string;
  message: string;
  website_url_hp?: string; // Honeypot field for anti-spam
}
