import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientColors?: string[];
  speed?: number;
  blur?: number;
  children?: React.ReactNode;
}

export const AnimatedGradient = ({
  className,
  gradientColors = [
    "rgba(142, 81, 234, 0.6)",
    "rgba(107, 74, 255, 0.6)",
    "rgba(191, 60, 255, 0.6)",
    "rgba(142, 81, 234, 0.6)",
  ],
  speed = 4,
  blur = 70,
  children,
  ...props
}: AnimatedGradientProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const gradientRef = useRef<CanvasGradient | null>(null);
  const animationFrameRef = useRef<number>(0);
  const mousePosition = useRef({ x: 0, y: 0 });
  const gradientAngle = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    contextRef.current = context;

    const resizeCanvas = () => {
      if (canvas && context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!canvas || !context) return;

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update gradient angle
      gradientAngle.current += 0.002 * speed;
      if (gradientAngle.current >= 2 * Math.PI) {
        gradientAngle.current = 0;
      }

      // Calculate gradient coordinates
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.max(canvas.width, canvas.height) * 0.8;

      const x1 = centerX + Math.cos(gradientAngle.current) * radius;
      const y1 = centerY + Math.sin(gradientAngle.current) * radius;
      const x2 = centerX + Math.cos(gradientAngle.current + Math.PI) * radius;
      const y2 = centerY + Math.sin(gradientAngle.current + Math.PI) * radius;

      // Create gradient
      const gradient = context.createLinearGradient(x1, y1, x2, y2);
      gradientColors.forEach((color, index) => {
        gradient.addColorStop(index / (gradientColors.length - 1), color);
      });

      // Draw gradient
      context.fillStyle = gradient;
      context.filter = `blur(${blur}px)`;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.filter = "none";

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [gradientColors, speed, blur]);

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      {children}
    </div>
  );
};