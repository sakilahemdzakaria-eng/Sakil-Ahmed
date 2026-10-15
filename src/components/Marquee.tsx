import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Social Media Marketing',
    'Campaign Management',
    'Salesmanship',
    'UK Restaurant PR',
  ];

  return (
    <div
      className="bg-[#0a0a0a] text-white rounded-card mt-4.5 overflow-hidden py-5 select-none"
      aria-label="Services"
    >
      <div className="flex w-max animate-marquee gap-8.5 text-[clamp(28px,4vw,48px)] items-center whitespace-nowrap font-display">
        {/* Render twice for continuous loop */}
        {[0, 1].map((copyIndex) => (
          <React.Fragment key={copyIndex}>
            {items.map((item, idx) => (
              <React.Fragment key={`${copyIndex}-${idx}`}>
                <span>{item}</span>
                <span className="text-[0.8em] font-normal text-amber-300">✸</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
