import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Users, Sparkles, Cpu, Layers } from 'lucide-react';

interface HeroProps {
  onExploreResearch: () => void;
  onMeetTeam: () => void;
}

type FocusMode = 'all' | 'metallurgy' | 'ai';

export const Hero: React.FC<HeroProps> = ({ onExploreResearch, onMeetTeam }) => {
  const [focusMode, setFocusMode] = useState<FocusMode>('all');
  const [tick, setTick] = useState(0);
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);

  useEffect(() => {
    const animate = (ts: number) => {
      if (!lastRef.current) lastRef.current = ts;
      const delta = Math.min(ts - lastRef.current, 64); // cap delta to prevent large jumps
      setTick((t) => t + delta * 0.04);
      lastRef.current = ts;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const t = tick;
  const rad = (d: number) => (d * Math.PI) / 180;

  // Mechanical Gear Parameters
  const gearTeeth = 12;
  const gearRi = 46;
  const gearRo = 68;
  const cxGear = 118;
  const cyGear = 135;

  const gearPath = () => {
    let d = '';
    const rotationOffset = t * 0.35;
    for (let i = 0; i < gearTeeth; i++) {
      const a1 = (360 / gearTeeth) * i + rotationOffset;
      const a2 = a1 + 360 / gearTeeth / 2;
      const r1 = rad(a1);
      const r2 = rad(a2);
      const mid = rad((a1 + a2) / 2);
      if (i === 0) {
        d += `M ${cxGear + gearRi * Math.cos(r1)} ${cyGear + gearRi * Math.sin(r1)} `;
      }
      d += `L ${cxGear + gearRo * Math.cos(r1)} ${cyGear + gearRo * Math.sin(r1)} `;
      d += `L ${cxGear + gearRo * Math.cos(mid - rad(3))} ${cyGear + gearRo * Math.sin(mid - rad(3))} `;
      d += `A ${gearRo} ${gearRo} 0 0 1 ${cxGear + gearRo * Math.cos(mid + rad(3))} ${cyGear + gearRo * Math.sin(mid + rad(3))} `;
      d += `L ${cxGear + gearRi * Math.cos(r2)} ${cyGear + gearRi * Math.sin(r2)} `;
      d += `A ${gearRi} ${gearRi} 0 0 0 ${cxGear + gearRi * Math.cos(r1 + rad(360 / gearTeeth))} ${cyGear + gearRi * Math.sin(r1 + rad(360 / gearTeeth))} `;
    }
    d += 'Z';
    return d;
  };

  // Quantum Orbit Parameters (Center: cxAtom = 182, cyAtom = 135)
  const cxAtom = 182;
  const cyAtom = 135;
  const electrons = [
    { orbit: 66, speed: 1.05, baseRot: 0, phase: 0 },
    { orbit: 66, speed: 1.05, baseRot: 60, phase: 120 },
    { orbit: 66, speed: 1.05, baseRot: -60, phase: 240 },
    { orbit: 66, speed: 0.85, baseRot: 0, phase: 180 },
  ];

  // Satellite Quantum Descriptors
  const quantumNodes = [
    { radius: 48, speed: 0.6, phase: 45, size: 3.5 },
    { radius: 54, speed: -0.5, phase: 170, size: 3 },
    { radius: 42, speed: 0.75, phase: 290, size: 3.2 },
  ];

  // Center Fullerene Buckyball Bridge (cxCenter = 150, cyCenter = 135)
  const cxCenter = 150;
  const cyCenter = 135;

  const pillItems = [
    { label: 'MME · UET Lahore', color: '#0F172A' },
    { label: 'Research × AI × Materials', color: '#8B2E1A' },
    { label: 'Society of Metallurgical & Material Engineers', color: '#5C3D2E' },
  ];

  // Dynamic Opacities & Highlights based on Mode
  const isEngActive = focusMode === 'all' || focusMode === 'metallurgy';
  const isSciActive = focusMode === 'all' || focusMode === 'ai';

  // Pulsing Wave Radius for Atom Nucleus
  const pulseWaveRadius = 26 + (Math.sin(t * 0.06) + 1) * 6;
  const pulseWaveOpacity = 0.4 - (Math.sin(t * 0.06) + 1) * 0.15;

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Architectural Engineering Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8E4DF 1px, transparent 1px),
            linear-gradient(to bottom, #E8E4DF 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.35,
        }}
      />
      {/* Soft fade vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white/80 to-[#F8F7F5]/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT: Text Content (col-span-6) */}
          <div className="lg:col-span-6 space-y-7 animate-fade-up">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A] animate-pulse" />
              <span className="text-[11px] font-semibold text-[#8B2E1A] tracking-[0.12em] uppercase font-mono">
                Society of Metallurgical &amp; Material Engineers
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-[#0F172A] leading-[1.08] sm:leading-[1.04] tracking-[-0.03em]">
                Forging the
                <br />
                Future of{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#8B2E1A]">Research</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#FAF0EE] -skew-x-2 rounded" />
                </span>
              </h1>
              <p className="text-[11px] font-semibold text-slate-400 tracking-[0.16em] uppercase mt-3 font-mono">
                Materials Engineering · Scientific Thinking · AI Integration
              </p>
            </div>

            {/* Body Description */}
            <div className="space-y-3.5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                SOMAME Team Research is a student-driven research initiative at the Department of
                Metallurgical &amp; Materials Engineering, UET Lahore — building the foundation of
                scientific culture, research methodology, and AI-integrated materials science.
              </p>
              <p className="text-sm sm:text-base text-slate-400">
                From first principles to intelligent engineering — we develop thinkers who question,
                investigate, and contribute to meaningful discovery.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
              <button
                onClick={onExploreResearch}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-[15px] transition-all shadow-sm hover:shadow-md font-mono cursor-pointer"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onMeetTeam}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#E8E4DF] hover:border-slate-400 text-[#0F172A] font-semibold text-[15px] transition-all bg-white hover:bg-[#F8F7F5] font-mono shadow-2xs cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#8B2E1A]" />
                <span>Meet the Team</span>
              </button>
            </div>

            {/* Trust Anchors */}
            <div className="flex flex-wrap gap-2 pt-1">
              {pillItems.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8E4DF] bg-[#F8F7F5] text-[11px] font-semibold font-mono"
                  style={{ color: p.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Pure, Open Animated Research Motion Art (Clean Canvas - Zero Side Text Clutter) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative select-none">
            {/* Ambient Background Aura */}
            <div
              className={`absolute inset-0 max-w-[480px] max-h-[480px] mx-auto rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700 ${
                focusMode === 'ai'
                  ? 'bg-gradient-to-tr from-[#FAF0EE] via-[#8B2E1A]/10 to-transparent'
                  : focusMode === 'metallurgy'
                  ? 'bg-gradient-to-tr from-slate-200/50 via-slate-100 to-transparent'
                  : 'bg-gradient-to-tr from-[#FAF0EE]/70 via-[#F8F7F5]/80 to-transparent'
              }`}
            />

            {/* Mode Switcher (Clean, High-End & Minimal) */}
            <div className="mb-6 inline-flex items-center justify-center gap-1.5 p-1 rounded-2xl bg-white border border-[#E8E4DF] shadow-2xs font-mono text-[11px] z-20">
              <button
                onClick={() => setFocusMode('all')}
                className={`px-3.5 py-1.5 rounded-xl transition-all duration-300 font-semibold flex items-center gap-1.5 cursor-pointer ${
                  focusMode === 'all'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-slate-500 hover:text-[#0F172A]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Ecosystem</span>
              </button>

              <button
                onClick={() => setFocusMode('metallurgy')}
                className={`px-3.5 py-1.5 rounded-xl transition-all duration-300 font-semibold flex items-center gap-1.5 cursor-pointer ${
                  focusMode === 'metallurgy'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-slate-500 hover:text-[#0F172A]'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-[#8B2E1A]" />
                <span>Metallurgy</span>
              </button>

              <button
                onClick={() => setFocusMode('ai')}
                className={`px-3.5 py-1.5 rounded-xl transition-all duration-300 font-semibold flex items-center gap-1.5 cursor-pointer ${
                  focusMode === 'ai'
                    ? 'bg-[#8B2E1A] text-white shadow-xs'
                    : 'text-slate-500 hover:text-[#8B2E1A]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI × Materials</span>
              </button>
            </div>

            {/* Main Stage: Pure Motion Graphics Canvas (Uncluttered) */}
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">

              {/* Concentric Rotating Diffraction & Coordinate Guide Rings */}
              <div className="absolute inset-2 rounded-full border border-dashed border-[#E8E4DF]/80 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-12 rounded-full border border-dashed border-slate-200/90 animate-spin-reverse-slow pointer-events-none" />
              <div className="absolute inset-24 rounded-full border border-slate-100 pointer-events-none" />

              {/* Enhanced Vector Art: Dual-Hemisphere Emblem & Buckyball */}
              <svg
                viewBox="0 0 300 270"
                className="w-full h-full max-w-[380px] drop-shadow-sm transition-transform duration-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Metallic Gear Gradients */}
                  <linearGradient id="gearMetallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="50%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>

                  <linearGradient id="gearTeethShine" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>

                  {/* Materials Science Atom Gradients */}
                  <radialGradient id="atomCoreGrad" cx="38%" cy="32%" r="68%">
                    <stop offset="0%" stopColor="#C2410C" />
                    <stop offset="45%" stopColor="#A83520" />
                    <stop offset="100%" stopColor="#722514" />
                  </radialGradient>

                  <radialGradient id="moleculeShine" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#FAF0EE" />
                    <stop offset="100%" stopColor="#CBD5E1" />
                  </radialGradient>

                  <radialGradient id="carbonNodeGrad" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#D97706" />
                    <stop offset="60%" stopColor="#8B2E1A" />
                    <stop offset="100%" stopColor="#451205" />
                  </radialGradient>

                  {/* Electron Glow Filter */}
                  <filter id="electronGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* ===== LEFT HEMISPHERE: MECHANICAL & METALLURGICAL GEAR ===== */}
                <g
                  className="transition-all duration-500 cursor-pointer"
                  opacity={isEngActive ? 1 : 0.22}
                  transform={isEngActive ? 'scale(1)' : 'scale(0.97)'}
                  style={{ transformOrigin: `${cxGear}px ${cyGear}px` }}
                  onClick={() => setFocusMode(focusMode === 'metallurgy' ? 'all' : 'metallurgy')}
                >
                  {/* Outer Machined Gear Teeth */}
                  <path d={gearPath()} fill="url(#gearMetallicGrad)" filter="drop-shadow(0 2px 4px rgba(15,23,42,0.15))" />

                  {/* Concentric Rim Recess */}
                  <circle cx={cxGear} cy={cyGear} r={gearRi - 4} fill="#0F172A" />
                  <circle cx={cxGear} cy={cyGear} r={gearRi - 7} fill="#1E293B" />
                  <circle cx={cxGear} cy={cyGear} r={gearRi - 10} fill="white" />

                  {/* 6 Weight-Reduction Machined Web Windows */}
                  {[0, 60, 120, 180, 240, 300].map((angle) => {
                    const holeAngle = rad(angle + t * 0.35);
                    const hx = cxGear + 25 * Math.cos(holeAngle);
                    const hy = cyGear + 25 * Math.sin(holeAngle);
                    return (
                      <circle
                        key={angle}
                        cx={hx}
                        cy={hy}
                        r={5.5}
                        fill="#0F172A"
                        opacity="0.12"
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />
                    );
                  })}

                  {/* Central Axle Hub & Machined Bevel */}
                  <circle cx={cxGear} cy={cyGear} r={17} fill="#0F172A" opacity="0.1" />
                  <circle cx={cxGear} cy={cyGear} r={14} fill="#1E293B" />
                  <circle cx={cxGear} cy={cyGear} r={10} fill="#0F172A" />

                  {/* 6 Hexagonal Socket Bolts on Hub */}
                  {[0, 60, 120, 180, 240, 300].map((angle) => {
                    const boltAngle = rad(angle + t * 0.35);
                    const bx = cxGear + 8 * Math.cos(boltAngle);
                    const by = cyGear + 8 * Math.sin(boltAngle);
                    return <circle key={angle} cx={bx} cy={by} r={1.2} fill="#94A3B8" />;
                  })}

                  {/* Center Axle Pin */}
                  <circle cx={cxGear} cy={cyGear} r={4.5} fill="#475569" />
                  <circle cx={cxGear} cy={cyGear} r={2} fill="#FFFFFF" opacity="0.7" />

                  {/* Engraved Calibration Perpendicular Hash Marks */}
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
                    const tickAngle = rad(angle + t * 0.35);
                    const x1 = cxGear + 33 * Math.cos(tickAngle);
                    const y1 = cyGear + 33 * Math.sin(tickAngle);
                    const x2 = cxGear + 39 * Math.cos(tickAngle);
                    const y2 = cyGear + 39 * Math.sin(tickAngle);
                    return (
                      <line
                        key={angle}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#0F172A"
                        strokeWidth="1.2"
                        opacity={angle % 90 === 0 ? '0.6' : '0.25'}
                      />
                    );
                  })}
                </g>

                {/* ===== RIGHT HEMISPHERE: MATERIALS SCIENCE ATOM & ORBITS ===== */}
                <g
                  className="transition-all duration-500 cursor-pointer"
                  opacity={isSciActive ? 1 : 0.22}
                  transform={isSciActive ? 'scale(1)' : 'scale(0.97)'}
                  style={{ transformOrigin: `${cxAtom}px ${cyAtom}px` }}
                  onClick={() => setFocusMode(focusMode === 'ai' ? 'all' : 'ai')}
                >
                  {/* Radiant Harmonic Pulse Waves radiating from nucleus */}
                  <circle
                    cx={cxAtom}
                    cy={cyAtom}
                    r={pulseWaveRadius}
                    fill="none"
                    stroke="#8B2E1A"
                    strokeWidth="1"
                    opacity={pulseWaveOpacity}
                  />

                  {/* 3 Tilted Quantum Orbital Ellipses */}
                  <ellipse
                    cx={cxAtom}
                    cy={cyAtom}
                    rx={66}
                    ry={25}
                    stroke="#8B2E1A"
                    strokeWidth="1.4"
                    opacity="0.5"
                    strokeDasharray="4 3"
                    transform={`rotate(0 ${cxAtom} ${cyAtom})`}
                  />
                  <ellipse
                    cx={cxAtom}
                    cy={cyAtom}
                    rx={66}
                    ry={25}
                    stroke="#8B2E1A"
                    strokeWidth="1.4"
                    opacity="0.5"
                    strokeDasharray="4 3"
                    transform={`rotate(60 ${cxAtom} ${cyAtom})`}
                  />
                  <ellipse
                    cx={cxAtom}
                    cy={cyAtom}
                    rx={66}
                    ry={25}
                    stroke="#8B2E1A"
                    strokeWidth="1.4"
                    opacity="0.5"
                    strokeDasharray="4 3"
                    transform={`rotate(-60 ${cxAtom} ${cyAtom})`}
                  />

                  {/* Atomic Multi-Layer Nucleus Core */}
                  <circle cx={cxAtom} cy={cyAtom} r={22} fill="url(#atomCoreGrad)" filter="drop-shadow(0 2px 6px rgba(139,46,26,0.3))" />
                  <circle cx={cxAtom} cy={cyAtom} r={15} fill="url(#moleculeShine)" opacity="0.88" />

                  {/* Crystalline Lattice Cluster Facets on Nucleus */}
                  {[0, 60, 120, 180, 240, 300].map((a) => (
                    <line
                      key={a}
                      x1={cxAtom + 10 * Math.cos(rad(a))}
                      y1={cyAtom + 10 * Math.sin(rad(a))}
                      x2={cxAtom + 10 * Math.cos(rad(a + 60))}
                      y2={cyAtom + 10 * Math.sin(rad(a + 60))}
                      stroke="#8B2E1A"
                      strokeWidth="1.2"
                      opacity="0.75"
                    />
                  ))}
                  <circle cx={cxAtom} cy={cyAtom} r={4.5} fill="#8B2E1A" />
                  <circle cx={cxAtom} cy={cyAtom} r={2} fill="white" opacity="0.8" />

                  {/* Smoothly Orbiting Quantum Electrons with Glow Aura & Particle Trails */}
                  {electrons.map((e, i) => {
                    const angle = rad(e.phase + t * e.speed);
                    const cosR = Math.cos(rad(e.baseRot));
                    const sinR = Math.sin(rad(e.baseRot));
                    const ex = e.orbit * Math.cos(angle);
                    const ey = 25 * Math.sin(angle);
                    const rx = ex * cosR - ey * sinR + cxAtom;
                    const ry = ex * sinR + ey * cosR + cyAtom;

                    // Trail point slightly behind
                    const trailAngle = rad(e.phase + t * e.speed - 12);
                    const tx = e.orbit * Math.cos(trailAngle);
                    const ty = 25 * Math.sin(trailAngle);
                    const rtx = tx * cosR - ty * sinR + cxAtom;
                    const rty = tx * sinR + ty * cosR + cyAtom;

                    return (
                      <g key={i}>
                        {/* Faint trail */}
                        <line
                          x1={rtx}
                          y1={rty}
                          x2={rx}
                          y2={ry}
                          stroke="#8B2E1A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          opacity="0.3"
                        />
                        {/* Glow halo */}
                        <circle cx={rx} cy={ry} r={8} fill="#8B2E1A" opacity="0.25" filter="url(#electronGlow)" />
                        {/* Electron Solid Core */}
                        <circle cx={rx} cy={ry} r={4.2} fill="#8B2E1A" />
                        <circle cx={rx} cy={ry} r={1.8} fill="#FFFFFF" />
                      </g>
                    );
                  })}

                  {/* Secondary Quantum Satellite Nodes */}
                  {quantumNodes.map((n, i) => {
                    const nAngle = rad(n.phase + t * n.speed);
                    const nx = cxAtom + n.radius * Math.cos(nAngle);
                    const ny = cyAtom + (n.radius * 0.45) * Math.sin(nAngle);
                    return (
                      <circle
                        key={i}
                        cx={nx}
                        cy={ny}
                        r={n.size}
                        fill="#C2410C"
                        opacity="0.8"
                        stroke="white"
                        strokeWidth="1"
                      />
                    );
                  })}
                </g>

                {/* ===== CENTER BRIDGE: FULLERENE BUCKYBALL MOLECULAR HUB ===== */}
                <g className="transition-all duration-300">
                  {/* Subtle axis separation line */}
                  <line
                    x1={cxCenter}
                    y1={38}
                    x2={cxCenter}
                    y2={232}
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />

                  {/* Central Carbon Fullerene Shell */}
                  <circle
                    cx={cxCenter}
                    cy={cyCenter}
                    r={28}
                    fill="white"
                    stroke="#E8E4DF"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                  />
                  <circle cx={cxCenter} cy={cyCenter} r={21} fill="white" stroke="#0F172A" strokeWidth="0.8" opacity="0.2" />

                  {/* Rotating Pentagonal & Hexagonal Covalent Bonds */}
                  {[0, 72, 144, 216, 288].map((a, i) => {
                    const x1 = cxCenter + 14 * Math.cos(rad(a + t * 0.18));
                    const y1 = cyCenter + 14 * Math.sin(rad(a + t * 0.18));
                    const x2 = cxCenter + 14 * Math.cos(rad(a + 72 + t * 0.18));
                    const y2 = cyCenter + 14 * Math.sin(rad(a + 72 + t * 0.18));
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#0F172A"
                        strokeWidth="1.2"
                        opacity="0.55"
                      />
                    );
                  })}

                  {/* Carbon Atom Vertices with 3D Spherical Gradients */}
                  {[0, 72, 144, 216, 288].map((a, i) => (
                    <circle
                      key={i}
                      cx={cxCenter + 14 * Math.cos(rad(a + t * 0.18))}
                      cy={cyCenter + 14 * Math.sin(rad(a + t * 0.18))}
                      r={3}
                      fill="url(#carbonNodeGrad)"
                      stroke="white"
                      strokeWidth="0.8"
                    />
                  ))}

                  {/* Central Core Carbon Specimen */}
                  <circle cx={cxCenter} cy={cyCenter} r={4.5} fill="#0F172A" />
                  <circle cx={cxCenter} cy={cyCenter} r={2} fill="#FFFFFF" opacity="0.8" />
                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8E4DF] to-transparent" />
    </section>
  );
};

export default Hero;
