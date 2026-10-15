import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

export const Results: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const stats = [
    { value: '84.5%', label: 'of audience is in the UK' },
    { value: '32.3%', label: 'aged 35–44, the biggest group' },
    { value: '29', label: 'net followers from the best post' },
    { value: '5', label: 'nearby towns lead the audience' },
  ];

  const screenshots = [
    {
      src: '/images/audience-insights.jpg',
      alt: 'Audience insights: age and gender, country, and towns, with 84.5 percent in the United Kingdom',
      caption: 'Audience: age and gender, country and towns. Witney 19.2%, Oxford 18%, London 15.9%, Carterton 15.3%.',
      width: 1306,
      height: 529,
    },
    {
      src: '/images/top-content.jpg',
      alt: 'Top content: weekly Indian feast for two competition posts and the net followers each gained',
      caption: 'Top content: competition posts gained 29, 17, 9, 5, 2 and 1 net followers.',
      width: 1210,
      height: 555,
    },
  ];

  return (
    <section className="card bg-[#0a0a0a] text-white" id="results">
      <p className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-2">
        Real results · UK restaurant client
      </p>
      <h2 className="font-display text-[clamp(50px,9vw,128px)] m-0 mb-3.5 leading-none text-white">
        Proof from a live campaign
      </h2>
      <p className="text-[#cfcfd2] max-w-[620px] m-0 text-sm leading-relaxed">
        Facebook insights from a UK restaurant page I manage. The weekly “Win a free Indian feast for two” competition brought in new local followers every week.
      </p>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-6.5 border-t border-dashed border-[#555] pt-5.5">
        {stats.map((s, idx) => (
          <div key={idx}>
            <b className="block font-display text-[clamp(40px,5vw,68px)] leading-none text-white">
              {s.value}
            </b>
            <small className="text-[#9a9a9f] text-xs mt-1 block">
              {s.label}
            </small>
          </div>
        ))}
      </div>

      {/* Screenshots */}
      <div className="grid gap-4.5 mt-6.5">
        {screenshots.map((shot, idx) => (
          <figure key={idx} className="m-0 relative group">
            <div
              className="relative overflow-hidden rounded-2xl border border-[#333] cursor-zoom-in"
              onClick={() => setLightboxImage({ src: shot.src, caption: shot.caption })}
            >
              <img
                loading="lazy"
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={14} /> Zoom Proof
              </div>
            </div>
            <figcaption className="text-xs text-[#9a9a9f] mt-2.5">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 md:p-8 flex flex-col justify-center items-center backdrop-blur-sm animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-300 p-2 text-sm flex items-center gap-1 font-bold"
            >
              Close <X size={20} />
            </button>
            <img
              src={lightboxImage.src}
              alt="Enlarged campaign proof"
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-white/20 shadow-2xl"
            />
            <p className="text-gray-300 text-xs mt-3 text-center max-w-2xl bg-black/60 p-2 rounded-lg">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
