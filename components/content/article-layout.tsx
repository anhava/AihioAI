'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { TableOfContents } from '@/components/content/table-of-contents';

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  author?: {
    name: string;
    image: string;
    role?: string;
  };
  date?: string;
  readingTime?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  tableOfContents?: {
    items: {
      title: string;
      id: string;
      level?: number;
    }[];
  };
  type?: 'guide' | 'news' | 'blog';
}

const difficultyConfig = {
  beginner: { label: 'Beginner', color: 'bg-green-500/10 text-green-700 dark:text-green-300' },
  intermediate: { label: 'Intermediate', color: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300' },
  advanced: { label: 'Advanced', color: 'bg-red-500/10 text-red-700 dark:text-red-300' },
};

export function ArticleLayout({
  children,
  title,
  description,
  author,
  date,
  readingTime,
  difficulty,
  tableOfContents,
  type = 'blog',
}: ArticleLayoutProps) {
  const handleShare = (platform: 'twitter' | 'linkedin' | 'copy') => {
    const url = window.location.href;
    const text = `Check out "${title}" on AI Hub`;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="border-b bg-muted/40">
        <div className="container py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {type && (
              <Badge variant="secondary" className="mb-4">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
            )}
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl max-w-4xl">
              {title}
            </h1>

            {description && (
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
                {description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {author && (
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={author.image} alt={author.name} />
                    <AvatarFallback>{author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">{author.name}</div>
                    {author.role && (
                      <div className="text-sm text-muted-foreground">{author.role}</div>
                    )}
                  </div>
                </div>
              )}

              {difficulty && (
                <Badge
                  variant="outline"
                  className={cn(
                    "ml-auto",
                    difficultyConfig[difficulty].color
                  )}
                >
                  {difficultyConfig[difficulty].label}
                </Badge>
              )}
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              {date && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString()}
                  </time>
                </div>
              )}
              {readingTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {readingTime}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Share buttons - Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block lg:col-span-1"
          >
            <div className="sticky top-24 flex flex-col gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('twitter')}
                className="h-10 w-10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('linkedin')}
                className="h-10 w-10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('copy')}
                className="h-10 w-10"
              >
                <LinkIcon className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "col-span-12 lg:col-span-8",
              !tableOfContents && "lg:col-start-2"
            )}
          >
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {children}
            </div>
          </motion.div>

          {/* Table of contents - Right sidebar */}
          {tableOfContents && tableOfContents.items.length > 0 && (
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents.items} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}