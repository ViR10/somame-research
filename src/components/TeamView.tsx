import React, { useState } from 'react';
import { advisorData, directorData, coDirectorsData } from '../data/team';
import type { TeamMember } from '../data/team';
import { ArrowRight, X, Mail, ExternalLink, Compass, Target, Cpu, BookOpen } from 'lucide-react';
import { IconLinkedIn } from './ScientificIcons';

export const TeamView: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-white">
      {/* 1. Clean Header Banner */}
      <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                Our Leadership
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
              Leadership &amp; Faculty Mentorship
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Guided by institutional faculty leadership, steered by student executive direction, and supported by specialized research operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profiles Container (Clean, Minimal, Zero Clutter) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        
        {/* 2. Society Advisor Section (Dr. Khushnuda Nur) */}
        <div>
          <div className="max-w-2xl mb-6">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-1">
              INSTITUTIONAL GUIDANCE &amp; PATRON
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Society Advisor — SOMAME
            </h2>
          </div>

          <div className="p-7 sm:p-10 rounded-3xl border border-[#8B2E1A]/25 bg-gradient-to-br from-[#FAF0EE]/50 via-white to-white shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10">
              {/* Advisor Photo - 100% Clean Face, Instant Eager Load */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-white border-2 border-[#8B2E1A]/20 shadow-md shrink-0">
                <img
                  src={advisorData.image}
                  alt={`${advisorData.name} - Society Advisor, SOMAME Team Research, Assistant Professor MME UET Lahore`}
                  width={224}
                  height={224}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Advisor Details */}
              <div className="space-y-4 text-center lg:text-left flex-grow">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#8B2E1A]/10 text-[#8B2E1A] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Academic Guidance &amp; Scientific Direction</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                    {advisorData.name}
                  </h3>
                  <p className="text-base font-bold text-[#8B2E1A] font-mono mt-1">
                    {advisorData.officialTitle}
                  </p>
                  <p className="text-sm text-slate-500 font-mono mt-0.5">
                    {advisorData.institution}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl font-sans">
                  {advisorData.bio}
                </p>

                {/* Areas of Focus */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                  {advisorData.areasOfFocus.map((area: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E8E4DF] text-[#0F172A] text-xs font-mono font-semibold shadow-2xs"
                    >
                      ✓ {area}
                    </span>
                  ))}
                </div>

                {advisorData.linkedin && (
                  <div className="pt-3 flex justify-center lg:justify-start">
                    <a
                      href={advisorData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-mono font-bold transition-all shadow-sm"
                    >
                      <IconLinkedIn className="w-4 h-4 text-[#8B2E1A]" />
                      <span>Verified Academic Profile (LinkedIn)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/50" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Director Section (Fatima Imran) */}
        <div>
          <div className="max-w-2xl mb-6">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-1">
              STUDENT RESEARCH DIRECTORATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Team Director
            </h2>
          </div>

          <div className="p-7 sm:p-9 rounded-3xl border border-[#E8E4DF] bg-white shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-[#F8F7F5]">
                <img
                  src={directorData.image}
                  alt={`${directorData.name} - Director, SOMAME Team Research (${directorData.year || ''} Batch ${directorData.batch || ''})`}
                  width={176}
                  height={176}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-3.5 text-center sm:text-left flex-grow">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider mb-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Executive Research Direction</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                    {directorData.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 font-mono mt-0.5">
                    {directorData.officialTitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {directorData.year && (
                    <span className="px-3 py-1 rounded-md bg-[#FAF0EE] border border-[#8B2E1A]/20 text-[#8B2E1A] text-xs font-mono font-bold">
                      {directorData.year}
                    </span>
                  )}
                  {directorData.batch && (
                    <span className="px-3 py-1 rounded-md bg-[#F8F7F5] border border-[#E8E4DF] text-slate-600 text-xs font-mono font-semibold">
                      Batch {directorData.batch}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-2xl">
                  {directorData.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center sm:justify-start pt-1">
                  {directorData.areasOfFocus.map((area: string) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-lg bg-[#F8F7F5] border border-[#E8E4DF] text-xs font-mono text-slate-700"
                    >
                      • {area}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedMember(directorData)}
                    className="text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#8B2E1A] font-mono inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Full Profile Credentials</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Respected Co-Directors Section (Abdullah Waris & Adeel Shahid) */}
        <div>
          <div className="max-w-2xl mb-6">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-1">
              OPERATIONAL &amp; TECHNICAL LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Respected Co-Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {coDirectorsData.map((coDir: TeamMember) => {
              const isAdeel = coDir.id.includes('adeel');
              return (
                <div
                  key={coDir.id}
                  className="p-7 rounded-3xl border border-[#E8E4DF] bg-white hover:border-slate-300 hover:shadow-md transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#F8F7F5] border border-[#E8E4DF] shrink-0 shadow-2xs">
                        <img
                          src={coDir.image}
                          alt={`${coDir.name} - Co-Director, SOMAME Team Research (${coDir.year || ''} Batch ${coDir.batch || ''})`}
                          width={96}
                          height={96}
                          loading="eager"
                          fetchPriority="high"
                          decoding="async"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="min-w-0">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider mb-1">
                          {isAdeel ? <Cpu className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                          {isAdeel ? 'AI Systems & Computation' : 'Operations & Literature Review'}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] truncate">
                          {coDir.name}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 font-semibold mt-0.5">
                          {coDir.year} · Batch {coDir.batch}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-sans">
                      {coDir.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {coDir.areasOfFocus.map((focus) => (
                        <span
                          key={focus}
                          className="px-2.5 py-1 rounded-md bg-[#F8F7F5] border border-[#E8E4DF] text-[11px] font-mono text-slate-700"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>

                    {coDir.portfolio && (
                      <div className="mb-4">
                        <a
                          href={coDir.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF0EE] border border-[#8B2E1A]/20 hover:border-[#8B2E1A] text-xs font-mono font-bold text-[#8B2E1A] hover:underline transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#8B2E1A]" />
                          <span>adeelshahid.netlify.app ↗</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#E8E4DF]">
                    <button
                      onClick={() => setSelectedMember(coDir)}
                      className="w-full py-2.5 rounded-xl bg-[#F8F7F5] hover:bg-[#0F172A] text-xs font-semibold text-[#0F172A] hover:text-white transition-all border border-[#E8E4DF] flex items-center justify-center gap-1.5 font-mono cursor-pointer"
                    >
                      <span>View Full Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* 5. Interactive Profile Modal for Deep Credentials */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8E4DF] animate-fade-up max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border border-[#E8E4DF] shrink-0">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={80}
                  height={80}
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider block">
                  {selectedMember.role}
                </span>
                <h3 className="text-2xl font-black text-[#0F172A]">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-mono text-slate-500 font-semibold mt-0.5">
                  {selectedMember.year ? `${selectedMember.year} · Batch ${selectedMember.batch}` : selectedMember.officialTitle}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  Institutional Affiliation
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  {selectedMember.department}
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  {selectedMember.institution}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  Official Bio &amp; Scope
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedMember.bio}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Key Research Focus Areas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMember.areasOfFocus.map((area: string, i: number) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#F8F7F5] border border-[#E8E4DF] text-xs font-mono text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E4DF] flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-mono font-semibold transition-all shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8B2E1A]" />
                  <span>Contact</span>
                </a>

                {selectedMember.portfolio && (
                  <a
                    href={selectedMember.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#E8E4DF] hover:border-slate-400 text-[#0F172A] text-xs font-mono font-semibold transition-all"
                  >
                    <span>Portfolio</span>
                    <ExternalLink className="w-3 h-3 text-[#8B2E1A]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
