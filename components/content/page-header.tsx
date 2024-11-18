'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  image?: string;
}

export function PageHeader({ title, description, children, image }: PageHeaderProps) {
  const defaultImage = '/images/ai-pattern.jpg'; // Fallback pattern

  return (
    <div className="relative overflow-hidden border-b">
      {/* Background Image or Pattern */}
      <div className="absolute inset-0">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
        ) : (
          <div className="absolute inset-0 animated-grid opacity-20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                {description}
              </p>
            )}
            {children && (
              <div className="mt-8 flex justify-center">
                {children}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}