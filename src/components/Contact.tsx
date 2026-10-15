import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Mail, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Social media & campaigns');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const buildMessage = () => {
    const formattedSender = name.trim() || 'a restaurant owner';
    const formattedRestaurant = restaurantName.trim() ? ` from ${restaurantName.trim()}` : '';
    const emailInfo = email.trim() ? ` (Reply to: ${email.trim()})` : '';
    const extraMsg = message.trim() ? `. ${message.trim()}` : '';

    return `Hi Sakil, I am ${formattedSender}${formattedRestaurant}. I need: ${serviceNeeded}${extraMsg}${emailInfo}`;
  };

  const handleWhatsApp = () => {
    const text = buildMessage();
    const url = `https://wa.me/447448392391?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  const handleEmail = () => {
    const text = buildMessage();
    const url = `mailto:sakilahemdzakaria@gmail.com?subject=${encodeURIComponent('Campaign enquiry')}&body=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  const handleCopyMessage = () => {
    const text = buildMessage();
    navigator.clipboard.writeText(text);
    setStatusMessage('Message text copied to clipboard!');
    setTimeout(() => setStatusMessage(null), 3000);
  };

  return (
    <section className="card !bg-transparent !px-0" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-7 items-center">
        <svg
          className="w-[clamp(80px,13vw,170px)] text-[#0a0a0a]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 85 85 15M30 15h55v55" />
        </svg>

        <h2 className="font-display text-[clamp(34px,5vw,64px)] m-0 font-medium uppercase leading-[1.15] text-[#0a0a0a]">
          Let&apos;s grow your
          <br />
          restaurant
        </h2>

        <a
          className="btn-pill text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white self-start md:self-auto"
          href="mailto:sakilahemdzakaria@gmail.com"
        >
          Send me a message
        </a>
      </div>

      <p className="max-w-[520px] m-0 mt-5.5 text-sm text-[#0a0a0a] leading-relaxed">
        Tell me about your restaurant, your busiest nights and your goal. I&apos;ll reply with a plan within one working day.
      </p>

      {/* Direct Contact Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7.5 border-t border-[#888] pt-7.5">
        <a
          href="mailto:sakilahemdzakaria@gmail.com"
          className="p-3.5 sm:px-4 border-[1.5px] border-[#0a0a0a] rounded-xl font-bold text-sm flex items-center justify-between text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
        >
          <span>sakilahemdzakaria@gmail.com</span>
          <ArrowUpRight size={18} />
        </a>
        <a
          href="https://wa.me/447448392391"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 sm:px-4 border-[1.5px] border-[#0a0a0a] rounded-xl font-bold text-sm flex items-center justify-between text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
        >
          <span>WhatsApp +44 7448 392391</span>
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Inquiry Form */}
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-x-4.5 gap-y-1 mt-6.5 border-t border-[#888] pt-6.5"
        onSubmit={(e) => {
          e.preventDefault();
          handleWhatsApp();
        }}
      >
        <div>
          <label htmlFor="fn" className="block text-xs font-bold my-3 mb-1.5 text-[#0a0a0a]">
            Your name
          </label>
          <input
            id="fn"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Tariq Khan"
            className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-[#0a0a0a] bg-transparent text-[15px] font-medium text-[#0a0a0a] placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="fe" className="block text-xs font-bold my-3 mb-1.5 text-[#0a0a0a]">
            Your email
          </label>
          <input
            id="fe"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. info@spicekitchen.co.uk"
            className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-[#0a0a0a] bg-transparent text-[15px] font-medium text-[#0a0a0a] placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="fr" className="block text-xs font-bold my-3 mb-1.5 text-[#0a0a0a]">
            Restaurant name
          </label>
          <input
            id="fr"
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="e.g. Spice Lounge Oxford"
            className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-[#0a0a0a] bg-transparent text-[15px] font-medium text-[#0a0a0a] placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="fs" className="block text-xs font-bold my-3 mb-1.5 text-[#0a0a0a]">
            Service needed
          </label>
          <select
            id="fs"
            value={serviceNeeded}
            onChange={(e) => setServiceNeeded(e.target.value)}
            className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-[#0a0a0a] bg-transparent text-[15px] font-medium text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option>Social media &amp; campaigns</option>
            <option>Table-fill ads</option>
            <option>Takeaway promotion</option>
            <option>Full campaign management</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="fm" className="block text-xs font-bold my-3 mb-1.5 text-[#0a0a0a]">
            Your message
          </label>
          <textarea
            id="fm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your current customer volume, target town/radius, or goals..."
            className="w-full min-h-[110px] px-3.5 py-3 rounded-xl border-[1.5px] border-[#0a0a0a] bg-transparent text-[15px] font-medium text-[#0a0a0a] placeholder:text-[#888] resize-y focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="md:col-span-2 flex flex-wrap items-center gap-2.5 mt-4.5">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="btn-pill !bg-[#0a0a0a] !text-white hover:!bg-[#222] py-3.5 px-5.5 text-[13px] flex items-center gap-2"
          >
            <MessageSquare size={16} /> Send message on WhatsApp
          </button>
          <button
            type="button"
            onClick={handleEmail}
            className="btn-pill py-3.5 px-5.5 text-[13px] flex items-center gap-2"
          >
            <Mail size={16} /> Email instead
          </button>
          <button
            type="button"
            onClick={handleCopyMessage}
            className="text-xs text-neutral-600 hover:text-black flex items-center gap-1.5 py-2 px-3 border border-neutral-300 rounded-lg transition-colors ml-auto"
          >
            {statusMessage ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            {statusMessage || 'Copy enquiry text'}
          </button>
        </div>
      </form>
    </section>
  );
};
