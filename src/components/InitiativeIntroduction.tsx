import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Learn',
    sub: 'Foundations First',
    desc: 'We introduce students to scientific research fundamentals — what it is, how it works, and why it matters in materials engineering.',
    color: '#0F172A',
  },
  {
    num: '02',
    title: 'Explore',
    sub: 'Tools & Methods',
    desc: 'Students explore research tools, literature review, phase diagrams, characterization techniques, and computational software.',
    color: '#8B2E1A',
  },
  {
    num: '03',
    title: 'Practice',
    sub: 'Build & Apply',
    desc: 'Hands-on exercises in data analysis, Python for materials science, AI-assisted literature mining, and scientific writing.',
    color: '#5C3D2E',
  },
  {
    num: '04',
    title: 'Research',
    sub: 'Investigate & Discover',
    desc: 'Structured investigations into real materials problems — hypothesis formation, experiment, and evidence-based conclusions.',
    color: '#0F172A',
  },
];

export const InitiativeIntroduction: React.FC = () => (
  <section className="bg-white section-pad">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
          <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Our Approach</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
          How We Build{' '}
          <span className="text-[#8B2E1A]">Research Thinkers</span>
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed">
          A structured, progressive pathway that takes students from zero research awareness to active scientific contributors — rooted in Materials Engineering.
        </p>
      </div>

      {/* Steps: horizontal timeline */}
      <div className="relative">
        {/* Connector line (desktop) */}
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#0F172A] via-[#8B2E1A] to-[#5C3D2E] opacity-30" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center lg:items-start text-center lg:text-left group">
              {/* Step number bubble */}
              <div
                className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center mb-5 border border-[#E8E4DF] bg-[#F8F7F5] shadow-xs group-hover:shadow-md group-hover:border-slate-300 group-hover:bg-white transition-all"
              >
                <div className="text-center">
                  <div
                    className="text-[10px] font-mono font-bold tracking-widest opacity-60"
                    style={{ color: step.color }}
                  >
                    STEP
                  </div>
                  <div
                    className="text-4xl font-black leading-none tracking-tight"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2 px-2">
                <div className="text-[11px] font-mono font-bold tracking-widest uppercase" style={{ color: step.color }}>
                  {step.sub}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-16 p-6 rounded-2xl border border-[#E8E4DF] bg-[#F8F7F5] max-w-3xl mx-auto text-center shadow-2xs">
        <p className="text-sm text-slate-600 leading-relaxed">
          <span className="font-bold text-[#0F172A]">Currently in our foundational stage.</span>{' '}
          We are systematically building research literacy and scientific culture — no fabricated projects,
          no false credentials. Every step forward is real and verifiable.
        </p>
      </div>
    </div>
  </section>
);
