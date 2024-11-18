'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { getPopularTags } from '@/lib/tags';

export function TagCloud() {
  const tags = getPopularTags();

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="tag-cloud-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_1px_at_center,var(--primary)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center rounded-full border px-4 py-1 text-sm mb-4 bg-background shadow-sm">
            <span className="text-primary">Explore Topics</span>
          </div>
          <h2 
            id="tag-cloud-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Popular Topics
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore our content by topics and categories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          role="list"
          aria-label="Popular topics"
        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag.slug}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              role="listitem"
            >
              <Link 
                href={`/tags/${tag.slug}`}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
              >
                <Badge
                  variant="secondary"
                  className={cn(
                    "px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all",
                    tag.weight >= 4 && "text-base px-5 py-2.5 shadow-sm",
                    tag.weight === 5 && "text-lg px-6 py-3 shadow-md",
                    "border border-transparent hover:border-primary/20"
                  )}
                >
                  {tag.name}
                </Badge>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Tags Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link 
            href="/tags"
            className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
          >
            View all topics →
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div 
          className="absolute top-1/4 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-3xl" 
          aria-hidden="true"
        />
        <div 
          className="absolute bottom-1/4 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" 
          aria-hidden="true"
        />
      </div>
    </section>
  );
}