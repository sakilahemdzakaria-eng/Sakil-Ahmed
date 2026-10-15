import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="card bg-[#0a0a0a] text-white" id="experience">
      <p className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-4.5">
        Experience
      </p>

      <div className="flex flex-col">
        {EXPERIENCES.map((job, idx) => (
          <article
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-6.5 ${
              idx !== 0 ? 'border-t border-dashed border-[#555]' : 'pt-0'
            }`}
          >
            <time className="text-[#9a9a9f] text-xs leading-relaxed whitespace-pre-line">
              {job.period}
            </time>
            <div>
              <h3 className="font-display text-[clamp(34px,5vw,64px)] m-0 mb-2.5 leading-none text-white">
                {job.title}
              </h3>
              <p className="text-[#cfcfd2] text-sm m-0 mb-3 max-w-[640px] leading-relaxed">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {job.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="border border-[#444] rounded-full px-3 py-0.5 text-xs text-[#ddd] bg-white/[0.03]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
