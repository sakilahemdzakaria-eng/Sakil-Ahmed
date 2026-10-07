import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Upload,
  Link2,
  CheckCircle2,
  RotateCcw,
  Film,
  Flame,
  Check
} from 'lucide-react';
import { saveVideoBlob, loadSavedVideoBlob, clearSavedVideo } from '../utils/videoStorage';

interface VideoSectionProps {
  isEditing: boolean;
}

const LOCAL_SHOWREEL_URL = "./sakil-showreel.mp4";

export const VideoSection: React.FC<VideoSectionProps> = ({ isEditing }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string>(LOCAL_SHOWREEL_URL);
  const [isEmbed, setIsEmbed] = useState(false);
  const [isCustomFile, setIsCustomFile] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load custom video from IndexedDB if previously saved
  useEffect(() => {
    let active = true;
    loadSavedVideoBlob().then((storedUrl) => {
      if (!active) return;
      if (storedUrl) {
        setVideoUrl(storedUrl);
        setIsCustomFile(true);
        setFileName(localStorage.getItem('sz_video_custom_name') || 'Uploaded_Video.mp4');
      } else {
        const customWebUrl = localStorage.getItem('sz_custom_video_url');
        if (customWebUrl) {
          if (isYouTubeUrl(customWebUrl)) {
            setVideoUrl(getYouTubeEmbedUrl(customWebUrl));
            setIsEmbed(true);
          } else {
            setVideoUrl(customWebUrl);
            setIsEmbed(false);
          }
          setIsCustomFile(true);
        }
      }
    });

    return () => {
      active = false;
    };
  }, []);

  // Ensure autoplay on load
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.muted = isMuted;
    const promise = vid.play();
    if (promise !== undefined) {
      promise
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [videoUrl, isMuted]);

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    } else if (url.includes('embed/')) {
      return url;
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}` : url;
  };

  const handleProcessFile = async (file: File) => {
    if (!file.type.startsWith('video/')) {
      alert('Please select a valid video file (MP4, WebM, MOV).');
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setVideoUrl(objectUrl);
    setIsEmbed(false);
    setIsCustomFile(true);
    setFileName(file.name);
    localStorage.setItem('sz_video_custom_name', file.name);

    await saveVideoBlob(file);

    setToastMessage('Your video was successfully uploaded and saved!');
    setTimeout(() => setToastMessage(null), 3500);
    setIsModalOpen(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  const handleFullscreen = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.requestFullscreen) {
      vid.requestFullscreen().catch(() => {});
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    const trimmed = inputUrl.trim();
    if (isYouTubeUrl(trimmed)) {
      setVideoUrl(getYouTubeEmbedUrl(trimmed));
      setIsEmbed(true);
    } else {
      setVideoUrl(trimmed);
      setIsEmbed(false);
    }
    setIsCustomFile(true);
    try {
      localStorage.setItem('sz_custom_video_url', trimmed);
    } catch (e) {
      console.warn(e);
    }
    setToastMessage('Custom video URL applied!');
    setTimeout(() => setToastMessage(null), 3500);
    setIsModalOpen(false);
  };

  const handleResetVideo = async () => {
    await clearSavedVideo();
    localStorage.removeItem('sz_custom_video_url');
    localStorage.removeItem('sz_video_custom_name');
    setVideoUrl(LOCAL_SHOWREEL_URL);
    setIsEmbed(false);
    setIsCustomFile(false);
    setFileName(null);
    setIsModalOpen(false);
    setToastMessage('Reset to official showreel!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="video-intro" className="pt-20 pb-10 relative">
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/quicktime"
        onChange={handleFileInputChange}
        className="hidden"
      />

      <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
        <div>
          <div className="flex items-baseline gap-4 flex-wrap">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Video Introduction
            </h2>
            <span className="font-mono-code text-xs md:text-sm text-[#38bdf8] uppercase tracking-widest">
              Managing 21+ UK Restaurants
            </span>
          </div>
          <p className="text-[#aaa8dc] text-sm sm:text-base mt-2 max-w-xl">
            Watch how I manage daily social campaigns, conduct live UK client meetings, and scale table bookings for 21+ restaurants from Sylhet.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="font-mono-code text-xs px-4 py-2.5 rounded-full bg-[#8b5cf6] text-white hover:bg-[#7c3aed] flex items-center gap-1.5 transition-all shadow-md shadow-[#8b5cf6]/30 cursor-pointer font-bold"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Your Video</span>
          </button>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="font-mono-code text-xs px-3.5 py-2.5 rounded-full bg-[#170f4a] text-[#38bdf8] border border-[#302a7c] hover:bg-[#201569] flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>Video Settings</span>
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-xs font-mono-code text-emerald-300 flex items-center gap-2 shadow-lg">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Video Player Container */}
        <div className="lg:col-span-8">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`animated-card-border p-2.5 rounded-3xl bg-[#110c33] shadow-2xl relative group overflow-hidden transition-all ${
              isDragging ? 'ring-4 ring-[#8b5cf6] scale-[1.01]' : ''
            }`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              {isEmbed ? (
                <iframe
                  src={videoUrl}
                  title="Sakil Ahmed Zakaria Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={togglePlay}
                    onError={() => {
                      // Fallback safely to self-hosted video
                      if (videoUrl !== LOCAL_SHOWREEL_URL) {
                        setVideoUrl(LOCAL_SHOWREEL_URL);
                      }
                    }}
                  />

                  {/* Play/Pause Center Indicator */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity z-20"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center shadow-lg shadow-[#8b5cf6]/40 transform scale-105">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Top Bar Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono-code z-20 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#0a0720]/80 backdrop-blur-md text-[#38bdf8] border border-[#302a7c]/80 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      {fileName ? fileName : "Managing 21+ UK Restaurants"}
                    </span>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="pointer-events-auto px-3 py-1 rounded-full bg-[#8b5cf6]/80 hover:bg-[#8b5cf6] backdrop-blur-md text-white border border-white/20 transition-all flex items-center gap-1 shadow-md cursor-pointer"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{isCustomFile ? "Replace Video" : "Upload MP4"}</span>
                    </button>
                  </div>

                  {/* Drag and Drop Prompt Overlay */}
                  {isDragging && (
                    <div className="absolute inset-0 bg-[#0a0720]/90 backdrop-blur-sm flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#8b5cf6] z-30 pointer-events-none">
                      <Upload className="w-10 h-10 text-[#38bdf8] animate-bounce" />
                      <span className="font-display text-lg font-bold text-white">Drop your video file here</span>
                      <span className="font-mono-code text-xs text-[#aaa8dc]">Plays automatically and saves to portfolio</span>
                    </div>
                  )}

                  {/* Sleek Floating Bottom Controls Bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#0a0720]/85 backdrop-blur-md border border-[#302a7c]/70 flex items-center justify-between gap-3 text-white z-20 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="p-2 rounded-lg bg-[#170f4a] hover:bg-[#251779] text-white transition-colors cursor-pointer"
                        title={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className={`p-2 rounded-lg flex items-center gap-1.5 text-xs font-mono-code transition-colors cursor-pointer ${
                          isMuted
                            ? 'bg-[#170f4a] text-[#aaa8dc] hover:text-white'
                            : 'bg-emerald-600 text-white'
                        }`}
                        title={isMuted ? "Click to Unmute Sound" : "Mute Sound"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        <span className="hidden sm:inline">{isMuted ? "Unmute" : "Sound On"}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono-code text-[#38bdf8] bg-[#110c33] px-2.5 py-1 rounded-md border border-[#302a7c] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        Autoplay On
                      </span>

                      <button
                        type="button"
                        onClick={handleFullscreen}
                        className="p-2 rounded-lg bg-[#170f4a] hover:bg-[#251779] text-white transition-colors cursor-pointer"
                        title="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-xs font-mono-code text-[#aaa8dc]">
            <span>Tip: Drag & drop your video file directly onto the video player.</span>
            {fileName && (
              <span className="text-emerald-400 font-bold">Loaded: {fileName}</span>
            )}
          </div>
        </div>

        {/* Right Info Highlights */}
        <div className="lg:col-span-4 space-y-4">
          <div className="animated-card-border p-6 rounded-2xl bg-[#170f4a]/90 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#38bdf8]">
              <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
              <span>Video Highlights</span>
            </div>

            <h3 className="font-display font-extrabold text-xl text-white">
              Campaign Manager in Action
            </h3>

            <p className="text-xs sm:text-sm text-[#aaa8dc] leading-relaxed">
              Managing 21+ UK restaurants from Sylhet with daily strategy, live video calls, and measurable growth results.
            </p>

            <ul className="space-y-2.5 pt-2 text-xs font-mono-code text-[#eeeeff]">
              <li className="flex items-start gap-2.5 p-2 rounded-xl bg-[#110c33]/70 border border-[#302a7c]/60">
                <span className="text-emerald-400 font-bold shrink-0">00:00</span>
                <div>
                  <b className="block text-white leading-tight">Managing 21+ UK Restaurants</b>
                  <span className="text-[11px] text-[#aaa8dc]">Digital Marketing & Campaigns</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 p-2 rounded-xl bg-[#110c33]/70 border border-[#302a7c]/60">
                <span className="text-sky-400 font-bold shrink-0">00:04</span>
                <div>
                  <b className="block text-white leading-tight">Live Client Support & Calls</b>
                  <span className="text-[11px] text-[#aaa8dc]">Google Meet & WhatsApp Support</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 p-2 rounded-xl bg-[#110c33]/70 border border-[#302a7c]/60">
                <span className="text-purple-400 font-bold shrink-0">00:10</span>
                <div>
                  <b className="block text-white leading-tight">Daily Strategy & Solutions</b>
                  <span className="text-[11px] text-[#aaa8dc]">Boardroom Planning & Menus</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 p-2 rounded-xl bg-[#110c33]/70 border border-[#302a7c]/60">
                <span className="text-amber-400 font-bold shrink-0">00:16</span>
                <div>
                  <b className="block text-white leading-tight">Elevating Reach & Engagement</b>
                  <span className="text-[11px] text-[#aaa8dc]">+150% Brand Reach · 8.5% Engagement</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#110c33] border border-[#302a7c] flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono-code text-[#aaa8dc] block uppercase">Live Availability</span>
              <b className="text-sm font-display text-white">21+ Restaurants Active</b>
            </div>
            <a
              href="#contact"
              className="px-3.5 py-2 rounded-xl bg-[#8b5cf6] text-white font-mono-code text-xs font-bold hover:bg-[#7c3aed] transition-colors"
            >
              Book Intro Call
            </a>
          </div>
        </div>
      </div>

      {/* Video Settings Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#110c33] border-2 border-[#8b5cf6] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="font-display font-bold text-xl text-white mb-2">
              Video Settings & Upload
            </h3>
            <p className="text-xs text-[#aaa8dc] mb-5">
              Select your video file directly from your computer or paste a direct video / YouTube link.
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono-code text-[#38bdf8] block mb-1.5">
                  Option 1: Choose video file from your computer
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-[#8b5cf6] bg-[#170f4a]/70 hover:bg-[#170f4a] cursor-pointer transition-colors text-xs font-mono-code text-white font-bold"
                >
                  <Upload className="w-4 h-4 text-[#8b5cf6]" />
                  <span>{fileName ? `Loaded: ${fileName} (Click to change)` : "Click to select your video file"}</span>
                </button>
              </div>

              <form onSubmit={handleApplyUrl} className="pt-2">
                <label className="text-xs font-mono-code text-[#38bdf8] block mb-1.5">
                  Option 2: Paste Direct Video / YouTube URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://... video link"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="flex-1 bg-[#170f4a] border border-[#302a7c] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#8b5cf6] text-white font-mono-code text-xs font-bold hover:bg-[#7c3aed] cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </form>

              <div className="pt-4 border-t border-[#302a7c] flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleResetVideo}
                  className="inline-flex items-center gap-1 text-xs font-mono-code text-rose-400 hover:text-rose-300 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Official Showreel</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#170f4a] text-xs font-mono-code text-[#aaa8dc] hover:text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
