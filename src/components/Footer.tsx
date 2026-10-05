import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { IconFacebook, IconInstagram, IconLinkedIn, IconMail } from './ScientificIcons';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14 lg:py-16">
          {/* 1. Brand & Info (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E8E4DF] bg-white p-1 flex items-center justify-center shadow-xs shrink-0">
                <img
                  src={siteConfig.logos.somame}
                  alt="SOMAME Team Research - Official Society Logo"
                  width={36}
                  height={36}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-[#0F172A] tracking-tight leading-none">
                  SOMAME Research
                </span>
                <span className="text-[10px] font-mono font-bold text-[#8B2E1A] tracking-wider uppercase mt-1">
                  Team Research • UET Lahore
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Departmental student research initiative advancing scientific thinking, experimental rigor,
              and AI integration in Materials Engineering.
            </p>

            {/* Direct Contact info inline */}
            <div className="space-y-1 text-xs text-slate-500 font-mono pt-1">
              <div>SOMAME Secretariat, Dept. of Metallurgical &amp; Materials Eng.</div>
              <div>University of Engineering and Technology (UET), Lahore</div>
              <div className="pt-1 text-[#0F172A] font-semibold">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#8B2E1A] transition-colors">
                  {siteConfig.email}
                </a>
                <span className="mx-2 text-slate-300">•</span>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#8B2E1A] transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                title="SOMAME LinkedIn"
                aria-label="LinkedIn"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-9 w-9 border border-[#E8E4DF] hover:border-[#0F172A] hover:text-[#0F172A] bg-white transition-all shadow-2xs"
                >
                  <IconLinkedIn className="h-4 w-4" />
                </Button>
              </a>

              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                title="SOMAME Instagram"
                aria-label="Instagram"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-9 w-9 border border-[#E8E4DF] hover:border-[#8B2E1A] hover:text-[#8B2E1A] bg-white transition-all shadow-2xs"
                >
                  <IconInstagram className="h-4 w-4" />
                </Button>
              </a>

              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                title="SOMAME Facebook"
                aria-label="Facebook"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-9 w-9 border border-[#E8E4DF] hover:border-[#0F172A] hover:text-[#0F172A] bg-white transition-all shadow-2xs"
                >
                  <IconFacebook className="h-4 w-4" />
                </Button>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                title="SOMAME Official Email"
                aria-label="Email"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-9 w-9 border border-[#E8E4DF] hover:border-[#8B2E1A] hover:text-[#8B2E1A] bg-white transition-all shadow-2xs"
                >
                  <IconMail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* 2. Platform Navigation (col-span-3) */}
          <div className="md:col-span-3 space-y-3.5">
            <h3 className="font-bold text-xs uppercase tracking-wider font-mono text-[#0F172A]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  About Purpose
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('research')}
                  className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  Research Domains
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai-materials')}
                  className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  AI × Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('achievements')}
                  className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  Leadership Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  Official Contact
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Updates & Affiliation (col-span-4) */}
          <div className="md:col-span-4 space-y-5">
            <div className="space-y-2.5">
              <h3 className="font-bold text-sm text-[#0F172A]">
                Stay Updated
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Receive announcements on scientific workshops, seminars, and student research progress.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-[#FAF0EE] border border-[#8B2E1A]/20 flex items-center gap-2 text-xs font-mono font-bold text-[#8B2E1A]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscription recorded. Thank you!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex space-x-2">
                  <Input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter academic email"
                    className="rounded-xl bg-white text-xs border-[#E8E4DF] focus-visible:border-[#0F172A]"
                  />
                  <Button
                    type="submit"
                    className="rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs px-4 font-mono font-semibold shrink-0"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>

            {/* Department Affiliation Badge */}
            <div className="pt-2">
              <a
                href={siteConfig.departmentUrl}
                target="_blank"
                rel="noreferrer"
                title="Department of Metallurgical & Materials Engineering, UET Lahore"
                className="inline-flex items-center gap-3 p-3 rounded-2xl bg-[#F8F7F5] border border-[#E8E4DF] hover:border-[#0F172A]/30 hover:bg-white transition-all shadow-2xs group w-full"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E4DF] p-1 flex items-center justify-center shadow-2xs shrink-0">
                  <img
                    src={siteConfig.logos.department}
                    alt="Department of Metallurgical and Materials Engineering (MME), UET Lahore Logo"
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-grow">
                  <span className="text-xs font-bold text-[#0F172A] block leading-snug group-hover:text-[#8B2E1A] transition-colors truncate">
                    Dept. of Metallurgical &amp; Materials Engineering
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 block">
                    UET Lahore • mme.uet.edu.pk ↗
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0F172A] shrink-0 mr-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Clean Bottom Bar - Single Strip */}
        <div className="border-t border-[#E8E4DF] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span>© {CURRENT_YEAR}</span>
            <span className="text-slate-300">•</span>
            <span>Designed &amp; Developed by</span>
            <a
              href={siteConfig.developer.url}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#0F172A] hover:text-[#8B2E1A] transition-colors inline-flex items-center gap-1 group"
            >
              <span className="underline underline-offset-2">ViR Developers</span>
              <span className="text-[#8B2E1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => onNavigate('about')}
              className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Academic Integrity
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('research')}
              className="text-slate-500 hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Methodology
            </button>
            <span>•</span>
            <a
              href={siteConfig.departmentUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-[#8B2E1A] transition-colors inline-flex items-center gap-1"
            >
              <span>UET MME</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
