'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroContent } from '@/components/hero-content';
import { FloatingElements } from '@/components/floating-elements';
import { AICircuitAnimation } from '@/components/ai-circuit-animation';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-background"
      aria-label="Hero section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 animated-grid opacity-10" />
        <FloatingElements />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="container relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-screen-2xl items-center px-4 py-20 lg:px-8"
      >
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 xl:gap-16">
          <div className="relative z-10">
            <HeroContent />
          </div>

          <div className="relative hidden lg:block" aria-hidden="true">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square w-full max-w-xl"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-2xl" />
              <AICircuitAnimation />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" 
        aria-hidden="true"
      />
    </section>
  );
}