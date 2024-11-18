'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ServiceRatingProps {
  serviceId: string;
  currentRating: number;
}

export function ServiceRating({ serviceId, currentRating }: ServiceRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRating = async (value: number) => {
    setRating(value);
    // Here you would typically send the rating to your backend
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Arvostele palvelu</h3>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <Button
            key={value}
            variant="ghost"
            size="icon"
            className="hover:bg-transparent"
            onMouseEnter={() => setHoveredRating(value)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => handleRating(value)}
          >
            <Star
              className={`h-6 w-6 ${
                value <= (hoveredRating || rating)
                  ? 'fill-primary text-primary'
                  : 'text-muted-foreground'
              }`}
            />
          </Button>
        ))}
      </div>
    </Card>
  );
}