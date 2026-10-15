import React from 'react';

export const Education: React.FC = () => {
  return (
    <section className="card bg-[#0a0a0a] text-white" id="education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 items-end">
        <div>
          <p className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-2">
            Education
          </p>
          <h2 className="font-display text-[clamp(50px,8vw,110px)] m-0 leading-none text-white">
            Bachelor of Arts, Bangla
          </h2>
        </div>
        <div className="text-[#cfcfd2] max-w-[480px] text-sm leading-relaxed">
          <p className="mt-0 mb-3">
            My mother tongue is Bangla, and I can communicate fluently in both UK and US English. I also achieved an IELTS score of 6.0, which reflects my ability to communicate effectively in English in both professional and everyday settings.
          </p>
          <p className="text-[11px] font-bold text-[#888] uppercase tracking-wider m-0">
            Languages: Bangla (Native) • English (Fluent — UK &amp; US) • IELTS Score: 6.0
          </p>
        </div>
      </div>
    </section>
  );
};
