import React from 'react';
import { User, Globe, Briefcase, Award, Clock, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { ProfileData, StatItem } from '../types';
import { useCountUp } from '../hooks/useCountUp';
import { useParallax } from '../hooks/useParallax';

interface AboutSectionProps {
  profile: ProfileData;
  stats: StatItem[];
  isEditing: boolean;
  onUpdateField: (field: keyof ProfileData, value: string) => void;
}

const StatCounter: React.FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
  const currentCount = useCountUp(stat.value, 1500);
  const { scrollY, mousePos } = useParallax();
  const offsetY = (index % 2 === 0 ? 1 : -1) * (mousePos.y * 8);

  return (
    <div
      className="animated-card-border p-6 rounded-2xl bg-[#170f4a]/90 flex flex-col justify-between group hover:scale-[1.02] transition-transform will-change-transform"
      style={{
        transform: `translate3d(0, ${offsetY}px, 0)`
      }}
    >
      <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#38bdf8] leading-none mb-2">
        {currentCount}
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <div className="text-[#aaa8dc] text-sm font-medium leading-snug">
        {stat.label}
      </div>
    </div>
  );
};

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  stats,
  isEditing,
  onUpdateField
}) => {
  return (
    <section id="about" className="pt-16 pb-6">
      {/* Section Header */}
      <div className="flex items-baseline gap-4 flex-wrap mb-8">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          About me
        </h2>
        <span className="font-mono-code text-xs md:text-sm text-[#38bdf8] uppercase tracking-widest">
          Who I am
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Bio narrative */}
        <div className="lg:col-span-7 animated-card-border p-8 rounded-2xl bg-[#170f4a]/90 space-y-6">
          <div className="flex items-center gap-2 text-sm font-mono-code text-[#60a5fa]">
            <User className="w-4 h-4 text-[#8b5cf6]" />
            <span>Story & Background</span>
          </div>

          <div className="text-[#aaa8dc] text-base sm:text-lg leading-relaxed space-y-4">
            {isEditing ? (
              <>
                <textarea
                  value={profile.aboutText1}
                  onChange={(e) => onUpdateField('aboutText1', e.target.value)}
                  rows={4}
                  className="w-full bg-[#110c33] border border-[#302a7c] rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                />
                <textarea
                  value={profile.aboutText2}
                  onChange={(e) => onUpdateField('aboutText2', e.target.value)}
                  rows={4}
                  className="w-full bg-[#110c33] border border-[#302a7c] rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                />
              </>
            ) : (
              <>
                <p>
                  I'm <strong className="text-white font-semibold">{profile.name}</strong>, a marketer from Sylhet. I manage day-to-day social media and campaigns for restaurants in the UK, and I'm comfortable on live client calls where requirements change fast.
                </p>
                <p>
                  Before marketing I worked as a <strong className="text-white font-semibold">Senior Sales Executive</strong> in perfumes, which taught me how to read customers and close. I'm studying Bangla language, literature and culture at university, and I've shown my English skills through IELTS.
                </p>
              </>
            )}
          </div>

          {/* Core Strengths Chips */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#110c33]/80 border border-[#302a7c]/70 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-[#8b5cf6]/20 text-[#8b5cf6] mt-0.5">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <b className="text-xs font-mono-code text-white block uppercase tracking-wide">Live UK Client Calls</b>
                <span className="text-xs text-[#aaa8dc]">Direct Zoom/Google Meet calls with British owners & managers.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#110c33]/80 border border-[#302a7c]/70 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-[#38bdf8]/20 text-[#38bdf8] mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <b className="text-xs font-mono-code text-white block uppercase tracking-wide">Sales Background</b>
                <span className="text-xs text-[#aaa8dc]">14 months in luxury perfume retail, translating into strong ad copy & offers.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick facts card */}
        <div className="lg:col-span-5 animated-card-border p-8 rounded-2xl bg-[#170f4a]/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#302a7c]/60 mb-5">
              <span className="font-mono-code text-xs uppercase text-[#38bdf8] tracking-wider">Quick Details</span>
              <span className="font-mono-code text-xs text-[#8b5cf6] bg-[#8b5cf6]/10 px-2.5 py-1 rounded-full border border-[#8b5cf6]/30">
                Verified Profile
              </span>
            </div>

            <div className="space-y-4 font-mono-code text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-[#302a7c]/40">
                <span className="text-xs text-[#aaa8dc] uppercase tracking-wider">Name</span>
                <b className="font-semibold text-white font-sans">{profile.name}</b>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-[#302a7c]/40">
                <span className="text-xs text-[#aaa8dc] uppercase tracking-wider">Profession</span>
                <b className="font-semibold text-[#38bdf8]">{profile.profession} & Campaign Mgr</b>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-[#302a7c]/40">
                <span className="text-xs text-[#aaa8dc] uppercase tracking-wider">Specialty</span>
                <b className="font-semibold text-emerald-400">UK Restaurant Growth</b>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-[#302a7c]/40">
                <span className="text-xs text-[#aaa8dc] uppercase tracking-wider">Based in</span>
                <b className="font-semibold text-white">{profile.basedIn}</b>
              </div>

              <div className="flex justify-between items-center pb-1">
                <span className="text-xs text-[#aaa8dc] uppercase tracking-wider">Serving</span>
                <b className="font-semibold text-[#60a5fa]">{profile.serving}</b>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-[#302a7c]/60 flex items-center justify-between">
            <span className="text-xs text-[#aaa8dc] font-mono-code">Status:</span>
            <span className="text-xs font-mono-code text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Managing 21+ Active Accounts
            </span>
          </div>
        </div>
      </div>

      {/* Numbers Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {stats.map((stat, idx) => (
          <StatCounter key={stat.id} stat={stat} index={idx} />
        ))}
      </div>
    </section>
  );
};
