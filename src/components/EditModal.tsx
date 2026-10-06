import React from 'react';
import { X, Save, RotateCcw, Download, Sparkles, User, Mail, Phone, MapPin, Palette } from 'lucide-react';
import { ProfileData, ThemeMode } from '../types';
import { ThemeSwitcher } from './ThemeSwitcher';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSaveProfile: (updated: ProfileData) => void;
  onResetToDefaults: () => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetToDefaults,
  theme,
  onThemeChange
}) => {
  const [formData, setFormData] = React.useState<ProfileData>(profile);

  React.useEffect(() => {
    setFormData(profile);
  }, [profile]);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'sakil_portfolio_data.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#110c33] border-2 border-[#8b5cf6]/60 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#aaa8dc] hover:text-white p-2 rounded-full hover:bg-[#170f4a]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 font-mono-code text-xs text-[#38bdf8]">
          <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
          <span>Portfolio Editor & Personalizer</span>
        </div>
        <h3 className="font-display font-extrabold text-2xl text-white mb-4">
          Update Profile Information
        </h3>

        {/* Theme Mode Selector inside Settings */}
        <div className="mb-6 p-4 rounded-2xl bg-[#170f4a]/60 border border-[#302a7c] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#8b5cf6]" />
            <div>
              <b className="text-xs font-mono-code text-white block">Theme & Appearance</b>
              <span className="text-[11px] text-[#aaa8dc]">Toggle between Deep Space, Light, and High Contrast</span>
            </div>
          </div>
          <ThemeSwitcher currentTheme={theme} onThemeChange={onThemeChange} />
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">First & Middle Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Last Name / Suffix</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Hero Tagline</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Lead Intro</label>
            <textarea
              value={formData.leadBio}
              onChange={(e) => handleChange('leadBio', e.target.value)}
              rows={2}
              className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl p-3 text-sm text-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Phone / WhatsApp</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => {
                  handleChange('phone', e.target.value);
                  handleChange('whatsapp', e.target.value);
                }}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Location</label>
              <input
                type="text"
                value={formData.basedIn}
                onChange={(e) => handleChange('basedIn', e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Serving Target</label>
              <input
                type="text"
                value={formData.serving}
                onChange={(e) => handleChange('serving', e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Facebook URL</label>
              <input
                type="url"
                value={formData.facebookUrl}
                onChange={(e) => handleChange('facebookUrl', e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">LinkedIn Profile URL</label>
              <input
                type="url"
                value={formData.linkedinUrl}
                onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] block mb-1">Instagram Profile URL</label>
              <input
                type="url"
                value={formData.instagramUrl}
                onChange={(e) => handleChange('instagramUrl', e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-[#302a7c] flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onResetToDefaults}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-950/60 text-rose-300 border border-rose-800 text-xs font-mono-code hover:bg-rose-900 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <button
                type="button"
                onClick={handleExportJSON}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#170f4a] text-[#aaa8dc] border border-[#302a7c] text-xs font-mono-code hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Backup JSON</span>
              </button>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono-code text-[#aaa8dc] hover:text-white"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-mono-code font-bold transition-all shadow-md shadow-[#8b5cf6]/30"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
