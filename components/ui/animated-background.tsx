'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      
      <motion.div
        className="absolute -top-1/2 left-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-radial-pattern opacity-30 dark:opacity-40" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <svg className="absolute h-full w-full">
          <pattern
            id="neural-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" className="fill-primary/20" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </motion.div>
    </div>
  );
}