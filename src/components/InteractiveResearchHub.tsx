import React, { useState } from 'react';
import { 
  Microscope, 
  Binary, 
  Activity, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Layers,
  FlaskConical,
  Laptop,
  ChevronRight
} from 'lucide-react';

interface Domain {
  id: string;
  code: string;
  title: string;
  category: 'experimental' | 'computational';
  categoryLabel: string;
  tagline: string;
  instruments: string[];
  investigations: string[];
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const domains: Domain[] = [
  {
    id: 'mat-01',
    code: 'MAT-01',
    title: 'Microstructure & Characterization',
    category: 'experimental',
    categoryLabel: 'Experimental',
    tagline: 'Linking nanoscale atomic arrangements and grain boundaries to macroscopic material performance.',
    instruments: ['SEM', 'XRD', 'TEM', 'Optical Microscopy', 'Etching Labs'],
    investigations: ['Phase morphology & grain size distributions', 'Crystallographic texture & defect structures', 'Precipitation hardening verification'],
    color: '#0F172A',
    icon: Microscope,
  },
  {
    id: 'mat-02',
    code: 'MAT-02',
    title: 'Phase Diagrams & Thermodynamics',
    category: 'computational',
    categoryLabel: 'Computational',
    tagline: 'Predicting equilibrium phases, solubility limits, and invariant reactions via CALPHAD methodology.',
    instruments: ['Thermo-Calc', 'Pandat', 'Binary/Ternary Databases', 'Gibbs Minimization'],
    investigations: ['Isothermal & isoplethal section calculation', 'Liquid-to-solid phase transition modeling', 'Metastable phase formation windows'],
    color: '#8B2E1A',
    icon: Binary,
  },
  {
    id: 'mat-03',
    code: 'MAT-03',
    title: 'Mechanical Behavior of Materials',
    category: 'experimental',
    categoryLabel: 'Experimental',
    tagline: 'Evaluating strength, ductility, fatigue resilience, and fracture mechanics across engineering alloys.',
    instruments: ['Universal Testing Machine', 'Hardness Testers', 'Impact Testing', 'Fatigue Rigs'],
    investigations: ['Stress-strain constitutive behavior', 'Ductile-to-brittle transition temperatures', 'Fracture surface fractography'],
    color: '#5C3D2E',
    icon: Activity,
  },
  {
    id: 'mat-04',
    code: 'MAT-04',
    title: 'Computational Materials Science',
    category: 'computational',
    categoryLabel: 'Simulation',
    tagline: 'First-principles electronic structure calculations (DFT) and atomic molecular dynamics (MD).',
    instruments: ['Quantum ESPRESSO', 'VASP', 'LAMMPS', 'VESTA Visualization'],
    investigations: ['Electronic band structure & density of states', 'Point defect formation energies', 'Atomic diffusion kinetics along interfaces'],
    color: '#0F172A',
    icon: Cpu,
  },
  {
    id: 'mat-05',
    code: 'MAT-05',
    title: 'AI × Materials Integration',
    category: 'computational',
    categoryLabel: 'AI-Driven',
    tagline: 'Accelerating alloy composition design and property prediction with modern machine learning.',
    instruments: ['PyTorch / Scikit-learn', 'Materials Project API', 'AFLOW', 'NLP Literature Mining'],
    investigations: ['Supervised regression for mechanical properties', 'Feature engineering from crystal descriptors', 'Physics-informed machine learning surrogate models'],
    color: '#8B2E1A',
    icon: Sparkles,
  },
  {
    id: 'mat-06',
    code: 'MAT-06',
    title: 'Corrosion & Surface Science',
    category: 'experimental',
    categoryLabel: 'Experimental & Applied',
    tagline: 'Understanding degradation mechanisms and engineering protective functional surface coatings.',
    instruments: ['Potentiostat', 'EIS Spectrometer', 'Salt Spray Chamber', 'Tafel Extrapolation'],
    investigations: ['Electrochemical impedance spectroscopy (EIS)', 'Pitting & crevice corrosion kinetics', 'Passivation layer stability in extreme media'],
    color: '#5C3D2E',
    icon: ShieldCheck,
  },
];

export const InteractiveResearchHub: React.FC<{ onExploreResearch: () => void }> = ({ onExploreResearch }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'experimental' | 'computational'>('all');
  const [selectedId, setSelectedId] = useState<string>('mat-01');

  const filteredDomains = domains.filter((d) => {
    if (activeTab === 'all') return true;
    return d.category === activeTab;
  });

  const selectedDomain = domains.find((d) => d.id === selectedId) || domains[0];
  const IconComponent = selectedDomain.icon;

  return (
    <section className="bg-[#F8F7F5] py-20 sm:py-28 border-y border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                Interactive Research Suite
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
              Six Core Domains. <span className="text-[#8B2E1A]">One Scientific Standard.</span>
            </h2>
            <p className="mt-2.5 text-base sm:text-lg text-slate-600 max-w-2xl">
              Tap any domain to interactively inspect its experimental instruments, computational tools, and core investigations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-[#E8E4DF] shadow-2xs font-mono text-xs shrink-0 self-start lg:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-xl transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All (6)</span>
            </button>
            <button
              onClick={() => setActiveTab('experimental')}
              className={`px-3.5 py-2 rounded-xl transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'experimental'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5 text-[#8B2E1A]" />
              <span>Experimental</span>
            </button>
            <button
              onClick={() => setActiveTab('computational')}
              className={`px-3.5 py-2 rounded-xl transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'computational'
                  ? 'bg-[#8B2E1A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#8B2E1A]'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Computational &amp; AI</span>
            </button>
          </div>
        </div>

        {/* Interactive 2-Column Split: Selectable Cards on Left, Live Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Quick Interactive Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {filteredDomains.map((domain) => {
              const isSelected = domain.id === selectedId;
              const DIcon = domain.icon;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedId(domain.id)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#8B2E1A] shadow-md ring-2 ring-[#8B2E1A]/10 translate-x-1'
                      : 'bg-white/80 hover:bg-white border-[#E8E4DF] hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#8B2E1A] text-white'
                          : 'bg-[#F8F7F5] text-slate-700'
                      }`}
                    >
                      <DIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#8B2E1A] tracking-wider uppercase">
                          {domain.code}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">· {domain.categoryLabel}</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#0F172A] truncate">
                        {domain.title}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#8B2E1A] translate-x-0.5' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Live Interactive Showcase Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E8E4DF] p-6 sm:p-8 shadow-sm transition-all duration-300">
              
              {/* Badge & Code */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E8E4DF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0EE] text-[#8B2E1A] flex items-center justify-center shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#8B2E1A] tracking-widest block">
                      {selectedDomain.code} · {selectedDomain.categoryLabel.toUpperCase()}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                      {selectedDomain.title}
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#F8F7F5] border border-[#E8E4DF] text-slate-600">
                  UET MME Platform
                </span>
              </div>

              {/* Tagline / Overview */}
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                {selectedDomain.tagline}
              </p>

              {/* Active Instruments & Tools */}
              <div className="mt-6 pt-5 border-t border-[#E8E4DF]">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Applied Instrumentation &amp; Computational Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.instruments.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl bg-[#F8F7F5] border border-[#E8E4DF] text-xs font-mono font-semibold text-[#0F172A] shadow-2xs hover:border-[#8B2E1A]/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Investigations */}
              <div className="mt-6 pt-5 border-t border-[#E8E4DF]">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Active Scientific Inquiry Vectors
                </div>
                <ul className="space-y-2.5">
                  {selectedDomain.investigations.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA to View Full Research View */}
              <div className="mt-8 pt-5 border-t border-[#E8E4DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-slate-400 text-center sm:text-left">
                  Peer-validated research protocol · All data verified
                </span>
                <button
                  onClick={onExploreResearch}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-mono font-semibold text-xs transition-all shadow-2xs cursor-pointer"
                >
                  <span>Explore Full Research Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
