import React, { useState } from 'react';
import { advisorData, directorData, coDirectorsData } from '../data/team';
import { 
  Compass, 
  Target, 
  Cpu, 
  BookOpen, 
  Users, 
  ExternalLink, 
  ArrowDown
} from 'lucide-react';

export const GovernanceHierarchy: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number | null>(null);

  const researchDivisions = [
    { code: 'MAT-01', name: 'Microstructure & Characterization', tools: 'SEM · XRD · TEM' },
    { code: 'MAT-02', name: 'Phase Diagrams & CALPHAD', tools: 'Thermo-Calc · Pandat' },
    { code: 'MAT-03', name: 'Mechanical Behavior', tools: 'Tensile · Fatigue · Hardness' },
    { code: 'MAT-04', name: 'Computational Materials', tools: 'DFT · Quantum ESPRESSO' },
    { code: 'MAT-05', name: 'AI × Materials Integration', tools: 'PyTorch · Scikit-Learn' },
    { code: 'MAT-06', name: 'Corrosion & Surface Science', tools: 'EIS · Potentiodynamic' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B2E1A]/20 bg-[#FAF0EE] text-[#8B2E1A] mb-4 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#8B2E1A] animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
            Governance &amp; Leadership Chain
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
          Structured Guidance &amp; Research Chain
        </h2>
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
          A principled hierarchy led by senior faculty mentorship, executive student direction, and specialized co-directorate operations.
        </p>
      </div>

      {/* Main Hierarchy Flow Container */}
      <div className="relative flex flex-col items-center space-y-6 sm:space-y-8">

        {/* TIER 1: SOCIETY ADVISOR (GUIDANCE FIRST) */}
        <div 
          onMouseEnter={() => setActiveTier(1)}
          onMouseLeave={() => setActiveTier(null)}
          className={`w-full max-w-3xl rounded-3xl p-6 sm:p-8 transition-all duration-300 border ${
            activeTier === 1 
              ? 'border-[#8B2E1A] shadow-xl bg-white scale-[1.01]' 
              : 'border-[#8B2E1A]/30 bg-gradient-to-br from-[#FAF0EE]/70 via-white to-white shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Advisor Photo - Dignified, Clean with NO overlay tag on face */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#8B2E1A]/20 shadow-md bg-white">
                <img
                  src={advisorData.image}
                  alt={`${advisorData.name} - Society Advisor, SOMAME Team Research`}
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#8B2E1A] text-white px-3 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-sm tracking-wider uppercase">
                Level 01 · Guidance
              </div>
            </div>

            {/* Advisor Details */}
            <div className="flex-grow text-center sm:text-left space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#8B2E1A]/10 text-[#8B2E1A] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  Institutional &amp; Scientific Guidance
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold">
                  MME Dept. · UET Lahore
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {advisorData.name}
              </h3>
              
              <p className="text-sm font-semibold text-[#8B2E1A] font-mono">
                {advisorData.role} • {advisorData.officialTitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Provides institutional governance, academic ethics, scientific methodology oversight, and departmental alignment — guiding student researchers toward rigorous, reproducible scientific inquiry.
              </p>

              {/* Guidance Pillars */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-2">
                {['Scientific Integrity', 'Methodology Oversight', 'Academic Mentorship', 'Departmental Alignment'].map((pillar) => (
                  <span
                    key={pillar}
                    className="text-[11px] px-2.5 py-1 rounded-lg font-mono font-medium bg-white border border-[#E8E4DF] text-slate-700 shadow-2xs"
                  >
                    ✓ {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONNECTOR 1: Flow from Advisor to Director */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-8 sm:h-10 bg-gradient-to-b from-[#8B2E1A] to-[#0F172A]" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E4DF] text-slate-600 text-[10px] font-mono font-bold shadow-2xs -my-2 z-10">
            <span>Academic Guidance &amp; Direction</span>
            <ArrowDown className="w-3 h-3 text-[#8B2E1A]" />
          </div>
          <div className="w-0.5 h-8 sm:h-10 bg-[#0F172A]" />
        </div>

        {/* TIER 2: DIRECTOR (EXECUTIVE STRATEGY & COORDINATION) */}
        <div 
          onMouseEnter={() => setActiveTier(2)}
          onMouseLeave={() => setActiveTier(null)}
          className={`w-full max-w-3xl rounded-3xl p-6 sm:p-8 transition-all duration-300 border ${
            activeTier === 2 
              ? 'border-[#0F172A] shadow-xl bg-white scale-[1.01]' 
              : 'border-[#E8E4DF] bg-white shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Director Photo */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-50">
                <img
                  src={directorData.image}
                  alt={`${directorData.name} - Director, SOMAME Team Research`}
                  width={112}
                  height={112}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0F172A] text-white px-3 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-sm tracking-wider uppercase">
                Level 02 · Director
              </div>
            </div>

            {/* Director Details */}
            <div className="flex-grow text-center sm:text-left space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-[#0F172A] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5 text-[#8B2E1A]" />
                  Executive Research Direction
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold">
                  {directorData.year} · Batch {directorData.batch}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {directorData.name}
              </h3>

              <p className="text-sm font-semibold text-slate-700 font-mono">
                {directorData.officialTitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Leads the overarching research strategy, project roadmaps, external partnerships, and milestone execution under the continuous guidance of the Society Advisor.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-2">
                {directorData.areasOfFocus.map((focus) => (
                  <span
                    key={focus}
                    className="text-[11px] px-2.5 py-1 rounded-lg font-mono font-medium bg-[#F8F7F5] border border-[#E8E4DF] text-slate-700"
                  >
                    • {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONNECTOR 2: Split to Co-Directors */}
        <div className="flex flex-col items-center w-full max-w-3xl">
          <div className="w-0.5 h-6 bg-[#0F172A]" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E4DF] text-slate-600 text-[10px] font-mono font-bold shadow-2xs -my-2 z-10">
            <span>Operational &amp; Technical Coordination</span>
            <ArrowDown className="w-3 h-3 text-[#0F172A]" />
          </div>
          <div className="w-0.5 h-6 bg-slate-300" />
          {/* Horizontal Fork Bar */}
          <div className="hidden sm:block w-3/4 h-0.5 bg-slate-300" />
        </div>

        {/* TIER 3: RESPECTED CO-DIRECTORS (DUAL SPECIALIZATION) */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {coDirectorsData.map((coDirector, idx) => {
            const isAdeel = coDirector.id.includes('adeel');
            return (
              <div
                key={coDirector.id}
                onMouseEnter={() => setActiveTier(30 + idx)}
                onMouseLeave={() => setActiveTier(null)}
                className={`rounded-3xl p-6 transition-all duration-300 border ${
                  activeTier === 30 + idx
                    ? 'border-[#0F172A] shadow-xl bg-white scale-[1.01]'
                    : 'border-[#E8E4DF] bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-2xs">
                      <img
                        src={coDirector.image}
                        alt={`${coDirector.name} - Co-Director, SOMAME Team Research`}
                        width={80}
                        height={80}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white px-2 py-0.2 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase">
                      Co-Director
                    </div>
                  </div>

                  <div className="min-w-0 flex-grow">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider mb-1">
                      {isAdeel ? <Cpu className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                      {isAdeel ? 'AI & Computational Systems' : 'Research Operations & Literature'}
                    </span>
                    <h4 className="text-xl font-black text-[#0F172A] tracking-tight truncate">
                      {coDirector.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-500 font-semibold">
                      {coDirector.year} · Batch {coDirector.batch}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {coDirector.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {coDirector.areasOfFocus.map((area) => (
                    <span
                      key={area}
                      className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md font-mono font-medium bg-[#F8F7F5] border border-[#E8E4DF] text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {coDirector.portfolio && (
                  <div className="mt-4 pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">Personal Portfolio</span>
                    <a
                      href={coDirector.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono font-semibold text-[#8B2E1A] hover:underline"
                    >
                      adeelshahid.netlify.app
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CONNECTOR 3: Flow into Research Activities & Student Members */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-8 bg-slate-300" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E4DF] text-slate-600 text-[10px] font-mono font-bold shadow-2xs -my-2 z-10">
            <span>Domain Working Groups &amp; Society Members</span>
            <ArrowDown className="w-3 h-3 text-slate-400" />
          </div>
          <div className="w-0.5 h-8 bg-slate-800" />
        </div>

        {/* TIER 4: RESEARCH ACTIVITIES & STUDENT WORKING GROUPS */}
        <div className="w-full max-w-4xl rounded-3xl p-6 sm:p-8 bg-[#0F172A] text-white border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block">
                  Level 04 · Research Divisions
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Research Activities &amp; Student Members (SOMAME Society)
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-slate-300">
              Undergraduate Working Groups
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Undergraduate student investigators actively engaged in laboratory experiments, scientific literature review, computational materials simulation, and AI model implementations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {researchDivisions.map((div) => (
              <div
                key={div.code}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#FAF0EE] bg-[#8B2E1A]/40 px-2 py-0.5 rounded">
                    {div.code}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{div.tools}</span>
                </div>
                <div className="text-xs font-bold text-white mt-1.5">{div.name}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
