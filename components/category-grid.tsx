'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Bot, Brain, Code, Database, Network, Sparkles } from 'lucide-react';

const categories = [
  {
    title: 'Language Models',
    description: 'Explore GPT, BERT, and other language models',
    icon: Brain,
    href: '/categories/language-models',
    gradient: 'from-blue-500/10 to-purple-500/10'
  },
  {
    title: 'Computer Vision',
    description: 'Image recognition and processing with AI',
    icon: Sparkles,
    href: '/categories/computer-vision',
    gradient: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    title: 'API Integration',
    description: 'Connect your apps with AI services',
    icon: Code,
    href: '/categories/api-integration',
    gradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    title: 'Data Processing',
    description: 'Handle and prepare data for AI models',
    icon: Database,
    href: '/categories/data-processing',
    gradient: 'from-indigo-500/10 to-blue-500/10'
  },
  {
    title: 'Neural Networks',
    description: 'Understanding deep learning architectures',
    icon: Network,
    href: '/categories/neural-networks',
    gradient: 'from-pink-500/10 to-rose-500/10'
  },
  {
    title: 'AI Assistants',
    description: 'Building conversational AI interfaces',
    icon: Bot,
    href: '/categories/ai-assistants',
    gradient: 'from-violet-500/10 to-purple-500/10'
  }
];

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our comprehensive collection of AI resources
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={category.href}>
                  <Card className="group h-full transition-all hover:shadow-lg dark:hover:shadow-primary/10">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}