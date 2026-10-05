import React from 'react';
import { CheckCircle2, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const AchievementPreview: React.FC<{ onViewArchive: () => void }> = ({ onViewArchive }) => {
  const milestones = [
    {
      status: 'verified',
      code: 'M-01',
      title: 'Institutional Directorate & Advisor Onboarding',
      desc: 'Officially confirmed under Society Advisor Dr. Khushnuda Nur, Assistant Professor MME.',
      badge: 'Completed & Active',
    },
    {
      status: 'verified',
      code: 'M-02',
      title: 'Open Research Platform & Knowledge Engine',
      desc: 'Launched dedicated academic platform for student research, computational workflows, and CALPHAD datasets.',
      badge: 'Live & Operational',
    },
    {
      status: 'in-progress',
      code: 'M-03',
      title: 'Methodology Workshops & Scientific Literature Circles',
      desc: 'Undergraduate training in XRD/SEM characterization, scientific writing, and AI tools integration.',
      badge: 'Active Q1 2026',
    },
    {
      status: 'upcoming',
      code: 'M-04',
      title: 'Peer-Reviewed Experimental Dissemination',
      desc: 'Targeted research contributions in conference proceedings and academic journals with verified data.',
      badge: 'Roadmap Milestone',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                Weekly Research Challenges &amp; Achievements
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
              Collaborative Tasks. <span className="text-[#8B2E1A]">Performer of the Week.</span>
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Combined senior-junior research cohorts tackle weekly materials engineering tasks. The top-performing group is spotlighted here with verified departmental credit.
            </p>
          </div>

          <button
            onClick={onViewArchive}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#E8E4DF] hover:border-slate-400 bg-white hover:bg-[#F8F7F5] text-[#0F172A] font-semibold text-sm transition-all font-mono shadow-2xs cursor-pointer self-start lg:self-auto"
          >
            <span>Explore Weekly Challenge Hub</span>
            <ArrowRight className="w-4 h-4 text-[#8B2E1A]" />
          </button>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m, idx) => {
            const isDone = m.status === 'verified';
            const isInProgress = m.status === 'in-progress';
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between group ${
                  isDone
                    ? 'border-[#8B2E1A]/20 bg-gradient-to-b from-[#FAF0EE]/30 to-white hover:border-[#8B2E1A]/40 hover:shadow-md'
                    : isInProgress
                    ? 'border-slate-300 bg-white hover:shadow-md'
                    : 'border-dashed border-[#E8E4DF] bg-[#F8F7F5]/60 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E8E4DF] text-slate-600">
                      {m.code}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        isDone
                          ? 'bg-[#FAF0EE] text-[#8B2E1A]'
                          : isInProgress
                          ? 'bg-slate-100 text-slate-800'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {isDone && <CheckCircle2 className="w-2.5 h-2.5" />}
                      {isInProgress && <Clock className="w-2.5 h-2.5" />}
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#0F172A] text-sm sm:text-base leading-snug mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Verified Record</span>
                  <ShieldCheck className={`w-3.5 h-3.5 ${isDone ? 'text-[#8B2E1A]' : 'text-slate-300'}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
