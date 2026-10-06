import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices with hover capability
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isPointerFine || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Track hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('button, a, input, select, textarea, [data-interactive="true"]');
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Smooth lerp loop for the trailing ring
    const render = () => {
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Central Sharp Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full pointer-events-none z-50 transition-opacity duration-200 ${
          clicked ? 'scale-75 bg-cyan-300' : 'bg-cyan-400'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing Soft Halo Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 border transition-all duration-150 ease-out ${
          hovered
            ? 'w-10 h-10 -ml-5 -mt-5 border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.35)]'
            : 'w-6 h-6 -ml-3 -mt-3 border-blue-400/40 bg-transparent'
        } ${clicked ? 'scale-90' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};
