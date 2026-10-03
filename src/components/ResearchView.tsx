import React from 'react';

const domains = [
  { code: 'MAT-01', title: 'Microstructure & Characterization', color: '#0F172A', tag: 'Experimental', desc: 'SEM, XRD, TEM analysis. Understanding how processing parameters influence grain structure, phase distribution, and crystallographic texture.', methods: ['SEM / EDX', 'X-Ray Diffraction', 'TEM', 'Optical Metallography', 'EBSD'] },
  { code: 'MAT-02', title: 'Phase Diagrams & Thermodynamics', color: '#8B2E1A', tag: 'Computational', desc: 'Binary and ternary phase equilibria, Gibbs energy minimization, and CALPHAD approaches for predicting phase stability and transformation temperatures.', methods: ['CALPHAD', 'Thermo-Calc', 'Gibbs Minimization', 'Differential Thermal Analysis'] },
  { code: 'MAT-03', title: 'Mechanical Behavior', color: '#5C3D2E', tag: 'Analytical', desc: 'Deformation mechanisms, fracture mechanics, fatigue life prediction, and creep behavior in metallic systems.', methods: ['Tensile Testing', 'Hardness Mapping', 'Fatigue Analysis', 'Fractography'] },
  { code: 'MAT-04', title: 'Computational Materials Science', color: '#0F172A', tag: 'Simulation', desc: 'First-principles DFT calculations, molecular dynamics simulations, and finite element analysis for property prediction.', methods: ['VASP / Quantum ESPRESSO', 'LAMMPS', 'ABINIT', 'FEA / ANSYS'] },
  { code: 'MAT-05', title: 'AI × Materials Integration', color: '#8B2E1A', tag: 'AI-Driven', desc: 'Machine learning for structure-property relationships, natural language processing for literature mining, and data-driven alloy design.', methods: ['Scikit-learn', 'TensorFlow', 'AFLOW / Citrine', 'Materials Project API'] },
  { code: 'MAT-06', title: 'Corrosion & Surface Science', color: '#5C3D2E', tag: 'Applied', desc: 'Electrochemical corrosion mechanisms, protective coating systems, and surface modification techniques for structural longevity.', methods: ['Potentiodynamic Polarization', 'EIS', 'Salt Spray Testing', 'XPS'] },
];

const workflow = [
  { step: '01', title: 'Literature Review', desc: 'Systematic search and critical analysis of existing research.' },
  { step: '02', title: 'Problem Definition', desc: 'Formulating a clear, testable research question or hypothesis.' },
  { step: '03', title: 'Methodology Design', desc: 'Selecting appropriate experimental or computational approaches.' },
  { step: '04', title: 'Data Collection', desc: 'Gathering experimental measurements or simulation outputs.' },
  { step: '05', title: 'Analysis', desc: 'Statistical, computational, or phenomenological interpretation.' },
  { step: '06', title: 'Validation', desc: 'Cross-checking findings against established literature and benchmarks.' },
  { step: '07', title: 'Communication', desc: 'Technical writing, figures, and structured scientific presentation.' },
  { step: '08', title: 'Peer Review', desc: 'Internal evaluation and critique before any external dissemination.' },
];

export const ResearchView: React.FC<{ onNavigateToAIMaterials: () => void }> = ({ onNavigateToAIMaterials }) => (
  <div className="bg-white">
    {/* Hero */}
    <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Research Domains</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
            What We Study
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Six interconnected research domains spanning experimental characterization, computational simulation,
            and AI-driven discovery — all anchored in Materials Engineering.
          </p>
        </div>
      </div>
    </section>

    {/* Domains */}
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {domains.map((d, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl border border-[#E8E4DF] bg-white hover:border-[#8B2E1A]/30 hover:shadow-md transition-all overflow-hidden relative shadow-2xs"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: d.color }}
              />
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest" style={{ color: d.color }}>
                  {d.code}
                </span>
                <span
                  className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full"
                  style={{ color: d.color, background: `${d.color}10` }}
                >
                  {d.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{d.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{d.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {d.methods.map((m) => (
                  <span
                    key={m}
                    className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg"
                    style={{ background: `${d.color}08`, color: d.color, border: `1px solid ${d.color}18` }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Scientific Workflow */}
    <section className="bg-[#F8F7F5] py-20 md:py-24 border-t border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Methodology</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
            Scientific Workflow
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Our 8-step research process ensures rigorous, reproducible, and communicable science at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflow.map((w, i) => (
            <div key={i} className="group p-5 rounded-2xl bg-white border border-[#E8E4DF] hover:border-[#8B2E1A]/30 hover:shadow-md transition-all shadow-2xs">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-mono font-bold mb-3 bg-[#0F172A] group-hover:bg-[#8B2E1A] transition-colors"
              >
                {w.step}
              </div>
              <h3 className="font-bold text-[#0F172A] text-[15px] mb-1.5">{w.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA to AI×Materials (Clean Light Surface, No Blue!) */}
    <section className="bg-white py-16 border-t border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-[#0F172A] mb-3">Explore Our Signature Research Direction</h2>
        <p className="text-lg text-slate-500 mb-7">Discover how AI is transforming our approach to Materials Engineering research.</p>
        <button
          onClick={onNavigateToAIMaterials}
          className="px-8 py-3.5 rounded-xl bg-[#8B2E1A] hover:bg-[#a33520] text-white font-semibold text-sm font-mono transition-all shadow-sm"
        >
          AI × Materials →
        </button>
      </div>
    </section>
  </div>
);
