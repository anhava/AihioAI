'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface TableOfContentsProps {
  items: {
    title: string;
    id: string;
    level?: number;
  }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <Card className="p-6">
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
        aria-label="Table of contents"
      >
        <p className="font-medium mb-4">On this page</p>
        <ul className="space-y-2 text-sm">
          {items.map(({ title, id, level = 0 }) => (
            <li key={id} style={{ paddingLeft: `${level * 12}px` }}>
              <a
                href={`#${id}`}
                className={cn(
                  "block py-1 text-muted-foreground transition-colors hover:text-foreground",
                  activeId === id && "text-foreground font-medium"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </Card>
  );
}