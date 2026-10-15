import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header
      id="top"
      className="relative min-h-[min(86vh,760px)] bg-[#cfd0d4] rounded-card mt-3.5 overflow-hidden flex flex-col justify-end"
    >
      {/* Role tag top-left */}
      <div className="absolute left-7 top-7 font-medium text-[15px] leading-[1.35] text-[#0a0a0a] z-10">
        Campaign Manager
        <br />
        &amp; Senior Sales Executive
      </div>

      {/* Animated big background typography */}
      <div
        className="absolute left-0 right-0 bottom-[6%] md:bottom-[6%] whitespace-nowrap text-[clamp(120px,27vw,400px)] flex gap-[0.08em] animate-slide pointer-events-none select-none font-display text-[#0a0a0a]/90 leading-none z-0"
        aria-hidden="true"
      >
        <span>Sakil Ahmed Zakaria</span>
        <span>Sakil Ahmed Zakaria</span>
        <span>Sakil Ahmed Zakaria</span>
      </div>

      {/* Accessible h1 */}
      <h1 className="sr-only">Sakil Ahmed Zakaria — Campaign Manager</h1>

      {/* Tag description bottom-left */}
      <div className="hidden sm:block absolute left-7 bottom-6.5 z-10 text-xs max-w-[260px] font-medium text-[#0a0a0a] leading-relaxed">
        Live social media and campaigns for UK restaurants, run from Sylhet, Bangladesh.
      </div>

      {/* Portrait card in center */}
      <div className="relative z-10 self-center w-[min(300px,62vw)] aspect-[3/4] bg-gradient-to-b from-[#2a2d35] to-[#0a0a0a] rounded-t-[150px] grid place-items-end justify-center overflow-hidden text-white shadow-2xl">
        <span
          className="font-display text-[120px] leading-none opacity-90 pb-7 select-none"
          aria-hidden="true"
        >
          SZ
        </span>
        <img
          src="/images/portrait.jpg"
          alt="Portrait of Sakil Ahmed Zakaria"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ objectPosition: '50% 12%' }}
          onError={(e) => {
            // Fallback gracefully if image fails to load
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {/* Scroll down indicator bottom-right */}
      <div className="absolute right-7 bottom-6.5 z-10 text-xs text-center font-medium text-[#0a0a0a]">
        Scroll down
        <i
          className="block w-px h-[34px] bg-[#0a0a0a] mx-auto mt-1.5 animate-pulse"
          aria-hidden="true"
        />
      </div>
    </header>
  );
};
