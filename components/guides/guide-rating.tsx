'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

interface GuideRatingProps {
  guideId: string;
  initialRating?: number;
  totalRatings?: number;
}

export function GuideRating({ guideId, initialRating = 0, totalRatings = 0 }: GuideRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleRating = async (value: number) => {
    if (hasRated) {
      toast({
        title: "Already Rated",
        description: "You've already rated this guide. Thank you for your feedback!",
      });
      return;
    }

    setRating(value);
    setHasRated(true);
    
    // Here you would typically send the rating to your backend
    toast({
      title: "Rating Submitted",
      description: "Thank you for rating this guide!",
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Rate this guide</h3>
          {totalRatings > 0 && (
            <p className="text-sm text-muted-foreground">
              {totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'}
            </p>
          )}
        </div>

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
              disabled={hasRated}
            >
              <Star
                className={`h-6 w-6 transition-colors ${
                  value <= (hoveredRating || rating || initialRating)
                    ? 'fill-primary text-primary'
                    : 'text-muted-foreground'
                }`}
              />
            </Button>
          ))}
        </div>

        {hasRated && (
          <p className="text-sm text-muted-foreground">
            Thank you for your feedback!
          </p>
        )}
      </div>
    </Card>
  );
}