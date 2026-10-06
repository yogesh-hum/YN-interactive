import React, { useState } from 'react';
import { MessageSquare, Layout, Code, Rocket, CheckCircle, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content.ts';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case '02':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case '03':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case '04':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="relative py-28 bg-[#07090e] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>STRUCTURED ROADMAP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            From Idea to Launch
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A battle-tested 4-step engineering roadmap to deliver your digital solution smoothly and on time.
          </p>
        </div>

        {/* Interactive Luminous Timeline */}
        <div className="relative">
          {/* Desktop Connecting Glowing Energy Beam */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[3px] bg-gradient-to-r from-blue-600/40 via-cyan-400/60 to-emerald-500/40 z-0 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.4)]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative flex flex-col justify-between p-7 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0e162a] border border-cyan-400/50 shadow-2xl shadow-blue-900/30 -translate-y-1.5'
                      : 'bg-[#090d18] border border-white/[0.08] hover:border-slate-500'
                  }`}
                  data-interactive="true"
                >
                  <div>
                    {/* Step Top Bar: Node Icon & Glowing Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-blue-600/30 border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-110'
                            : 'bg-white/[0.03] border border-white/[0.08]'
                        }`}
                      >
                        {getIcon(step.number)}
                      </div>
                      <span
                        className={`font-display text-3xl font-extrabold transition-colors ${
                          isSelected ? 'text-cyan-300' : 'text-slate-600'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Stage Timeline Indicator */}
                  <div
                    className={`pt-3.5 border-t text-xs font-mono transition-colors ${
                      isSelected
                        ? 'border-cyan-400/30 text-cyan-300 font-semibold'
                        : 'border-white/[0.06] text-slate-400'
                    }`}
                  >
                    {step.timeline}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
