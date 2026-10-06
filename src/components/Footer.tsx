import React from 'react';
import { ArrowUp, MessageSquare, Mail } from 'lucide-react';
import { BRAND, getWhatsAppUrl, getEmailUrl } from '../data/content.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#05070b] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <span className="font-display font-bold text-lg text-white tracking-tight">
                {BRAND.name}
              </span>
            </div>

            <div className="text-xs font-medium text-blue-400">
              {BRAND.positioning}
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              Ideas to Real Solutions. Helping local and independent businesses establish credible online visibility, automated workflows, and software solutions.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>+91 84540 16069</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={getEmailUrl()}
                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>naikyogesh580@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Back to Top & Location */}
          <div className="md:col-span-3 space-y-4 md:text-right flex flex-col md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] text-slate-400">
              Founder: {BRAND.founder}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © 2026 {BRAND.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Fast Loading</span>
            <span>·</span>
            <span>Mobile-First</span>
            <span>·</span>
            <span>Client Conversion Focused</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
