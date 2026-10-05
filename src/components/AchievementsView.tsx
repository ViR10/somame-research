import { 
  Trophy, 
  Users, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  FileText, 
  GraduationCap,
  Calendar,
  Layers
} from 'lucide-react';

export const AchievementsView: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Meeting & Task Assignment',
      desc: 'During weekly departmental research meetings, the Directorate and Advisor assign real materials science problems, characterization literature reviews, or computational scripts.',
      icon: Calendar,
      badge: 'Weekly Kickoff',
    },
    {
      num: '02',
      title: 'Senior–Junior Syndicates',
      desc: 'Students are organized into combined teams pairing senior undergraduates with juniors — fostering peer mentorship, hands-on guidance, and collaborative problem-solving.',
      icon: Users,
      badge: 'Peer Collaboration',
    },
    {
      num: '03',
      title: 'Rigorous Report Submission',
      desc: 'Groups submit evidence-based assignment reports, CALPHAD/phase analyses, or Python notebooks with strict citation standards and zero fabricated data.',
      icon: FileText,
      badge: 'Scientific Submission',
    },
    {
      num: '04',
      title: 'Performer of the Week Spotlight',
      desc: 'The best-performing group is awarded "Performer of the Week" on this official portal — showcasing their names, batch, domain, and report for institutional identity.',
      icon: Trophy,
      badge: 'Academic Recognition',
    },
  ];

  const rubrics = [
    {
      title: 'Scientific Rigor & Depth',
      desc: 'Evidence-based analysis adhering to physical metallurgical principles and validated literature.',
      weight: '30%',
    },
    {
      title: 'Senior–Junior Mentorship',
      desc: 'Demonstrated collaborative teamwork where junior members actively contribute and learn.',
      weight: '25%',
    },
    {
      title: 'Literature & Citation Integrity',
      desc: 'Authentic sources from peer-reviewed journals (Elsevier, Springer, ASM) with zero hallucinations.',
      weight: '25%',
    },
    {
      title: 'Technical Presentation',
      desc: 'Clear diagrams, structured conclusions, and professional academic formatting.',
      weight: '20%',
    },
  ];

  const studentBenefits = [
    {
      icon: Award,
      title: 'Public Academic Identity',
      desc: 'Featured recognition on the official SOMAME Research platform that students can proudly link on their LinkedIn, CV, and graduate school applications.',
    },
    {
      icon: GraduationCap,
      title: 'Direct Faculty Mentorship',
      desc: 'Top assignment reports receive direct critique and guidance from our Society Advisor Dr. Khushnuda Nur and departmental faculty.',
    },
    {
      icon: Layers,
      title: 'Pathway to Co-Authorship',
      desc: 'Outstanding weekly assignment discoveries are synthesized into formal research manuscripts targeted for conference and journal publication.',
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Hero */}
      <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B2E1A]/20 bg-[#FAF0EE] text-[#8B2E1A] mb-5 shadow-2xs">
            <Trophy className="w-3.5 h-3.5 text-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              Weekly Research Merit System
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
            Weekly Research Challenges &amp; <span className="text-[#8B2E1A]">Achievements</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
            A structured, collaborative merit portal designed to build students' research identity. Senior-junior teams tackle weekly materials science assignments — with the top group officially spotlighted as <strong className="text-[#0F172A] font-bold">Performer of the Week</strong>.
          </p>
        </div>
      </section>

      {/* 2. Current Status Callout (Transparent, Honest, No Fake Data) */}
      <section className="py-10 bg-white border-b border-[#E8E4DF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl border border-[#8B2E1A]/20 bg-gradient-to-r from-[#FAF0EE]/60 via-white to-[#FAF0EE]/40 flex flex-col md:flex-row items-center gap-6 shadow-2xs">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF0EE] border border-[#8B2E1A]/20 flex items-center justify-center text-[#8B2E1A] shrink-0 shadow-2xs">
              <Clock className="w-7 h-7" />
            </div>

            <div className="flex-grow text-center md:text-left space-y-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#8B2E1A] text-white">
                  Cycle 01 Upcoming
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  Departmental Orientation Phase
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#0F172A]">
                Weekly Assignments Begin Following Directorate Meeting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Weekly tasks and group pairings will be officially assigned during our upcoming departmental sessions. Once teams submit their research reports, the official <strong>Performer of the Week</strong> spotlight and group archives will be verified and published right here.
              </p>
            </div>

            <div className="shrink-0 text-center md:text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E4DF] text-[11px] font-mono font-semibold text-slate-600 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B2E1A]" />
                <span>Zero Fabricated Data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Step Weekly Workflow (How It Works) */}
      <section className="py-16 sm:py-24 bg-[#F8F7F5] border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              THE RECOGNITION PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              How the Weekly Challenge Works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              From task announcement to permanent portfolio recognition — an honest, collaborative pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.num}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E4DF] flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF0EE] border border-[#8B2E1A]/15 flex items-center justify-center text-[#8B2E1A]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        STEP {s.num}
                      </span>
                    </div>

                    <span className="inline-block text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider mb-1">
                      {s.badge}
                    </span>

                    <h3 className="text-lg font-black text-[#0F172A] mb-2 leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Collaborative Merit</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B2E1A]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why This Builds Student Identity (Benefits for Members) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              STUDENT EMPOWERMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Building Real Academic Identity
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              This is not just an assignment — it is a verifiable digital portfolio for every participant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentBenefits.map((b, i) => {
              const BIcon = b.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl border border-[#E8E4DF] bg-[#F8F7F5] hover:bg-white hover:border-[#8B2E1A]/30 hover:shadow-md transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E4DF] flex items-center justify-center text-[#8B2E1A] mb-5 shadow-2xs">
                      <BIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#0F172A] mb-2.5">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {b.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Verified Protocol</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#8B2E1A]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Evaluation Rubrics & Integrity Standard */}
      <section className="py-16 sm:py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
                <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
                  Evaluation Framework
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                How Reports Are Judged
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Submissions are reviewed jointly by the Directorate and evaluated under the scientific oversight of our Society Advisor Dr. Khushnuda Nur. Only genuinely defensible, rigorous work earns the Performer of the Week honor.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-[#E8E4DF] text-xs font-mono text-slate-600 shadow-2xs inline-block text-left">
                <span className="text-[#8B2E1A] font-bold">Standard:</span> No plagiarized content, no unverified claims. Every calculation and literature review must be reproducible.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rubrics.map((r, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E8E4DF] shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-slate-400">Pillar 0{idx + 1}</span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FAF0EE] text-[#8B2E1A]">
                        {r.weight}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#0F172A] text-base mb-1.5">{r.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
