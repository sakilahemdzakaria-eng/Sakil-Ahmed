import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageCircle, ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProfileData } from '../types';
import { getWhatsAppLink } from '../utils/whatsapp';

interface ContactSectionProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdateField: (field: keyof ProfileData, value: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  profile,
  isEditing,
  onUpdateField
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  // Interactive inquiry form state
  const [ownerName, setOwnerName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [city, setCity] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [serviceGoal, setServiceGoal] = useState('Full Social Media & Campaign Management');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2200);
  };

  const getInquiryText = () => {
    return `Hi Sakil,
I am sending this inquiry from your portfolio for restaurant marketing:
• Name: ${ownerName || 'Restaurant Owner / Manager'}
• Restaurant: ${restaurantName || 'Our Restaurant'}
• UK City / Area: ${city || 'United Kingdom'}
${clientContact ? `• My Contact: ${clientContact}\n` : ''}• Primary Need: ${serviceGoal}
• Details: ${inquiryNotes || 'Looking to increase table bookings and social presence.'}

Please let me know your availability for a quick call.`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = getInquiryText();
    // Direct link to Sakil's WhatsApp number: 01784030922
    const targetNumber = profile.whatsapp || '8801784030922';
    window.open(getWhatsAppLink(targetNumber, text), '_blank');
    setSubmittedMessage(true);
  };

  const handleSendEmail = () => {
    const text = getInquiryText();
    const subject = `Campaign Inquiry: ${restaurantName || 'UK Restaurant'}`;
    window.open(`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`);
  };

  return (
    <section id="contact" className="pt-20 pb-10">
      <div className="animated-card-border p-8 sm:p-14 rounded-3xl bg-[#170f4a]/95 text-center relative overflow-hidden">
        {/* Soft background light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-2xl mx-auto space-y-4">
          <span className="font-mono-code text-xs text-[#38bdf8] uppercase tracking-widest bg-[#110c33] px-3.5 py-1.5 rounded-full border border-[#302a7c]">
            Get In Touch
          </span>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            {isEditing ? (
              <input
                type="text"
                value="Let's grow your restaurant."
                onChange={() => {}}
                className="bg-transparent border-b border-[#38bdf8] text-center w-full"
              />
            ) : (
              "Let's grow your restaurant."
            )}
          </h2>

          <p className="text-[#aaa8dc] text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Tell me about your business and your goals. I'll reply with a tailored plan for your social media and campaigns.
          </p>

          {/* Quick Contact Pills */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <button
              type="button"
              onClick={() => handleCopy(profile.email, 'email')}
              className="group font-mono-code text-xs sm:text-sm px-5 py-3 rounded-full border-2 border-[#302a7c] bg-[#110c33]/90 hover:bg-[#170f4a] text-[#eeeeff] hover:border-[#8b5cf6] transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#8b5cf6]" />
              <span>{profile.email}</span>
              {copiedField === 'email' ? (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#aaa8dc] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>

            <a
              href={getWhatsAppLink(profile.whatsapp, 'Hi Sakil, I would like to discuss campaign management for my restaurant.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono-code text-xs sm:text-sm px-5 py-3 rounded-full border-2 border-emerald-500/50 bg-[#110c33]/90 hover:bg-emerald-950/40 text-emerald-300 hover:border-emerald-400 transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </a>

            <div className="font-mono-code text-xs sm:text-sm px-5 py-3 rounded-full border-2 border-[#302a7c] bg-[#110c33]/90 text-[#aaa8dc] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#60a5fa]" />
              <span>{profile.basedIn} · (Serving UK)</span>
            </div>
          </div>

          {/* Social Profiles Direct Links */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href={profile.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-code text-xs px-4 py-2 rounded-xl bg-[#110c33] border border-[#302a7c] text-[#eeeeff] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all flex items-center gap-1.5"
            >
              <span>Facebook</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#38bdf8]" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-code text-xs px-4 py-2 rounded-xl bg-[#110c33] border border-[#302a7c] text-[#eeeeff] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all flex items-center gap-1.5"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#38bdf8]" />
            </a>

            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-code text-xs px-4 py-2 rounded-xl bg-[#110c33] border border-[#302a7c] text-[#eeeeff] hover:text-pink-400 hover:border-pink-500/50 transition-all flex items-center gap-1.5"
            >
              <span>Instagram @sakilzakaria123</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-pink-400" />
            </a>
          </div>
        </div>

        {/* Quick Restaurant Inquiry Form */}
        <div className="mt-12 max-w-xl mx-auto text-left bg-[#110c33]/90 p-6 sm:p-8 rounded-2xl border border-[#302a7c]">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#302a7c]/70 mb-4">
            <div className="flex items-center gap-2 font-display font-bold text-lg sm:text-xl text-white">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Direct Message Option</span>
            </div>
            <span className="font-mono-code text-[11px] text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-700/60 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Direct WhatsApp Dispatch
            </span>
          </div>

          <p className="text-xs text-[#aaa8dc] mb-5 leading-relaxed">
            Fill in your details below and click Send. Your message will be formatted and opened directly in WhatsApp with Sakil.
          </p>

          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono-code text-[#aaa8dc] uppercase block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tariq / Manager"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono-code text-[#aaa8dc] uppercase block mb-1">
                  Restaurant Name & City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Spice Bistro, Birmingham"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono-code text-[#aaa8dc] uppercase block mb-1">
                  Your Phone / WhatsApp Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. +44 7XXX XXXXXX"
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono-code text-[#aaa8dc] uppercase block mb-1">
                  Primary Need
                </label>
                <select
                  value={serviceGoal}
                  onChange={(e) => setServiceGoal(e.target.value)}
                  className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  <option value="Full Social Media & Campaign Management">Full Social Media & Campaign Management</option>
                  <option value="Fill Weekend Tables (Friday & Saturday)">Fill Weekend Tables (Friday & Saturday)</option>
                  <option value="Boost Direct Takeaway Orders (Cut Delivery App Fees)">Boost Direct Takeaway Orders (Cut Delivery App Fees)</option>
                  <option value="Food Reels Production & Social Growth">Food Reels Production & Social Growth</option>
                  <option value="Festive / Bank Holiday Promotions">Festive / Bank Holiday Promotions</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono-code text-[#aaa8dc] uppercase block mb-1">
                Your Message / Restaurant Requirements
              </label>
              <textarea
                placeholder="Tell Sakil about your restaurant, current goals, or questions..."
                value={inquiryNotes}
                onChange={(e) => setInquiryNotes(e.target.value)}
                rows={3}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Send Direct Message on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#170f4a] hover:bg-[#201569] text-white border border-[#302a7c] font-display font-bold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#8b5cf6]" />
                <span>Email Instead</span>
              </button>
            </div>

            {submittedMessage && (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-xs font-mono-code text-emerald-300 text-center flex items-center justify-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>WhatsApp chat opened! Hit Send in WhatsApp to deliver your message.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
