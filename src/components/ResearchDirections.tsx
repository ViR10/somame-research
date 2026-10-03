import React from 'react';

const areas = [
  {
    code: 'MAT-01',
    title: 'Microstructure & Characterization',
    desc: 'SEM, XRD, TEM analysis of metallic and ceramic systems. Understanding how processing shapes structure.',
    tag: 'Experimental',
    color: '#0F172A',
  },
  {
    code: 'MAT-02',
    title: 'Phase Diagrams & Thermodynamics',
    desc: 'Binary and ternary phase equilibria, Gibbs energy minimization, and computational thermodynamics (CALPHAD).',
    tag: 'Computational',
    color: '#8B2E1A',
  },
  {
    code: 'MAT-03',
    title: 'Mechanical Behavior',
    desc: 'Deformation mechanisms, fracture mechanics, fatigue, and creep in engineering alloys.',
    tag: 'Analytical',
    color: '#5C3D2E',
  },
  {
    code: 'MAT-04',
    title: 'Computational Materials',
    desc: 'DFT, molecular dynamics, and CALPHAD approaches to predicting material properties from first principles.',
    tag: 'Simulation',
    color: '#0F172A',
  },
  {
    code: 'MAT-05',
    title: 'AI × Materials Integration',
    desc: 'Machine learning for property prediction, literature mining, and structure–property relationship discovery.',
    tag: 'AI-Driven',
    color: '#8B2E1A',
  },
  {
    code: 'MAT-06',
    title: 'Corrosion & Surface Science',
    desc: 'Electrochemical methods, corrosion kinetics, and protective coatings for structural integrity.',
    tag: 'Applied',
    color: '#5C3D2E',
  },
];

export const ResearchDirections: React.FC<{ onExploreResearch: () => void }> = ({ onExploreResearch }) => (
  <section className="bg-[#F8F7F5] section-pad border-y border-[#E8E4DF]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Research Domains</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
            What We Study
          </h2>
          <p className="mt-3 text-lg text-slate-500 leading-relaxed">
            Six interconnected domains covering the full spectrum from experimental characterization to AI-driven discovery.
          </p>
        </div>
        <button
          onClick={onExploreResearch}
          className="shrink-0 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm font-mono"
        >
          View Full Research →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {areas.map((area, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-2xl border border-[#E8E4DF] p-6 hover:border-slate-300 hover:shadow-lg transition-all overflow-hidden"
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-[0.04]"
              style={{ background: area.color }}
            />

            {/* Code + Tag */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-[10px] font-mono font-bold tracking-widest"
                style={{ color: area.color }}
              >
                {area.code}
              </span>
              <span
                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full"
                style={{
                  color: area.color,
                  background: `${area.color}12`,
                }}
              >
                {area.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[17px] font-bold text-[#0F172A] mb-2 leading-snug">{area.title}</h3>

            {/* Desc */}
            <p className="text-sm text-slate-500 leading-relaxed">{area.desc}</p>

            {/* Bottom accent bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: area.color }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
