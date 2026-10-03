import React from 'react';

const pillars = [
  {
    num: '01',
    title: 'The Gap We Address',
    desc: 'Most engineering students graduate without ever genuinely engaging with scientific research. They know equations, but not how to formulate a hypothesis, design an experiment, or interpret results critically.',
    color: '#8B2E1A',
  },
  {
    num: '02',
    title: 'Our Mission',
    desc: 'To cultivate a research-driven culture within the Department of Metallurgical & Materials Engineering at UET Lahore — equipping students with the scientific thinking and technical tools to become future researchers.',
    color: '#0F172A',
  },
  {
    num: '03',
    title: 'Our Approach',
    desc: 'Progressive, structured, and honest. We begin from fundamentals and build upward — ensuring every skill, every tool, and every concept is genuinely understood before application.',
    color: '#5C3D2E',
  },
];

const values = [
  { title: 'Scientific Integrity', desc: 'No fabricated results. No inflated claims. Truth is non-negotiable.' },
  { title: 'Curiosity Over Answers', desc: 'We teach students to ask better questions before seeking answers.' },
  { title: 'Evidence-Based Thinking', desc: 'Every conclusion must be defensible with data and methodology.' },
  { title: 'Collaborative Spirit', desc: 'Metallurgy + Computation + AI — stronger together.' },
  { title: 'Iterative Growth', desc: 'Research mastery is earned through iteration, revision, and patience.' },
  { title: 'Responsible AI Use', desc: 'AI accelerates; it does not replace human scientific judgment.' },
];

const timeline = [
  { year: '2025', event: 'SOMAME Team Research founded under MME Department, UET Lahore' },
  { year: '2025', event: 'Society Advisor confirmed — Dr. Khushnuda Nur, Asst. Professor MME' },
  { year: '2025', event: 'Directorate formed — Fatima Imran (Director), Abdullah Waris & Adeel Shahid (Co-Directors)' },
  { year: '2025', event: 'Official platform launched — research ecosystem for MME students' },
  { year: '2026 →', event: 'Phase 2 begins — workshops, skill development, mini-research projects' },
];

export const AboutView: React.FC<{ onNavigateToResearch: () => void }> = ({ onNavigateToResearch }) => (
  <div className="bg-white">
    {/* Hero */}
    <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">About SOMAME Research</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
            Why We Exist
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            SOMAME Team Research was created to answer a simple but important question: how do we give
            engineering students at UET Lahore a genuine, structured path into scientific research?
          </p>
        </div>
      </div>
    </section>

    {/* Pillars */}
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.num} className="p-8 rounded-2xl border border-[#E8E4DF] bg-white hover:border-[#8B2E1A]/30 hover:shadow-md transition-all shadow-2xs">
              <div className="text-[11px] font-mono font-bold tracking-widest mb-3" style={{ color: p.color }}>{p.num}</div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">{p.title}</h2>
              <p className="text-base text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core Values (Clean Light Surface, No Blue!) */}
    <section className="bg-[#F8F7F5] py-20 md:py-24 border-y border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Core Values</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
            What Guides Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div key={i} className="p-7 rounded-2xl border border-[#E8E4DF] bg-white hover:border-[#8B2E1A]/30 hover:shadow-md transition-all shadow-2xs">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{v.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 md:py-24 bg-white border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">History</span>
            </div>
            <h2 className="text-4xl font-black text-[#0F172A] leading-tight tracking-tight">Our Timeline</h2>
          </div>
          <div className="relative pl-8 space-y-6 border-l-2 border-[#E8E4DF]">
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[33px] -translate-x-1/2 top-5 w-3.5 h-3.5 rounded-full bg-[#8B2E1A] border-2 border-white shadow-xs" />
                <div className="bg-[#F8F7F5] rounded-2xl border border-[#E8E4DF] p-5 shadow-2xs">
                  <div className="text-[10px] font-mono font-bold text-[#8B2E1A] tracking-widest mb-1">{t.year}</div>
                  <p className="text-sm font-semibold text-[#0F172A]">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-[#0F172A] mb-4">Ready to Explore Our Research?</h2>
        <p className="text-lg text-slate-500 mb-7">Discover the domains, methods, and future directions of SOMAME Team Research.</p>
        <button
          onClick={onNavigateToResearch}
          className="px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-sm font-mono transition-all shadow-sm"
        >
          Explore Research →
        </button>
      </div>
    </section>
  </div>
);
