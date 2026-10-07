import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  growth: number;
  alpha: number;
  decay: number;
  rotation: number;
  rotationSpeed: number;
  colorType: number; // 0 = cyan, 1 = purple, 2 = lavender/mint
}

export const CursorSmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;
    let moveTimeout: ReturnType<typeof setTimeout> | undefined;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Color palettes for luminous ethereal smoke
    const darkColors = [
      { r: 56, g: 189, b: 248 },  // Electric Cyan (#38bdf8)
      { r: 139, g: 92, b: 246 },  // Neon Violet (#8b5cf6)
      { r: 96, g: 165, b: 250 },  // Mint Sky (#60a5fa)
      { r: 192, g: 132, b: 252 }  // Soft Lavender (#c084fc)
    ];

    const lightColors = [
      { r: 124, g: 58, b: 237 },  // Deep Purple
      { r: 2, g: 132, b: 199 },   // Sky Blue
      { r: 100, g: 116, b: 139 }, // Atmospheric Slate
      { r: 147, g: 51, b: 234 }   // Violet Mist
    ];

    const addSmokePuff = (x: number, y: number, count = 2) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.4 + 0.4;
        const initialRadius = Math.random() * 14 + 10;

        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.5,
          vy: Math.sin(angle) * speed - (Math.random() * 0.8 + 0.4), // Gentle upward thermal drift
          radius: initialRadius,
          maxRadius: initialRadius * (Math.random() * 2.5 + 2),
          growth: Math.random() * 0.6 + 0.5,
          alpha: Math.random() * 0.35 + 0.25,
          decay: Math.random() * 0.012 + 0.01,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.04,
          colorType: Math.floor(Math.random() * darkColors.length)
        });
      }

      // Limit max active particles for smooth performance
      if (particles.length > 150) {
        particles.splice(0, particles.length - 150);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      // Calculate cursor speed/distance for dynamic smoke density
      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const dist = Math.hypot(dx, dy);

      if (dist > 3) {
        const steps = Math.min(Math.floor(dist / 8), 6);
        for (let i = 0; i <= steps; i++) {
          const interpX = lastX + (dx * i) / (steps || 1);
          const interpY = lastY + (dy * i) / (steps || 1);
          addSmokePuff(interpX, interpY, 1);
        }
      }

      lastX = currentX;
      lastY = currentY;
      isMoving = true;

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 150);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        addSmokePuff(touch.clientX, touch.clientY, 2);
        lastX = touch.clientX;
        lastY = touch.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length > 0) {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        ctx.globalCompositeOperation = isLight ? 'multiply' : 'screen';
        const activeColors = isLight ? lightColors : darkColors;

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];

          // Physics & Evolution
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.98; // Drag friction
          p.vy *= 0.98;
          p.radius += p.growth;
          p.alpha -= p.decay;
          p.rotation += p.rotationSpeed;

          if (p.alpha <= 0 || p.radius >= p.maxRadius) {
            particles.splice(i, 1);
            continue;
          }

          const c = activeColors[p.colorType % activeColors.length];

          // Draw realistic soft radial smoke vapor puff
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);

          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
          grad.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${p.alpha * 0.9})`);
          grad.addColorStop(0.35, `rgba(${c.r}, ${c.g}, ${c.b}, ${p.alpha * 0.6})`);
          grad.addColorStop(0.7, `rgba(${c.r}, ${c.g}, ${c.b}, ${p.alpha * 0.25})`);
          grad.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }

        ctx.globalCompositeOperation = 'source-over';
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      aria-hidden="true"
    />
  );
};
