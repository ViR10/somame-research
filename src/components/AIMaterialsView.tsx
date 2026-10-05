import React from 'react';
import { 
  Cpu, 
  Sparkles, 
  Database, 
  Binary, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  Code2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const AIMaterialsView: React.FC = () => {
  const pipeline = [
    { step: '01', title: 'Experimental Data Input', desc: 'Raw characterization spectra — XRD patterns, SEM micrographs, and EDS composition ratios.' },
    { step: '02', title: 'Feature & Descriptor Engineering', desc: 'Transforming crystallographic data and stoichiometry into physics-informed ML input vectors.' },
    { step: '03', title: 'Machine Learning Modeling', desc: 'Supervised regression & ensemble trees predicting mechanical hardness, tensile limits, and phase equilibria.' },
    { step: '04', title: 'Rigorous Cross-Validation', desc: 'K-fold validation and holdout splits ensuring generalizability with zero data leakage.' },
    { step: '05', title: 'Physical Lab Validation ★', desc: 'Essential milestone: model predictions verified against physical test specimens in MME laboratories.' },
    { step: '06', title: 'Physics-Informed Review', desc: 'Domain faculty evaluation verifying that outputs strictly obey thermodynamic and metallurgical laws.' },
  ];

  const applications = [
    { title: 'Alloy Property Prediction', desc: 'Regression models predicting yield strength, hardness, and elongation from alloy composition.', icon: Binary },
    { title: 'Literature Data Mining', desc: 'NLP pipelines extracting quantitative metallurgical data from thousands of published research papers.', icon: Database },
    { title: 'Phase Stability Mapping', desc: 'Neural network surrogates trained on AFLOW and Materials Project databases for CALPHAD interpolation.', icon: Layers },
    { title: 'Automated Microstructure Analysis', desc: 'Computer vision classifiers measuring grain size distributions, phase fractions, and defect densities.', icon: Cpu },
    { title: 'Electrochemical Corrosion Kinetics', desc: 'Ensemble models correlating environmental media and alloy passive films to corrosion rates.', icon: ShieldCheck },
    { title: 'Compositional Optimization', desc: 'Bayesian algorithms navigating multi-component space to balance high strength with corrosion resilience.', icon: Sparkles },
  ];

  const skills = [
    { category: 'Scientific Python', items: ['NumPy / SciPy', 'Pandas', 'Scikit-learn', 'Matplotlib / Seaborn'] },
    { category: 'Materials Databases', items: ['Materials Project API', 'AFLOWLIB', 'Citrine Informatics', 'ICSD Crystallography'] },
    { category: 'Deep Learning', items: ['PyTorch Foundations', 'Convolutional Nets (SEM)', 'Graph Neural Nets (Crystals)', 'HuggingFace NLP'] },
    { category: 'Domain Modeling', items: ['VESTA Visualization', 'Thermo-Calc CALPHAD', 'Quantum ESPRESSO', 'ImageJ Analysis'] },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Header */}
      <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B2E1A]/20 bg-[#FAF0EE] text-[#8B2E1A] mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                Signature Research Direction
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
              AI × <span className="text-[#8B2E1A]">Materials Discovery</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-sans">
              The convergence of computational intelligence with physical metallurgy. We train undergraduate researchers to leverage modern machine learning as a principled, physics-informed accelerator for materials science.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Course Prerequisite Banner (Anthropic AI Fluency) */}
      <section className="py-8 bg-white border-b border-[#E8E4DF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-3xl border border-[#8B2E1A]/20 bg-[#FAF0EE]/50 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8B2E1A]">
                Recommended Prerequisite Course
              </span>
              <h3 className="text-lg font-black text-[#0F172A]">
                Anthropic AI Fluency (4D Framework)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                100% Free certificate course in ethical and effective AI research collaboration.
              </p>
            </div>
            <a
              href={siteConfig.aiFluencyCourse.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#8B2E1A] text-white text-xs font-mono font-bold transition-all shadow-sm"
            >
              <span>Enroll for Free</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. The 6-Stage Research Workflow */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              METHODOLOGY PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              AI–Materials Integration Pipeline
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Moving from raw experimental measurements to verified, interpretable scientific predictions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {pipeline.map((p, idx) => {
              const isHighlight = p.step === '05';
              return (
                <div
                  key={idx}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all flex items-start gap-4 sm:gap-6 ${
                    isHighlight
                      ? 'border-[#8B2E1A] bg-[#FAF0EE] shadow-md ring-2 ring-[#8B2E1A]/10'
                      : 'border-[#E8E4DF] bg-[#F8F7F5] hover:bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 text-white font-mono font-bold text-xs sm:text-sm ${
                      isHighlight ? 'bg-[#8B2E1A]' : 'bg-[#0F172A]'
                    }`}
                  >
                    {p.step}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#0F172A] text-base sm:text-lg">
                        {p.title}
                      </h3>
                      {isHighlight && (
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#8B2E1A] text-white">
                          Crucial Validation Gate
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Core Application Vectors */}
      <section className="py-16 sm:py-24 bg-[#F8F7F5] border-y border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              APPLIED RESEARCH DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Application Areas in Metallurgy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Where machine intelligence directly solves practical physical metallurgy challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => {
              const AppIcon = app.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-[#E8E4DF] hover:border-[#8B2E1A]/40 hover:shadow-lg transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF0EE] border border-[#8B2E1A]/15 flex items-center justify-center text-[#8B2E1A] mb-5 shadow-2xs">
                      <AppIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#0F172A] mb-2 leading-snug">
                      {app.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {app.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Applied Vector</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B2E1A]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Student Technical Skill Stack */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-4 shadow-2xs">
              <Code2 className="w-3.5 h-3.5 text-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                Technical Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Student Competency Stack
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Computational packages and data environments mastered throughout the research training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl border border-[#E8E4DF] bg-[#F8F7F5] shadow-2xs"
              >
                <div className="text-xs font-mono font-bold text-[#8B2E1A] uppercase tracking-wider mb-4 pb-2 border-b border-[#E8E4DF]">
                  {s.category}
                </div>
                <div className="space-y-2.5">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Ethics & Scientific Integrity Banner */}
      <section className="py-16 bg-[#FAF0EE] border-t border-[#8B2E1A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B2E1A]/20 bg-white shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
              Ethics Protocol
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Responsible AI in Materials Research
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
            AI serves as a scientific discovery accelerator — never as a replacement for physical experimental validation, domain expertise, or scientific integrity. Every computational insight is validated against real laboratory specimens.
          </p>
        </div>
      </section>
    </div>
  );
};
