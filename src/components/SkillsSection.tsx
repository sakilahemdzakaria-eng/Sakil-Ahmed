import React, { useState } from 'react';
import { Sparkles, Layers, Sliders, Check } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'marketing' | 'communication' | 'core'>('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const tools = [
    "Meta Business Suite",
    "Instagram Reels",
    "Facebook Ads Manager",
    "Google Meet & Zoom",
    "WhatsApp Business API",
    "Canva Pro & Visual Layouts",
    "Local UK Geo-Targeting"
  ];

  return (
    <section id="skills" className="pt-20 pb-6">
      <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
        <div className="flex items-baseline gap-4 flex-wrap">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Skills
          </h2>
          <span className="font-mono-code text-xs md:text-sm text-[#38bdf8] uppercase tracking-widest">
            What I do best
          </span>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#110c33] border border-[#302a7c]">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`font-mono-code text-xs px-3 py-1 rounded-full transition-colors ${
              activeCategory === 'all' ? 'bg-[#8b5cf6] text-white font-bold' : 'text-[#aaa8dc] hover:text-white'
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('marketing')}
            className={`font-mono-code text-xs px-3 py-1 rounded-full transition-colors ${
              activeCategory === 'marketing' ? 'bg-[#8b5cf6] text-white font-bold' : 'text-[#aaa8dc] hover:text-white'
            }`}
          >
            Marketing
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('communication')}
            className={`font-mono-code text-xs px-3 py-1 rounded-full transition-colors ${
              activeCategory === 'communication' ? 'bg-[#8b5cf6] text-white font-bold' : 'text-[#aaa8dc] hover:text-white'
            }`}
          >
            Communication
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('core')}
            className={`font-mono-code text-xs px-3 py-1 rounded-full transition-colors ${
              activeCategory === 'core' ? 'bg-[#8b5cf6] text-white font-bold' : 'text-[#aaa8dc] hover:text-white'
            }`}
          >
            Sales & Core
          </button>
        </div>
      </div>

      {/* Interactive skill chips */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="animated-card-border px-5 py-3 rounded-full font-display font-bold text-sm sm:text-base text-white hover:-translate-y-1 hover:-rotate-1 transition-all cursor-default shadow-sm"
          >
            {skill.name}
          </span>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="p-5 rounded-2xl bg-[#110c33]/90 border border-[#302a7c]/70 hover:border-[#8b5cf6]/60 transition-colors"
          >
            <div className="flex justify-between items-center font-mono-code text-xs sm:text-sm mb-2.5">
              <span className="text-[#eeeeff] font-semibold">{skill.name}</span>
              <span className="text-[#38bdf8] font-bold">{skill.percentage}%</span>
            </div>
            <div className="h-2.5 bg-[#170f4a] rounded-full overflow-hidden border border-[#302a7c]/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#38bdf8] to-[#60a5fa] transition-all duration-1000 ease-out"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Workflow Pills */}
      <div className="mt-8 p-6 rounded-2xl bg-[#170f4a]/70 border border-[#302a7c]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono-code text-xs text-[#38bdf8]">
          <Sliders className="w-4 h-4 text-[#8b5cf6]" />
          <span className="uppercase tracking-wider">Campaign Stack & Tooling:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="text-xs font-mono-code px-3 py-1 rounded-full bg-[#110c33] text-[#aaa8dc] border border-[#302a7c]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
