'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
  pattern?: 'grid' | 'dots' | 'waves';
  interactive?: boolean;
}

export function PageBackground({
  children,
  className,
  pattern = 'grid',
  interactive = true,
}: PageBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!interactive || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      containerRef.current!.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current!.style.setProperty('--mouse-y', `${y}%`);
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    return () => containerRef.current?.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative min-h-screen overflow-hidden',
        interactive && 'gradient-bg',
        className
      )}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={cn(
          'absolute inset-0',
          pattern === 'grid' && 'animated-grid',
          pattern === 'dots' && 'animated-dots',
          pattern === 'waves' && 'animated-waves'
        )} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </motion.div>

      {children}
    </div>
  );
}