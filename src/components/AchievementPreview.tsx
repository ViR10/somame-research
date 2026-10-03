import React from 'react';

export const AchievementPreview: React.FC<{ onViewArchive: () => void }> = ({ onViewArchive }) => (
  <section className="bg-white section-pad">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Large empty state card */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-[#E8E4DF] p-12 sm:p-16 text-center bg-[#F8F7F5]">
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(#8B2E1A 1px, transparent 1px)`,
              backgroundSize: '22px 22px',
            }}
          />

          {/* Icon */}
          <div className="relative mx-auto w-20 h-20 rounded-2xl border border-[#E8E4DF] bg-white flex items-center justify-center mb-6 shadow-xs">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8B2E1A" strokeWidth="1.5">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/>
              <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z"/>
            </svg>
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#8B2E1A] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </div>

          <div className="relative">
            <div className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest mb-3">
              Achievement Archive
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight mb-4">
              Our Story Is
              <br />
              Just Beginning
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-8">
              SOMAME Team Research is in its founding stage. Every achievement will be carefully documented,
              peer-reviewed within our team, and published here once verified. No fabricated milestones —
              only real progress.
            </p>

            {/* Category placeholders */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
              {['Publications', 'Competitions', 'Workshops', 'Certifications', 'Projects', 'Recognition'].map((cat) => (
                <div
                  key={cat}
                  className="py-3 px-4 rounded-xl border border-dashed border-[#E8E4DF] bg-white text-[12px] font-semibold text-slate-400"
                >
                  {cat}
                  <div className="text-[10px] font-mono mt-0.5 text-slate-300">Pending</div>
                </div>
              ))}
            </div>

            <button
              onClick={onViewArchive}
              className="px-6 py-3 rounded-xl border border-[#E8E4DF] bg-white text-[#0F172A] font-semibold text-sm hover:bg-white hover:border-[#0F172A]/30 hover:shadow-md transition-all font-mono shadow-2xs"
            >
              View Achievement Archive →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
