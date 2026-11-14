import React, { useState, useRef, useEffect } from 'react';
import {
  Globe,
  ShoppingBag,
  Layers,
  Code2,
  Bot,
  Cpu,
  ArrowRight,
  Check,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/content.ts';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

// 3D Tilt Card Sub-component
const TiltServiceCard: React.FC<{
  service: (typeof SERVICES)[0];
  onSelectService: (serviceName: string) => void;
  getIcon: (name: string) => React.ReactNode;
}> = ({ service, onSelectService, getIcon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    setIsFinePointer(window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFinePointer || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMouseCoord({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max tilt ±4 degrees (subtle and high-end)
    const maxTilt = 4;
    const rotX = -((y - centerY) / centerY) * maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#090d18]/90 border border-white/[0.08] hover:border-blue-500/50 transition-all duration-300 preserve-3d overflow-hidden"
      style={{
        transform: isFinePointer
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? '8px' : '0px'})`
          : undefined,
        boxShadow: isHovered
          ? '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(37, 99, 235, 0.25)'
          : '0 10px 25px -10px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Subtle localized radial glow tracking mouse inside card */}
      {isHovered && isFinePointer && (
        <div
          className="absolute pointer-events-none rounded-full blur-2xl transition-opacity duration-200"
          style={{
            width: '180px',
            height: '180px',
            left: `${mouseCoord.x - 90}px`,
            top: `${mouseCoord.y - 90}px`,
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, transparent 70%)',
          }}
        />
      )}

      <div className="relative z-10">
        {/* Header: Advanced Line Icon with Circular Depth */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:border-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
            {getIcon(service.iconName)}
          </div>
          {service.badge && (
            <span className="text-xs font-mono font-medium text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.07]">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-display text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Deliverables Bullet List */}
        <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelectService(service.title)}
          className="text-xs font-semibold text-blue-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded py-1"
          data-interactive="true"
        >
          <span>Request Proposal</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href={getWhatsAppUrl(`Hi YN Interactive, I'm interested in discussing ${service.title} for my business.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-950/40 border border-transparent hover:border-emerald-700/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          title="Ask on WhatsApp"
          aria-label={`Inquire about ${service.title} on WhatsApp`}
          data-interactive="true"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Code':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      default:
        return <Globe className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#07090e] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle animated background layer behind services */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/8 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-cyan-500/8 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SOLUTIONS &amp; CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            Solutions Built for Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From professional websites to custom software and AI automation, we build practical
            digital solutions designed around your business.
          </p>
        </div>

        {/* 6 Premium 3D Tilt Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <TiltServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              getIcon={getIcon}
            />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-7 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900/40 to-blue-950/30 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-semibold text-white text-base">Need a custom feature or hybrid setup?</h4>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              We engineer specialized workflows combining websites, databases, and automated WhatsApp alert triggers.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Custom Solutions')}
            className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            data-interactive="true"
          >
            Discuss Custom Scope
          </button>
        </div>
      </div>
    </section>
  );
};
