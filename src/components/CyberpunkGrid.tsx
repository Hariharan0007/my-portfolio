import React, { useEffect, useRef, useState } from "react";
import { colors } from "../utils/Constants";

interface CyberpunkGridProps {
  className?: string;
}

const CyberpunkGrid: React.FC<CyberpunkGridProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);
  const [enableXAxisGlow, setEnableXAxisGlow] = useState(false);

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

      const gridSize = 60;
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Calculate breathing animation position (0 to 1, top to bottom)
      const breathingProgress = (timeRef.current * 0.001) % 1; // 0 to 1, loops continuously (much slower)
      const breathingY = breathingProgress * height;

      // Calculate breathing intensity (0 to 1) - smoother pulsing
      const breathingIntensity = Math.sin(timeRef.current * 0.002) * 0.5 + 0.5; // 0 to 1

      // Base blue color
      const baseBlue = colors.cyberpunk_grid;

      // Draw vertical lines (no glow effect)
      for (let x = 0; x <= width; x += gridSize) {
        ctx.strokeStyle = baseBlue;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.4;
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        // Calculate if this line should be shining based on breathing position
        const shouldShine =
          enableXAxisGlow && Math.abs(y - breathingY) < height * 0.05; // Shine near breathing position

        // Set line properties
        ctx.strokeStyle = baseBlue;
        ctx.lineWidth = shouldShine ? 1.5 : 0.5;
        ctx.globalAlpha = shouldShine ? 0.9 : 0.4;

        // Add glow effect for shining lines (only if enabled)
        if (shouldShine) {
          ctx.shadowColor = baseBlue;
          ctx.shadowBlur = 8;
        } else {
          ctx.shadowBlur = 0;
        }

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
      timeRef.current += 1;
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
  }, [enableXAxisGlow]);

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
