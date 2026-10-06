import React from 'react';
import { User, Shield, Terminal, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/content.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0a0e19] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-xs font-semibold text-blue-400">
              ABOUT YN INTERACTIVE
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
              Digital Solutions. <br className="hidden sm:inline" />
              Built Around Your Business.
            </h2>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed font-normal">
              <p>
                YN Interactive is a digital solutions brand focused on helping businesses build,
                improve and automate their digital presence.
              </p>
              <p>
                We combine modern web development, software solutions and AI technologies to turn
                business ideas into practical digital products.
              </p>
              <p className="text-slate-400 text-sm">
                Unlike agencies that pass clients between junior account reps and offshore sub-contractors,
                YN Interactive operates with complete transparency, direct technical communication,
                and focus on genuine business results for local proprietors.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero fake statistics or fluff</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct WhatsApp communication</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent starting rates</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Production clean code</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile Card */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#07090e] border border-white/[0.08] shadow-2xl relative">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <User className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                  Leadership
                </span>
              </div>

              <div className="space-y-1 mb-4">
                <h3 className="font-display text-2xl font-bold text-white">
                  {BRAND.founder}
                </h3>
                <div className="text-xs font-medium text-blue-400">
                  {BRAND.founderRole}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                "My objective with YN Interactive is straightforward: build digital assets that genuinely work for everyday business owners. Whether you operate a restaurant, a salon, a retail storefront, or a coaching academy, your website should actively build trust, present your services clearly, and drive customers directly to your door."
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400 font-mono">
                  Direct Founder Contact
                </div>
                <a
                  href={getWhatsAppUrl("Hi Yogesh, I'd like to discuss a project with YN Interactive.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-700/40 text-emerald-400 hover:text-emerald-300 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  data-interactive="true"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Yogesh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
