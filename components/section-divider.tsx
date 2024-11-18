'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
  type?: 'wave' | 'dots' | 'gradient';
  className?: string;
}

export function SectionDivider({ type = 'wave', className }: SectionDividerProps) {
  if (type === 'wave') {
    return (
      <div className={cn('relative h-24 -mt-12 -mb-12', className)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black)]"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 32L48 37.3C96 43 192 53 288 58.7C384 64 480 64 576 58.7C672 53 768 43 864 42.7C960 43 1056 53 1152 58.7C1248 64 1344 64 1392 64H1440V96H0V32Z"
              className="fill-background"
            />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={cn('relative h-24 -mt-12 -mb-12', className)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_1px_at_center,var(--primary)_1px,transparent_1px)] opacity-20 [background-size:24px_24px]"
        />
      </div>
    );
  }

  return (
    <div className={cn('relative h-24 -mt-12 -mb-12', className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
      />
    </div>
  );
}