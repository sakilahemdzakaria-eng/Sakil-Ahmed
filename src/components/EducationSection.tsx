import React from 'react';
import { GraduationCap, Award, BookOpen, Shield, CheckCircle } from 'lucide-react';
import { EducationData } from '../types';

interface EducationSectionProps {
  education: EducationData;
  isEditing: boolean;
  onUpdateEducation: (updated: Partial<EducationData>) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  isEditing,
  onUpdateEducation
}) => {
  return (
    <section id="education" className="pt-20 pb-6">
      <div className="flex items-baseline gap-4 flex-wrap mb-10">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Education
        </h2>
        <span className="font-mono-code text-xs md:text-sm text-[#38bdf8] uppercase tracking-widest">
          Academic foundation
        </span>
      </div>

      <div className="animated-card-border p-6 sm:p-10 rounded-2xl bg-[#170f4a]/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Degree & Activities */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#38bdf8]">
            <GraduationCap className="w-4 h-4 text-[#8b5cf6]" />
            <span>Undergraduate Studies</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            {isEditing ? (
              <input
                type="text"
                value={education.degree}
                onChange={(e) => onUpdateEducation({ degree: e.target.value })}
                className="w-full bg-[#110c33] border border-[#302a7c] px-3 py-1 rounded text-white"
              />
            ) : (
              education.degree
            )}
          </h3>

          <p className="font-semibold text-[#60a5fa] text-base sm:text-lg">
            {isEditing ? (
              <input
                type="text"
                value={education.institution}
                onChange={(e) => onUpdateEducation({ institution: e.target.value })}
                className="w-full bg-[#110c33] border border-[#302a7c] px-3 py-1 rounded text-white text-sm"
              />
            ) : (
              education.institution
            )}
          </p>

          <div className="text-sm sm:text-base text-[#aaa8dc] leading-relaxed">
            {isEditing ? (
              <textarea
                value={education.details}
                onChange={(e) => onUpdateEducation({ details: e.target.value })}
                rows={3}
                className="w-full bg-[#110c33] border border-[#302a7c] rounded-xl p-2.5 text-white"
              />
            ) : (
              <p>{education.details}</p>
            )}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#110c33] border border-[#302a7c] text-xs font-mono-code text-[#eeeeff]">
              <Shield className="w-3.5 h-3.5 text-[#8b5cf6]" />
              <span>Activities: <strong>{education.activities}</strong></span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#110c33] border border-[#302a7c] text-xs font-mono-code text-[#38bdf8]">
              <CheckCircle className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>English Proficiency: <strong>IELTS Certified</strong></span>
            </div>
          </div>
        </div>

        {/* Right: Academic Records / Grades */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono-code uppercase tracking-wider text-[#aaa8dc] mb-1">
            Academic Performance
          </div>

          {education.grades.map((grade, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-[#110c33] p-4 rounded-xl border border-[#302a7c]/70 hover:border-[#8b5cf6]/60 transition-colors"
            >
              <span className="font-mono-code text-xs sm:text-sm text-[#aaa8dc] uppercase tracking-wider">
                {grade.label}
              </span>
              <b className="font-display text-base sm:text-xl font-bold text-[#38bdf8]">
                {grade.score}
              </b>
            </div>
          ))}

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6]/20 to-[#38bdf8]/10 border border-[#8b5cf6]/40 text-xs text-[#aaa8dc] flex items-center gap-2.5 mt-2">
            <Award className="w-4 h-4 text-[#8b5cf6] shrink-0" />
            <span>Proven discipline through BNCC cadet leadership & structured academic standing.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
