import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-5 text-[#0a0a0a]">
      <h2 className="font-display text-[clamp(46px,13.2vw,190px)] whitespace-nowrap -mx-0.5 text-center leading-none select-none text-[#0a0a0a]">
        Sakil Ahmed Zakaria
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-7 text-[13px] py-7.5 pb-2.5 border-t border-[#888] mt-7.5">
        <div>
          <h4 className="m-0 mb-2.5 text-[11px] text-[#6b6c70] tracking-wider uppercase font-bold">
            Sakil Ahmed Zakaria
          </h4>
          <p className="mt-1.5 m-0 max-w-[340px] text-[#3a3a3c] leading-relaxed">
            Social media and campaign manager for UK restaurants, working from Sylhet, Bangladesh.
          </p>
        </div>

        <div>
          <h4 className="m-0 mb-2.5 text-[11px] text-[#6b6c70] tracking-wider uppercase font-bold">
            Navigate
          </h4>
          <div className="flex flex-col gap-1">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#work" className="hover:underline">Campaigns</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#reviews" className="hover:underline">Reviews</a>
            <a href="#planner" className="hover:underline">ROI Planner</a>
            <a
              href="/sakil-ahmed-portfolio.zip"
              download="sakil-ahmed-portfolio.zip"
              className="text-emerald-700 font-bold hover:underline"
            >
              Download Project ZIP ↓
            </a>
          </div>
        </div>

        <div>
          <h4 className="m-0 mb-2.5 text-[11px] text-[#6b6c70] tracking-wider uppercase font-bold">
            Contact
          </h4>
          <div className="flex flex-col gap-1">
            <a href="mailto:sakilahemdzakaria@gmail.com" className="hover:underline">
              sakilahemdzakaria@gmail.com
            </a>
            <a
              href="https://wa.me/447448392391"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp: +44 7448 392391
            </a>
            <a href="tel:+447448392391" className="hover:underline">
              Call +44 7448 392391
            </a>
            <span className="text-[#6b6c70]">Sylhet, Bangladesh</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-2.5 text-[11px] py-4 pb-7 text-[#6b6c70] border-t border-black/10 mt-4">
        <span>© 2026 Sakil Ahmed Zakaria. All rights reserved.</span>
        <span>Sylhet, Bangladesh · UK Remote Specialist</span>
      </div>
    </footer>
  );
};
