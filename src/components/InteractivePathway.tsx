import React, { useState } from 'react';
import { BookOpen, Wrench, Sparkles, Award, CheckCircle2 } from 'lucide-react';

interface Stage {
  num: string;
  title: string;
  subtitle: string;
  duration: string;
  focus: string;
  skills: string[];
  deliverable: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stages: Stage[] = [
  {
    num: '01',
    title: 'Scientific Foundations',
    subtitle: 'Literature & Methodology Literacy',
    duration: 'Weeks 1–4',
    focus: 'Demystifying research fundamentals. Students learn how to read peer-reviewed materials papers, critically deconstruct claims, and formulate structured scientific hypotheses.',
    skills: ['Scientific Paper Analysis', 'Hypothesis Architecture', 'Literature Review Synthesis', 'Citation Rigor & Ethics'],
    deliverable: 'Annotated literature survey and structured research problem formulation.',
    icon: BookOpen,
  },
  {
    num: '02',
    title: 'Experimental & Tool Proficiency',
    subtitle: 'Hands-on Instrumentation & Software',
    duration: 'Weeks 5–8',
    focus: 'Transitioning from concepts to real engineering instruments and computational packages under advisor and director guidance.',
    skills: ['XRD / SEM Characterization Basics', 'CALPHAD & Phase Diagram Modeling', 'DFT Simulation Foundations', 'Scientific Python Stack'],
    deliverable: 'Validated baseline dataset and computational phase simulation notebook.',
    icon: Wrench,
  },
  {
    num: '03',
    title: 'Applied Investigation & AI',
    subtitle: 'Data Modeling & Experimental Testing',
    duration: 'Weeks 9–14',
    focus: 'Conducting structured investigations into real metallurgy problems with machine learning property prediction and lab testing.',
    skills: ['Structure-Property Modeling', 'ML Feature Engineering', 'Electrochemical Corrosion Analysis', 'Fractography & Tensile Testing'],
    deliverable: 'Physics-informed machine learning surrogate model or characterization report.',
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'Validation & Contribution',
    subtitle: 'Peer Review & Academic Dissemination',
    duration: 'Weeks 15+',
    focus: 'Advisor-confirmed research output. Preparing reproducible findings, technical reports, and competition submissions with zero fabricated data.',
    skills: ['Advisor Methodology Review', 'Peer-to-Peer Defense', 'Technical Manuscript Writing', 'Open Science Archive'],
    deliverable: 'Peer-reviewed technical publication or verified departmental research milestone.',
    icon: Award,
  },
];

export const InteractivePathway: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = stages[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
              Development Roadmap
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
            How We Build <span className="text-[#8B2E1A]">Research Thinkers</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            A 4-stage progressive pathway taking undergraduates from zero research awareness to confident, contributing student scientists.
          </p>
        </div>

        {/* Interactive Step Selector (Horizontal on md+, Stacked on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {stages.map((stage, idx) => {
            const isSelected = idx === activeStep;
            const StepIcon = stage.icon;
            return (
              <button
                key={stage.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FAF0EE] border-[#8B2E1A] shadow-md ring-2 ring-[#8B2E1A]/10'
                    : 'bg-[#F8F7F5] border-[#E8E4DF] hover:bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-[#8B2E1A] text-white' : 'bg-white border border-[#E8E4DF] text-slate-600'
                    }`}
                  >
                    STAGE {stage.num}
                  </span>
                  <StepIcon
                    className={`w-4 h-4 ${isSelected ? 'text-[#8B2E1A]' : 'text-slate-400'}`}
                  />
                </div>
                <div>
                  <div
                    className={`text-sm sm:text-base font-bold tracking-tight ${
                      isSelected ? 'text-[#0F172A]' : 'text-slate-700'
                    }`}
                  >
                    {stage.title}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    {stage.duration}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Interactive Card */}
        <div className="bg-[#F8F7F5] rounded-3xl border border-[#E8E4DF] p-6 sm:p-10 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stage Focus & Deliverable */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E4DF] flex items-center justify-center text-[#8B2E1A] shadow-xs">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block">
                    STAGE {current.num} • {current.duration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                {current.focus}
              </p>

              {/* Verified Outcome Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8E4DF] shadow-2xs">
                <div className="text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8B2E1A]" />
                  Verified Stage Deliverable
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                  {current.deliverable}
                </div>
              </div>
            </div>

            {/* Right Column: Key Competencies & Skills */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E8E4DF] shadow-2xs space-y-4">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest pb-2 border-b border-[#E8E4DF]">
                Competency Matrix &amp; Methodologies
              </div>

              <div className="space-y-2.5">
                {current.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Faculty-Guided Protocol</span>
                <span className="text-[#8B2E1A] font-semibold">UET MME Standard</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
