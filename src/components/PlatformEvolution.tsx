import React from 'react';

const milestones = [
  {
    phase: 'Phase 1',
    period: '2025 — Present',
    title: 'Foundation',
    status: 'active',
    items: ['Team formation', 'Platform launch', 'Advisor onboarding', 'Research culture initiation'],
  },
  {
    phase: 'Phase 2',
    period: '2026 →',
    title: 'Skill Development',
    status: 'planned',
    items: ['Methodology workshops', 'Tool training sessions', 'Literature review programs', 'Mini-research projects'],
  },
  {
    phase: 'Phase 3',
    period: '2027 →',
    title: 'Research Output',
    status: 'future',
    items: ['First research contributions', 'Competition entries', 'Technical publications', 'External collaborations'],
  },
];

export const PlatformEvolution: React.FC = () => (
  <section className="bg-white section-pad border-t border-[#E8E4DF]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
          <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Roadmap</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
          Where We Are &amp; Where We're Going
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed">
          A transparent, staged evolution from foundational team to active research contributors.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#8B2E1A] via-[#E8E4DF] to-[#E8E4DF]" />

        <div className="space-y-6">
          {milestones.map((m, i) => {
            const isActive = m.status === 'active';
            const isPlanned = m.status === 'planned';
            const dotColor = isActive ? '#8B2E1A' : isPlanned ? '#0F172A' : '#D4CFC9';

            return (
              <div key={i} className="relative pl-16">
                {/* Dot */}
                <div
                  className="absolute left-6 top-7 w-5 h-5 rounded-full border-2 border-white shadow-md -translate-x-1/2 -translate-y-1/2"
                  style={{ background: dotColor }}
                >
                  {isActive && (
                    <span className="absolute -inset-1.5 rounded-full animate-ping opacity-25" style={{ background: dotColor }} />
                  )}
                </div>

                <div
                  className={`p-6 rounded-2xl border ${
                    isActive
                      ? 'border-[#8B2E1A]/25 bg-[#FAF0EE]/40 shadow-xs'
                      : isPlanned
                      ? 'border-[#E8E4DF] bg-[#F8F7F5]'
                      : 'border-[#E8E4DF] bg-[#F8F7F5]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-widest"
                        style={{ color: dotColor }}
                      >
                        {m.phase}
                      </span>
                      <h3 className="text-xl font-bold text-[#0F172A] mt-0.5">{m.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400">{m.period}</span>
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold"
                        style={{
                          background: `${dotColor}15`,
                          color: dotColor,
                        }}
                      >
                        {m.status.charAt(0).toUpperCase() + m.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {m.items.map((item) => (
                      <span
                        key={item}
                        className="text-[12px] px-3 py-1.5 rounded-lg font-medium bg-white border border-[#E8E4DF] text-slate-700 shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
