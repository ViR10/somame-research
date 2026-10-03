import React from 'react';

export const ResearchDevelopmentFramework: React.FC = () => {
  const framework = [
    { phase: 'Foundation', items: ['Scientific literacy', 'Research paper reading', 'Methodology basics'] },
    { phase: 'Development', items: ['Tool proficiency', 'Data analysis', 'Experimental design'] },
    { phase: 'Application', items: ['Mini-projects', 'AI tools integration', 'Technical writing'] },
    { phase: 'Contribution', items: ['Research output', 'Peer review', 'Knowledge sharing'] },
  ];

  return (
    <section className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Research Framework</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
              A Structured Path to{' '}
              <span className="text-[#8B2E1A]">Scientific Mastery</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We do not throw students into research blind. SOMAME provides a four-phase framework that
              progressively builds the skills, knowledge, and mindset required to become a contributing researcher.
            </p>
            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#8B2E1A]" />
                Research methodology workshops
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#8B2E1A]" />
                Advisor-guided scientific discussions
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#8B2E1A]" />
                Practical computational tools training
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#8B2E1A]" />
                Peer-reviewed internal research culture
              </div>
            </div>
          </div>

          {/* Right: framework phases */}
          <div className="space-y-3.5">
            {framework.map((f, i) => {
              const colors = ['#0F172A', '#8B2E1A', '#5C3D2E', '#0F172A'];
              const color = colors[i];
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-[#E8E4DF] bg-[#F8F7F5] flex gap-4 items-start hover:border-slate-300 transition-all shadow-2xs"
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                    style={{ background: color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1"
                      style={{ color }}
                    >
                      Phase {i + 1}
                    </div>
                    <div className="font-bold text-[#0F172A] text-[15px] mb-2">{f.phase}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {f.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2.5 py-1 rounded-lg font-mono font-semibold bg-white border border-[#E8E4DF] text-slate-700 shadow-2xs"
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
};
