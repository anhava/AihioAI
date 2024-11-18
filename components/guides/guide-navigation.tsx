'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface GuideNavigationProps {
  previousGuide?: {
    title: string;
    slug: string;
  };
  nextGuide?: {
    title: string;
    slug: string;
  };
}

export function GuideNavigation({ previousGuide, nextGuide }: GuideNavigationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 flex items-center justify-between border-t pt-6"
    >
      {previousGuide ? (
        <Button variant="ghost" asChild className="gap-2">
          <Link href={`/oppaat/${previousGuide.slug}`}>
            <ArrowLeft className="h-4 w-4" />
            <span className="flex flex-col items-start">
              <span className="text-xs text-muted-foreground">Previous</span>
              <span className="text-sm font-medium">{previousGuide.title}</span>
            </span>
          </Link>
        </Button>
      ) : (
        <div />
      )}

      {nextGuide && (
        <Button variant="ghost" asChild className="gap-2">
          <Link href={`/oppaat/${nextGuide.slug}`}>
            <span className="flex flex-col items-end">
              <span className="text-xs text-muted-foreground">Next</span>
              <span className="text-sm font-medium">{nextGuide.title}</span>
            </span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </motion.nav>
  );
}