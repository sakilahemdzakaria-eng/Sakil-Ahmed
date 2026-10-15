export interface ProcessStep {
  name: string;
  description: string;
  color: string;
}

export interface CityOption {
  name: string;
  multiplier: number;
}

export interface GoalOption {
  name: string;
  multiplier: number;
}

export interface VenueOption {
  name: string;
  avgOrderValue: number;
}

export interface CampaignItem {
  id: string;
  title: string;
  type: string;
  previewTitle: string;
  previewDescription: string;
}

export interface JobExperience {
  period: string;
  location: string;
  title: string;
  description: string;
  skills: string[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface ReviewItem {
  quote: string;
  role: string;
  note: string;
}

export interface VideoChapter {
  id: string;
  title: string;
  timestamp: string;
  seconds: number;
  description: string;
}
