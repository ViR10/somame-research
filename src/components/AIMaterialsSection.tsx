import React from 'react';

const pipeline = [
  { step: '01', label: 'Experimental Data', desc: 'XRD, SEM, TEM measurements from physical specimens' },
  { step: '02', label: 'Data Processing', desc: 'Python-based cleaning, feature extraction, normalization' },
  { step: '03', label: 'ML Model Training', desc: 'Supervised learning for property prediction' },
  { step: '04', label: 'Validation', desc: 'Cross-validation against experimental benchmarks' },
  { step: '05', label: 'Insight Extraction', desc: 'Physics-informed interpretation of model outputs' },
  { step: '06', label: 'Publication Ready', desc: 'Structured findings for academic dissemination' },
];

const tools = ['Python / NumPy', 'Scikit-learn', 'CALPHAD / Thermo-Calc', 'VESTA', 'AFLOW / Materials Project', 'Pandas / Matplotlib'];

export const AIMaterialsSection: React.FC = () => (
  <section className="bg-white section-pad">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Signature Direction</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
            AI ×{' '}
            <span className="text-[#8B2E1A]">Materials</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            The intersection where machine intelligence meets metallurgical science. We train students to
            leverage AI not as a black box, but as a scientifically principled accelerator for materials discovery.
          </p>
        </div>

        {/* Pipeline visual */}
        <div className="space-y-2.5">
          {pipeline.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3.5 rounded-xl border border-[#E8E4DF] bg-[#F8F7F5] hover:bg-white hover:border-[#8B2E1A]/30 transition-all group shadow-2xs"
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-mono font-bold text-white transition-colors ${
                  i === 3
                    ? 'bg-[#8B2E1A]'
                    : 'bg-[#0F172A] group-hover:bg-[#8B2E1A]'
                }`}
              >
                {p.step}
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-bold text-[#0F172A] leading-none">{p.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{p.desc}</div>
              </div>
              {i < pipeline.length - 1 && (
                <span className="text-[#E8E4DF] ml-auto text-lg">↓</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="p-6 rounded-2xl bg-[#F8F7F5] border border-[#E8E4DF] flex flex-col sm:flex-row items-center gap-5 shadow-2xs">
        <div className="shrink-0 text-center sm:text-left">
          <div className="text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest mb-1">Toolchain</div>
          <div className="text-lg font-bold text-[#0F172A]">Research Stack</div>
        </div>
        <div className="w-px h-10 bg-[#E8E4DF] shrink-0 hidden sm:block" />
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {tools.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-lg bg-white border border-[#E8E4DF] text-[11px] font-mono font-semibold text-[#0F172A] shadow-2xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
