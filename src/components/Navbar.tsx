import React from 'react';
import { Sparkles, Edit3, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeMode } from '../types';

interface NavbarProps {
  isEditing: boolean;
  onToggleEdit: () => void;
  onOpenSettingsModal: () => void;
  whatsappNumber: string;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isEditing,
  onToggleEdit,
  onOpenSettingsModal,
  whatsappNumber,
  theme,
  onThemeChange
}) => {
  return (
    <nav className="sticky top-0 z-40 py-5 bg-[#0a0720]/80 backdrop-blur-md border-b border-[#302a7c]/40 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <a href="#top" className="flex items-center gap-2.5 font-display font-extrabold text-xl tracking-tight text-[#eeeeff] hover:text-[#38bdf8] transition-colors group">
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8b5cf6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8b5cf6]"></span>
          </span>
          <span>Sakil A. Zakaria</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#170f4a] text-[#38bdf8] border border-[#302a7c] font-mono-code font-normal hidden sm:inline-block">
            UK Restaurant Marketer
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1 font-mono-code text-[13px] text-[#aaa8dc]">
          <a href="#about" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all">About</a>
          <a href="#video-intro" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all text-[#38bdf8]">Video</a>
          <a href="#experience" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all">Experience</a>
          <a href="#case-studies" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all">Campaigns</a>
          <a href="#planner" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all">Growth Tool</a>
          <a href="#education" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all">Education</a>
          <a href="#skills" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all">Skills</a>
          <a href="#reviews" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all">Reviews</a>
          <a href="#contact" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-[#170f4a] transition-all">Contact</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Switcher Toggle (Deep Space / Light / High Contrast) */}
          <ThemeSwitcher currentTheme={theme} onThemeChange={onThemeChange} compact />

          <button
            onClick={onToggleEdit}
            type="button"
            className={`font-mono-code text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm ${
              isEditing
                ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 ring-2 ring-emerald-300'
                : 'bg-[#170f4a] text-[#38bdf8] border border-[#302a7c] hover:bg-[#201569]'
            }`}
            title="Edit texts directly on the page"
          >
            {isEditing ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Done Editing</span>
              </>
            ) : (
              <>
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Text</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppLink(whatsappNumber, 'Hi Sakil, I am a restaurant owner interested in your campaign management.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-display font-bold text-xs shadow-md shadow-[#8b5cf6]/30 transition-all hover:-translate-y-0.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Quick WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
