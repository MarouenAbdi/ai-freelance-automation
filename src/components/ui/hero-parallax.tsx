import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroParallax = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden bg-background",
        className
      )}
    >
      <ParallaxSection scrollYProgress={scrollYProgress} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const ParallaxSection = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  const circle1X = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const circle1Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const circle2X = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const circle2Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  const circle3X = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const circle3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <>
      {/* Background gradient */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/80 to-background z-20" />
        
        {/* Animated circles */}
        <motion.div
          style={{
            x: circle1X,
            y: circle1Y,
          }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"
        />
        
        <motion.div
          style={{
            x: circle2X,
            y: circle2Y,
          }}
          className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/30 blur-[120px]"
        />
        
        <motion.div
          style={{
            x: circle3X,
            y: circle3Y,
          }}
          className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-primary/30 blur-[120px]"
        />
      </motion.div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 z-[1] opacity-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
    </>
  );
};

export const HeroHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};