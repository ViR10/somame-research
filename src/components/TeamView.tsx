import React, { useState } from 'react';
import { advisorData, directorData, coDirectorsData } from '../data/team';
import type { TeamMember } from '../data/team';
import { ArrowRight, X, Mail, Users, ChevronDown, ExternalLink } from 'lucide-react';
import { IconLinkedIn } from './ScientificIcons';

export const TeamView: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const philosophyPoints = [
    {
      num: '01',
      title: 'Society Governance & Guidance',
      desc: 'Guidance from our Society Advisor ensures rigorous scientific thinking, ethics, and departmental standard compliance.',
    },
    {
      num: '02',
      title: 'Student-Driven Execution',
      desc: 'Active student directorate managing day-to-day research culture, peer learning circles, and technical workshops.',
    },
    {
      num: '03',
      title: 'Interdisciplinary Collaboration',
      desc: 'Uniting physical metallurgy and experimental testing with modern computational data pipelines and AI techniques.',
    },
    {
      num: '04',
      title: 'Authentic Research Culture',
      desc: 'Fostering verifiable capability and genuine understanding rather than superficial claims or inflated credentials.',
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">
                Governance &amp; Leadership
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
              Leadership &amp; Organization
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Meet the society leadership guiding SOMAME Team Research within the Department of
              Metallurgical &amp; Materials Engineering, UET Lahore.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-24">
        {/* 2. Society Advisor Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              SOCIETY ADVISOR
            </span>
            <h2 className="text-4xl font-black text-[#0F172A] tracking-tight">
              Society Advisor — SOMAME
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl border border-[#E8E4DF] bg-[#F8F7F5] shadow-sm">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              {/* Advisor Photo */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-white border border-[#E8E4DF] shadow-md shrink-0">
                <img
                  src={advisorData.image}
                  alt={advisorData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#8B2E1A] text-white px-3 py-1 rounded-full text-[10px] font-mono font-bold shadow-sm tracking-wider">
                  SOCIETY ADVISOR
                </div>
              </div>

              {/* Advisor Details */}
              <div className="space-y-5 text-center lg:text-left flex-grow">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-1">
                    {advisorData.role}
                  </span>
                  <h3 className="text-4xl font-black text-[#0F172A] tracking-tight">
                    {advisorData.name}
                  </h3>
                  <p className="text-base font-bold text-[#0F172A] mt-1.5 font-mono">
                    {advisorData.officialTitle}
                  </p>
                  <p className="text-sm text-slate-500 font-mono mt-0.5">
                    {advisorData.institution}
                  </p>
                </div>

                <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                  {advisorData.bio}
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                  {advisorData.areasOfFocus.map((area: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E8E4DF] text-[#0F172A] text-xs font-mono font-semibold shadow-xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {advisorData.linkedin && (
                  <div className="pt-2 flex justify-center lg:justify-start">
                    <a
                      href={advisorData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-sm font-mono font-bold transition-all shadow-sm"
                    >
                      <IconLinkedIn className="w-4 h-4 text-[#8B2E1A]" />
                      <span>Verified LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/50" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Director Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              STUDENT DIRECTORATE
            </span>
            <h2 className="text-4xl font-black text-[#0F172A] tracking-tight">
              Team Director
            </h2>
          </div>

          <div className="p-8 rounded-3xl border border-[#E8E4DF] bg-white shadow-sm max-w-4xl hover:border-slate-300 transition-all">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-7">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-[#E8E4DF] shadow-sm shrink-0 bg-[#F8F7F5]">
                <img
                  src={directorData.image}
                  alt={directorData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left flex-grow">
                <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider block">
                  {directorData.role}
                </span>
                <h3 className="text-3xl font-black text-[#0F172A]">
                  {directorData.name}
                </h3>

                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {directorData.year && (
                    <span className="px-3 py-1 rounded-md bg-[#FAF0EE] border border-[#8B2E1A]/20 text-[#8B2E1A] text-xs font-mono font-bold">
                      {directorData.year}
                    </span>
                  )}
                  {directorData.batch && (
                    <span className="px-3 py-1 rounded-md bg-[#F8F7F5] border border-[#E8E4DF] text-slate-500 text-xs font-mono font-semibold">
                      Batch {directorData.batch}
                    </span>
                  )}
                </div>

                <p className="text-base text-slate-600 leading-relaxed">
                  {directorData.bio}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedMember(directorData)}
                    className="text-sm font-bold text-[#0F172A] hover:text-[#8B2E1A] font-mono inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Full Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Co-Directors Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono font-bold text-[#5C3D2E] uppercase tracking-widest block mb-2">
              CO-DIRECTORATE
            </span>
            <h2 className="text-4xl font-black text-[#0F172A] tracking-tight">
              Co-Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
            {coDirectorsData.map((coDir: TeamMember) => (
              <div
                key={coDir.id}
                className="p-7 rounded-3xl border border-[#E8E4DF] bg-white hover:border-slate-300 hover:shadow-md transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full max-w-[190px] mx-auto rounded-2xl overflow-hidden bg-[#F8F7F5] border border-[#E8E4DF] mb-5 shadow-xs">
                    <img
                      src={coDir.image}
                      alt={coDir.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider block mb-1">
                    {coDir.role}
                  </span>

                  <h3 className="text-2xl font-black text-[#0F172A] mb-2">
                    {coDir.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {coDir.year && (
                      <span className="px-2.5 py-1 rounded-md bg-[#FAF0EE] border border-[#8B2E1A]/20 text-[#8B2E1A] text-[11px] font-mono font-bold">
                        {coDir.year}
                      </span>
                    )}
                    {coDir.batch && (
                      <span className="px-2.5 py-1 rounded-md bg-[#F8F7F5] border border-[#E8E4DF] text-slate-500 text-[11px] font-mono font-semibold">
                        Batch {coDir.batch}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {coDir.bio}
                  </p>

                  {/* Portfolio link for Adeel */}
                  {coDir.portfolio && (
                    <div className="mb-4">
                      <a
                        href={coDir.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8F7F5] border border-[#E8E4DF] hover:border-[#0F172A] text-xs font-mono font-bold text-[#0F172A] hover:text-[#8B2E1A] transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#8B2E1A]" />
                        <span>adeelshahid.netlify.app ↗</span>
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#E8E4DF]">
                  <button
                    onClick={() => setSelectedMember(coDir)}
                    className="w-full py-2.5 rounded-xl bg-[#F8F7F5] hover:bg-[#0F172A] text-xs font-semibold text-[#0F172A] hover:text-white transition-all border border-[#E8E4DF] flex items-center justify-center gap-1.5 font-mono"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Organizational Structure */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#E8E4DF] bg-[#F8F7F5] text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-xs font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
            GOVERNANCE HIERARCHY
          </span>
          <h2 className="text-3xl font-black text-[#0F172A] mb-8">
            Organizational Structure
          </h2>

          <div className="flex flex-col items-center gap-3 font-mono text-sm max-w-lg mx-auto">
            <div className="w-full p-4 rounded-xl bg-white border-2 border-[#8B2E1A]/30 text-[#8B2E1A] font-bold shadow-xs">
              Society Advisor — {advisorData.name}
            </div>
            <ChevronDown className="w-5 h-5 text-[#8B2E1A]/60" />
            <div className="w-full p-4 rounded-xl bg-white border border-[#E8E4DF] text-[#0F172A] font-bold shadow-xs">
              Director — {directorData.name} ({directorData.year} · Batch {directorData.batch})
            </div>
            <ChevronDown className="w-5 h-5 text-slate-400" />
            <div className="w-full p-4 rounded-xl bg-white border border-[#E8E4DF] text-[#0F172A] font-bold shadow-xs">
              Co-Directors — {coDirectorsData.map((c) => c.name).join(' & ')} (3rd Year · Batch 2024–2028)
            </div>
            <ChevronDown className="w-5 h-5 text-slate-400" />
            <div className="w-full p-4 rounded-xl bg-[#0F172A] text-white font-bold shadow-sm">
              Research Activities &amp; Student Members (SOMAME Society)
            </div>
          </div>
        </div>

        {/* 6. Leadership Philosophy */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-2">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-4xl font-black text-[#0F172A] tracking-tight">
              Leadership Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((p) => (
              <div
                key={p.num}
                className="p-6 rounded-2xl border border-[#E8E4DF] bg-white shadow-xs flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase block mb-2">
                    {p.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Future Expansion Roster Notice */}
        <div className="p-8 rounded-3xl border-2 border-dashed border-[#E8E4DF] bg-[#F8F7F5] text-center max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8E4DF] text-slate-400 mx-auto flex items-center justify-center mb-4 shadow-xs">
            <Users className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black text-[#0F172A] mb-2">
            Student Research Roster Expansion
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto mb-4">
            Undergraduate student researcher profiles will be integrated into the public team roster as active
            domain working groups complete initial methodology milestones.
          </p>
          <span className="text-[11px] font-mono text-slate-400">
            Verified Roster Protocol • Department of Metallurgical &amp; Materials Engineering, UET Lahore
          </span>
        </div>
      </div>

      {/* Modal Profile Drawer */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedMember(null);
          }}
        >
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#E8E4DF] relative animate-fade-up">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl hover:bg-[#F8F7F5] text-slate-500 hover:text-[#0F172A] transition-colors"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 sm:gap-5 mb-6 pr-8">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-[#E8E4DF] shadow-xs shrink-0"
              />
              <div>
                <span className="text-[11px] font-mono font-bold text-[#8B2E1A] uppercase tracking-wider block">
                  {selectedMember.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mt-0.5">
                  {selectedMember.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {selectedMember.officialTitle}
                </p>
                {(selectedMember.year || selectedMember.batch) && (
                  <div className="flex gap-1.5 sm:gap-2 mt-2 flex-wrap">
                    {selectedMember.year && (
                      <span className="px-2.5 py-0.5 rounded bg-[#FAF0EE] border border-[#8B2E1A]/20 text-[#8B2E1A] text-[10px] font-mono font-bold">
                        {selectedMember.year}
                      </span>
                    )}
                    {selectedMember.batch && (
                      <span className="px-2.5 py-0.5 rounded bg-[#F8F7F5] border border-[#E8E4DF] text-slate-500 text-[10px] font-mono font-semibold">
                        Batch {selectedMember.batch}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#0F172A]">
              <div>
                <span className="font-bold text-[#0F172A] uppercase font-mono text-[10px] tracking-wider block mb-1">
                  About
                </span>
                <p className="leading-relaxed text-slate-600 text-xs sm:text-sm">
                  {selectedMember.bio}
                </p>
              </div>

              <div>
                <span className="font-bold text-[#0F172A] uppercase font-mono text-[10px] tracking-wider block mb-2">
                  Areas of Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMember.areasOfFocus.map((area: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#F8F7F5] border border-[#E8E4DF] text-[#0F172A] text-xs font-mono font-semibold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {selectedMember.email && (
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0F172A] font-mono font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#8B2E1A]" />
                    <span>{selectedMember.email}</span>
                  </a>
                )}
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0F172A] hover:text-[#8B2E1A] font-mono font-bold transition-colors"
                  >
                    <IconLinkedIn className="w-3.5 h-3.5 text-[#8B2E1A]" />
                    <span>LinkedIn Profile ↗</span>
                  </a>
                )}
                {selectedMember.portfolio && (
                  <a
                    href={selectedMember.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0F172A] hover:text-[#8B2E1A] font-mono font-bold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#8B2E1A]" />
                    <span>Portfolio ↗</span>
                  </a>
                )}
              </div>
            </div>

            <div className="mt-7 pt-4 border-t border-[#E8E4DF] flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-6 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold font-mono transition-colors shadow-sm"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
