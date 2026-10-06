import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, getWhatsAppUrl } from '../data/content.ts';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#07090e] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-500/20 text-xs font-semibold text-blue-400">
            COMMON INQUIRIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Straight answers about our pricing, timelines, technology, and support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#0a0f1d] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-white/[0.02] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-600/20 border-blue-500/40 text-blue-400' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Unanswered Question Banner */}
        <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/[0.07] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">Have a specific question about your project?</h4>
            <p className="text-xs text-slate-400">Ask founder Yogesh Naik directly for clear advice.</p>
          </div>
          <a
            href={getWhatsAppUrl("Hi YN Interactive, I have a specific question about a digital project for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 hover:bg-emerald-900/30 rounded-lg flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
