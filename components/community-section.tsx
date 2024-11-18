'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, MessageSquare, Github, Twitter } from 'lucide-react';

const stats = [
  {
    label: 'Active Members',
    value: '5,000+',
    icon: Users,
    description: 'Growing community of AI enthusiasts'
  },
  {
    label: 'Daily Discussions',
    value: '1,000+',
    icon: MessageSquare,
    description: 'Active conversations and knowledge sharing'
  }
];

const testimonials = [
  {
    content: "This platform has revolutionized how I approach AI development. The resources and community support are invaluable.",
    author: {
      name: "Sarah Chen",
      role: "ML Engineer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    }
  },
  {
    content: "The quality of content and tools available here has significantly accelerated my learning journey in AI.",
    author: {
      name: "Alex Kumar",
      role: "Data Scientist",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    }
  }
];

export function CommunitySection() {
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
            Join Our Community
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Connect with AI enthusiasts and experts
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.author.image} />
                      <AvatarFallback>{testimonial.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.author.role}</div>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span>Twitter</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}