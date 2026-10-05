import React, { useEffect, useState, useRef, useCallback } from 'react';
import { X, Sparkles, ArrowUpRight, GraduationCap } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const AIFluencyNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25); // 25 seconds visible
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Smooth entrance after 1.2s delay on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsMinimized(true);
      setIsClosing(false);
    }, 300);
  }, []);

  const handleReopen = () => {
    setIsMinimized(false);
    setIsVisible(true);
    setTimeLeft(25);
  };

  // Countdown timer with pause on hover
  useEffect(() => {
    if (!isVisible || isMinimized) return;

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
  }, [isVisible, isMinimized, isPaused, handleClose]);

  const progressPercent = Math.max(0, Math.min(100, (timeLeft / 25) * 100));

  return (
    <>
      {/* 1. Main Floating Card Notification */}
      {isVisible && (
        <aside
          aria-label="AI Fluency Course Notification"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ease-out select-none ${
            isClosing
              ? 'opacity-0 translate-y-3 scale-95 pointer-events-none'
              : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md border border-[#8B2E1A]/20 shadow-2xl p-3.5 sm:p-4 max-w-[340px] sm:max-w-[370px] flex items-center gap-3.5">
            {/* Icon Avatar */}
            <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FAF0EE] border border-[#8B2E1A]/20 flex items-center justify-center text-[#8B2E1A] shadow-2xs">
              <GraduationCap className="w-5 h-5" />
            </div>

            {/* Notification Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-bold text-[#0F172A] leading-tight truncate">
                  AI Fluency Foundations
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] shrink-0 animate-ping" />
              </div>
              <p className="text-[11px] text-slate-500 font-mono leading-tight mt-0.5 truncate">
                Anthropic 4D Course · 100% Free Cert
              </p>
            </div>

            {/* Action Buttons */}
            <div className="shrink-0 flex items-center gap-1.5">
              <a
                href={siteConfig.aiFluencyCourse.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0F172A] hover:bg-[#8B2E1A] text-white text-[11px] font-mono font-bold transition-colors shadow-2xs cursor-pointer"
              >
                <span>Enroll</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <button
                onClick={handleClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Dismiss course notification"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Visual Countdown Progress Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-100">
              <div
                className="h-full bg-[#8B2E1A] transition-all ease-linear"
                style={{ width: `${progressPercent}%`, transitionDuration: '100ms' }}
              />
            </div>
          </div>
        </aside>
      )}

      {/* 2. Minimized Pill Badge (shows if closed so user can re-open) */}
      {isMinimized && !isVisible && (
        <button
          onClick={handleReopen}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E4DF] shadow-md hover:border-[#8B2E1A]/40 text-[#0F172A] hover:text-[#8B2E1A] text-[11px] font-mono font-semibold transition-all cursor-pointer animate-fade-up"
          title="Click to view AI Fluency Course notification"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8B2E1A]" />
          <span>AI Fluency Course</span>
        </button>
      )}
    </>
  );
};
