import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, Upload, ShieldCheck, Flame, Globe2, PhoneCall, CheckCircle } from 'lucide-react';
import { ProfileData } from '../types';
import { useParallax } from '../hooks/useParallax';
import { getWhatsAppLink } from '../utils/whatsapp';

interface SplashLandingPageProps {
  profile: ProfileData;
  onStart: () => void;
  onPhotoUploaded: (base64Url: string) => void;
  onPhotoRemoved: () => void;
}

export const SplashLandingPage: React.FC<SplashLandingPageProps> = ({
  profile,
  onStart,
  onPhotoUploaded,
  onPhotoRemoved
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mousePos } = useParallax();

  const handleStartClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onStart();
    }, 450);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please choose an image under 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          onPhotoUploaded(base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0a0720] transition-all duration-500 ease-out ${
        isTransitioning ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none ambient-glow opacity-90" />

      {/* Decorative Grid Mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center py-6 sm:py-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#170f4a]/90 border border-[#8b5cf6]/50 shadow-lg shadow-[#8b5cf6]/10 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono-code text-xs text-emerald-300 font-semibold tracking-wide">
            Accepting New UK Restaurant Clients
          </span>
        </div>

        {/* Hero Photo Centerpiece with 3D Parallax */}
        <div className="relative mb-6">
          <div
            className="animated-card-border p-2 w-[180px] h-[225px] sm:w-[220px] sm:h-[275px] rounded-[28px] overflow-hidden shadow-2xl shadow-[#8b5cf6]/30 group transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `perspective(800px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`
            }}
          >
            <div className="w-full h-full rounded-[20px] bg-[#110c33] overflow-hidden flex flex-col items-center justify-center relative">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="text-center p-4 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#38bdf8] flex items-center justify-center mb-3 shadow-inner shadow-black/40">
                    <span className="font-display text-3xl font-extrabold text-white tracking-wider">SZ</span>
                  </div>
                  <b className="font-display text-lg font-bold text-white block">Sakil Ahmed</b>
                  <span className="text-[#38bdf8] font-mono-code text-xs mt-0.5">Campaign Manager</span>
                </div>
              )}

              {/* Photo Change Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="font-mono-code text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#38bdf8] text-[#05111f] flex items-center gap-1 hover:bg-sky-300 transition-colors shadow-lg cursor-pointer"
                >
                  <Upload className="w-3 h-3" />
                  <span>Upload Photo</span>
                </button>
                {profile.photoUrl && (
                  <button
                    type="button"
                    onClick={onPhotoRemoved}
                    className="font-mono-code text-[10px] text-rose-300 hover:text-rose-100 underline"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Floating Highlight Badge */}
          <div
            className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] text-[#050b26] font-mono-code text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-xl shadow-sky-500/25 border border-white/30 rotate-2 pointer-events-none"
            style={{
              transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0) rotate(2deg)`
            }}
          >
            ✦ 21+ UK Restaurants
          </div>
        </div>

        {/* Profile Name & Title */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-2">
          {profile.name}
        </h1>

        <p className="font-mono-code text-xs sm:text-sm text-[#38bdf8] font-medium max-w-md mx-auto mb-4">
          Campaign Manager · UK Restaurant Social Media & Growth Specialist
        </p>

        {/* Quick Value Props */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-lg">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#170f4a]/80 border border-[#302a7c] text-[#aaa8dc] text-xs font-mono-code">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Meta Ads & Viral Reels
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#170f4a]/80 border border-[#302a7c] text-[#aaa8dc] text-xs font-mono-code">
            <Globe2 className="w-3.5 h-3.5 text-sky-400" />
            Direct Remote from Sylhet
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#170f4a]/80 border border-[#302a7c] text-[#aaa8dc] text-xs font-mono-code">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            14 Mos Avg. Client Retention
          </span>
        </div>

        {/* BIG START BUTTON */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-sm justify-center">
          <button
            type="button"
            onClick={handleStartClick}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#38bdf8] hover:from-[#7c3aed] hover:to-[#0284c7] text-white font-display font-extrabold text-base tracking-wide shadow-2xl shadow-[#8b5cf6]/40 hover:shadow-[#8b5cf6]/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden border border-white/20"
          >
            {/* Shimmer sweep animation */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

            <Sparkles className="w-5 h-5 text-sky-200 group-hover:rotate-12 transition-transform" />
            <span>START / ENTER PORTFOLIO</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Direct WhatsApp Quick Contact for Urgent Leads */}
        <div className="mt-5 text-center">
          <a
            href={getWhatsAppLink(profile.whatsapp, "Hi Sakil, I saw your portfolio intro page and want to discuss campaign management.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#aaa8dc] hover:text-[#38bdf8] transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-emerald-400" />
            <span>Or chat directly on WhatsApp ({profile.whatsapp})</span>
          </a>
        </div>

      </div>

      {/* Discreet bottom credit */}
      <div className="absolute bottom-4 text-center font-mono-code text-[11px] text-[#aaa8dc]/60">
        Click Start to explore case studies, client reviews & campaign simulator
      </div>
    </div>
  );
};
