import React, { useState, useMemo } from 'react';
import { MessageSquare, Copy, Check } from 'lucide-react';
import { CITIES, GOALS, VENUES } from '../data/portfolioData';

export const Planner: React.FC = () => {
  const [selectedCityIndex, setSelectedCityIndex] = useState(1); // Birmingham
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(0); // Fill weekend tables
  const [venueAvgOrder, setVenueAvgOrder] = useState(32); // Indian restaurant lounge (£32)
  const [budget, setBudget] = useState(1500);
  const [copied, setCopied] = useState(false);

  const city = CITIES[selectedCityIndex];
  const goal = GOALS[selectedGoalIndex];

  // Mathematical model from original applet
  const { rev, ord, tw, roi } = useMemo(() => {
    const calculatedRev = budget * goal.multiplier * city.multiplier;
    const calculatedOrd = Math.round(calculatedRev / venueAvgOrder);
    const extraTablesPerWeek = Math.max(1, Math.round(calculatedOrd / 4 / 3));
    const roiMultiplier = (calculatedRev / budget).toFixed(1);

    return {
      rev: Math.round(calculatedRev),
      ord: calculatedOrd,
      tw: extraTablesPerWeek,
      roi: roiMultiplier,
    };
  }, [budget, goal.multiplier, city.multiplier, venueAvgOrder]);

  const formatMoney = (amount: number) => {
    return '£' + Math.round(amount).toLocaleString('en-GB');
  };

  const whatsappMessage = `Hi Sakil, I ran the planner: ${city.name}, goal "${goal.name}", budget ${formatMoney(budget)}/month. Estimated revenue ${formatMoney(rev)}. Can we talk?`;
  const whatsappUrl = `https://wa.me/447448392391?text=${encodeURIComponent(whatsappMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="card bg-white text-[#0a0a0a]" id="planner">
      <p className="text-[11px] font-bold text-[#6b6c70] uppercase tracking-wider mb-2">
        Free tool for UK restaurant owners
      </p>
      <h2 className="font-display text-[clamp(46px,7vw,92px)] m-0 mb-2.5 leading-none text-[#0a0a0a]">
        UK restaurant campaign planner &amp; ROI estimator
      </h2>
      <p className="text-[#3a3a3c] text-sm max-w-[620px] m-0 mb-6.5 leading-relaxed">
        Choose your city, venue and goal to see an estimated monthly budget, extra bookings and revenue.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8.5">
        {/* Controls Column */}
        <div className="space-y-4">
          {/* 1. City */}
          <div>
            <label className="block text-xs font-bold my-4 mb-2 text-[#0a0a0a]">
              1. Restaurant city
            </label>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedCityIndex(i)}
                  aria-pressed={selectedCityIndex === i}
                  className={`text-xs font-bold border-[1.5px] border-[#0a0a0a] rounded-full px-4 py-2 transition-colors cursor-pointer ${
                    selectedCityIndex === i
                      ? 'bg-[#0a0a0a] text-white'
                      : 'bg-transparent text-[#0a0a0a] hover:bg-black/5'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Venue Type */}
          <div>
            <label htmlFor="venue" className="block text-xs font-bold my-4 mb-2 text-[#0a0a0a]">
              2. Venue type
            </label>
            <select
              id="venue"
              value={venueAvgOrder}
              onChange={(e) => setVenueAvgOrder(Number(e.target.value))}
              className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-[#0a0a0a] bg-transparent text-[15px] font-medium text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black"
            >
              {VENUES.map((v) => (
                <option key={v.name} value={v.avgOrderValue}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Goal */}
          <div>
            <label className="block text-xs font-bold my-4 mb-2 text-[#0a0a0a]">
              3. Project goal
            </label>
            <div className="grid gap-2">
              {GOALS.map((g, i) => (
                <button
                  key={g.name}
                  type="button"
                  onClick={() => setSelectedGoalIndex(i)}
                  aria-pressed={selectedGoalIndex === i}
                  className={`text-left rounded-xl p-3 text-[13px] font-medium border-[1.5px] border-[#0a0a0a] transition-all cursor-pointer ${
                    selectedGoalIndex === i
                      ? 'bg-[#0a0a0a] text-white shadow-sm'
                      : 'bg-transparent text-[#0a0a0a] hover:bg-black/5'
                  }`}
                >
                  {g.name}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Monthly Budget Slider */}
          <div>
            <div className="flex justify-between items-center my-4 mb-2">
              <label htmlFor="budget" className="text-xs font-bold text-[#0a0a0a] m-0">
                4. Monthly budget
              </label>
              <span className="font-semibold text-sm text-[#0a0a0a]">
                {formatMoney(budget)}
              </span>
            </div>
            <input
              id="budget"
              type="range"
              min="300"
              max="5000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#0a0a0a]"
            />
            <div className="flex justify-between text-xs text-[#6b6c70] mt-1">
              <span>£300</span>
              <span>£5,000</span>
            </div>
          </div>
        </div>

        {/* Results Output Column */}
        <div
          className="bg-[#0a0a0a] text-white rounded-[20px] p-7 flex flex-col justify-center gap-4"
          aria-live="polite"
        >
          <small className="text-[#9a9a9f] text-xs font-medium uppercase tracking-wider">
            Estimated results (monthly)
          </small>

          <div className="grid grid-cols-2 gap-4.5 my-2">
            <div>
              <small className="text-[#9a9a9f] text-xs block mb-1">Campaign spend</small>
              <b className="font-display text-[clamp(34px,4.4vw,56px)] leading-none text-white block">
                {formatMoney(budget)}
              </b>
            </div>
            <div>
              <small className="text-[#9a9a9f] text-xs block mb-1">Extra tables / week</small>
              <b className="font-display text-[clamp(34px,4.4vw,56px)] leading-none text-[#e4ff6a] block">
                +{tw}
              </b>
            </div>
            <div>
              <small className="text-[#9a9a9f] text-xs block mb-1">Estimated orders</small>
              <b className="font-display text-[clamp(34px,4.4vw,56px)] leading-none text-white block">
                ~{ord.toLocaleString('en-GB')}
              </b>
            </div>
            <div>
              <small className="text-[#9a9a9f] text-xs block mb-1">Estimated revenue</small>
              <b className="font-display text-[clamp(34px,4.4vw,56px)] leading-none text-[#e4ff6a] block">
                ~{formatMoney(rev)}
              </b>
            </div>
          </div>

          <p className="text-[13px] text-[#cfcfd2] border-t border-dashed border-[#555] pt-3.5 m-0 leading-relaxed">
            Goal: <span className="text-white font-medium">{goal.name.toLowerCase()}</span> in <span className="text-white font-medium">{city.name}</span>. Roughly <strong className="text-[#e4ff6a]">{roi}x return</strong> on your ad spend.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill !border-white text-white hover:!bg-white hover:!text-[#0a0a0a] flex items-center gap-1.5"
            >
              <MessageSquare size={14} /> Send this plan on WhatsApp
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1 py-2 px-3 rounded-lg border border-white/20 transition-colors"
              title="Copy plan text"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy Plan'}
            </button>
          </div>

          <small className="text-[#9a9a9f] text-xs leading-normal">
            Planning estimate only. Real results depend on menu, location and timing.
          </small>
        </div>
      </div>
    </section>
  );
};
