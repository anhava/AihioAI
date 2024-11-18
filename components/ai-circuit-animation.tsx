'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function AICircuitAnimation() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"
      />

      <svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10"
        style={{
          filter: `drop-shadow(0 0 10px ${theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'})`
        }}
      >
        {/* Central brain structure */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          variants={circleVariants}
          initial="initial"
          animate="animate"
          className="text-primary"
        />

        {/* Pulsing inner circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="text-primary/50"
        />

        {/* Circuit lines */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={angle} transform={`rotate(${angle} 200 200)`}>
            <motion.path
              d={`M 200 120 L 200 80 M 200 80 L ${180 + (i % 2) * 40} 60`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              variants={lineVariants}
              initial="initial"
              animate="animate"
              className="text-primary"
            />
            <motion.circle
              cx={180 + (i % 2) * 40}
              cy="60"
              r="4"
              variants={circleVariants}
              initial="initial"
              animate="animate"
              className="fill-primary"
            />
          </g>
        ))}

        {/* Data flow particles */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <motion.circle
            key={`particle-${angle}`}
            cx="200"
            cy="120"
            r="2"
            className="fill-primary"
            animate={{
              cx: [200, 180 + (angle % 90 === 0 ? 40 : 0)],
              cy: [120, 60],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: angle / 360,
              ease: "linear"
            }}
          />
        ))}
      </svg>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50 blur-3xl" />
      <div className="absolute inset-0 animated-grid opacity-10" />
    </div>
  );
}