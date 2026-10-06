import React from 'react';
import { Utensils, TrendingUp, Sparkles, MapPin, Eye, CheckCircle } from 'lucide-react';
import { CampaignCaseStudy } from '../types';

interface CaseStudiesSectionProps {
  caseStudies: CampaignCaseStudy[];
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ caseStudies }) => {
  return (
    <section id="case-studies" className="pt-20 pb-6">
      <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
        <div>
          <div className="flex items-baseline gap-4 flex-wrap">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              UK Campaigns
            </h2>
            <span className="font-mono-code text-xs md:text-sm text-[#38bdf8] uppercase tracking-widest">
              Proven Results
            </span>
          </div>
          <p className="text-[#aaa8dc] text-sm sm:text-base mt-2 max-w-2xl">
            Real campaign strategies executed for UK hospitality clients, driving table bookings, footfall, and high-margin direct orders.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono-code text-xs text-[#38bdf8] bg-[#170f4a] px-3.5 py-1.5 rounded-full border border-[#302a7c]">
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>21+ Active Restaurants</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            className="animated-card-border p-6 rounded-2xl bg-[#170f4a]/90 flex flex-col justify-between hover:scale-[1.01] transition-transform"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono-code text-xs px-2.5 py-1 rounded-full bg-[#110c33] text-[#38bdf8] border border-[#302a7c]">
                  {cs.cuisine}
                </span>
                <span className="flex items-center gap-1 font-mono-code text-xs text-[#aaa8dc]">
                  <MapPin className="w-3 h-3 text-[#8b5cf6]" />
                  {cs.location}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight">
                {cs.title}
              </h3>
              
              <div className="text-xs font-mono-code text-[#60a5fa] mb-4">
                Client: {cs.restaurant}
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#aaa8dc] mb-5">
                <div className="p-3 rounded-xl bg-[#110c33]/70 border border-[#302a7c]/50">
                  <span className="text-white font-semibold block text-xs mb-1 font-mono-code text-amber-300">
                    Challenge:
                  </span>
                  {cs.challenge}
                </div>
                <div className="p-3 rounded-xl bg-[#110c33]/70 border border-[#302a7c]/50">
                  <span className="text-white font-semibold block text-xs mb-1 font-mono-code text-sky-300">
                    Sakil's Solution:
                  </span>
                  {cs.solution}
                </div>
              </div>
            </div>

            <div>
              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#110c33] border border-[#302a7c] mb-4">
                {cs.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <b className="font-display text-sm sm:text-base font-extrabold text-[#38bdf8] block leading-none">
                      {m.value}
                    </b>
                    <span className="text-[10px] text-[#aaa8dc] font-mono-code block mt-1 line-clamp-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cs.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#170f4a] text-[#aaa8dc] border border-[#302a7c]/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
