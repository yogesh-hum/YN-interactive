import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/content.ts';
import { MagneticButton } from './MagneticButton.tsx';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Zone: Clean wordmark with subtle electric blue accent */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
            data-interactive="true"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6] group-hover:scale-125 transition-transform duration-200"></span>
            <span className="font-display font-bold tracking-tight text-lg sm:text-xl text-white">
              {BRAND.name}
            </span>
          </a>

          {/* Navigation Links Zone */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 text-slate-300 hover:text-white transition-colors duration-150 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
                data-interactive="true"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Zone: WhatsApp quick link and Magnetic CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hi YN Interactive, I'd like to ask a quick question about your digital solutions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg border border-white/10 hover:border-slate-500 hover:bg-white/[0.04] transition-all duration-150"
              title="Chat on WhatsApp"
              data-interactive="true"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <MagneticButton
              onClick={onOpenQuoteModal}
              variant="primary"
              className="px-4 py-2 text-xs font-semibold"
              ariaLabel="Get a Free Quote"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0a0e19] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-lg hover:bg-emerald-900/30 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 84540 16069)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
