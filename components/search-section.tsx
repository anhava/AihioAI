'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight } from 'lucide-react';

export function SearchSection() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,var(--primary)_0.9%,var(--primary-foreground)_1%)] opacity-[0.03]" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-block">
            <div className="inline-flex items-center justify-center rounded-full border px-4 py-1 text-sm mb-4 bg-background shadow-sm">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">Powered by AI</span>
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Find What You Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Search our extensive collection of AI documentation and resources
          </p>
          
          <form onSubmit={handleSearch} className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg blur-xl" />
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 h-12 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary"
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="gap-2 shadow-lg shadow-primary/20">
              Search Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-muted-foreground">Popular:</span>
            {['GPT-4', 'Machine Learning', 'Neural Networks', 'Computer Vision'].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="text-primary/80 hover:text-primary transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}