import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

interface ClosingCTAProps {
  onExploreResearch: () => void;
  onMeetTeam: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onExploreResearch, onMeetTeam }) => (
  <section className="bg-gradient-to-b from-[#F8F7F5] via-white to-white py-24 md:py-32 border-t border-[#E8E4DF] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] animate-pulse" />
          <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">
            SOMAME Team Research
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tight">
          Ready to Build
          <br />
          <span className="text-[#8B2E1A]">Your Research Future?</span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Join SOMAME Team Research and become part of a growing community of student scientists dedicated
          to materials discovery, AI integration, and engineering innovation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onExploreResearch}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#8B2E1A] hover:bg-[#a33520] text-white font-bold text-base transition-all shadow-md hover:shadow-lg font-mono cursor-pointer"
          >
            <span>Explore Research</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onMeetTeam}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#E8E4DF] bg-white text-[#0F172A] hover:bg-[#F8F7F5] font-semibold text-base transition-all shadow-2xs font-mono cursor-pointer"
          >
            <Users className="w-4 h-4 text-slate-500" />
            <span>Meet the Team</span>
          </button>
        </div>

        {/* Department affiliation */}
        <div className="pt-6 flex items-center justify-center gap-2 sm:gap-3 text-slate-400">
          <div className="h-px w-6 sm:w-10 bg-slate-200 shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider sm:tracking-widest uppercase text-center">
            Department of Metallurgical &amp; Materials Engineering — UET Lahore
          </span>
          <div className="h-px w-6 sm:w-10 bg-slate-200 shrink-0" />
        </div>
      </div>
    </div>
  </section>
);
