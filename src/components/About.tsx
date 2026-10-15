import React from 'react';

export const About: React.FC = () => {
  const stats = [
    { value: '21+', label: 'UK restaurants served' },
    { value: '14', label: 'Campaigns launched' },
    { value: '2', label: 'Roles held' },
    { value: '4', label: 'Core skills' },
  ];

  return (
    <section className="card bg-[#0a0a0a] text-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8">
        <h2 className="font-display text-[clamp(90px,17vw,240px)] m-0 leading-none">
          <i className="not-italic inline-block -skew-x-12 mr-[0.05em] text-[#555]">/</i>
          About
        </h2>
        <div>
          <svg
            className="w-[clamp(70px,10vw,140px)] text-[#555] my-5"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 80 80 20M30 20h50v50" />
          </svg>
          <div className="space-y-4 text-[#cfcfd2] text-sm max-w-[560px] leading-relaxed">
            <p>
              I&apos;m Sakil Ahmed Zakaria, a marketer from Sylhet, Bangladesh. I run social media and campaigns for restaurants in the UK, and I know the people, the menus and the busy nights that fill their tables.
            </p>
            <p>
              I plan the offer, write the posts, handle the replies and track what turns into orders. Clear plans, quick answers and content that sells.
            </p>
            <p className="text-[11px] font-bold text-[#888] tracking-wider uppercase pt-3">
              Currently managing campaigns for UK restaurants
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8.5 pt-6 border-t border-dashed border-[#555]">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <b className="block font-display text-[clamp(48px,6vw,84px)] leading-none text-white">
              {stat.value}
            </b>
            <small className="text-[#9a9a9f] text-xs mt-1 block">
              {stat.label}
            </small>
          </div>
        ))}
      </div>
    </section>
  );
};
