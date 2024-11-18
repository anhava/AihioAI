'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/content/page-header';

interface ContentLayoutProps {
  children: React.ReactNode;
  header?: {
    title: string;
    description?: string;
    children?: React.ReactNode;
    image?: string;
  };
  sidebar?: React.ReactNode;
  className?: string;
}

export function ContentLayout({
  children,
  header,
  sidebar,
  className,
}: ContentLayoutProps) {
  return (
    <div className="min-h-screen">
      {header && (
        <PageHeader
          title={header.title}
          description={header.description}
          image={header.image}
        >
          {header.children}
        </PageHeader>
      )}

      <div className="container py-8 md:py-12">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "lg:col-span-9",
                !sidebar && "lg:col-span-8 lg:col-start-3",
                className
              )}
            >
              {children}
            </motion.main>

            {sidebar && (
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="sticky top-24">
                  {sidebar}
                </div>
              </motion.aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}