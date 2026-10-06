import React from 'react';
import {
  Palette,
  Smartphone,
  Zap,
  Target,
  BadgePercent,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { WHY_US_FEATURES } from '../data/content.ts';

export const WhyUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-rose-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="relative py-28 bg-[#0a0e19] border-t border-white/[0.06] overflow-hidden">
      {/* Background futuristic environment */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/6 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/6 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>BUSINESS-FIRST ADVANTAGE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            Why Businesses Choose YN Interactive
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We focus on tangible business outcomes, customer trust, and speed of enquiry — not just
            decorative designs.
          </p>
        </div>

        {/* 6 Feature Cards with Metallic Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="p-7 rounded-2xl bg-[#07090e]/85 border border-white/[0.07] hover:border-blue-500/40 hover:bg-[#0c1220] transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/40 hover:shadow-blue-900/10"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-blue-400/50 transition-all">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{feature.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Access Callout Banner */}
        <div className="mt-14 p-7 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900/40 to-blue-950/30 border border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400 font-mono">
              Direct Technical Access
            </div>
            <p className="text-sm text-slate-200 max-w-2xl leading-relaxed font-normal">
              No junior account managers or automated support ticket queues. You collaborate directly with founder Yogesh Naik from initial scoping to live launch.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            data-interactive="true"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};
