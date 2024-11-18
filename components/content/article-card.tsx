'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  description: string;
  slug: string;
  category: string;
  author: {
    name: string;
    image: string;
  };
  publishedAt: string;
  readingTime: string;
  image: string;
  index?: number;
}

export function ArticleCard({
  title,
  description,
  slug,
  category,
  author,
  publishedAt,
  readingTime,
  image,
  index = 0,
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={slug}>
        <Card className="group h-full overflow-hidden card-hover">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="backdrop-blur-sm bg-background/70">
                {category}
              </Badge>
            </div>
          </div>
          <CardHeader>
            <h3 className="text-xl font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {author.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readingTime}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}