import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export const AmbientBackground: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -500, y: -500 });
  const currentPos = useRef({ x: -500, y: -500 });
  const rafId = useRef<number | null>(null);

  // Particles: strictly desktop only, minimal count (~14) to protect battery and 60fps
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isFine && !reducedMotion) {
      setIsDesktop(true);

      // Generate 14 subtle particles with varied CSS animation parameters
      const initialParticles: Particle[] = Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: (i * 7 + 4) % 96,
        y: (i * 13 + 7) % 94,
        size: (i % 3 === 0 ? 2.5 : i % 2 === 0 ? 2 : 1.5),
        opacity: 0.15 + (i % 4) * 0.06,
        duration: 14 + (i % 6) * 2.5,
        delay: (i % 5) * 1.2,
      }));
      setParticles(initialParticles);

      const handleMouseMove = (e: MouseEvent) => {
        targetPos.current.x = e.clientX;
        targetPos.current.y = e.clientY;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      // Smooth lerp loop for the mouse-reactive ambient light
      const updateMouseGlow = () => {
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08;

        if (mouseGlowRef.current) {
          mouseGlowRef.current.style.transform = `translate3d(${currentPos.current.x - 200}px, ${currentPos.current.y - 200}px, 0)`;
        }

        rafId.current = requestAnimationFrame(updateMouseGlow);
      };

      rafId.current = requestAnimationFrame(updateMouseGlow);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (rafId.current) cancelAnimationFrame(rafId.current);
      };
    } else {
      setIsDesktop(false);
      setParticles([]);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Layer A: Extremely Soft Drifting Ambient Orbs (3 light sources with ultra-slow movement) */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-blue-600/[0.09] blur-[160px] animate-orb-1 will-change-transform pointer-events-none"
        style={{ transformOrigin: 'center center' }}
      />
      <div
        className="absolute top-1/3 -right-24 w-[580px] h-[580px] rounded-full bg-cyan-500/[0.07] blur-[150px] animate-orb-2 will-change-transform pointer-events-none"
        style={{ transformOrigin: 'center center' }}
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[620px] h-[620px] rounded-full bg-indigo-600/[0.08] blur-[170px] animate-orb-3 will-change-transform pointer-events-none"
        style={{ transformOrigin: 'center center' }}
      />

      {/* Layer B: Animated Technical Grid with smooth mask falloff */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.035] animate-grid-drift pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 35%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 35%, transparent 85%)',
        }}
      />

      {/* Layer C: Floating Particles (Desktop only, strictly ~14 subtle dots with CSS float) */}
      {isDesktop &&
        particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-cyan-300 pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: '0 0 6px rgba(6, 182, 212, 0.4)',
              animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            }}
          />
        ))}

      {/* Layer D: Soft Interactive Radial Light (Desktop only, ultra-subtle) */}
      {isDesktop && (
        <div
          ref={mouseGlowRef}
          className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-400/[0.035] blur-[120px] pointer-events-none will-change-transform"
        />
      )}

      {/* Layer E: Thin Technical Circuit Traces in Top-Right and Bottom-Left */}
      <svg
        className="absolute top-0 right-0 w-80 h-80 opacity-[0.045] text-cyan-400 pointer-events-none hidden md:block"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M400 50 H 280 L 220 110 V 240 L 160 300 H 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <circle cx="280" cy="50" r="3" fill="currentColor" />
        <circle cx="220" cy="110" r="3" fill="currentColor" />
        <circle cx="160" cy="300" r="3" fill="currentColor" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.04] text-blue-400 pointer-events-none hidden md:block"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 350 H 120 L 180 290 V 160 L 240 100 H 400"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <circle cx="120" cy="350" r="3" fill="currentColor" />
        <circle cx="180" cy="290" r="3" fill="currentColor" />
        <circle cx="240" cy="100" r="3" fill="currentColor" />
      </svg>
    </div>
  );
};
