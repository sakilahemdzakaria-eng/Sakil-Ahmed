import React from 'react';
import { useParallax } from '../hooks/useParallax';

export const ParallaxBackground: React.FC = () => {
  const { scrollY, mousePos } = useParallax();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Parallax Layer 1: Deep Slow Ambient Glowing Orbs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/15 blur-[120px] will-change-transform transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${scrollY * 0.12 + mousePos.y * 20}px, 0)`
        }}
      />

      <div
        className="absolute top-[35%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#38bdf8]/12 blur-[130px] will-change-transform transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -25}px, ${scrollY * -0.08 + mousePos.y * -15}px, 0)`
        }}
      />

      <div
        className="absolute top-[70%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#60a5fa]/10 blur-[140px] will-change-transform transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 15}px, ${scrollY * 0.09}px, 0)`
        }}
      />

      {/* Parallax Layer 2: Drifting Midground Geometric & Floating Particles */}
      <div
        className="absolute top-[20%] left-[8%] w-24 h-24 rounded-2xl border border-[#8b5cf6]/20 bg-[#170f4a]/20 backdrop-blur-[2px] rotate-12 will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 18}px, ${scrollY * -0.2 + mousePos.y * 12}px, 0) rotate(${12 + scrollY * 0.02}deg)`
        }}
      />

      <div
        className="absolute top-[45%] right-[6%] w-20 h-20 rounded-full border border-[#38bdf8]/20 bg-[#110c33]/30 backdrop-blur-[2px] will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * -20}px, ${scrollY * -0.28 + mousePos.y * -10}px, 0)`
        }}
      />

      <div
        className="absolute top-[65%] left-[5%] w-16 h-16 rounded-xl border border-[#60a5fa]/25 rotate-45 will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${scrollY * -0.22}px, 0) rotate(${45 + scrollY * -0.03}deg)`
        }}
      />

      <div
        className="absolute top-[85%] right-[15%] w-28 h-28 rounded-3xl border border-[#8b5cf6]/20 bg-[#170f4a]/20 will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * -15}px, ${scrollY * -0.18}px, 0) rotate(${-15 + scrollY * 0.02}deg)`
        }}
      />

      {/* Parallax Layer 3: Subtle Crosshairs & Sparkle Accents */}
      <div
        className="absolute top-[28%] right-[22%] text-[#8b5cf6]/30 text-xl font-mono-code will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 30}px, ${scrollY * -0.35}px, 0)`
        }}
      >
        ✦
      </div>

      <div
        className="absolute top-[52%] left-[18%] text-[#38bdf8]/30 text-lg font-mono-code will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * -25}px, ${scrollY * -0.32}px, 0)`
        }}
      >
        ✦
      </div>

      <div
        className="absolute top-[78%] left-[30%] text-[#60a5fa]/25 text-xl font-mono-code will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${scrollY * -0.25}px, 0)`
        }}
      >
        ✦
      </div>
    </div>
  );
};
