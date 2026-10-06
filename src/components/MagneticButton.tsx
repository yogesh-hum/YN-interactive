import React, { useRef, useState, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'emerald' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isFinePointer = useRef(false);

  useEffect(() => {
    isFinePointer.current = window.matchMedia('(pointer: fine)').matches;
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFinePointer.current || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Subtle magnetic strength (max ~6px movement)
    const strength = 0.22;
    setOffset({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  // Base styling per variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] border border-blue-400/30';
      case 'secondary':
        return 'bg-white/[0.04] hover:bg-white/[0.09] text-slate-200 hover:text-white border border-white/10 hover:border-slate-400 shadow-lg';
      case 'emerald':
        return 'bg-emerald-950/60 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-700/50 shadow-[0_0_20px_rgba(16,185,129,0.25)]';
      case 'ghost':
        return 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10';
      default:
        return 'bg-blue-600 text-white';
    }
  };

  const transformStyle = isFinePointer.current
    ? {
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered
          ? 'transform 0.1s cubic-bezier(0.2, 0.8, 0.4, 1)'
          : 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }
    : {};

  const commonClasses = `relative inline-flex items-center justify-center gap-2 rounded-xl transition-colors duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${getVariantStyles()} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={commonClasses}
        style={transformStyle}
        aria-label={ariaLabel}
        data-interactive="true"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={commonClasses}
      style={transformStyle}
      aria-label={ariaLabel}
      data-interactive="true"
    >
      {children}
    </button>
  );
};
