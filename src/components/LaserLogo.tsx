"use client";

import { useEffect, useRef } from "react";
import { Zap } from "lucide-react";

export function LaserLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Small local canvas size
    const width = 60;
    const height = 60;
    canvas.width = width;
    canvas.height = height;
    
    const particles: { x: number; y: number; alpha: number; size: number; life: number; vx: number; vy: number }[] = [];
    
    const createParticles = () => {
      // Create fewer particles, spawned near the center
      if (Math.random() > 0.5) {
        particles.push({
          x: width / 2 + (Math.random() - 0.5) * 10,
          y: height / 2 + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5, // Slight upward drift
          alpha: 1,
          size: Math.random() * 2 + 0.5,
          life: Math.random() * 15 + 10,
        });
      }
    };

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      createParticles();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--;
        p.alpha = Math.max(0, p.life / 25);
        p.x += p.vx;
        p.y += p.vy;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 100, 0, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 50, 0, 1)";
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-8 h-8 mr-2">
      {/* Background canvas for the particles */}
      <canvas
        ref={canvasRef}
        className="absolute z-0 pointer-events-none scale-150"
        style={{ width: "60px", height: "60px" }}
      />
      {/* Logo Icon */}
      <Zap className="relative z-10 w-6 h-6 text-orange-500 fill-orange-500" />
    </div>
  );
}
