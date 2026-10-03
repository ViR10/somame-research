import React from 'react';

const values = [
  { num: '01', title: 'Scientific Integrity', desc: 'Every claim backed by evidence. No shortcuts, no fabricated results.' },
  { num: '02', title: 'Curiosity First', desc: 'Asking the right question is the start of every great research journey.' },
  { num: '03', title: 'Evidence-Based', desc: 'Rigor over speculation. We validate before we conclude.' },
  { num: '04', title: 'Collaboration', desc: 'Domain expertise amplified by teamwork across disciplines.' },
  { num: '05', title: 'Continuous Growth', desc: 'Research skill is built iteratively — one paper, one experiment at a time.' },
  { num: '06', title: 'Responsible AI', desc: 'AI as a scientific tool, governed by human judgment and ethical standards.' },
];

export const ResponsibleResearchSection: React.FC = () => (
  <section className="bg-[#F8F7F5] section-pad border-y border-[#E8E4DF]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
          <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Core Values</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
          Research With{' '}
          <span className="text-[#8B2E1A]">Integrity</span>
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed">
          These principles are not aspirational — they govern how we operate every single day.
        </p>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {values.map((v, i) => (
          <div
            key={i}
            className="p-7 rounded-2xl border border-[#E8E4DF] bg-white hover:border-[#8B2E1A]/30 hover:shadow-md transition-all group"
          >
            <div className="text-[11px] font-mono font-bold text-[#8B2E1A] mb-3 tracking-widest">{v.num}</div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">{v.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
