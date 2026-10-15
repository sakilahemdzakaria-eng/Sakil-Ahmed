import React, { useState } from 'react';
import { CAMPAIGNS } from '../data/portfolioData';

export const Campaigns: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="card !bg-transparent !px-0" id="work">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center">
        <p className="text-[clamp(18px,2.2vw,26px)] font-medium leading-[1.35] max-w-[560px] m-0 text-[#0a0a0a]">
          UK restaurant campaigns built to fill tables and push takeaway orders.
        </p>
        <a
          className="w-[112px] h-[112px] border border-[#aaa] rounded-full grid place-items-center text-center text-[13px] font-medium leading-[1.2] transition-colors duration-200 hover:bg-[#0a0a0a] hover:text-white text-[#0a0a0a] self-start md:self-auto"
          href="#contact"
        >
          GET IN
          <br />
          TOUCH
        </a>
      </div>

      <p className="text-[11px] font-bold text-[#6b6c70] uppercase tracking-wider mt-8.5 mb-2">
        Selected campaigns
      </p>

      <div className="mt-6.5">
        {CAMPAIGNS.map((camp) => {
          const isSelected = activeId === camp.id;
          return (
            <div
              key={camp.id}
              tabIndex={0}
              onMouseEnter={() => setActiveId(camp.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(isSelected ? null : camp.id)}
              onFocus={() => setActiveId(camp.id)}
              onBlur={() => setActiveId(null)}
              className="group grid grid-cols-[1fr_auto] gap-4.5 items-center border-t border-dashed border-[#999] last:border-b py-3 md:py-2.5 relative cursor-pointer outline-none focus-visible:bg-black/5"
            >
              <h3 className="font-display m-0 text-[clamp(44px,8vw,104px)] leading-none text-[#16213a] transition-transform duration-250 group-hover:translate-x-3.5">
                {camp.title}
              </h3>
              <span className="text-sm font-medium text-right text-[#0a0a0a] whitespace-nowrap pl-2">
                {camp.type}
              </span>

              {/* Floating preview badge on hover or active on mobile */}
              <div
                className={`hidden md:block absolute right-[22%] top-1/2 w-[230px] -translate-y-1/2 bg-[#0a0a0a] text-white rounded-xl p-4 text-xs transition-all duration-250 z-20 pointer-events-none shadow-xl ${
                  isSelected
                    ? 'opacity-100 scale-100 -rotate-3'
                    : 'opacity-0 scale-90 -rotate-3 group-hover:opacity-100 group-hover:scale-100'
                }`}
              >
                <b className="block font-display text-[28px] leading-none mb-1.5 text-[#e4ff6a]">
                  {camp.previewTitle}
                </b>
                <p className="m-0 text-[#ddd] leading-relaxed">
                  {camp.previewDescription}
                </p>
              </div>

              {/* Mobile expanded preview info */}
              {isSelected && (
                <div className="md:hidden col-span-2 bg-[#0a0a0a] text-white rounded-xl p-3.5 my-2">
                  <b className="block font-display text-xl text-[#e4ff6a] mb-1">
                    {camp.previewTitle}
                  </b>
                  <p className="text-xs text-[#ddd] m-0">
                    {camp.previewDescription}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
