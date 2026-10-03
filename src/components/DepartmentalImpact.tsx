import React from 'react';

export const DepartmentalImpact: React.FC = () => {
  const pillars = [
    {
      label: 'Research Culture',
      desc: 'Creating a department-wide habit of scientific thinking and evidence-based inquiry.',
      icon: '◈',
      color: '#0F172A',
    },
    {
      label: 'Student Empowerment',
      desc: 'Giving every student the tools, knowledge, and confidence to engage with research.',
      icon: '◉',
      color: '#8B2E1A',
    },
    {
      label: 'Interdisciplinary Bridge',
      desc: 'Connecting Materials Engineering with AI, computation, and data science.',
      icon: '◆',
      color: '#5C3D2E',
    },
    {
      label: 'Future Readiness',
      desc: 'Preparing graduates for research-driven careers in academia and industry.',
      icon: '▣',
      color: '#0F172A',
    },
  ];

  return (
    <section className="bg-[#F8F7F5] section-pad border-t border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
            <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">Impact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight tracking-tight mb-4">
            Our Role in the Department
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            SOMAME Team Research exists to transform how students in the MME Department at UET Lahore
            approach science, technology, and discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E8E4DF] p-6 text-center hover:border-slate-300 hover:shadow-md transition-all group shadow-2xs"
            >
              <div
                className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold border group-hover:scale-105 transition-all"
                style={{
                  color: p.color,
                  borderColor: `${p.color}20`,
                  background: `${p.color}08`,
                }}
              >
                {p.icon}
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">{p.label}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
