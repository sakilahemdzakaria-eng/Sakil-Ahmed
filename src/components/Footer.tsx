import React from 'react';
import { ArrowUp, Heart, Globe, ExternalLink } from 'lucide-react';
import { ProfileData } from '../types';
import { getWhatsAppLink } from '../utils/whatsapp';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 -mx-4 sm:-mx-8 relative bg-gradient-to-b from-[#0a0720] to-[#110c33] border-t border-[#302a7c]/60">
      {/* Animated flowing gradient line */}
      <div className="h-1 flowing-line"></div>

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Sakil Ahmed <span className="text-[#8b5cf6]">Zakaria.</span>
            </div>
            <p className="text-sm text-[#aaa8dc] max-w-sm leading-relaxed">
              Marketer and campaign manager helping UK restaurants get noticed online, drive reservations, and pack tables every week.
            </p>
            <div className="font-mono-code text-xs text-[#38bdf8] pt-1">
              Sylhet, Bangladesh ➔ United Kingdom
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono-code text-xs uppercase tracking-widest text-[#38bdf8] font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#aaa8dc] font-mono-code">
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-all">About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white hover:underline transition-all">Experience</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white hover:underline transition-all">Campaigns</a>
              </li>
              <li>
                <a href="#planner" className="hover:text-white hover:underline transition-all">Growth Tool</a>
              </li>
              <li>
                <a href="#education" className="hover:text-white hover:underline transition-all">Education</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white hover:underline transition-all">Skills</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white hover:underline transition-all">Reviews</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono-code text-xs uppercase tracking-widest text-[#38bdf8] font-bold">
              Connect & Work
            </h4>
            <ul className="space-y-2.5 text-sm text-[#aaa8dc]">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink(profile.whatsapp, 'Hi Sakil, I found your portfolio and want to connect.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href={profile.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook Profile</span>
                  <ExternalLink className="w-3 h-3 text-[#38bdf8]" />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn Network</span>
                  <ExternalLink className="w-3 h-3 text-[#38bdf8]" />
                </a>
              </li>
              <li>
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram (@sakilzakaria123)</span>
                  <ExternalLink className="w-3 h-3 text-pink-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#302a7c]/50 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#aaa8dc]">
          <div>
            © {new Date().getFullYear()} Sakil Ahmed Zakaria. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[#60a5fa]">
            <span>Made with passion in Sylhet, Bangladesh</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-[#38bdf8] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
