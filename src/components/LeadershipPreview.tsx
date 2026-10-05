import React from 'react';
import { advisorData, directorData, coDirectorsData } from '../data/team';
import { IconLinkedIn } from './ScientificIcons';
import { ExternalLink, Compass, Target, Cpu, BookOpen, ArrowRight } from 'lucide-react';

export const LeadershipPreview: React.FC<{ onMeetTeam: () => void }> = ({ onMeetTeam }) => {
  return (
    <section className="bg-[#F8F7F5] py-20 sm:py-28 border-y border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                Governance &amp; Leadership Chain
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
              Guided by Faculty. <span className="text-[#8B2E1A]">Driven by Students.</span>
            </h2>
            <p className="mt-2.5 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Our structured hierarchy ensures rigorous scientific mentorship from our Society Advisor, followed by executive student direction and specialized operations.
            </p>
          </div>
          <button
            onClick={onMeetTeam}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#E8E4DF] hover:border-slate-400 bg-white hover:bg-[#F8F7F5] text-[#0F172A] font-semibold text-sm transition-all font-mono shadow-2xs cursor-pointer self-start lg:self-auto"
          >
            <span>View Full Governance Chain</span>
            <ArrowRight className="w-4 h-4 text-[#8B2E1A]" />
          </button>
        </div>

        {/* 1. TOP TIER: ADVISOR CARD (INSTITUTIONAL GUIDANCE) */}
        <div className="mb-6 p-7 sm:p-9 rounded-3xl border border-[#8B2E1A]/20 bg-gradient-to-br from-[#FAF0EE]/60 via-white to-white shadow-sm flex flex-col md:flex-row items-center md:items-start gap-7 transition-all hover:shadow-md">
          {/* Advisor Photo - Dignified, clean, NO badges on face */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#8B2E1A]/20 bg-white shadow-xs">
              <img
                src={advisorData.image}
                alt={`${advisorData.name} - Society Advisor, SOMAME Team Research, Assistant Professor MME UET Lahore`}
                width={128}
                height={128}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#8B2E1A] text-white text-[9px] font-mono font-bold tracking-wider uppercase whitespace-nowrap shadow-xs">
              Guidance · Patron
            </span>
          </div>

          <div className="flex-grow text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>Institutional Guidance &amp; Scientific Advisor</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">{advisorData.name}</h3>
            <p className="text-sm font-semibold text-slate-700 font-mono">{advisorData.officialTitle}</p>
            <p className="text-xs sm:text-sm text-slate-500 font-sans">{advisorData.institution}</p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 max-w-2xl font-sans">
              Provides foundational scientific oversight, research ethics, and departmental standard compliance — ensuring student research is grounded in reproducible methodology.
            </p>
          </div>

          {advisorData.linkedin && (
            <a
              href={advisorData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-mono font-bold transition-all shadow-2xs self-center md:self-start"
            >
              <IconLinkedIn className="w-3.5 h-3.5 text-[#8B2E1A]" />
              <span>Academic Profile</span>
            </a>
          )}
        </div>

        {/* 2. DIRECTOR & CO-DIRECTORS CHAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Director Card */}
          <div className="bg-white rounded-3xl border border-[#E8E4DF] p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0">
                  <img
                    src={directorData.image}
                    alt={`${directorData.name} - Director, SOMAME Team Research`}
                    width={80}
                    height={80}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider">
                    <Target className="w-3 h-3" />
                    Executive Direction
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-[#0F172A]">{directorData.name}</h4>
                  <p className="text-[11px] font-mono text-slate-500 font-semibold">
                    {directorData.year} · Batch {directorData.batch}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Coordinates overarching research strategy, project roadmaps, and multi-domain collaboration across the MME department.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Directorate Lead</span>
              <span className="text-[#0F172A] font-semibold">UET MME</span>
            </div>
          </div>

          {/* Co-Director 1: Abdullah Waris */}
          {coDirectorsData.map((cd) => {
            const isAdeel = cd.id.includes('adeel');
            return (
              <div
                key={cd.id}
                className="bg-white rounded-3xl border border-[#E8E4DF] p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0">
                      <img
                        src={cd.image}
                        alt={`${cd.name} - Co-Director, SOMAME Team Research`}
                        width={80}
                        height={80}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider">
                        {isAdeel ? <Cpu className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                        {isAdeel ? 'AI & Computational' : 'Operations & Literature'}
                      </span>
                      <h4 className="text-lg sm:text-xl font-black text-[#0F172A]">{cd.name}</h4>
                      <p className="text-[11px] font-mono text-slate-500 font-semibold">
                        {cd.year} · Batch {cd.batch}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cd.bio}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Respected Co-Director</span>
                  {cd.portfolio ? (
                    <a
                      href={cd.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#8B2E1A] font-semibold hover:underline"
                    >
                      Portfolio
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <span className="text-slate-500 font-semibold">UET MME</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
