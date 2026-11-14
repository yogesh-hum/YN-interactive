import React, { useEffect, useState } from 'react';
import { X, MessageSquare, Mail, Calculator, Check, ArrowRight } from 'lucide-react';
import { TARGET_INDUSTRIES, BRAND, getWhatsAppUrl, getEmailUrl } from '../data/content.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultTier,
}) => {
  const [industry, setIndustry] = useState('Restaurants & Cafes');
  const [selectedPlan, setSelectedPlan] = useState(defaultTier || 'Business Website (Starting at ₹5,999)');
  const [timeline, setTimeline] = useState('Within 7 Days');
  const [businessName, setBusinessName] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  useEffect(() => {
    if (isOpen && defaultTier) {
      setSelectedPlan(defaultTier);
    }
  }, [defaultTier, isOpen]);

  if (!isOpen) return null;

  const plans = [
    { name: 'Starter Website (Starting at ₹2,999)', desc: '1–3 Pages, Responsive, WhatsApp CTA' },
    { name: 'Business Website (Starting at ₹5,999)', desc: '5–7 Pages, Premium UI, WhatsApp & Forms' },
    { name: 'Premium Website (Starting at ₹9,999)', desc: 'Custom Sections, Animations, Priority Speed' },
    { name: 'Custom Software / AI Automation', desc: 'Bespoke workflows, WhatsApp bot, CRM tools' },
  ];

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hi YN Interactive, I would like to get a free quote for my business.\n\nBusiness Name: ${businessName || 'Not specified'}\nIndustry: ${industry}\nPackage / Requirement: ${selectedPlan}\nTarget Timeline: ${timeline}\nAdditional Details: ${specialNotes || 'None'}`;
    window.open(getWhatsAppUrl(formattedMessage), '_blank');
    onClose();
  };

  const handleLaunchEmail = () => {
    const formattedBody = `Hi Yogesh,\n\nI would like to get a free quote from YN Interactive.\n\nBusiness Name: ${businessName || 'Not specified'}\nIndustry: ${industry}\nPackage / Requirement: ${selectedPlan}\nTarget Timeline: ${timeline}\nAdditional Details: ${specialNotes || 'None'}`;
    window.location.href = getEmailUrl(
      `Free Quote Request: ${businessName || industry}`,
      formattedBody
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#090d18] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#070a13]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <h3 className="font-display font-bold text-lg text-white">
              Get a Free Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-5">
          <p className="text-xs text-slate-300 leading-relaxed">
            Select your business type and requirements. We will prepare an exact proposal and timeline for you.
          </p>

          <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
            {/* Business Name */}
            <div>
              <label htmlFor="quote-business-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                Business Name (Optional)
              </label>
              <input
                id="quote-business-name"
                type="text"
                placeholder="e.g. Royal Cafe, The Grooming Lounge, etc."
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
              />
            </div>

            {/* Industry Selector */}
            <div>
              <label htmlFor="quote-industry" className="block text-xs font-medium text-slate-300 mb-1.5">
                Your Industry / Business Type
              </label>
              <select
                id="quote-industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060913] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
              >
                {TARGET_INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Plan / Service Tier */}
            <div>
              <span className="block text-xs font-medium text-slate-300 mb-1.5">
                Select Package or Scope
              </span>
              <div className="space-y-2">
                {plans.map((p) => {
                  const isSelected = selectedPlan.toLowerCase().includes(p.name.split(' ')[0].toLowerCase());
                  return (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setSelectedPlan(p.name)}
                      className={`w-full p-2.5 rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                        isSelected
                          ? 'bg-blue-950/40 border-blue-500 text-white'
                          : 'bg-[#060913] border-white/[0.08] text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{p.name}</div>
                        <div className="text-[11px] text-slate-400">{p.desc}</div>
                      </div>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Timeline */}
            <div>
              <span className="block text-xs font-medium text-slate-300 mb-1.5">
                Desired Launch Timeline
              </span>
              <div className="grid grid-cols-3 gap-2">
                {['Immediate (3-5 Days)', 'Within 7 Days', 'Flexible / 2+ Weeks'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setTimeline(time)}
                    className={`py-2 px-1 text-[11px] font-medium rounded-md border text-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                      timeline === time
                        ? 'bg-blue-600 border-blue-400 text-white'
                        : 'bg-[#060913] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="quote-notes" className="block text-xs font-medium text-slate-300 mb-1.5">
                Specific Features or Notes
              </label>
              <textarea
                id="quote-notes"
                rows={2}
                placeholder="e.g. Need food menu with online WhatsApp orders, or appointment booking."
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#060913] border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors resize-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Send Quote Request on WhatsApp (+91 84540 16069)</span>
              </button>

              <button
                type="button"
                onClick={handleLaunchEmail}
                className="w-full py-2 px-3 text-xs font-medium text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Prefer Email? Open in Email App</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
