import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Campaigns', href: '#work' },
    { label: 'Results', href: '#results' },
    { label: 'Skills', href: '#skills' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className="sticky top-3 z-30 mx-auto mt-3.5 max-w-[1204px] rounded-2xl bg-white px-3 py-2.5 shadow-sm transition-all duration-200">
      <div className="flex items-center justify-between gap-5">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-medium whitespace-nowrap text-[#0a0a0a] hover:opacity-80 transition-opacity">
          <b className="grid h-[34px] w-[34px] place-items-center rounded-lg bg-[#0a0a0a] font-display text-sm font-normal text-white">
            SZ
          </b>
          <span>
            Sakil A. <strong className="font-bold">Zakaria</strong>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0 text-xs font-bold text-[#0a0a0a]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-black/60 transition-colors py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/sakil-ahmed-portfolio.zip"
            download="sakil-ahmed-portfolio.zip"
            className="btn-pill !border-emerald-600 !text-emerald-700 hover:!bg-emerald-600 hover:!text-white flex items-center gap-1.5"
            title="Download complete project ZIP file"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Download ZIP</span>
            <span className="sm:hidden">ZIP</span>
          </a>

          <a
            href="#contact"
            className="btn-pill text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
          >
            Hire me
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden p-1.5 rounded-lg text-[#0a0a0a] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-3 pb-2 border-t border-gray-200 mt-2.5">
          <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-xs font-bold text-[#0a0a0a]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-2 py-1.5 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
