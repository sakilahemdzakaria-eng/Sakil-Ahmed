export type ThemeMode = 'deep-space' | 'light' | 'high-contrast';

export interface ProfileData {
  tagline: string;
  firstName: string;
  lastName: string;
  leadBio: string;
  aboutText1: string;
  aboutText2: string;
  name: string;
  profession: string;
  basedIn: string;
  serving: string;
  email: string;
  phone: string;
  whatsapp: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  photoUrl: string | null;
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface JobExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  isCurrent?: boolean;
  bulletPoints: string[];
}

export interface EducationData {
  degree: string;
  institution: string;
  details: string;
  activities: string;
  grades: {
    label: string;
    score: string;
  }[];
}

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  category: 'core' | 'marketing' | 'communication';
}

export interface Testimonial {
  id: string;
  clientName: string;
  roleOrRestaurant: string;
  location: string;
  quote: string;
  stars: number;
  avatarLetter: string;
  isSample?: boolean;
}

export interface CampaignCaseStudy {
  id: string;
  title: string;
  restaurant: string;
  location: string;
  cuisine: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
}
