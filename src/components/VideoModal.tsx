import React, { useEffect, useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoData: {
    title: string;
    creator: string;
    platform: string;
    description: string;
    imageUrl?: string;
  } | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoData }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoData) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      {/* Floating Always-Visible Close Button outside/top-right of card */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="fixed top-4 right-4 z-[60] flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#171717] border border-surface-container-high text-white hover:bg-primary-container hover:text-black shadow-2xl transition-all duration-200 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]">close</span>
        <span className="font-label-sm text-xs uppercase font-bold tracking-wider">Close</span>
      </button>

      <div
        className="relative w-full max-w-3xl bg-surface-container border border-surface-container-high rounded-2xl overflow-hidden shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container-high bg-surface-dim">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-sm text-xs uppercase tracking-wider text-white font-bold">{videoData.platform}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-white hover:bg-primary-container hover:text-black transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
            <span className="font-label-sm text-xs uppercase font-bold">Close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Simulated Video Player */}
          <div className="md:col-span-6 relative bg-black aspect-[9/16] flex items-center justify-center overflow-hidden">
            {videoData.imageUrl && (
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${isPlaying ? 'scale-105' : 'scale-100'}`}
                style={{ backgroundImage: `url('${videoData.imageUrl}')` }}
              ></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* Play/Pause Interactive Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative z-10 w-16 h-16 rounded-full bg-primary-container text-black flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[32px]">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-mono text-primary-container font-bold bg-black/60 px-2 py-0.5 rounded">
                  {isPlaying ? '▶ Playing 9:16 Master' : '⏸ Paused'}
                </span>
                <span className="text-[10px] font-mono text-secondary">0:24 / 0:30</span>
              </div>
              <p className="text-sm font-semibold truncate">{videoData.title}</p>
            </div>
          </div>

          {/* Details & Performance Stats */}
          <div className="md:col-span-6 p-6 space-y-6 flex flex-col justify-between bg-surface-container">
            <div className="space-y-4">
              <div>
                <span className="font-label-sm text-xs text-primary-container uppercase tracking-wider font-bold">Verified UGC Production</span>
                <h3 className="font-headline-md text-xl text-white font-bold mt-1">{videoData.title}</h3>
                <p className="font-body-sm text-secondary text-sm mt-1">{videoData.creator}</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high border border-surface-container-highest space-y-2">
                <p className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Campaign Performance Note</p>
                <p className="font-body-sm text-sm text-white leading-relaxed">{videoData.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-surface-dim">
                  <p className="font-label-sm text-[10px] text-secondary uppercase">Aspect Ratio</p>
                  <p className="font-headline-sm text-sm text-white font-bold">9:16 Vertical</p>
                </div>
                <div className="p-3 rounded-lg bg-surface-dim">
                  <p className="font-label-sm text-[10px] text-secondary uppercase">Format Type</p>
                  <p className="font-headline-sm text-sm text-primary-container font-bold">Paid Social / Spark</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
              <span className="font-body-sm text-xs text-secondary">Ready to produce similar creative?</span>
              <a
                href="/contact"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-primary-container text-on-primary-fixed font-headline-sm text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
