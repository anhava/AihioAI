'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface RelatedGuide {
  title: string;
  description: string;
  slug: string;
  image: string;
  category: string;
}

interface RelatedGuidesProps {
  guides: RelatedGuide[];
  currentGuideId: string;
}

export function RelatedGuides({ guides, currentGuideId }: RelatedGuidesProps) {
  return (
    <section className="mt-12 space-y-6">
      <h2 className="text-2xl font-bold">Related Guides</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide, index) => (
          <motion.div
            key={guide.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/oppaat/${guide.slug}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg group">
                <div className="aspect-video relative">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm bg-background/70">
                      {guide.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="space-y-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {guide.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Read guide</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}