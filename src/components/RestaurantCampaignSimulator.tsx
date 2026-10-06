import React, { useState } from 'react';
import { Calculator, Sparkles, Send, CheckCircle2, ArrowRight, Utensils, MapPin, Target, DollarSign } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

interface SimulatorProps {
  email: string;
  whatsappNumber: string;
}

export const RestaurantCampaignSimulator: React.FC<SimulatorProps> = ({ email, whatsappNumber }) => {
  const [city, setCity] = useState('Birmingham');
  const [cuisine, setCuisine] = useState('Indian & Tandoori Lounge');
  const [goal, setGoal] = useState('Fill Friday & Saturday Tables');
  const [budget, setBudget] = useState('400'); // in GBP

  // Calculations based on UK restaurant marketing benchmarks
  const budgetNum = parseInt(budget, 10) || 400;
  const estimatedReach = Math.round(budgetNum * 95);
  const estimatedAdditionalCovers = Math.round(budgetNum * 0.42);
  const estimatedTakeawayOrders = Math.round(budgetNum * 0.35);
  const estimatedRevenueImpact = Math.round(estimatedAdditionalCovers * 28 + estimatedTakeawayOrders * 32);

  const getStrategySummary = () => {
    switch (goal) {
      case 'Fill Friday & Saturday Tables':
        return {
          tactic: 'Weekend VIP Sizzler Push',
          details: 'Run hyper-targeted Meta video reels (within 4 miles of your postcode) on Wednesday to Friday afternoons, directing hungry locals straight to your reservation link with a complimentary chef appetizer offer.'
        };
      case 'Boost Direct Takeaway Orders':
        return {
          tactic: 'Commission-Free Direct Order Blitz',
          details: 'Launch 10% off first-order promo on Instagram Stories + WhatsApp broadcast flyer to convert third-party delivery users into direct telephone/website customers.'
        };
      case 'Mid-Week Lunch Footfall':
        return {
          tactic: '15-Minute Express Lunch Campaign',
          details: 'Target corporate workers & shoppers within a 1.5-mile radius during 11:30 AM – 1:30 PM with speedy fixed-price thali & lunch boxes.'
        };
      default:
        return {
          tactic: 'Festive & Bank Holiday Special',
          details: 'Run early-bird booking ads 14 days before bank holiday weekends with mouth-watering food photography to lock in group bookings.'
        };
    }
  };

  const strategy = getStrategySummary();

  const handleWhatsAppSend = () => {
    const text = `Hi Sakil, I used your Restaurant Growth Tool!
• Restaurant Location: ${city}, UK
• Type: ${cuisine}
• Main Goal: ${goal}
• Estimated Monthly Ad Budget: £${budget}
Can we discuss a campaign for my restaurant?`;
    window.open(getWhatsAppLink(whatsappNumber, text), '_blank');
  };

  return (
    <section id="planner" className="pt-20 pb-6">
      <div className="animated-card-border p-6 sm:p-10 rounded-3xl bg-[#170f4a]/95">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#38bdf8] bg-[#110c33] px-3.5 py-1.5 rounded-full border border-[#302a7c] mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Interactive Tool for UK Restaurant Owners</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            UK Restaurant Campaign Planner & ROI Estimator
          </h2>
          <p className="text-[#aaa8dc] text-sm sm:text-base mt-2">
            Calculate your estimated monthly local reach, table bookings surge, and revenue impact under Sakil's campaign management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-5 bg-[#110c33]/80 p-6 rounded-2xl border border-[#302a7c]">
            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] uppercase tracking-wider block mb-2">
                1. Restaurant City (UK)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['London', 'Birmingham', 'Manchester', 'Leeds', 'Bradford', 'Other UK'].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCity(c)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono-code transition-all ${
                      city === c
                        ? 'bg-[#8b5cf6] text-white font-bold shadow-md shadow-[#8b5cf6]/40'
                        : 'bg-[#170f4a] text-[#aaa8dc] hover:text-white border border-[#302a7c]/60'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] uppercase tracking-wider block mb-2">
                2. Cuisine Style
              </label>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="w-full bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              >
                <option value="Indian & Tandoori Lounge">Indian & Tandoori Lounge</option>
                <option value="Bangladeshi & Desi Grill">Bangladeshi & Desi Grill</option>
                <option value="Modern British Bistro">Modern British Bistro</option>
                <option value="Steakhouse & Grill">Steakhouse & Grill</option>
                <option value="Takeaway & Fast Casual">Takeaway & Fast Casual</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono-code text-[#aaa8dc] uppercase tracking-wider block mb-2">
                3. Primary Goal
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'Fill Friday & Saturday Tables',
                  'Boost Direct Takeaway Orders',
                  'Mid-Week Lunch Footfall',
                  'Festive & Bank Holiday Special'
                ].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-mono-code text-left flex items-center justify-between transition-all ${
                      goal === g
                        ? 'bg-[#38bdf8] text-[#05111f] font-bold'
                        : 'bg-[#170f4a] text-[#aaa8dc] hover:text-white border border-[#302a7c]/60'
                    }`}
                  >
                    <span>{g}</span>
                    {goal === g && <CheckCircle2 className="w-4 h-4 text-[#05111f]" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 font-mono-code text-xs">
                <span className="text-[#aaa8dc] uppercase">4. Monthly Ad Spend Range</span>
                <span className="text-[#38bdf8] font-bold">£{budget} / month</span>
              </div>
              <input
                type="range"
                min="200"
                max="1500"
                step="50"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full accent-[#8b5cf6] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono-code text-[#aaa8dc]/70">
                <span>£200 (Starter)</span>
                <span>£800 (Growth)</span>
                <span>£1500+ (Aggressive)</span>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-[#110c33] border border-[#302a7c] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#302a7c]/70">
                <span className="text-xs font-mono-code text-[#38bdf8] uppercase tracking-wider">
                  Estimated 30-Day Campaign Impact
                </span>
                <span className="text-xs font-mono-code text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800">
                  Target: {city}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#170f4a] border border-[#302a7c]/60">
                  <span className="text-[11px] font-mono-code text-[#aaa8dc] block">Local Foodie Reach</span>
                  <b className="font-display text-2xl text-white block mt-1">~{estimatedReach.toLocaleString()}</b>
                  <span className="text-[10px] text-[#38bdf8] font-mono-code">Geo-targeted video views</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#170f4a] border border-[#302a7c]/60">
                  <span className="text-[11px] font-mono-code text-[#aaa8dc] block">Estimated Additional Covers</span>
                  <b className="font-display text-2xl text-emerald-400 block mt-1">+{estimatedAdditionalCovers}</b>
                  <span className="text-[10px] text-emerald-300 font-mono-code">Diners booked per month</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#170f4a] border border-[#302a7c]/60">
                  <span className="text-[11px] font-mono-code text-[#aaa8dc] block">Direct Takeaways</span>
                  <b className="font-display text-2xl text-[#38bdf8] block mt-1">+{estimatedTakeawayOrders} orders</b>
                  <span className="text-[10px] text-[#aaa8dc] font-mono-code">Zero commission fees</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#170f4a] border border-[#302a7c]/60">
                  <span className="text-[11px] font-mono-code text-[#aaa8dc] block">Est. Revenue Boost</span>
                  <b className="font-display text-2xl text-amber-300 block mt-1">~£{estimatedRevenueImpact.toLocaleString()}</b>
                  <span className="text-[10px] text-amber-200/80 font-mono-code">Gross monthly value</span>
                </div>
              </div>

              {/* Strategy Blueprint */}
              <div className="p-4 rounded-xl bg-[#170f4a]/80 border border-[#8b5cf6]/40 mt-3">
                <div className="flex items-center gap-1.5 text-xs font-mono-code text-[#8b5cf6] font-bold mb-1 uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  Sakil's Strategic Playbook: {strategy.tactic}
                </div>
                <p className="text-xs text-[#eeeeff] leading-relaxed">
                  {strategy.details}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-display font-bold text-sm shadow-lg shadow-[#8b5cf6]/30 transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send this plan to Sakil on WhatsApp</span>
                </button>
                <a
                  href={`mailto:${email}?subject=Restaurant Campaign Plan for ${encodeURIComponent(city)} (${encodeURIComponent(cuisine)})&body=Hi Sakil,%0D%0A%0D%0AI ran your Campaign Planner on your portfolio:%0D%0A- City: ${encodeURIComponent(city)}%0D%0A- Cuisine: ${encodeURIComponent(cuisine)}%0D%0A- Goal: ${encodeURIComponent(goal)}%0D%0A- Monthly Budget: £${budget}%0D%0A%0D%0APlease let me know when we can schedule a live call.`}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#170f4a] hover:bg-[#23176d] text-white border border-[#302a7c] font-mono-code text-xs transition-colors"
                >
                  <span>Email Plan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
