import React from 'react';

export const TickerMarquee: React.FC = () => {
  const items = [
    "Social Media Marketing",
    "Campaign Management",
    "Salesmanship",
    "UK Restaurant Promotions",
    "Client Meetings & Live Calls",
    "Table Fill Strategies",
    "Food Reel Production",
    "Meta Paid Ads",
    "Takeaway Growth",
    "Sylhet to UK Connection"
  ];

  return (
    <div className="overflow-hidden border-y-2 border-[#302a7c] py-4 bg-[#110c33]/70 my-10 relative -mx-4 sm:-mx-8">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10 font-display font-bold text-xl md:text-2xl text-[#eeeeff]">
        {/* Double array for infinite seamless looping */}
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-8 text-[#eeeeff]/90 hover:text-white transition-colors">
            <span>{item}</span>
            <span className="text-[#8b5cf6] text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
