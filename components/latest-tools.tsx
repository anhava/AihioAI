'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Image, MessageSquare, ArrowRight } from 'lucide-react';

const tools = [
  {
    name: 'AI Chat Assistant',
    description: 'Interact with our advanced AI chatbot for instant help and guidance.',
    icon: MessageSquare,
    href: '/tyokalut/chat',
    badge: 'Popular'
  },
  {
    name: 'Image Generator',
    description: 'Create unique images from text descriptions using AI.',
    icon: Image,
    href: '/tyokalut/kuvat',
    badge: 'New'
  },
  {
    name: 'Model Playground',
    description: 'Experiment with different AI models in an interactive environment.',
    icon: Bot,
    href: '/tyokalut/playground',
    badge: 'Beta'
  },
];

export function LatestTools() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            AI Tools
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Try our collection of AI-powered tools
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      {tool.badge && (
                        <Badge variant="secondary">{tool.badge}</Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold">{tool.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {tool.description}
                    </p>
                    <Button asChild className="w-full">
                      <Link href={tool.href} className="flex items-center justify-center gap-2">
                        Try Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}