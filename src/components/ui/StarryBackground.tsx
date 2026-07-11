import React, { useEffect, useRef } from 'react';

export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Define three layers for parallax
    interface Star {
      x: number;
      y: number;
      radius: number;
      speed: number;
      alpha: number;
      colorVar: string;
      twinkleSpeed: number;
      twinkleDir: number;
    }
    
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      active: boolean;
    }
    
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    const getCssVar = (name: string) => {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000); // Dense starfield
      
      for (let i = 0; i < numStars; i++) {
        // 3 layers of depth: close (fast, big), mid (medium), far (slow, small)
        const layer = Math.random();
        let radius = 0;
        let speed = 0;
        
        if (layer > 0.9) {
          radius = Math.random() * 1.5 + 1; // Close
          speed = Math.random() * 0.3 + 0.2;
        } else if (layer > 0.5) {
          radius = Math.random() * 0.8 + 0.5; // Mid
          speed = Math.random() * 0.15 + 0.05;
        } else {
          radius = Math.random() * 0.4 + 0.1; // Far
          speed = Math.random() * 0.05 + 0.01;
        }

        // Color selection
        const colorType = Math.random();
        let colorVar = '--color-primary';
        if (colorType > 0.8) colorVar = '--color-secondary';
        else if (colorType > 0.95) colorVar = 'white'; // Some white stars for realism

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          speed: speed,
          alpha: Math.random(),
          colorVar: colorVar,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleDir: Math.random() > 0.5 ? 1 : -1
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const primaryColor = getCssVar('--color-primary').replace(/ /g, ', ');
      const secondaryColor = getCssVar('--color-secondary').replace(/ /g, ', ');

      stars.forEach(star => {
        // Move star (Parallax drifting upwards and slightly left)
        star.y -= star.speed;
        star.x -= star.speed * 0.2;

        // Wrap around screen
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }

        // Twinkle effect
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha > 1) {
          star.alpha = 1;
          star.twinkleDir = -1;
        } else if (star.alpha < 0.2) {
          star.alpha = 0.2;
          star.twinkleDir = 1;
        }

        // Determine color
        let rgb = '255, 255, 255';
        if (star.colorVar === '--color-primary') rgb = primaryColor;
        else if (star.colorVar === '--color-secondary') rgb = secondaryColor;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Add a subtle glow to larger stars
        if (star.radius > 1) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${rgb}, ${star.alpha})`;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fillStyle = `rgba(${rgb}, ${star.alpha})`;
        ctx.fill();
      });

      // Shooting Stars Logic
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        if (star.active) {
          star.x -= star.speed;
          star.y += star.speed * 0.4; // Slightly shallower angle
          star.opacity -= 0.005; // Fade slower to make them travel further

          if (star.opacity <= 0 || star.x < -100 || star.y > canvas.height + 100) {
            shootingStars.splice(i, 1);
          } else {
            // Draw shooting star
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(
              star.x, star.y, 
              star.x + star.length, star.y - star.length * 0.4
            );
            // Bright white head, fading tail
            gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
            gradient.addColorStop(0.1, `rgba(255, 255, 255, ${star.opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
            
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x + star.length, star.y - star.length * 0.4);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.random() * 1.5 + 0.5; // Flicker the thickness slightly
            ctx.stroke();
            
            // Draw bright head
            ctx.beginPath();
            ctx.arc(star.x, star.y, Math.random() * 1.5 + 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
          }
        }
      }

      // Randomly spawn new shooting stars (more frequent, about 3% chance per frame, max 5 at a time)
      if (shootingStars.length < 5 && Math.random() < 0.03) {
        shootingStars.push({
          x: Math.random() * canvas.width + canvas.width * 0.5, // Start further right offscreen
          y: Math.random() * (canvas.height * 0.5) - 100, // Start higher up
          length: Math.random() * 120 + 60, // Medium tails for medium speed
          speed: Math.random() * 3 + 5, // Medium speed, faster than drifting but slower than originally
          opacity: 1,
          active: true
        });
      }

      animationFrameId = requestAnimationFrame(drawStars);
    };

    window.addEventListener('resize', resize);
    resize();
    drawStars();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[-1] opacity-90 transition-opacity duration-1000 bg-background"
    />
  );
};
