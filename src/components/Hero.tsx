"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system for the laser effect
    const particles: { x: number; y: number; alpha: number; size: number; life: number }[] = [];
    
    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 1; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          alpha: 1,
          size: Math.random() * 3 + 1,
          life: Math.random() * 20 + 10,
        });
      }
    };

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles (laser trail / burn effect)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--;
        p.alpha = Math.max(0, p.life / 30);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 100, 0, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 50, 0, 1)";
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      createParticles(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background canvas for the laser effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Zap className="w-4 h-4" />
          <span>La Guía Definitiva de Compras 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 tracking-tight mb-8 leading-tight"
        >
          Desata tu Creatividad con el <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            Top 10 de Grabadoras Láser
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12"
        >
          Descubre las grabadoras láser más precisas, potentes y fáciles de usar. Todas son <strong>máquinas de menos de 300 euros</strong>, opciones baratas y perfectamente adecuadas para tener en casa, ideales para empezar tu pequeño negocio o hacer manualidades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#top-10"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-orange-600 rounded-full hover:bg-orange-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_rgba(234,88,12,0.5)]"
          >
            Explorar el Top 10
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
