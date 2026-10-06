import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TickerMarquee } from './components/TickerMarquee';
import { AboutSection } from './components/AboutSection';
import { VideoSection } from './components/VideoSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { RestaurantCampaignSimulator } from './components/RestaurantCampaignSimulator';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EditModal } from './components/EditModal';
import { ParallaxBackground } from './components/ParallaxBackground';
import { CursorSmokeEffect } from './components/CursorSmokeEffect';
import {
  initialProfile,
  initialStats,
  initialExperience,
  initialEducation,
  initialSkills,
  initialTestimonials,
  initialCaseStudies
} from './data/defaultData';
import { ProfileData, JobExperience, EducationData, Testimonial, ThemeMode } from './types';
import { Edit3, CheckCircle2, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('sz_theme_mode') as ThemeMode;
      if (saved === 'light' || saved === 'high-contrast' || saved === 'deep-space') {
        return saved;
      }
      return 'deep-space';
    } catch {
      return 'deep-space';
    }
  });

  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('sz_profile_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.aboutText1 && parsed.aboutText1.includes('21-year-old')) {
          parsed.aboutText1 = parsed.aboutText1.replace('21-year-old ', '');
        }
        delete parsed.age;
        if (!parsed.whatsapp || parsed.whatsapp.includes('1700000000') || parsed.whatsapp === '+8801700000000') {
          parsed.whatsapp = initialProfile.whatsapp;
          parsed.phone = initialProfile.phone;
        }
        if (!parsed.facebookUrl || parsed.facebookUrl === 'https://facebook.com') {
          parsed.facebookUrl = initialProfile.facebookUrl;
        }
        if (!parsed.instagramUrl || parsed.instagramUrl === 'https://instagram.com') {
          parsed.instagramUrl = initialProfile.instagramUrl;
        }
        if (!parsed.linkedinUrl || parsed.linkedinUrl === 'https://linkedin.com') {
          parsed.linkedinUrl = initialProfile.linkedinUrl;
        }
        return { ...initialProfile, ...parsed };
      }
      return initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [stats, setStats] = useState(() => {
    try {
      const saved = localStorage.getItem('sz_stats_data');
      return saved ? JSON.parse(saved) : initialStats;
    } catch {
      return initialStats;
    }
  });

  const [experiences, setExperiences] = useState<JobExperience[]>(() => {
    try {
      const saved = localStorage.getItem('sz_experience_data');
      return saved ? JSON.parse(saved) : initialExperience;
    } catch {
      return initialExperience;
    }
  });

  const [education, setEducation] = useState<EducationData>(() => {
    try {
      const saved = localStorage.getItem('sz_education_data');
      return saved ? JSON.parse(saved) : initialEducation;
    } catch {
      return initialEducation;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem('sz_testimonials_data');
      return saved ? JSON.parse(saved) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sync state changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sz_profile_data', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('sz_experience_data', JSON.stringify(experiences));
    } catch (e) {
      console.error(e);
    }
  }, [experiences]);

  useEffect(() => {
    try {
      localStorage.setItem('sz_testimonials_data', JSON.stringify(testimonials));
    } catch (e) {
      console.error(e);
    }
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem('sz_education_data', JSON.stringify(education));
    } catch (e) {
      console.error(e);
    }
  }, [education]);

  useEffect(() => {
    try {
      localStorage.setItem('sz_theme_mode', theme);
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const handleUpdateProfileField = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUploaded = (base64Url: string) => {
    setProfile((prev) => ({ ...prev, photoUrl: base64Url }));
  };

  const handlePhotoRemoved = () => {
    setProfile((prev) => ({ ...prev, photoUrl: null }));
  };

  const handleUpdateExperience = (id: string, updated: Partial<JobExperience>) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, ...updated } : exp))
    );
  };

  const handleUpdateEducation = (updated: Partial<EducationData>) => {
    setEducation((prev) => ({ ...prev, ...updated }));
  };

  const handleAddTestimonial = (newReview: Testimonial) => {
    setTestimonials((prev) => [newReview, ...prev]);
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const handleUpdateTestimonial = (id: string, updated: Partial<Testimonial>) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
    );
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Reset all edited content back to original defaults?')) {
      localStorage.clear();
      setProfile(initialProfile);
      setStats(initialStats);
      setExperiences(initialExperience);
      setEducation(initialEducation);
      setTestimonials(initialTestimonials);
      setIsSettingsOpen(false);
      setIsEditing(false);
    }
  };

  return (
    <div data-theme={theme} className="theme-app-container relative min-h-screen bg-[#0a0720] text-[#eeeeff] selection:bg-[#8b5cf6]/30 selection:text-white transition-colors duration-300">
      {/* Animated Glowing Edge Frame from original HTML */}
      <div className="edge-frame" aria-hidden="true"></div>

      {/* Ambient background glow & Multi-layered Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0 ambient-glow opacity-80"></div>
      <ParallaxBackground />

      {/* Interactive Cursor Smoke Effect */}
      <CursorSmokeEffect />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <Navbar
          isEditing={isEditing}
          onToggleEdit={() => setIsEditing(!isEditing)}
          onOpenSettingsModal={() => setIsSettingsOpen(true)}
          whatsappNumber={profile.whatsapp}
          theme={theme}
          onThemeChange={setTheme}
        />

        {/* Hero Section */}
        <HeroSection
          profile={profile}
          isEditing={isEditing}
          onUpdateField={handleUpdateProfileField}
          onPhotoUploaded={handlePhotoUploaded}
          onPhotoRemoved={handlePhotoRemoved}
        />

        {/* Infinite Ticker Marquee */}
        <TickerMarquee />

        {/* About Section with Bio & Counting Stats */}
        <AboutSection
          profile={profile}
          stats={stats}
          isEditing={isEditing}
          onUpdateField={handleUpdateProfileField}
        />

        {/* Video Introduction & Showcase Section (Autoplaying) */}
        <VideoSection isEditing={isEditing} />

        {/* Experience Section */}
        <ExperienceSection
          experiences={experiences}
          isEditing={isEditing}
          onUpdateExperience={handleUpdateExperience}
        />

        {/* UK Restaurant Campaign Case Studies */}
        <CaseStudiesSection caseStudies={initialCaseStudies} />

        {/* Interactive UK Restaurant Campaign Planner & ROI Estimator */}
        <RestaurantCampaignSimulator
          email={profile.email}
          whatsappNumber={profile.whatsapp}
        />

        {/* Education Section */}
        <EducationSection
          education={education}
          isEditing={isEditing}
          onUpdateEducation={handleUpdateEducation}
        />

        {/* Skills Section */}
        <SkillsSection skills={initialSkills} />

        {/* Client Reviews Section */}
        <ReviewsSection
          testimonials={testimonials}
          isEditing={isEditing}
          onAddTestimonial={handleAddTestimonial}
          onDeleteTestimonial={handleDeleteTestimonial}
          onUpdateTestimonial={handleUpdateTestimonial}
        />

        {/* Contact Section */}
        <ContactSection
          profile={profile}
          isEditing={isEditing}
          onUpdateField={handleUpdateProfileField}
        />

        {/* Footer */}
        <Footer profile={profile} />
      </div>

      {/* Floating Edit Button & Settings Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsSettingsOpen(true)}
          className="p-3.5 rounded-full bg-[#170f4a] text-[#38bdf8] border border-[#302a7c] hover:bg-[#201569] shadow-xl hover:scale-105 transition-all"
          title="Open Profile Settings Modal"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>

        <button
          id="editBtn"
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className={`font-mono-code font-bold text-xs px-5 py-3.5 rounded-full shadow-2xl transition-all flex items-center gap-2 cursor-pointer ${
            isEditing
              ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 ring-4 ring-emerald-500/30'
              : 'bg-[#38bdf8] text-[#05111f] hover:bg-sky-300 ring-4 ring-sky-500/20'
          }`}
        >
          {isEditing ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>✓ Done editing</span>
            </>
          ) : (
            <>
              <Edit3 className="w-4 h-4" />
              <span>✎ Edit text</span>
            </>
          )}
        </button>
      </div>

      {/* Detailed Edit Modal */}
      <EditModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        profile={profile}
        onSaveProfile={(updated) => setProfile(updated)}
        onResetToDefaults={handleResetToDefaults}
        theme={theme}
        onThemeChange={setTheme}
      />
    </div>
  );
}
