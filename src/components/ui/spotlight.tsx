import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: number;
}

export function Spotlight({
  children,
  className,
  size = 500,
  ...props
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const containerSize = useRef({ w: 0, h: 0 });
  const [visible, setVisible] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mousePosition.current.x = clientX - rect.left;
      mousePosition.current.y = clientY - rect.top;
    }
  };

  const onMouseEnter = () => {
    setVisible(true);
  };

  const onMouseLeave = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    containerSize.current.w = rect.width;
    containerSize.current.h = rect.height;

    let animationFrame: number;
    const animate = () => {
      // Ease the mouse position
      mouse.current.x += (mousePosition.current.x - mouse.current.x) * 0.1;
      mouse.current.y += (mousePosition.current.y - mouse.current.y) * 0.1;

      if (containerRef.current) {
        const spotlight = containerRef.current.querySelector("[data-spotlight]") as HTMLElement;
        if (spotlight) {
          spotlight.style.setProperty("--x", `${mouse.current.x}px`);
          spotlight.style.setProperty("--y", `${mouse.current.y}px`);
          spotlight.style.setProperty("opacity", visible ? "1" : "0");
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        containerSize.current.w = rect.width;
        containerSize.current.h = rect.height;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [visible]);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {children}
      <div
        data-spotlight
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: 0,
          background: `radial-gradient(circle ${size}px at var(--x) var(--y), rgba(142, 81, 234, 0.15), transparent 80%)`,
        }}
      />
    </div>
  );
}