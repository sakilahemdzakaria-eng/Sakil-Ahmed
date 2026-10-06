import React, { useRef } from 'react';
import { Camera, Sparkles, ArrowRight, CheckCircle, RefreshCw, Upload, MapPin } from 'lucide-react';
import { ProfileData } from '../types';
import { useParallax } from '../hooks/useParallax';

interface HeroSectionProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdateField: (field: keyof ProfileData, value: string) => void;
  onPhotoUploaded: (base64Url: string) => void;
  onPhotoRemoved: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  isEditing,
  onUpdateField,
  onPhotoUploaded,
  onPhotoRemoved
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mousePos, scrollY } = useParallax();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        // Resize and optimize to max 900px
        const maxDim = 900;
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressed = canvas.toDataURL('image/jpeg', 0.88);
          onPhotoUploaded(compressed);
        }
      };
      if (typeof reader.result === 'string') {
        img.src = reader.result;
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <header id="top" className="py-12 md:py-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 font-mono-code text-xs md:text-sm tracking-wider uppercase text-[#38bdf8] bg-[#170f4a]/80 px-3.5 py-1.5 rounded-full border border-[#302a7c]">
            <span className="w-5 h-[2px] bg-[#38bdf8]"></span>
            {isEditing ? (
              <input
                type="text"
                value={profile.tagline}
                onChange={(e) => onUpdateField('tagline', e.target.value)}
                className="bg-transparent border-b border-[#38bdf8] focus:outline-none text-[#38bdf8] font-mono-code uppercase text-xs"
              />
            ) : (
              <span>{profile.tagline}</span>
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            <span className="text-white block">
              {isEditing ? (
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) => onUpdateField('firstName', e.target.value)}
                  className="bg-transparent border-b border-purple-400 focus:outline-none w-full"
                />
              ) : (
                profile.firstName
              )}
            </span>
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent block mt-1">
              {isEditing ? (
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) => onUpdateField('lastName', e.target.value)}
                  className="bg-transparent border-b border-sky-400 focus:outline-none w-full text-sky-400"
                />
              ) : (
                profile.lastName
              )}
            </span>
          </h1>

          <div className="text-base sm:text-lg text-[#aaa8dc] max-w-xl leading-relaxed">
            {isEditing ? (
              <textarea
                value={profile.leadBio}
                onChange={(e) => onUpdateField('leadBio', e.target.value)}
                rows={3}
                className="w-full bg-[#110c33] border border-[#302a7c] rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              />
            ) : (
              <p>{profile.leadBio}</p>
            )}
          </div>

          {/* Location & Focus pill */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono-code text-[#aaa8dc]">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#110c33] border border-[#302a7c]/60">
              <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" />
              Sylhet, Bangladesh
            </span>
            <span className="text-[#302a7c]">➔</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#110c33] border border-[#302a7c]/60 text-[#38bdf8]">
              Serving 21+ UK Restaurants
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/50 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for new campaigns
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-display font-bold text-base px-7 py-3.5 rounded-full bg-[#8b5cf6] text-white hover:bg-[#7c3aed] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#8b5cf6]/30"
            >
              <span>Work with me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 font-display font-bold text-base px-6 py-3.5 rounded-full border-2 border-[#302a7c] text-white hover:bg-[#170f4a] transition-all transform hover:-translate-y-1"
            >
              <span>View Campaigns</span>
            </a>

            <a
              href="#planner"
              className="inline-flex items-center gap-1.5 font-mono-code text-xs px-4 py-3 rounded-full text-[#38bdf8] bg-[#170f4a]/50 hover:bg-[#170f4a] transition-all border border-[#38bdf8]/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Free Restaurant Plan</span>
            </a>
          </div>

          {/* Social Quick Connect */}
          <div className="pt-2 flex items-center gap-3 text-xs font-mono-code text-[#aaa8dc]">
            <span className="text-[#38bdf8]">Connect:</span>
            <a
              href={`https://wa.me/8801784030922?text=${encodeURIComponent('Hi Sakil, I found your portfolio and want to discuss marketing for my restaurant.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#110c33] border border-[#302a7c] hover:border-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <span>WhatsApp</span>
            </a>
            <a
              href={profile.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#110c33] border border-[#302a7c] hover:border-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <span>Facebook</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#110c33] border border-[#302a7c] hover:border-sky-500 hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#110c33] border border-[#302a7c] hover:border-pink-500 hover:text-pink-400 transition-colors flex items-center gap-1.5"
            >
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Right photo column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            {/* The rotating gradient card border with 3D Parallax */}
            <div
              className="animated-card-border p-2.5 aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl shadow-[#8b5cf6]/20 group transition-transform duration-200 ease-out will-change-transform"
              style={{
                transform: `perspective(900px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg) translateY(${scrollY * -0.05}px)`
              }}
            >
              <div className="w-full h-full rounded-[18px] bg-[#110c33] overflow-hidden flex flex-col items-center justify-center relative">
                {profile.photoUrl ? (
                  <img
                    src={profile.photoUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center p-6 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#38bdf8] flex items-center justify-center mb-4 shadow-inner shadow-black/40">
                      <span className="font-display text-4xl font-extrabold text-white tracking-wider">SZ</span>
                    </div>
                    <b className="font-display text-2xl font-bold text-white block">Sakil Ahmed</b>
                    <span className="text-[#38bdf8] font-mono-code text-xs mt-1">Campaign Manager</span>
                    <small className="text-[#aaa8dc] font-mono-code text-xs block mt-3 max-w-[200px]">
                      Upload your real portrait to showcase directly to restaurant owners
                    </small>
                  </div>
                )}

                {/* Direct photo overlay when hover or editing */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                    className="font-mono-code text-xs font-semibold px-4 py-2 rounded-full bg-[#38bdf8] text-[#05111f] flex items-center gap-1.5 hover:bg-sky-300 transition-colors shadow-lg"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Your Photo</span>
                  </button>
                  {profile.photoUrl && (
                    <button
                      onClick={onPhotoRemoved}
                      type="button"
                      className="font-mono-code text-xs text-rose-300 hover:text-rose-100 underline mt-1"
                    >
                      Reset to default avatar
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Floating badge with parallax */}
            <div
              className="absolute -top-3.5 -right-3 bg-[#60a5fa] text-[#050b26] font-mono-code text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg shadow-sky-500/20 border border-white/20 transition-transform duration-200 ease-out will-change-transform pointer-events-none"
              style={{
                transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16 - scrollY * 0.06}px, 0) rotate(6deg)`
              }}
            >
              ✦ 21+ UK restaurants
            </div>

            {/* Quick upload button below card */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="photoInput"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                type="button"
                className="font-mono-code text-xs font-semibold px-4 py-2 rounded-full bg-[#170f4a] text-[#38bdf8] border border-[#302a7c] hover:bg-[#22166d] flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Camera className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{profile.photoUrl ? "Change Photo" : "Upload Sakil's Photo"}</span>
              </button>
              {profile.photoUrl && (
                <button
                  onClick={onPhotoRemoved}
                  type="button"
                  title="Remove custom photo"
                  className="font-mono-code text-xs px-2.5 py-2 rounded-full bg-[#170f4a] text-[#aaa8dc] border border-[#302a7c] hover:text-white"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
