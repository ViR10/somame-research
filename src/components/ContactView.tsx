import React, { useState } from 'react';
import { CheckCircle2, Send, ArrowRight, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { IconInstagram, IconLinkedIn, IconFacebook } from './ScientificIcons';

interface ContactViewProps {
  onNavigateToResearch?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigateToResearch }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'General Inquiry',
    message: '',
  });

  const categories = [
    'General Inquiry',
    'Student Research Joining',
    'Academic Discussion',
    'Technical Workshop',
    'Interdisciplinary Collaboration',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-[#F8F7F5] border-b border-[#E8E4DF] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E4DF] bg-white mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E1A]" />
              <span className="text-[11px] font-mono font-semibold text-[#8B2E1A] uppercase tracking-widest">
                OFFICIAL COMMUNICATION
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tight mb-5">
              Connect With SOMAME Research
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed">
              Reach out regarding student research activities, workshops, scientific discussions, and society initiatives within MME UET Lahore.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* 2. Inquiry Categories Overview Cards */}
        <div className="mb-14 sm:mb-16">
          <span className="text-xs font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-4">
            INQUIRY CATEGORIES
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, category: cat }))}
                className={`p-3 sm:p-4 rounded-2xl border transition-all font-semibold text-xs font-mono text-center shadow-2xs cursor-pointer ${
                  formData.category === cat
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs ring-2 ring-[#0F172A]/10'
                    : 'bg-[#F8F7F5] border-[#E8E4DF] text-[#0F172A] hover:bg-white hover:border-[#0F172A]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-[#E8E4DF] bg-[#F8F7F5] space-y-6 shadow-2xs">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#8B2E1A] uppercase tracking-widest block mb-1">
                  DEPARTMENT &amp; INSTITUTION
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                  Dept. of Metallurgical &amp; Materials Engineering
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-mono">
                  University of Engineering and Technology (UET), Lahore
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E4DF] space-y-3 text-xs sm:text-sm text-slate-700 font-mono">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8B2E1A] shrink-0 mt-0.5" />
                  <span>{siteConfig.secretariat}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#8B2E1A] shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-[#8B2E1A] transition-colors font-semibold">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#8B2E1A] shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-[#8B2E1A] transition-colors font-bold">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E4DF]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                  Official Channels
                </h4>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl border border-[#E8E4DF] bg-white flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#0F172A] hover:border-[#0F172A] transition-all shadow-xs"
                    title="SOMAME LinkedIn"
                  >
                    <IconLinkedIn className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl border border-[#E8E4DF] bg-white flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#8B2E1A] hover:border-[#8B2E1A] transition-all shadow-xs"
                    title="SOMAME Instagram"
                  >
                    <IconInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl border border-[#E8E4DF] bg-white flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#0F172A] hover:border-[#0F172A] transition-all shadow-xs"
                    title="SOMAME Facebook"
                  >
                    <IconFacebook className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.departmentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 px-3.5 rounded-xl border border-[#E8E4DF] bg-white flex items-center gap-1.5 text-xs font-mono font-bold text-[#0F172A] hover:text-[#8B2E1A] hover:border-[#8B2E1A] transition-all shadow-xs"
                    title="MME Department Website"
                  >
                    <span>mme.uet.edu.pk</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Response Notice */}
              <div className="pt-4 border-t border-[#E8E4DF] text-xs font-mono text-slate-400 leading-relaxed">
                <span className="font-bold text-[#0F172A]">Notice: </span>
                Inquiries are routed directly to the SOMAME secretariat and directorate for review.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-[#E8E4DF] bg-white shadow-sm">
              <h3 className="text-2xl font-black text-[#0F172A] mb-2">
                Send an Inquiry
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Have a question regarding team research initiatives, mentorship, or student participation? Leave a message below.
              </p>

              {submitted ? (
                <div className="p-8 sm:p-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF0EE] text-[#8B2E1A] flex items-center justify-center mx-auto border border-[#8B2E1A]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-[#0F172A]">Message Transmitted</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed font-mono">
                    Thank you for reaching out. A representative of SOMAME Team Research will respond to your inquiry via email.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', category: 'General Inquiry', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl border border-[#E8E4DF] text-xs font-mono font-bold text-[#0F172A] hover:bg-[#F8F7F5] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-2 font-mono uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Student / Researcher"
                        className="w-full text-base sm:text-sm px-4 py-3.5 rounded-xl border border-[#E8E4DF] focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all bg-[#F8F7F5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-2 font-mono uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. student@uet.edu.pk"
                        className="w-full text-base sm:text-sm px-4 py-3.5 rounded-xl border border-[#E8E4DF] focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all bg-[#F8F7F5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-2 font-mono uppercase tracking-wider">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full text-base sm:text-sm px-4 py-3.5 rounded-xl border border-[#E8E4DF] focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all bg-[#F8F7F5] font-mono text-[#0F172A]"
                    >
                      {categories.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-2 font-mono uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Research Seminar Inquiry / Student Participation"
                      className="w-full text-base sm:text-sm px-4 py-3.5 rounded-xl border border-[#E8E4DF] focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all bg-[#F8F7F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-2 font-mono uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your inquiry or question in detail..."
                      className="w-full text-base sm:text-sm px-4 py-3.5 rounded-xl border border-[#E8E4DF] focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all bg-[#F8F7F5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg font-mono"
                  >
                    <Send className="w-4 h-4 text-[#8B2E1A]" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 3. Closing Section */}
        <div className="py-14 sm:py-16 border-t border-[#E8E4DF] text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-3">
            Building a Culture of Research Together
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto mb-6">
            Join the conversation, explore active research directions, and collaborate on the future of Materials Engineering.
          </p>
          <button
            onClick={onNavigateToResearch}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#8B2E1A] hover:bg-[#a33520] text-white font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2 font-mono"
          >
            <span>Explore Research Areas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
