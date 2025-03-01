import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  duration = 0.5,
  as: Component = 'div',
  style,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <Component className={cn('', className)}>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap"
        style={style}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="mr-1 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Component>
  );
};
