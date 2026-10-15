import React, { useState } from 'react';
import { X, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { VIDEO_CHAPTERS } from '../data/portfolioData';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  const activeChapter = VIDEO_CHAPTERS[activeChapterIndex];

  const handlePlayChapter = (index: number) => {
    setActiveChapterIndex(index);
    setCurrentProgress(VIDEO_CHAPTERS[index].seconds);
    setIsPlaying(true);
  };

  return (
    <section className="card bg-white text-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-7 items-center">
        <div>
          <p className="text-[11px] font-bold text-[#6b6c70] mb-4.5 tracking-wider uppercase">
            Video introduction
          </p>
          <h2 className="font-display text-[clamp(56px,9vw,120px)] m-0 mb-3.5 leading-none">
            Campaign Manager in action
          </h2>
          <p className="text-sm text-[#3a3a3c] max-w-[560px] leading-relaxed">
            Watch how I manage daily social campaigns, handle live UK client meetings, and plan table bookings for restaurants from Sylhet.
          </p>

          <ul className="list-none m-0 p-0 mt-5.5 border-t border-dashed border-[#999]">
            {VIDEO_CHAPTERS.map((chap, idx) => (
              <li
                key={chap.id}
                onClick={() => handlePlayChapter(idx)}
                className={`grid grid-cols-[44px_1fr_auto] gap-2.5 items-center py-3 border-b border-dashed border-[#999] font-medium text-sm cursor-pointer transition-colors duration-150 group ${
                  activeChapterIndex === idx && isPlaying
                    ? 'bg-amber-50/80 px-2 rounded-lg font-semibold'
                    : 'hover:bg-gray-50'
                }`}
              >
                <b className="font-display text-[22px] text-[#6b6c70] group-hover:text-[#0a0a0a] transition-colors">
                  {chap.id}
                </b>
                <span className="group-hover:translate-x-1 transition-transform">
                  {chap.title}
                </span>
                <time className="text-xs text-[#6b6c70]">{chap.timestamp}</time>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video rounded-2xl bg-[#15161a] grid place-items-center text-white overflow-hidden shadow-inner group">
          {isPlaying ? (
            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-[#1c1e24] to-[#0d0e12] animate-fadeIn">
              {/* Header */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs font-bold tracking-wider uppercase text-amber-300">
                    Interactive Walkthrough · Chapter {activeChapter.id}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close walkthrough"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Main Content Info */}
              <div className="my-auto z-10 py-2">
                <span className="text-[11px] font-bold text-gray-400 block mb-1">
                  Topic: {activeChapter.title}
                </span>
                <h4 className="font-display text-2xl text-white tracking-wide mb-2">
                  {activeChapter.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/10">
                  {activeChapter.description}
                </p>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-gray-300">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 size={13} /> Verified UK Campaign Workflow
                  </span>
                  <span className="flex items-center gap-1 text-amber-300">
                    <Sparkles size={13} /> Live WhatsApp &amp; Meta Ads
                  </span>
                </div>
              </div>

              {/* Player Controls Bar */}
              <div className="space-y-2 z-10 pt-2 border-t border-white/10">
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#e4ff6a] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, ((currentProgress + 15) / 60) * 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        const nextIdx = (activeChapterIndex + 1) % VIDEO_CHAPTERS.length;
                        handlePlayChapter(nextIdx);
                      }}
                      className="hover:text-white font-bold"
                    >
                      Next Chapter »
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePlayChapter(0)}
                      className="p-1 hover:text-white"
                      title="Restart"
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 size={14} />
                    <span>{activeChapter.timestamp} / 1:00</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Play Button Trigger */}
              <button
                type="button"
                onClick={() => handlePlayChapter(0)}
                aria-label="Play video introduction"
                className="w-[84px] h-[84px] rounded-full border-[1.5px] border-white bg-transparent text-white text-xs font-bold cursor-pointer transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 active:scale-95 flex items-center justify-center gap-1 group-hover:border-amber-300 group-hover:text-amber-300"
              >
                PLAY
              </button>
              <small className="absolute left-4 bottom-3 text-[#9a9a9f] text-xs">
                Video introduction · 1:00
              </small>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
