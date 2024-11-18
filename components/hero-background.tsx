'use client';

import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-10 hero-pattern opacity-20" />
      <div className="absolute inset-0 -z-10 animated-grid" />
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </motion.div>
      <div className="hero-glow" />
    </>
  );
}