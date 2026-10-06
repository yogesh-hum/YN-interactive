import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Code2, Globe, Cpu } from 'lucide-react';
import { BRAND, TARGET_INDUSTRIES } from '../data/content.ts';
import { DigitalCore3D } from './DigitalCore3D.tsx';
import { MagneticButton } from './MagneticButton.tsx';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-cyan-500/12 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Magnetic CTAs with cinematic stagger */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Supporting Headline (Step 2) */}
            <div className="hero-enter-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-950/50 border border-blue-500/30 text-xs sm:text-sm font-semibold text-blue-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span>{BRAND.positioning}</span>
            </div>

            {/* Main Headline (Step 3) */}
            <h1 className="hero-enter-3 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
              Build Your Digital <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                Presence.
              </span>
            </h1>

            {/* Tagline & Description (Step 4) */}
            <p className="hero-enter-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {BRAND.tagline} We help businesses turn ideas into modern digital solutions that look
              professional, work smoothly and help generate real business opportunities.
            </p>

            {/* Magnetic CTA Buttons (Step 5) */}
            <div className="hero-enter-5 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticButton
                onClick={onOpenQuoteModal}
                variant="primary"
                className="px-7 py-3.5 text-sm sm:text-base font-semibold"
                ariaLabel="Start a Project - Get a Free Quote"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href="#work"
                variant="secondary"
                className="px-6 py-3.5 text-sm sm:text-base font-medium"
                ariaLabel="View Our Work"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </MagneticButton>
            </div>

            {/* Trust-style line (Step 5) */}
            <div className="hero-enter-5 pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
              <span className="font-medium text-slate-200">Websites</span>
              <span className="text-slate-600">·</span>
              <span className="font-medium text-slate-200">Software</span>
              <span className="text-slate-600">·</span>
              <span className="font-medium text-slate-200">AI Automation</span>
              <span className="text-slate-600">·</span>
              <span className="font-medium text-slate-200">Digital Solutions</span>
            </div>
          </div>

          {/* Right Column: 3D Digital Core Technology Engine (Step 6) */}
          <div className="lg:col-span-5 relative hero-enter-5">
            <DigitalCore3D />
          </div>
        </div>

        {/* Target Industries Strip */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] hero-enter-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 text-center sm:text-left">
            Built for local businesses &amp; growth-focused brands:
          </div>
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
            {TARGET_INDUSTRIES.slice(0, 8).map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 text-xs text-slate-300 bg-white/[0.03] border border-white/[0.08] rounded-lg transition-colors hover:border-blue-500/50 hover:text-white hover:bg-blue-950/20"
              >
                {industry}
              </span>
            ))}
            <span className="text-xs text-slate-500 px-2 py-1">and more...</span>
          </div>
        </div>
      </div>
    </section>
  );
};
