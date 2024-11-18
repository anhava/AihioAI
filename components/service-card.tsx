'use client';

import { Star, StarHalf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { fi } from '@/lib/i18n';

interface ServiceCardProps {
  name: string;
  description: string;
  rating: number;
  logo: string;
  model: string;
  isFree: boolean;
  url: string;
}

export function ServiceCard({
  name,
  description,
  rating,
  logo,
  model,
  isFree,
  url,
}: ServiceCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-primary text-primary" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-primary text-primary" />);
    }

    return stars;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-1">
        <div className="flex items-start justify-between">
          <div className="relative h-12 w-12">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
        </div>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{model}</span>
          <span
            className={cn(
              "inline-block rounded-full px-2 py-0.5 text-xs font-medium",
              isFree
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
            )}
          >
            {isFree ? fi.common.free : fi.common.paid}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
        <div className="flex gap-2">
          <Button asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {fi.common.tryNow}
            </a>
          </Button>
          <Button variant="outline">
            {fi.common.learnMore}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}