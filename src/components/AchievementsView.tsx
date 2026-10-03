import React from 'react';

const categories = [
  { title: 'Research Publications', sub: 'Peer-reviewed papers & reports', icon: '📄' },
  { title: 'Competition Awards', sub: 'National & international recognition', icon: '🏆' },
  { title: 'Workshops Conducted', sub: 'Internal & external technical sessions', icon: '📚' },
  { title: 'Certifications', sub: 'Technical skill verifications', icon: '🎓' },
  { title: 'Research Projects', sub: 'Completed investigations', icon: '🔬' },
  { title: 'External Recognition', sub: 'Faculty & industry acknowledgements', icon: '⭐' },
];

const verificationSteps = [
  { step: '01', title: 'Documentation', desc: 'All achievements must be supported by documented evidence.' },
  { step: '02', title: 'Internal Review', desc: 'Reviewed by SOMAME Directorate for accuracy and completeness.' },
  { step: '03', title: 'Advisor Confirmation', desc: 'Validated by the Society Advisor — Dr. Khushnuda Nur.' },
  { step: '04', title: 'Publication', desc: 'Published here with full attribution and verifiable references.' },
  { step: '05', title: 'Archive', desc: 'Permanently archived for institutional and historical record.' },
];

export const AchievementsView: React.FC = () => (
  <div className="bg-white">
    {/* Hero */}
    <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-6 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
          <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Achievement Archive</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
          Verified Progress
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Every achievement published here is real, documented, and verified. We do not inflate our record.
          SOMAME Team Research is in its founding stage — and we are proud of that honesty.
        </p>
      </div>
    </section>

    {/* Empty State */}
    <section className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-[#E8E4DF] p-14 sm:p-20 bg-white">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border border-[#E8E4DF] bg-[#F8F7F5] flex items-center justify-center text-4xl mx-auto mb-6 shadow-2xs">
              🏛️
            </div>
            <div className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest mb-3">
              Archive Opening Soon
            </div>
            <h2 className="text-4xl font-black text-[#0F172A] leading-tight mb-4">
              Our Story Is Just Beginning
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
              SOMAME Team Research launched in 2025. This archive will be populated as verified achievements
              are earned, documented, and confirmed by our Society Advisor.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="bg-[#F8F7F5] py-20 md:py-24 border-t border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">Achievement Categories</h2>
          <p className="text-slate-500 mt-2">When achievements are earned, they will be archived under these categories.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
          {categories.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-dashed border-[#E8E4DF] p-5 text-center shadow-2xs">
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="font-bold text-[#0F172A] text-sm mb-1">{c.title}</div>
              <div className="text-[11px] text-slate-400">{c.sub}</div>
              <div className="mt-3 text-[10px] font-mono text-[#8B2E1A] font-semibold">0 entries</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Verification Process */}
    <section className="py-20 md:py-24 bg-white border-t border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Integrity Protocol</span>
          </div>
          <h2 className="text-4xl font-black text-[#0F172A] tracking-tight">
            Our Verification Process
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {verificationSteps.map((s, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl bg-[#F8F7F5] border border-[#E8E4DF] text-center hover:shadow-sm transition-all shadow-2xs ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div
                className="w-9 h-9 rounded-xl mx-auto mb-3 flex items-center justify-center text-white text-[11px] font-mono font-bold"
                style={{ background: i === 2 ? '#8B2E1A' : '#0F172A' }}
              >
                {s.step}
              </div>
              <div className="font-bold text-[#0F172A] text-[14px] mb-1">{s.title}</div>
              <p className="text-[12px] text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
