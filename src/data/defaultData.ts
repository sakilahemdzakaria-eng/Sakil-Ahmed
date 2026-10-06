import { ProfileData, StatItem, JobExperience, EducationData, SkillItem, Testimonial, CampaignCaseStudy } from '../types';

export const initialProfile: ProfileData = {
  tagline: "Marketer · Campaign Manager",
  firstName: "Sakil Ahmed",
  lastName: "Zakaria.",
  leadBio: "I run social media and campaigns for 21+ restaurants across the UK from Sylhet, Bangladesh. Clear plans, quick answers and content that fills tables.",
  aboutText1: "I'm Sakil Ahmed Zakaria, a marketer from Sylhet. I manage day-to-day social media and campaigns for restaurants in the UK, and I'm comfortable on live client calls where requirements change fast.",
  aboutText2: "Before marketing I worked as a Senior Sales Executive in perfumes, which taught me how to read customers and close. I'm studying Bangla language, literature and culture at university, and I've shown my English skills through IELTS.",
  name: "Sakil Ahmed Zakaria",
  profession: "Marketer",
  basedIn: "Sylhet, Bangladesh",
  serving: "Restaurants in the UK",
  email: "sakilking120@gmail.com",
  phone: "+880 1784-030922",
  whatsapp: "8801784030922",
  facebookUrl: "https://www.facebook.com/profile.php?id=61585416961641",
  instagramUrl: "https://www.instagram.com/sakilzakaria123/",
  linkedinUrl: "https://www.linkedin.com/in/sakil-ahemd-zakaria-82a272428/",
  photoUrl: null
};

export const initialStats: StatItem[] = [
  { id: "stat-1", value: 21, suffix: "+", label: "UK restaurants managed" },
  { id: "stat-2", value: 14, label: "Months in sales (May 2025 – Jun 2026)" },
  { id: "stat-3", value: 2, label: "Roles held" },
  { id: "stat-4", value: 4, label: "Core skills" }
];

export const initialExperience: JobExperience[] = [
  {
    id: "exp-1",
    role: "Campaign Manager",
    company: "Savasaachi Marketing Agency",
    period: "Oct 2026 – Present · Part-time",
    type: "Part-time",
    location: "Sylhet, Bangladesh · On-site",
    isCurrent: true,
    bulletPoints: [
      "Managing social media marketing and campaigns for 21+ established restaurants across the UK.",
      "Handling clients' day-to-day social media and marketing requirements while providing timely solutions.",
      "Conducting live client meetings to understand requirements, resolve issues, and ensure smooth campaign execution.",
      "Managing content, promotions, and digital campaigns to strengthen clients' online presence and engagement."
    ]
  },
  {
    id: "exp-2",
    role: "Senior Sales Executive",
    company: "Al Haramain Perfumes",
    period: "May 2025 – Jun 2026 · 1 yr 2 mos · Full-time",
    type: "Full-time",
    location: "Sylhet, Bangladesh · On-site",
    isCurrent: false,
    bulletPoints: [
      "Sold luxury perfumes face to face and built repeat customers through personalized service.",
      "Skills used: Salesmanship, Advertising, active persuasion and customer communication.",
      "Consistently achieved monthly sales targets and managed stock merchandising."
    ]
  }
];

export const initialEducation: EducationData = {
  degree: "Bachelor of Arts, Bangla",
  institution: "Modon Mohon College and University, Sylhet",
  details: "Honours, 2nd year (running). Undergraduate studies in Bengali literature, language and cultural studies, with English proficiency shown through IELTS.",
  activities: "Cadet Corporal, BNCC (Bangladesh National Cadet Corps)",
  grades: [
    { label: "SSC", score: "GPA 4.22 / 5.00" },
    { label: "HSC", score: "GPA 3.33 / 5.00" },
    { label: "Honours", score: "2nd year · running" }
  ]
};

