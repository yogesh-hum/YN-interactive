import React from 'react';
import { Check, ArrowRight, MessageSquare, Sparkles, Cpu } from 'lucide-react';
import { PRICING_PLANS, getWhatsAppUrl } from '../data/content.ts';
import { MagneticButton } from './MagneticButton.tsx';

interface PricingProps {
  onSelectTier: (tierName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="relative py-28 bg-[#0a0e19] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No hidden developer overhead or bloated retainer contracts. Clear investment tiers designed
            for small &amp; local businesses.
          </p>
          <div className="text-xs text-slate-400">
            * All packages are listed with starting prices; final quotes adapt to your exact page count and custom feature requirements.
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#101b33] to-[#0a101f] border-2 border-blue-400/80 shadow-[0_0_40px_rgba(37,99,235,0.35)] md:-translate-y-3 z-10'
                  : 'bg-[#07090e]/90 border border-white/[0.08] hover:border-slate-500 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge with Luminous Aura */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>MOST POPULAR</span>
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-white tracking-wide">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-mono font-medium">Starting at</span>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed font-normal">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-6 border-t border-white/[0.08] mb-8">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                    Package Includes:
                  </div>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-6 border-t border-white/[0.08] space-y-3">
                <MagneticButton
                  onClick={() => onSelectTier(plan.name)}
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full py-3.5 text-xs font-semibold"
                  ariaLabel={`Select ${plan.name} plan - Get a Free Quote`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </MagneticButton>

                <a
                  href={getWhatsAppUrl(`Hi YN Interactive, I would like to get a quote for the ${plan.name} package (${plan.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg text-xs font-medium text-slate-400 hover:text-emerald-400 flex items-center justify-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  data-interactive="true"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Software & AI Solutions Card */}
        <div className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-[#0d162a] via-[#080d1a] to-[#0d162a] border border-blue-500/40 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
              <Cpu className="w-3 h-3" />
              <span>CUSTOM SPECIFICATION</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Custom Software / AI Solutions
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
              Have specific workflows, custom CRM tools, automated WhatsApp responders, or multi-role portals? Let's discuss your requirements and create a bespoke quotation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <MagneticButton
              onClick={() => onSelectTier('Custom Software / AI')}
              variant="primary"
              className="w-full sm:w-auto px-7 py-3 text-xs font-semibold"
              ariaLabel="Discuss Custom Software / AI - Get a Free Quote"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>

            <a
              href={getWhatsAppUrl("Hi YN Interactive, I'd like to discuss a custom software or AI automation project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 hover:bg-emerald-900/30 flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              data-interactive="true"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
