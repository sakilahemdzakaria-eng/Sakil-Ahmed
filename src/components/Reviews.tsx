import React from 'react';
import { REVIEWS } from '../data/portfolioData';

export const Reviews: React.FC = () => {
  return (
    <section className="card bg-white text-[#0a0a0a]" id="reviews">
      <h2 className="font-display text-[clamp(50px,9vw,120px)] m-0 mb-5 leading-none text-[#0a0a0a]">
        Client reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2.5">
        {REVIEWS.map((rev, idx) => (
          <figure
            key={idx}
            className="m-0 bg-[#f1f1f3] rounded-[20px] p-6 flex flex-col justify-between gap-5 transition-transform duration-200 hover:-translate-y-1 shadow-sm"
          >
            <blockquote className="m-0 text-[15px] text-[#0a0a0a] leading-relaxed italic">
              {rev.quote}
            </blockquote>
            <figcaption className="text-xs font-bold text-[#0a0a0a] border-t border-black/10 pt-3">
              {rev.role}
              <small className="block font-normal text-[#6b6c70] text-[11px] mt-0.5">
                {rev.note}
              </small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
