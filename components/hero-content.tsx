'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Brain, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function HeroContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge 
            variant="outline" 
            className="w-fit bg-background/50 backdrop-blur-sm border-primary/20"
          >
            <Bot className="mr-2 h-3 w-3" />
            Powered by AI
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="inline-block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Discover the Future
            </span>
            <span className="block mt-1">of AI Development</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground sm:text-xl max-w-xl"
        >
          Explore comprehensive resources, tools, and guides to master artificial intelligence development.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4"
      >
        <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          Browse Guides
          <Brain className="h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-4 text-sm text-muted-foreground mt-4"
      >
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4" />
          <span>5,000+ Code Examples</span>
        </div>
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          <span>200+ AI Models</span>
        </div>
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4" />
          <span>50+ Tools</span>
        </div>
      </motion.div>
    </div>
  );
}