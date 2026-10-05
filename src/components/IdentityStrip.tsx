import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ExternalLink } from 'lucide-react';

// Identity Strip: shows institutional affiliations
export const IdentityStrip: React.FC = () => {
  const identities = [
    { label: 'Society of Metallurgical & Material Engineers', sub: 'SOMAME', logo: '/somame-logo.png' },
    { label: 'Dept. of Metallurgical & Materials Engineering', sub: 'UET Lahore', logo: '/logo.png' },
  ];

  const pillTags = [
    'Research Methodology',
    'Materials Science',
    'Artificial Intelligence',
    'Scientific Thinking',
    'AI × Materials',
    'Computational Tools',
    'Engineering Innovation',
    'Research Culture',
  ];

  return (
    <section className="bg-[#F8F7F5] border-y border-[#E8E4DF]">
      {/* Top row: affiliations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 sm:py-5">
          <div className="flex items-center gap-6">
            {identities.map((id, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <span className="text-[#E8E4DF] text-xl hidden sm:block">/</span>}
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#E8E4DF] bg-white p-0.5 flex items-center justify-center shadow-2xs">
                  <img
                    src={id.logo}
                    alt={`${id.sub} - ${id.label}`}
                    width={32}
                    height={32}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs text-[#0F172A] font-bold leading-none">{id.sub}</div>
                  <div className="text-[11px] text-slate-500 leading-none mt-1 hidden md:block font-mono">{id.label}</div>
                </div>
              </div>
            ))}
          </div>
          <a
            href={siteConfig.departmentUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-600 hover:text-[#8B2E1A] transition-colors"
          >
            <span>mme.uet.edu.pk</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Scrolling tags strip */}
      <div className="border-t border-[#E8E4DF] py-2.5 overflow-hidden bg-white">
        <div className="flex gap-3 animate-[scroll_25s_linear_infinite] whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...pillTags, ...pillTags].map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#E8E4DF] bg-[#F8F7F5] text-[11px] font-mono font-medium text-slate-600 shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
