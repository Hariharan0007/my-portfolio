import React, { useEffect, useRef } from "react";
import { colors } from "../utils/Constants";

interface CyberpunkGridProps {
  className?: string;
}

const CyberpunkGrid: React.FC<CyberpunkGridProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const gradientPosition = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      if (!ctx) return;

      const gridSize = 500; // Small gaps between grid lines
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient for the grid lines with blue cyberpunk theme
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, colors.cyberpunk_grid);
      gradient.addColorStop(0.2, colors.cyberpunk_silver);
      gradient.addColorStop(0.4, colors.cyberpunk_light_blue);
      gradient.addColorStop(0.6, colors.cyberpunk_cyan);
      gradient.addColorStop(0.8, colors.cyberpunk_electric);
      gradient.addColorStop(1, colors.cyberpunk_accent);

      // Apply gradient offset for animation
      const gradientOffset = (gradientPosition.current * 0.005) % 1;
      const animatedGradient = ctx.createLinearGradient(
        0,
        gradientOffset * height,
        0,
        height + gradientOffset * height
      );
      animatedGradient.addColorStop(0, colors.cyberpunk_grid);
      animatedGradient.addColorStop(0.2, colors.cyberpunk_silver);
      animatedGradient.addColorStop(0.4, colors.cyberpunk_light_blue);
      animatedGradient.addColorStop(0.6, colors.cyberpunk_cyan);
      animatedGradient.addColorStop(0.8, colors.cyberpunk_electric);
      animatedGradient.addColorStop(1, colors.cyberpunk_accent);

      ctx.strokeStyle = animatedGradient;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.6;

      // Draw vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Add enhanced glowing effect to the grid
      ctx.shadowColor = colors.cyberpunk_glow;
      ctx.shadowBlur = 3;
      ctx.globalAlpha = 0.4;

      // Redraw with glow effect
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Reset shadow and alpha
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      gradientPosition.current += 1;
      drawGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colors.cyberpunk_primary} 0%, ${colors.cyberpunk_secondary} 50%, ${colors.cyberpunk_primary} 100%)`,
      }}
    />
  );
};

export default CyberpunkGrid;
