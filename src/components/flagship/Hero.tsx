import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let particles: Particle[] = [];
    let mouse = { x: null as number | null, y: null as number | null };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#D000FF';
        ctx.fill();
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = [];
      const particleCount = Math.floor((width * height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(208, 0, 255, ${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dxMouse = p1.x - mouse.x;
          const dyMouse = p1.y - mouse.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distMouse / 150})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', init);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="absolute top-12 left-12 font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase z-10 hidden lg:block">
        RAREWARE_STUDIO // DIGITAL_FLAGSHIP_V3
      </div>
      <div className="absolute top-12 right-12 font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase z-10 hidden lg:block">
        EST_2024 // NEXUS_ONLINE
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <span className="inline-block font-mono text-xs tracking-[0.4em] text-[#D000FF] mb-6 uppercase">
          Alpha Version // Digital Monolith
        </span>
        <h1 className="text-[clamp(3rem,12vw,8rem)] font-extrabold leading-[0.85] tracking-[-0.05em] uppercase mb-8">
          RAREWARE<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>STUDIO</span>
        </h1>
        <p className="max-w-xl mx-auto text-white/50 text-base md:text-lg font-light leading-relaxed mb-10">
          We engineer unfair advantages. High-density digital architectures for a post-human landscape of pure interaction and absolute performance.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#D000FF] text-white px-8 py-4 font-mono text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(208,0,255,0.4)] transition-all duration-300">
            Initiate Protocol
          </button>
          <button className="border border-white/20 text-white px-8 py-4 font-mono text-xs tracking-widest uppercase hover:border-[#D000FF] hover:text-[#D000FF] transition-all duration-300">
            View Archives
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-12 font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase z-10 hidden lg:block">
        COORD: 34.0522° N, 118.2437° W
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase z-10 hidden lg:block">
        ENCRYPTION: AES-256
      </div>
    </section>
  );
};
