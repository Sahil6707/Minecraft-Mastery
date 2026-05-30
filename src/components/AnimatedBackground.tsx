import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number; // percentage width
  y: number; // percentage height
  size: number; // pixel size
  colorType: 'emerald' | 'cyan' | 'glow';
  delay: number; // animation delay in seconds
  duration: number; // animation duration in seconds
  drift: number; // drifting horizontal offset
}

export default function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Initialize a stable set of performance-optimized Minecraft-inspired particles
  useEffect(() => {
    const types: ('emerald' | 'cyan' | 'glow')[] = ['emerald', 'cyan', 'glow'];
    const pCount = 16; // Kept lower for elite performance and absolute clarity
    const generated: Particle[] = Array.from({ length: pCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 80 + Math.random() * 20, // Start lower down
      size: Math.floor(Math.random() * 8) + 4, // 4px to 12px perfect block-sizes
      colorType: types[i % types.length],
      delay: Math.random() * -25, // Pre-distributed
      duration: 20 + Math.random() * 15, // Ultra-slow drifting timing (20-35s)
      drift: (Math.random() - 0.5) * 40, // Horizontal wave drift
    }));
    setParticles(generated);
  }, []);

  // Ultra-subtle high-performance parallax effect (Direct DOM updates to bypass re-renders entirely)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 65; // Divided by 65 for subtle, premium parity
      const y = (clientY - window.innerHeight / 2) / 65;
      bgRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Absolute Dark Slate (#0F172A) Background in Dark Mode / Soft modern gray-blue in Light Mode */}
      <div className="absolute inset-0 bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-500" />

      {/* Parallax dynamic target panel */}
      <div ref={bgRef} className="absolute inset-0 transition-transform duration-700 ease-out">
        
        {/* === MINECRAFT AURORA WAVES === */}
        {/* Aurora Wave 1: Emerald Light Flow */}
        <div 
          className="absolute -top-32 -left-32 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.07),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_70%)] pointer-events-none mix-blend-screen"
          style={{
            animation: 'auroraSlow1 28s ease-in-out infinite alternate'
          }}
        />

        {/* Aurora Wave 2: Cyan Magic Flow */}
        <div 
          className="absolute bottom-10 right-10 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.11),transparent_70%)] pointer-events-none mix-blend-screen"
          style={{
            animation: 'auroraSlow2 34s ease-in-out infinite alternate'
          }}
        />

        {/* Aurora Wave 3: Deep Green/Slate Middle Flow */}
        <div 
          className="absolute top-[25%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(21,128,61,0.04),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(21,128,61,0.08),transparent_65%)] pointer-events-none mix-blend-screen"
          style={{
            animation: 'auroraSlow3 40s ease-in-out infinite alternate-reverse'
          }}
        />

        {/* === ATMOSPHERIC PARTICLES === */}
        {particles.map((p) => {
          let styleClass = '';
          switch (p.colorType) {
            case 'emerald':
              // Soft emerald particle block
              styleClass = 'bg-emerald-500/15 dark:bg-emerald-400/12 shadow-[0_0_6px_rgba(34,197,94,0.2)] border border-emerald-500/10';
              break;
            case 'cyan':
              // Soft cyan magic block
              styleClass = 'bg-cyan-500/15 dark:bg-cyan-400/12 shadow-[0_0_6px_rgba(6,182,212,0.2)] border border-cyan-500/10';
              break;
            case 'glow':
              // Subtle experience glow orbs/pixels
              styleClass = 'bg-teal-400/15 dark:bg-emerald-300/10 shadow-[0_0_8px_rgba(52,211,153,0.25)]';
              break;
          }

          return (
            <div
              key={p.id}
              className={`absolute rounded-none transition-all ${styleClass}`}
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.x}%`,
                animationName: 'floatParticleUp',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                '--drift': `${p.drift}px`,
                opacity: 0.15 + (p.size / 12) * 0.4,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
    </div>
  );
}