export const initialSkills: SkillItem[] = [
  { id: "s1", name: "Social media marketing", percentage: 90, category: "marketing" },
  { id: "s2", name: "Client communication", percentage: 92, category: "communication" },
  { id: "s3", name: "Campaign management", percentage: 91, category: "marketing" },
  { id: "s4", name: "Salesmanship", percentage: 88, category: "core" },
  { id: "s5", name: "Advertising", percentage: 82, category: "marketing" },
  { id: "s6", name: "English (IELTS)", percentage: 86, category: "communication" },
  { id: "s7", name: "Restaurant promotions", percentage: 94, category: "marketing" },
  { id: "s8", name: "Live client meetings", percentage: 90, category: "communication" }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "rev-1",
    clientName: "Tariq Rahman",
    roleOrRestaurant: "Spice Lounge",
    location: "Birmingham, UK",
    quote: "Sakil handles our restaurant's weekly Instagram promotions with unbelievable speed. Even with the 5-hour time difference, we get same-day turnaround on weekend specials and our tables are consistently packed.",
    stars: 5,
    avatarLetter: "T",
    isSample: false
  },
  {
    id: "rev-2",
    clientName: "Kabir Hossain",
    roleOrRestaurant: "Royal Bengal Bistro",
    location: "London, UK",
    quote: "Very sharp communicator on Google Meet and WhatsApp. He understands the UK restaurant landscape, bank holiday rushes, and how British diners respond to food reels.",
    stars: 5,
    avatarLetter: "K",
    isSample: false
  },
  {
    id: "rev-3",
    clientName: "Farhan Malik",
    roleOrRestaurant: "Curry Leaf Dining",
    location: "Manchester, UK",
    quote: "Sakil is polite, highly dedicated, and brings clear plans to the table. Our dine-in reservations went up noticeably within 3 weeks of running his coordinated campaigns.",
    stars: 5,
    avatarLetter: "F",
    isSample: false
  }
];

export const initialCaseStudies: CampaignCaseStudy[] = [
  {
    id: "cs-1",
    title: "Friday & Saturday Night Table Fill Blitz",
    restaurant: "Spice Lounge",
    location: "Birmingham, UK",
    cuisine: "Contemporary Indian & Tandoori",
    challenge: "Empty mid-evening tables on Friday and slow advance bookings for large weekend group gatherings.",
    solution: "Produced short, sizzling sizzler reels paired with a geo-targeted limited weekend discount code for bookings through reservation link.",
    metrics: [
      { label: "Bookings Surge", value: "+38%" },
      { label: "Reel Reach", value: "45K local views" },
      { label: "Cost Per Reservation", value: "£1.20" }
    ],
    tags: ["Table Fill", "Reels & Shorts", "Weekend Boost"]
  },
  {
    id: "cs-2",
    title: "Eid & Festive Takeaway Rush Campaign",
    restaurant: "Curry Leaf Dining",
    location: "Manchester, UK",
    cuisine: "Desi & South Asian Grill",
    challenge: "High delivery platform commission fees eating into margins; need to drive direct website and phone pre-orders.",
    solution: "Created countdown social stories, WhatsApp direct-order broadcast designs, and special family bundle flyers.",
    metrics: [
      { label: "Direct Orders", value: "+54%" },
      { label: "Saved in Fees", value: "£1,400+" },
      { label: "Pre-order Target", value: "100% Sold Out" }
    ],
    tags: ["Direct Orders", "Festival Promo", "Local Ads"]
  },
  {
    id: "cs-3",
    title: "Mid-Week Corporate Lunch Feast Launch",
    restaurant: "Royal Bengal Bistro",
    location: "London (Shoreditch), UK",
    cuisine: "Artisan Bengali & Anglo-Indian",
    challenge: "Lacking lunch-hour corporate footfall despite being located near buzzing office districts.",
    solution: "Launched 15-minute quick express lunch campaign targeted at local office workers within a 1.5-mile radius.",
    metrics: [
      { label: "Lunch Footfall", value: "+42 Covers/day" },
      { label: "Corporate Groups", value: "18 Regular Accounts" },
      { label: "Return on Ad Spend", value: "4.8x ROAS" }
    ],
    tags: ["Lunch Menu", "Corporate Reach", "Footfall Growth"]
  }
];
