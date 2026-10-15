import {
  ProcessStep,
  CityOption,
  GoalOption,
  VenueOption,
  CampaignItem,
  JobExperience,
  SkillItem,
  ReviewItem,
  VideoChapter,
} from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    name: 'Define',
    description: "I learn the restaurant's menu, busy nights and customers, then set one clear goal for the campaign.",
    color: '#2a64c4',
  },
  {
    name: 'Design',
    description: 'I build the offer, the posts and the ad plan around that goal, and share a simple schedule you can approve.',
    color: '#f2b01e',
  },
  {
    name: 'Deliver',
    description: 'I launch, answer messages quickly and report orders and revenue so you can see what worked.',
    color: '#d9472b',
  },
];

export const CITIES: CityOption[] = [
  { name: 'London', multiplier: 1.25 },
  { name: 'Birmingham', multiplier: 1.1 },
  { name: 'Manchester', multiplier: 1.1 },
  { name: 'Leeds', multiplier: 1.0 },
  { name: 'Bradford', multiplier: 0.95 },
  { name: 'Other UK', multiplier: 0.9 },
];

export const GOALS: GoalOption[] = [
  { name: 'Fill weekend tables', multiplier: 3.2 },
  { name: 'Boost takeaway orders', multiplier: 3.8 },
  { name: 'Launch a festive offer', multiplier: 4.1 },
  { name: 'Win corporate lunches', multiplier: 2.6 },
];

export const VENUES: VenueOption[] = [
  { name: 'Indian restaurant lounge', avgOrderValue: 32 },
  { name: 'Takeaway', avgOrderValue: 22 },
  { name: 'Fine dining', avgOrderValue: 55 },
  { name: 'Café', avgOrderValue: 14 },
];

export const CAMPAIGNS: CampaignItem[] = [
  {
    id: 'table-fill',
    title: 'Friday & Saturday Table Fill',
    type: 'Night Ads',
    previewTitle: 'Table Fill',
    previewDescription: 'Weekend dinner ads aimed at diners within 5 miles. Goal: full tables Friday and Saturday.',
  },
  {
    id: 'takeaway-rush',
    title: 'Eid & Festive Takeaway Rush',
    type: 'Seasonal Campaign',
    previewTitle: 'Takeaway Rush',
    previewDescription: 'Festive menu push with pre-order posts and countdown stories.',
  },
  {
    id: 'corporate-lunch',
    title: 'Mid-Week Corporate Lunch',
    type: 'Feast Launch',
    previewTitle: 'Lunch Launch',
    previewDescription: 'Office lunch bundles promoted to nearby businesses on quiet weekdays.',
  },
];

export const EXPERIENCES: JobExperience[] = [
  {
    period: 'Present\nSylhet, Bangladesh · On Site\nSavasaachi Marketing Agency Bangladesh',
    location: 'Sylhet, Bangladesh · On Site',
    title: 'Campaign Manager',
    description: 'Planning and running restaurant marketing for UK clients. I set the offer, schedule the content and report the results in plain numbers.',
    skills: ['Campaign planning', 'Content calendars', 'Ad budgets', 'Weekly reporting'],
  },
  {
    period: 'Earlier\nSylhet, Bangladesh\nFull-time',
    location: 'Sylhet, Bangladesh',
    title: 'Senior Sales Executive',
    description: 'Led sales conversations and customer follow-ups, turning enquiries into booked orders and long-term clients.',
    skills: ['Lead follow-up', 'Negotiation', 'Client calls', 'Closing'],
  },
];

export const SKILLS: SkillItem[] = [
  { name: 'Social media marketing', level: 90 },
  { name: 'Client communication', level: 92 },
  { name: 'Campaign management', level: 88 },
  { name: 'Salesmanship', level: 90 },
  { name: 'English (UK-facing)', level: 85 },
  { name: 'Live client meetings', level: 86 },
];

export const REVIEWS: ReviewItem[] = [
  {
    quote: "“Sakil handles our restaurant's weekend promotions with real care. Our Friday tables fill up and I never have to chase him for an update.”",
    role: 'Restaurant owner',
    note: 'Sample review',
  },
  {
    quote: '“He replies fast on WhatsApp, explains the plan simply and delivers what he promises every week.”',
    role: 'Takeaway manager',
    note: 'Sample review',
  },
  {
    quote: '“Tidy reports, sharp posts and clear numbers. Our festive takeaway orders went up right after launch.”',
    role: 'Restaurant partner',
    note: 'Sample review',
  },
];

export const VIDEO_CHAPTERS: VideoChapter[] = [
  {
    id: '01',
    title: 'Managing 21+ UK restaurants',
    timestamp: '0:00',
    seconds: 0,
    description: 'How I coordinate weekly campaign calendars and creative assets for 21+ UK dining establishments.',
  },
  {
    id: '02',
    title: 'Live client support in action',
    timestamp: '0:15',
    seconds: 15,
    description: 'Fast WhatsApp communication, comment moderation, table reservation inquiries and customer responses.',
  },
  {
    id: '03',
    title: 'Weekly meetings and reporting',
    timestamp: '0:30',
    seconds: 30,
    description: 'No marketing fluff: transparent ROAS breakdowns, weekly spend tracking and revenue numbers.',
  },
  {
    id: '04',
    title: 'Planning offers and campaigns',
    timestamp: '0:45',
    seconds: 45,
    description: 'Crafting seasonal competitions, weekday lunch offers, and high-converting weekend dining promotions.',
  },
];
