import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Send,
  Phone,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { BRAND, getWhatsAppUrl, getEmailUrl } from '../data/content.ts';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [service, setService] = useState(initialService || 'Business Website');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Hi YN Interactive, I would like to start a project.\n\nBusiness Name: ${businessName || 'Not specified'}\nBusiness Type: ${businessType || 'Not specified'}\nInterested Solution: ${service}\nNotes/Requirements: ${message || 'Please contact me to discuss details.'}`;

    if (contactMethod === 'whatsapp') {
      window.open(getWhatsAppUrl(formattedText), '_blank');
    } else {
      window.location.href = getEmailUrl(
        `Project Inquiry: ${businessName || service}`,
        formattedText
      );
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07090e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Branding */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-xs font-semibold text-blue-400">
                GET IN TOUCH
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
                Let's Build Something Useful.
              </h2>
              <div className="space-y-1">
                <div className="font-display font-bold text-lg text-white">
                  {BRAND.name}
                </div>
                <div className="text-sm font-medium text-blue-400">
                  {BRAND.positioning}
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Whether you have an established business needing a website overhaul or a brand-new concept, we are ready to help you launch fast and cleanly.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={getWhatsAppUrl("Hi YN Interactive, I want to discuss a new digital solutions project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#0a0f1d] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#0c1424] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp (Instant Chat)</div>
                    <div className="text-sm font-mono font-semibold text-white mt-0.5">
                      {BRAND.phone}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email Card */}
              <a
                href={getEmailUrl()}
                className="group p-4 rounded-xl bg-[#0a0f1d] border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0c1424] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <div className="text-sm font-mono font-semibold text-white mt-0.5">
                      {BRAND.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Operating standard */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Quotes typically provided promptly during business hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0f1d] border border-white/[0.08] shadow-2xl">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Project Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in brief details and launch directly into a formatted WhatsApp or email discussion.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Inquiry formatted! Opening your chosen chat application...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-business-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Business or Brand Name
                    </label>
                    <input
                      id="contact-business-name"
                      type="text"
                      placeholder="e.g. Apex Cafe, Urban Salon"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-business-type" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Business Category
                    </label>
                    <input
                      id="contact-business-type"
                      type="text"
                      placeholder="e.g. Restaurant, Gym, Clinic, Store"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-solution" className="block text-xs font-medium text-slate-300 mb-1.5">
                    What solution do you need?
                  </label>
                  <select
                    id="contact-solution"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                  >
                    <option value="Business Website (Starter / Business / Premium)">Business Website (Starter / Business / Premium)</option>
                    <option value="E-Commerce Storefront & Catalog">E-Commerce Storefront &amp; Catalog</option>
                    <option value="Custom Web Application">Custom Web Application</option>
                    <option value="Custom Software Solution">Custom Software Solution</option>
                    <option value="AI Automation & WhatsApp Workflows">AI Automation &amp; WhatsApp Workflows</option>
                    <option value="Website Maintenance & Optimization">Website Maintenance &amp; Optimization</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Details / Requirements
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Briefly describe what you'd like your website or system to do..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Send via Choice */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Send inquiry via:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setContactMethod('whatsapp')}
                      className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                        contactMethod === 'whatsapp'
                          ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp (Instant)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setContactMethod('email')}
                      className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        contactMethod === 'email'
                          ? 'bg-blue-950/40 border-blue-500/60 text-blue-300'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>Email Client</span>
                    </button>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>Start a Project</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
