import React from 'react';
import { advisorData, directorData, coDirectorsData } from '../data/team';
import { IconLinkedIn } from './ScientificIcons';
import { ExternalLink } from 'lucide-react';

export const LeadershipPreview: React.FC<{ onMeetTeam: () => void }> = ({ onMeetTeam }) => {
  const members = [directorData, ...coDirectorsData];

  return (
    <section className="bg-[#F8F7F5] section-pad border-y border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Our Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
              Leadership &amp; Advisors
            </h2>
            <p className="mt-3 text-lg text-slate-500 leading-relaxed">
              Society guidance and student directorate working together to build SOMAME's research culture.
            </p>
          </div>
          <button
            onClick={onMeetTeam}
            className="shrink-0 px-6 py-3 rounded-xl border border-[#E8E4DF] text-[#0F172A] font-semibold text-sm hover:bg-[#F8F7F5] transition-all font-mono shadow-2xs"
          >
            Meet Full Team →
          </button>
        </div>

        {/* Advisor card (full width, prominent) */}
        <div className="mb-8 p-7 rounded-2xl border border-[#E8E4DF] bg-white shadow-2xs flex flex-col md:flex-row items-center md:items-start gap-7">
          <div className="relative shrink-0">
            <div className="w-28 h-28 rounded-2xl overflow-hidden border border-[#E8E4DF]">
              <img
                src={advisorData.image}
                alt={advisorData.name}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-lg bg-[#8B2E1A] text-white text-[9px] font-mono font-bold tracking-wide">
              ADVISOR
            </span>
          </div>
          <div className="flex-grow text-center md:text-left space-y-2">
            <div className="text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest">
              Society Advisor — SOMAME
            </div>
            <h3 className="text-2xl font-black text-[#0F172A]">{advisorData.name}</h3>
            <p className="text-sm font-semibold text-[#0F172A]">{advisorData.officialTitle}</p>
            <p className="text-sm text-slate-500">{advisorData.institution}</p>
          </div>
          {advisorData.linkedin && (
            <a
              href={advisorData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-[12px] font-mono font-bold transition-all shadow-2xs"
            >
              <IconLinkedIn className="w-3.5 h-3.5 text-[#8B2E1A]" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>

        {/* Director + Co-Directors row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {members.map((m, i) => (
            <div
              key={m.id}
              className="bg-white rounded-2xl border border-[#E8E4DF] p-5 flex flex-col items-center text-center hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#E8E4DF] mb-4 bg-[#F8F7F5]">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#8B2E1A] mb-1">
                {i === 0 ? 'Director' : 'Co-Director'}
              </div>
              <div className="font-bold text-[#0F172A] text-base">{m.name}</div>
              <div className="flex items-center gap-1.5 mt-1.5 flex-wrap justify-center">
                {m.year && (
                  <span className="px-2 py-0.5 rounded bg-[#FAF0EE] border border-[#8B2E1A]/20 text-[#8B2E1A] text-[10px] font-mono font-bold">
                    {m.year}
                  </span>
                )}
                {m.batch && (
                  <span className="text-[10px] font-mono text-slate-400">Batch {m.batch}</span>
                )}
              </div>
              {m.portfolio && (
                <a
                  href={m.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#8B2E1A] hover:underline"
                >
                  <ExternalLink className="w-2.5 h-2.5" />
                  Portfolio
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
