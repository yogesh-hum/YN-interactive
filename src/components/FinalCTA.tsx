import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, BRAND } from '../data/content.ts';
import { MagneticButton } from './MagneticButton.tsx';

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-32 bg-[#060810] border-t border-white/[0.08] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[420px] bg-blue-600/18 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-cyan-400/15 blur-[120px] pointer-events-none rounded-full" />

      {/* Large subtle YN monogram watermark in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035]">
        <span className="font-display text-[280px] sm:text-[420px] font-black tracking-tighter text-white">
          YN
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>START TODAY</span>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Ready to Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
              Something Better?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal pt-2">
            Tell us what you need and we'll help you choose the right digital solution for your business.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <MagneticButton
            onClick={onOpenQuoteModal}
            variant="primary"
            className="w-full sm:w-auto px-9 py-4 text-sm sm:text-base font-semibold"
            ariaLabel="Start a Project - Get a Free Quote"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <a
            href={getWhatsAppUrl("Hi YN Interactive, I have a project idea and would like to discuss it.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-emerald-400 bg-emerald-950/50 hover:bg-emerald-900/40 border border-emerald-700/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            data-interactive="true"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-slate-400 font-mono">
          Direct discussion with founder Yogesh Naik · WhatsApp: {BRAND.phone}
        </div>
      </div>
    </section>
  );
};
