import React, { useEffect, useState, useRef, useCallback } from 'react';
import { X, Sparkles, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const AIFluencyNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  }, []);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      if (!isPaused) {
        setTimeLeft((prev) => {
          if (prev <= 0.1) {
            handleClose();
            return 0;
          }
          return prev - 0.1;
        });
      }
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, handleClose]);

  if (!isVisible) return null;

  const progressPercent = Math.max(0, Math.min(100, (timeLeft / 10) * 100));

  return (
    <aside
      aria-label="Course notification"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ease-out select-none ${
        isClosing
          ? 'opacity-0 translate-y-3 scale-95 pointer-events-none'
          : 'opacity-100 translate-y-0 scale-100'
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E4DF] shadow-xl p-3 sm:p-3.5 max-w-[340px] sm:max-w-[360px] flex items-center gap-3">
        {/* Minimal Icon Avatar */}
        <div className="shrink-0 w-9 h-9 rounded-xl bg-[#FAF0EE] border border-[#8B2E1A]/15 flex items-center justify-center text-[#8B2E1A]">
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Minimal Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] font-bold text-[#0F172A] leading-tight truncate">
              AI Fluency Foundations
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] shrink-0 animate-pulse" />
          </div>
          <p className="text-[11px] text-slate-500 font-mono leading-tight mt-0.5 truncate">
            Anthropic 4D Course · Free Cert
          </p>
        </div>

        {/* Action & Close */}
        <div className="shrink-0 flex items-center gap-1.5">
          <a
            href={siteConfig.aiFluencyCourse.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-[#8B2E1A] text-white text-[11px] font-mono font-semibold transition-colors shadow-2xs"
          >
            <span>Enroll</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Smooth 10s Hairline Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-100">
          <div
            className="h-full bg-[#8B2E1A] transition-all ease-linear"
            style={{ width: `${progressPercent}%`, transitionDuration: '100ms' }}
          />
        </div>
      </div>
    </aside>
  );
};
