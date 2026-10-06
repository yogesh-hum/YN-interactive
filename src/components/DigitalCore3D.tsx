import React, { useRef, useState, useEffect } from 'react';
import { Globe, Code2, Bot, Cpu, Sparkles, Activity, Shield, Terminal } from 'lucide-react';

export const DigitalCore3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsDesktop(isFine && !reducedMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 3D tilt: max ~12 degrees
    const maxAngle = 10;
    const rotY = (x / (rect.width / 2)) * maxAngle;
    const rotX = -(y / (rect.height / 2)) * maxAngle;

    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] h-[440px] sm:h-[480px] mx-auto perspective-1500 flex items-center justify-center select-none"
    >
      {/* Ambient background glow radiating from the core */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-600/20 blur-[100px] pointer-events-none animate-glow-pulse" />
      <div className="absolute w-56 h-56 rounded-full bg-cyan-400/15 blur-[80px] pointer-events-none" />

      {/* Main 3D Container with smoothed tilt */}
      <div
        className="relative w-full h-full preserve-3d flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: isDesktop
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : 'rotateX(0deg) rotateY(0deg)',
        }}
      >
        {/* Layer 0: Concentric Orbital Rings (Background Plane) */}
        <div
          className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full border border-blue-500/15 animate-orbit pointer-events-none"
          style={{ transform: 'translateZ(-40px)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]" />
        </div>
        <div
          className="absolute w-[280px] h-[280px] sm:w-[310px] sm:h-[310px] rounded-full border border-dashed border-cyan-500/20 animate-orbit-reverse pointer-events-none"
          style={{ transform: 'translateZ(-20px)' }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#06b6d4]" />
        </div>

        {/* Layer 1: Core Central Hologram Unit */}
        <div
          className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-[#0c152b]/90 via-[#070b16]/95 to-[#050811] border border-blue-500/40 shadow-[0_0_50px_rgba(37,99,235,0.25)] flex flex-col items-center justify-center p-4 backdrop-blur-xl preserve-3d animate-float-slow"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Internal Cyan Energy Core */}
          <div className="relative w-16 h-16 rounded-xl bg-blue-950/80 border border-cyan-400/60 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.5)] mb-3 group">
            <div className="absolute inset-0 rounded-xl bg-cyan-400/10 animate-ping" />
            <Cpu className="w-8 h-8 text-cyan-300 relative z-10 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <div className="font-display font-extrabold text-white text-base tracking-wide text-center">
            DIGITAL CORE
          </div>
          <div className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase mt-0.5">
            DESIGN · BUILD · LAUNCH
          </div>

          {/* Process & Solutions Strip */}
          <div className="mt-3 w-full pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-300">
            <span className="flex items-center gap-1 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              SOLUTIONS
            </span>
            <span className="text-slate-400">WEB · SOFTWARE · AI</span>
          </div>
        </div>

        {/* Layer 2: Floating Satellite Fragment — WEB */}
        <div
          className="absolute -top-2 left-0 sm:left-4 p-3 rounded-xl bg-[#090e1c]/90 border border-blue-500/30 backdrop-blur-md shadow-xl text-left preserve-3d transition-transform duration-300 pointer-events-none"
          style={{
            transform: isDesktop
              ? `translateZ(60px) translate(${rotation.y * -0.8}px, ${rotation.x * 0.8}px)`
              : 'translateZ(40px)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-md bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">WEB SYSTEM</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 leading-tight">
            Responsive · Fast Load · SEO Ready
          </div>
        </div>

        {/* Layer 3: Floating Satellite Fragment — SOFTWARE */}
        <div
          className="absolute -bottom-3 left-2 sm:left-6 p-3 rounded-xl bg-[#090e1c]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl text-left preserve-3d transition-transform duration-300 pointer-events-none"
          style={{
            transform: isDesktop
              ? `translateZ(70px) translate(${rotation.y * -0.6}px, ${rotation.x * 0.6}px)`
              : 'translateZ(50px)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-md bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">SOFTWARE</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 leading-tight">
            Custom Logic · Workflows · Scalable
          </div>
        </div>

        {/* Layer 4: Floating Satellite Fragment — AI AUTOMATION */}
        <div
          className="absolute top-4 right-0 sm:right-2 p-3 rounded-xl bg-[#090e1c]/90 border border-indigo-500/30 backdrop-blur-md shadow-xl text-left preserve-3d transition-transform duration-300 pointer-events-none"
          style={{
            transform: isDesktop
              ? `translateZ(80px) translate(${rotation.y * -1.2}px, ${rotation.x * 1.2}px)`
              : 'translateZ(60px)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-md bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">AI AUTOMATION</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 leading-tight">
            WhatsApp Routing · Automated Triage
          </div>
        </div>

        {/* Layer 5: Floating Satellite Fragment — DIGITAL SOLUTIONS */}
        <div
          className="absolute -bottom-1 right-2 sm:right-4 p-3 rounded-xl bg-[#090e1c]/90 border border-emerald-500/30 backdrop-blur-md shadow-xl text-left preserve-3d transition-transform duration-300 pointer-events-none"
          style={{
            transform: isDesktop
              ? `translateZ(55px) translate(${rotation.y * -0.7}px, ${rotation.x * 0.7}px)`
              : 'translateZ(35px)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-md bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">SOLUTIONS</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 leading-tight">
            Ideas to Real Solutions · High Impact
          </div>
        </div>
      </div>
    </div>
  );
};
