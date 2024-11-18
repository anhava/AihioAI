'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const articles = [
  {
    title: 'Getting Started with GPT-4',
    description: 'Learn how to effectively use GPT-4 in your projects with this comprehensive guide.',
    category: 'Guides',
    readTime: '5 min',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    href: '/articles/getting-started-gpt4'
  },
  {
    title: 'Understanding AI Model Fine-tuning',
    description: 'A comprehensive guide to fine-tuning language models for specific use cases.',
    category: 'Advanced',
    readTime: '8 min',
    date: '2024-01-14',
    image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
    href: '/articles/ai-model-fine-tuning'
  },
  {
    title: 'Best Practices for AI Integration',
    description: 'Learn the industry best practices for integrating AI into your applications.',
    category: 'Best Practices',
    readTime: '6 min',
    date: '2024-01-13',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    href: '/articles/ai-integration-best-practices'
  }
];

export function FeaturedArticles() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative text-center mb-12"
        >
          <div className="inline-block">
            <div className="inline-flex items-center justify-center rounded-full border px-4 py-1 text-sm mb-4 bg-background shadow-sm">
              <span className="text-muted-foreground">Latest Content</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Articles
          </h2>
          <div className="mt-4 flex justify-center">
            <p className="text-xl text-muted-foreground max-w-2xl">
              Latest insights and guides from our AI experts
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-3xl opacity-20 pointer-events-none">
            <div className="aspect-square h-32 rounded-full bg-gradient-to-r from-primary to-primary/50" />
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={article.href} className="group block h-full">
                <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="backdrop-blur-sm bg-background/70">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="space-y-2">
                    <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {article.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}