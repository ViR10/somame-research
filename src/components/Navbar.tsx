import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'ai-materials', label: 'AI × Materials' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const go = (id: string) => {
    setActiveTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#E8E4DF]'
          : 'bg-white border-b border-[#E8E4DF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo + Identity */}
          <button
            onClick={() => go('home')}
            className="flex items-center gap-3 group shrink-0 text-left cursor-pointer"
            aria-label="SOMAME Research Homepage"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E8E4DF] bg-white flex items-center justify-center shadow-xs group-hover:border-slate-400 transition-colors">
              <img
                src={siteConfig.logos.somame}
                alt="SOMAME Team Research - Society of Metallurgical and Material Engineers UET Lahore"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-black text-[#0F172A] text-[15px] tracking-tight leading-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                SOMAME Research
              </span>
              <span className="text-[10px] font-mono font-bold text-[#8B2E1A] tracking-[0.1em] uppercase mt-0.5">
                Team Research
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`relative px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'text-[#0F172A] font-semibold'
                      : 'text-slate-500 hover:text-[#0F172A] hover:bg-[#F8F7F5]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#8B2E1A]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.departmentUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-mono font-semibold text-slate-500 hover:text-[#0F172A] transition-colors tracking-wide"
            >
              mme.uet.edu.pk ↗
            </a>
            <button
              onClick={() => go('contact')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-[13px] font-semibold transition-all shadow-sm font-mono cursor-pointer"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl border border-[#E8E4DF] text-[#0F172A] hover:bg-[#F8F7F5] transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-[68px] bg-slate-900/30 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 lg:hidden bg-white border-t border-[#E8E4DF] px-4 pb-6 pt-3 space-y-1 shadow-xl max-h-[calc(100vh-68px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-white font-semibold shadow-xs'
                      : 'text-slate-700 hover:bg-[#F8F7F5]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#8B2E1A]" />}
                </button>
              );
            })}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => go('contact')}
                className="w-full py-3.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-sm font-mono transition-colors shadow-sm cursor-pointer"
              >
                Get in Touch
              </button>
              <a
                href={siteConfig.departmentUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl border border-[#E8E4DF] text-center text-xs font-mono font-semibold text-slate-600 hover:bg-[#F8F7F5] transition-colors"
              >
                mme.uet.edu.pk ↗
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
