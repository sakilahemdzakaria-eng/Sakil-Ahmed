import React from 'react';
import { Moon, Sun, Eye, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface ThemeSwitcherProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  compact?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme,
  onThemeChange,
  compact = false
}) => {
  const themes: { id: ThemeMode; label: string; shortLabel: string; icon: React.ReactNode }[] = [
    {
      id: 'deep-space',
      label: 'Deep Space',
      shortLabel: 'Space',
      icon: <Moon className="w-3.5 h-3.5" />
    },
    {
      id: 'light',
      label: 'Light Mode',
      shortLabel: 'Light',
      icon: <Sun className="w-3.5 h-3.5" />
    },
    {
      id: 'high-contrast',
      label: 'High Contrast',
      shortLabel: 'Contrast',
      icon: <Eye className="w-3.5 h-3.5" />
    }
  ];

  if (compact) {
    return (
      <div className="flex items-center p-1 rounded-full bg-[#110c33] border border-[#302a7c] text-xs font-mono-code shadow-sm">
        {themes.map((t) => {
          const isActive = currentTheme === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onThemeChange(t.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#8b5cf6] text-white font-bold shadow-sm'
                  : 'text-[#aaa8dc] hover:text-white hover:bg-[#170f4a]'
              }`}
              title={`Switch to ${t.label}`}
            >
              {t.icon}
              <span className="hidden xl:inline text-[11px]">{t.shortLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#110c33] border border-[#302a7c] shadow-md font-mono-code text-xs">
      {themes.map((t) => {
        const isActive = currentTheme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onThemeChange(t.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              isActive
                ? 'bg-[#8b5cf6] text-white font-bold shadow-md shadow-[#8b5cf6]/30'
                : 'text-[#aaa8dc] hover:text-white hover:bg-[#170f4a]'
            }`}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};
