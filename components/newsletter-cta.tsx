'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';

export function NewsletterCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-2xl" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center rounded-full border px-4 py-1 text-sm mb-4 bg-background shadow-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>Stay Updated</span>
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Get AI Insights Delivered
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                Join our newsletter for the latest updates in AI technology, tutorials, and best practices.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background"
                />
                <Button className="gap-2">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <p className="mt-4 text-sm text-muted-foreground">
                Join 5,000+ subscribers. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}