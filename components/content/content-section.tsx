'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function ContentSection({
  children,
  className,
  title,
  description,
}: ContentSectionProps) {
  return (
    <section className={cn("space-y-6", className)}>
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          {title && (
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground">
              {description}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}