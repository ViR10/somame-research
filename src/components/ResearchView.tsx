import React, { useState } from 'react';
import { 
  Microscope, 
  Binary, 
  Activity, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  FlaskConical, 
  Laptop, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface DomainItem {
  code: string;
  title: string;
  category: 'experimental' | 'computational';
  categoryLabel: string;
  color: string;
  desc: string;
  methods: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const domains: DomainItem[] = [
  {
    code: 'MAT-01',
    title: 'Microstructure & Characterization',
    category: 'experimental',
    categoryLabel: 'Experimental',
    color: '#0F172A',
    desc: 'SEM, XRD, TEM analysis. Linking processing parameters to grain morphology, phase distribution, crystallographic texture, and defect density.',
    methods: ['SEM / EDX', 'X-Ray Diffraction', 'TEM', 'Optical Metallography', 'EBSD Mapping'],
    icon: Microscope,
  },
  {
    code: 'MAT-02',
    title: 'Phase Diagrams & Thermodynamics',
    category: 'computational',
    categoryLabel: 'Computational',
    color: '#8B2E1A',
    desc: 'Binary and ternary phase equilibria, Gibbs free energy minimization, and CALPHAD methodology for predicting phase stability and transformation temperatures.',
    methods: ['CALPHAD Modeling', 'Thermo-Calc', 'Gibbs Minimization', 'Pandat Databases', 'DTA / DSC'],
    icon: Binary,
  },
  {
    code: 'MAT-03',
    title: 'Mechanical Behavior of Materials',
    category: 'experimental',
    categoryLabel: 'Experimental',
    color: '#5C3D2E',
    desc: 'Deformation mechanisms, constitutive stress-strain behavior, fracture mechanics, fatigue life assessment, and high-temperature creep in metallic alloys.',
    methods: ['Tensile & Yield Testing', 'Microhardness Mapping', 'Fatigue Analysis', 'Impact Testing', 'Fractography'],
    icon: Activity,
  },
  {
    code: 'MAT-04',
    title: 'Computational Materials Science',
    category: 'computational',
    categoryLabel: 'Simulation',
    color: '#0F172A',
    desc: 'First-principles DFT electronic structure calculations, atomic molecular dynamics (MD), and continuum phase-field simulation for property prediction.',
    methods: ['Quantum ESPRESSO', 'VASP Simulation', 'LAMMPS (MD)', 'VESTA Crystal View', 'FEA Modeling'],
    icon: Cpu,
  },
  {
    code: 'MAT-05',
    title: 'AI × Materials Integration',
    category: 'computational',
    categoryLabel: 'AI-Driven',
    color: '#8B2E1A',
    desc: 'Machine learning for structure-property relationships, natural language processing for literature mining, and data-driven alloy composition design.',
    methods: ['PyTorch / Scikit-learn', 'Materials Project API', 'AFLOW Database', 'NLP Paper Mining', 'Feature Engineering'],
    icon: Sparkles,
  },
  {
    code: 'MAT-06',
    title: 'Corrosion & Surface Science',
    category: 'experimental',
    categoryLabel: 'Experimental',
    color: '#5C3D2E',
    desc: 'Electrochemical degradation kinetics, passivation layer stability, and advanced protective coating systems for structural engineering applications.',
    methods: ['Potentiodynamic Polarization', 'EIS Spectrometry', 'Salt Spray Testing', 'Tafel Analysis', 'Surface Passivation'],
    icon: ShieldCheck,
  },
];

const workflow = [
  { step: '01', title: 'Literature Mining', desc: 'Systematic database search and critical peer-reviewed paper synthesis.' },
  { step: '02', title: 'Hypothesis Architecture', desc: 'Formulating a clear, testable research question rooted in physical metallurgy.' },
  { step: '03', title: 'Methodology Design', desc: 'Selecting appropriate experimental characterization or computational modeling tools.' },
  { step: '04', title: 'Data Acquisition', desc: 'Gathering calibrated lab measurements, diffraction patterns, or simulation outputs.' },
  { step: '05', title: 'Analysis & Synthesis', desc: 'Statistical, computational, and phenomenological interpretation of results.' },
  { step: '06', title: 'Empirical Validation', desc: 'Cross-validating predictions against physical benchmarks and established datasets.' },
  { step: '07', title: 'Technical Writing', desc: 'Drafting structured research reports with publication-grade figures and citations.' },
  { step: '08', title: 'Advisor Review', desc: 'Internal evaluation and methodology verification before any public dissemination.' },
];

export const ResearchView: React.FC<{ onNavigateToAIMaterials: () => void }> = ({ onNavigateToAIMaterials }) => {
  const [filter, setFilter] = useState<'all' | 'experimental' | 'computational'>('all');

  const filtered = domains.filter((d) => {
    if (filter === 'all') return true;
    return d.category === filter;
  });

  return (
    <div className="bg-white">
      {/* 1. Header Hero */}
      <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                Scientific Disciplines
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
              Research Domains &amp; <span className="text-[#8B2E1A]">Methodology</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-sans">
              Six interconnected research domains spanning experimental metallurgy, computational thermodynamic modeling, and AI-driven materials discovery — all anchored in departmental rigor.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Bar & Domain Cards Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider block mb-1">
                FILTER SPECIALIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                Active Research Focus Areas
              </h2>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#F8F7F5] border border-[#E8E4DF] shadow-2xs font-mono text-xs self-start sm:self-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-2 rounded-xl transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All ({domains.length})</span>
              </button>
              <button
                onClick={() => setFilter('experimental')}
                className={`px-3.5 py-2 rounded-xl transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                  filter === 'experimental'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                <FlaskConical className="w-3.5 h-3.5 text-[#8B2E1A]" />
                <span>Experimental</span>
              </button>
              <button
                onClick={() => setFilter('computational')}
                className={`px-3.5 py-2 rounded-xl transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                  filter === 'computational'
                    ? 'bg-[#8B2E1A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#8B2E1A]'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Computational / AI</span>
              </button>
            </div>
          </div>

          {/* Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d) => {
              const DIcon = d.icon;
              return (
                <div
                  key={d.code}
                  className="group p-7 rounded-3xl border border-[#E8E4DF] bg-white hover:border-[#8B2E1A]/40 hover:shadow-lg transition-all flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF0EE] border border-[#8B2E1A]/15 flex items-center justify-center text-[#8B2E1A] shadow-2xs">
                        <DIcon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#8B2E1A] bg-[#FAF0EE] px-2 py-0.5 rounded">
                          {d.code}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-semibold px-2 py-0.5 rounded bg-[#F8F7F5] border border-[#E8E4DF]">
                          {d.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-2.5 leading-snug">
                      {d.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-5">
                      {d.desc}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Methods &amp; Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {d.methods.map((m) => (
                        <span
                          key={m}
                          className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-[#F8F7F5] border border-[#E8E4DF] text-slate-700"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Scientific Workflow (8 Steps) */}
      <section className="bg-[#F8F7F5] py-16 sm:py-24 border-y border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              REPRODUCIBLE RESEARCH PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              8-Step Scientific Workflow
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Ensuring that every undergraduate investigation adheres to global academic integrity standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((w) => (
              <div
                key={w.step}
                className="group p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E4DF] hover:border-[#8B2E1A]/40 hover:shadow-md transition-all shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-mono font-bold mb-3 bg-[#0F172A] group-hover:bg-[#8B2E1A] transition-colors">
                    {w.step}
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1.5">{w.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{w.desc}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#E8E4DF] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Standard Step</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8B2E1A]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Signature AI CTA */}
      <section className="bg-white py-16 sm:py-20 border-t border-[#E8E4DF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Explore Our Signature Direction
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Discover how machine learning, database APIs, and physics-informed models accelerate modern materials discovery.
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateToAIMaterials}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#8B2E1A] hover:bg-[#a33520] text-white font-semibold text-sm font-mono transition-all shadow-sm cursor-pointer"
            >
              <span>Explore AI × Materials Direction</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
