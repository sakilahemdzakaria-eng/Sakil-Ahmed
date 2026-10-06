import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { JobExperience } from '../types';

interface ExperienceSectionProps {
  experiences: JobExperience[];
  isEditing: boolean;
  onUpdateExperience: (id: string, updated: Partial<JobExperience>) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  isEditing,
  onUpdateExperience
}) => {
  return (
    <section id="experience" className="pt-20 pb-6">
      <div className="flex items-baseline gap-4 flex-wrap mb-10">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Experience
        </h2>
        <span className="font-mono-code text-xs md:text-sm text-[#38bdf8] uppercase tracking-widest">
          Newest first
        </span>
      </div>

      <div className="relative pl-6 sm:pl-10 space-y-10">
        {/* Continuous gradient timeline stem */}
        <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-[#8b5cf6] via-[#38bdf8] to-[#60a5fa] rounded-full pointer-events-none"></div>

        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="relative animated-card-border p-6 sm:p-8 rounded-2xl bg-[#170f4a]/90 group transition-all"
          >
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[43px] top-8 w-5 h-5 rounded-full bg-[#0a0720] border-4 border-[#8b5cf6] shadow-md shadow-[#8b5cf6]/50"></div>

            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-2 font-mono-code text-xs sm:text-sm text-[#38bdf8]">
                <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{exp.period}</span>
              </div>
              {exp.isCurrent && (
                <span className="font-mono-code text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#8b5cf6] text-white tracking-wider animate-pulse">
                  NOW · ACTIVE ROLE
                </span>
              )}
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-1 flex items-center gap-2 flex-wrap">
              {isEditing ? (
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => onUpdateExperience(exp.id, { role: e.target.value })}
                  className="bg-[#110c33] border border-[#302a7c] px-3 py-1 rounded text-white text-xl"
                />
              ) : (
                <span>{exp.role}</span>
              )}
            </h3>

            <div className="flex items-center gap-2 text-base font-semibold text-[#60a5fa] mb-1">
              <Building2 className="w-4 h-4 text-[#8b5cf6]" />
              {isEditing ? (
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => onUpdateExperience(exp.id, { company: e.target.value })}
                  className="bg-[#110c33] border border-[#302a7c] px-2 py-0.5 rounded text-white text-sm"
                />
              ) : (
                <span>{exp.company}</span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#aaa8dc] font-mono-code mb-5">
              <MapPin className="w-3.5 h-3.5 text-[#aaa8dc]" />
              <span>{exp.location}</span>
            </div>

            {/* Bullet points */}
            <ul className="space-y-2.5 text-[#aaa8dc] text-sm sm:text-base">
              {exp.bulletPoints.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3">
                  <span className="text-[#8b5cf6] text-lg leading-none mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {exp.id === "exp-1" && (
              <div className="mt-6 pt-4 border-t border-[#302a7c]/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono-code text-[#38bdf8]">Core focus areas:</span>
                {["21+ UK Restaurants", "Live Client Calls", "Meta Campaigns", "Content Scheduling", "Weekend Promotions"].map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-[#110c33] text-[#eeeeff] border border-[#302a7c]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
