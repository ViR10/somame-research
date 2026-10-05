import React from 'react';
import { 
  Target, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Search, 
  Users, 
  TrendingUp, 
  Cpu, 
  Calendar, 
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const AboutView: React.FC<{ onNavigateToResearch: () => void }> = ({ onNavigateToResearch }) => {
  const pillars = [
    {
      num: '01',
      title: 'The Gap We Address',
      desc: 'Most undergraduate engineering students graduate without ever genuinely engaging with scientific research. They know equations, but not how to formulate a testable hypothesis, design an experiment, or critically deconstruct literature.',
      color: '#8B2E1A',
      icon: Search,
    },
    {
      num: '02',
      title: 'Our Mission',
      desc: 'To cultivate a research-driven culture within the Department of Metallurgical & Materials Engineering at UET Lahore — equipping students with scientific thinking, literature rigor, and computational tools to become future scientists.',
      color: '#0F172A',
      icon: Target,
    },
    {
      num: '03',
      title: 'Our Approach',
      desc: 'Progressive, structured, and honest. We begin from physical metallurgy fundamentals and build upward — ensuring every skill, tool, and concept is genuinely mastered before real-world research application.',
      color: '#5C3D2E',
      icon: Layers,
    },
  ];

  const values = [
    {
      title: 'Scientific Integrity',
      desc: 'No fabricated results. No inflated claims. Empirical truth and reproducibility are non-negotiable.',
      icon: ShieldCheck,
      badge: 'Core Standard',
    },
    {
      title: 'Curiosity Over Speculation',
      desc: 'We teach students to formulate precise, testable questions before rushing into conclusions.',
      icon: Compass,
      badge: 'Inquiry',
    },
    {
      title: 'Evidence-Based Thinking',
      desc: 'Every scientific conclusion must be defensible with experimental data and methodology.',
      icon: BookOpen,
      badge: 'Rigor',
    },
    {
      title: 'Collaborative Spirit',
      desc: 'Physical metallurgy, characterization, computation, and AI — far more powerful together.',
      icon: Users,
      badge: 'Teamwork',
    },
    {
      title: 'Iterative Growth',
      desc: 'Scientific mastery is built one paper, one experiment, and one peer critique at a time.',
      icon: TrendingUp,
      badge: 'Development',
    },
    {
      title: 'Responsible AI Use',
      desc: 'AI accelerates literature mining and modeling; it never replaces human metallurgical judgment.',
      icon: Cpu,
      badge: 'Ethics',
    },
  ];

  const timeline = [
    { year: '2025', tag: 'Initiative Foundation', event: 'SOMAME Team Research founded under the Department of Metallurgical & Materials Engineering, UET Lahore.' },
    { year: '2025', tag: 'Faculty Mentorship', event: 'Society Advisor officially confirmed — Dr. Khushnuda Nur, Assistant Professor MME, establishing academic governance.' },
    { year: '2025', tag: 'Directorate Formed', event: 'Student leadership established — Fatima Imran (Director), alongside Abdullah Waris & Adeel Shahid (Co-Directors).' },
    { year: '2025', tag: 'Digital Knowledge Base', event: 'Official research platform launched — structured ecosystem for undergraduate materials engineering students.' },
    { year: '2026 →', tag: 'Active Research Cycles', event: 'Weekly research challenge cycles begin — methodology workshops, peer syndicates, and Performer of the Week archive.' },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Header */}
      <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                About SOMAME Research
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
              Why We Exist &amp; <span className="text-[#8B2E1A]">What Drives Us</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-sans">
              SOMAME Team Research was created to answer an essential departmental question: how do we provide engineering students at UET Lahore with an authentic, structured, and ethical gateway into scientific research?
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars (Responsive 3-Column Grid) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((p) => {
              const PIcon = p.icon;
              return (
                <div
                  key={p.num}
                  className="p-7 sm:p-8 rounded-3xl border border-[#E8E4DF] bg-white hover:border-[#8B2E1A]/40 hover:shadow-lg transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF0EE] border border-[#8B2E1A]/15 flex items-center justify-center text-[#8B2E1A]">
                        <PIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        PILLAR {p.num}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                      {p.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8E4DF] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>UET MME Standard</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#8B2E1A]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-[#F8F7F5] py-16 sm:py-24 border-y border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              FOUNDATIONAL ETHICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Values That Govern Our Work
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Principles ingrained in every student task, experimental test, and research report.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-3xl border border-[#E8E4DF] bg-white hover:border-slate-300 hover:shadow-md transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF0EE] flex items-center justify-center text-[#8B2E1A]">
                        <VIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F8F7F5] text-slate-500">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Timeline Section (Mobile-First Architecture) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E4DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-4 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                Our Evolution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Platform Journey &amp; Milestones
            </h2>
          </div>

          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl border border-[#E8E4DF] bg-[#F8F7F5] hover:bg-white hover:border-[#8B2E1A]/30 transition-all shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm font-mono font-bold px-3 py-1 rounded-xl bg-[#0F172A] text-white">
                    {t.year}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-wider">
                    {t.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed font-sans sm:text-right">
                  {t.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clean CTA Section */}
      <section className="py-16 sm:py-20 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Ready to Explore Our Research?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Discover the six core domains, computational tools, and scientific methods driving SOMAME Team Research.
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateToResearch}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-sm font-mono transition-all shadow-sm cursor-pointer"
            >
              <span>Explore Research Domains</span>
              <ArrowRight className="w-4 h-4 text-[#8B2E1A]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
