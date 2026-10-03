import React from 'react';

const pipeline = [
  { step: '01', title: 'Experimental Input', desc: 'Physical specimen measurements — XRD patterns, SEM images, composition data', highlight: false },
  { step: '02', title: 'Data Engineering', desc: 'Python-based preprocessing, feature extraction, normalization, and descriptor generation', highlight: false },
  { step: '03', title: 'ML Model Development', desc: 'Supervised/unsupervised learning for structure-property relationship mapping', highlight: false },
  { step: '04', title: 'Cross-Validation', desc: 'Rigorous k-fold validation to prevent overfitting and ensure generalizability', highlight: false },
  { step: '05', title: 'Experimental Validation ★', desc: 'Critical step: model predictions verified against physical experiments — not just data splits', highlight: true },
  { step: '06', title: 'Physics-Informed Interpretation', desc: 'Human expert review ensuring outputs are thermodynamically and physically sensible', highlight: false },
];

const applications = [
  { title: 'Alloy Property Prediction', desc: 'ML regression models predicting yield strength, hardness, and ductility from composition.', color: '#0F172A' },
  { title: 'Literature Mining', desc: 'NLP pipelines extracting quantitative data from thousands of research papers automatically.', color: '#8B2E1A' },
  { title: 'Phase Stability Prediction', desc: 'Neural networks trained on AFLOW/Materials Project data for phase diagram interpolation.', color: '#5C3D2E' },
  { title: 'Microstructure Classification', desc: 'Computer vision for automated grain size, phase fraction, and defect identification.', color: '#0F172A' },
  { title: 'Corrosion Rate Modeling', desc: 'Ensemble models correlating environmental and compositional factors to corrosion kinetics.', color: '#8B2E1A' },
  { title: 'Process Optimization', desc: 'Bayesian optimization of heat treatment and processing parameters for target properties.', color: '#5C3D2E' },
];

const skills = [
  { category: 'Python Ecosystem', items: ['NumPy / Pandas', 'Scikit-learn', 'Matplotlib / Seaborn', 'Jupyter Notebooks'] },
  { category: 'Materials Databases', items: ['Materials Project', 'AFLOW / AFLOWLIB', 'Citrine Informatics', 'ICSD'] },
  { category: 'Deep Learning', items: ['TensorFlow / Keras', 'PyTorch Basics', 'CNN for Microstructure', 'Graph Neural Networks'] },
  { category: 'Domain Tools', items: ['VESTA', 'Thermo-Calc', 'VASP (Introductory)', 'ImageJ for SEM'] },
];

export const AIMaterialsView: React.FC = () => (
  <div className="bg-white">
    {/* Hero (Clean Light Surface, No Blue!) */}
    <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Signature Direction</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
            AI ×{' '}
            <span className="text-[#8B2E1A]">Materials</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            The most exciting frontier in materials science is the convergence of machine intelligence with
            physical metallurgy. We train students to operate at this intersection — rigorously and responsibly.
          </p>
        </div>
      </div>
    </section>

    {/* Pipeline */}
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Integration Pipeline</span>
          </div>
          <h2 className="text-4xl font-black text-[#0F172A] leading-tight tracking-tight">
            AI-Materials Research Workflow
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3.5">
          {pipeline.map((p, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-5 rounded-2xl border transition-all ${
                p.highlight
                  ? 'border-[#8B2E1A]/40 bg-[#FAF0EE] shadow-2xs'
                  : 'border-[#E8E4DF] bg-[#F8F7F5] hover:bg-white hover:border-slate-300'
              }`}
            >
              <div
                className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white text-[10px] font-mono font-bold"
                style={{ background: p.highlight ? '#8B2E1A' : '#0F172A' }}
              >
                {p.step}
              </div>
              <div>
                <div className="font-bold text-[#0F172A] text-[15px] mb-1">{p.title}</div>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Applications */}
    <section className="bg-[#F8F7F5] py-20 md:py-24 border-y border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-[#0F172A] leading-tight tracking-tight">
            Application Areas
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((a, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#E8E4DF] p-6 hover:border-[#8B2E1A]/30 hover:shadow-md transition-all group shadow-2xs">
              <div className="w-2 h-8 rounded-full mb-4" style={{ background: a.color }} />
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Skills Roadmap */}
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
            Student Skill Roadmap
          </h2>
          <p className="text-lg text-slate-500">Tools and platforms SOMAME students will progressively master.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => {
            const colors = ['#0F172A', '#8B2E1A', '#5C3D2E', '#0F172A'];
            const c = colors[i];
            return (
              <div key={i} className="p-6 rounded-2xl border border-[#E8E4DF] bg-[#F8F7F5] shadow-2xs">
                <div className="text-[11px] font-mono font-bold uppercase tracking-widest mb-4" style={{ color: c }}>
                  {s.category}
                </div>
                <div className="space-y-2">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Responsible AI (Clean Light Surface, No Blue!) */}
    <section className="bg-[#FAF0EE] py-16 border-t border-[#8B2E1A]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B2E1A]/20 bg-white mb-5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
          <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Ethics Policy</span>
        </div>
        <h2 className="text-3xl font-black text-[#0F172A] mb-4">Responsible AI in Research</h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          SOMAME Team Research is committed to using AI as a scientific accelerator — never as a replacement for
          human judgment, physical validation, or ethical research practice. Every AI-assisted output must be
          interpretable, validated experimentally, and reviewed by domain experts before dissemination.
        </p>
      </div>
    </section>
  </div>
);
