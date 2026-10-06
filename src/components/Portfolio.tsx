import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Eye, MessageSquare, Sparkles, Monitor, Smartphone, ArrowRight } from 'lucide-react';
import { DEMO_PROJECTS, getWhatsAppUrl } from '../data/content.ts';
import { DemoProject } from '../types.ts';
import { ProjectDemoModal } from './ProjectDemoModal.tsx';

// 3D Tilt Mockup Card Sub-component
const TiltProjectCard: React.FC<{
  project: DemoProject;
  onOpenDemo: (project: DemoProject) => void;
}> = ({ project, onOpenDemo }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isFinePointer = useRef(false);

  useEffect(() => {
    isFinePointer.current = window.matchMedia('(pointer: fine)').matches;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFinePointer.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxTilt = 4;
    setTilt({
      x: -(y / (rect.height / 2)) * maxTilt,
      y: (x / (rect.width / 2)) * maxTilt,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-[#090d18] border border-white/[0.08] hover:border-cyan-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 preserve-3d"
      style={{
        transform: isFinePointer.current
          ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? '10px' : '0px'})`
          : undefined,
        boxShadow: isHovered
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px -10px rgba(6, 182, 212, 0.25)'
          : '0 10px 30px -15px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div>
        {/* Browser / Device Shell Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#060912] border-b border-white/[0.07]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="truncate max-w-[150px]">{project.id}.demo-yn.app</span>
          </div>
          <Monitor className="w-3.5 h-3.5 text-slate-500" />
        </div>

        {/* Visual Mockup Container with Screen Reflection */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={`${project.title} - Digital solution prototype`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent opacity-70" />

          {/* Mandatory Transparent Concept Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 text-[11px] font-mono font-medium tracking-wide text-cyan-300 bg-black/85 backdrop-blur-md border border-cyan-500/40 rounded-md shadow-md">
              Concept / Demo Project
            </span>
          </div>

          {/* Interactive Hover Overlay with Demo Trigger */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              type="button"
              onClick={() => onOpenDemo(project)}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              data-interactive="true"
            >
              <Eye className="w-4 h-4" />
              <span>Explore Interactive Demo</span>
            </button>
          </div>
        </div>

        {/* Card Text Content */}
        <div className="p-6 space-y-3">
          <div className="text-xs font-semibold text-blue-400 tracking-wide uppercase font-mono">
            {project.category}
          </div>

          <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom Card Footer Actions */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-white/[0.06] mt-auto">
        <button
          type="button"
          onClick={() => onOpenDemo(project)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-blue-600 hover:text-white border border-white/10 hover:border-blue-500 text-xs font-semibold text-slate-200 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          data-interactive="true"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Demo</span>
        </button>

        <a
          href={getWhatsAppUrl(`Hi YN Interactive, I saw your ${project.title} concept and would like to build something similar for my business.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          data-interactive="true"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </a>
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<DemoProject | null>(null);

  return (
    <section id="work" className="relative py-28 bg-[#07090e] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/8 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/8 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore our website concepts and digital experiences.
          </p>
          <div className="text-xs text-slate-400 bg-white/[0.02] border border-white/[0.06] py-1.5 px-4 rounded-full inline-block">
            Transparently presented as functional concepts designed for local business archetypes.
          </div>
        </div>

        {/* 3 Polished 3D Showcase Mockup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_PROJECTS.map((project) => (
            <TiltProjectCard
              key={project.id}
              project={project}
              onOpenDemo={(p) => setSelectedDemo(p)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Project Demo Modal */}
      <ProjectDemoModal
        project={selectedDemo}
        onClose={() => setSelectedDemo(null)}
      />
    </section>
  );
};
