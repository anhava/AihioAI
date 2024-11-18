'use client';

import { useState } from 'react';
import { ContentLayout } from '@/components/content/content-layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ImagePlus, Download, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function ImageToolPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedImage('https://images.unsplash.com/photo-1677442136019-21780ecad995');
    setIsGenerating(false);
  };

  return (
    <ContentLayout
      header={{
        title: "AI Image Generator",
        description: "Create unique images from text descriptions using AI.",
        image: "https://images.unsplash.com/photo-1676277791608-ac54585e6876"
      }}
    >
      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Select defaultValue="realistic">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realistic">Realistic</SelectItem>
                <SelectItem value="artistic">Artistic</SelectItem>
                <SelectItem value="cartoon">Cartoon</SelectItem>
                <SelectItem value="abstract">Abstract</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="1:1">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select aspect ratio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1:1">Square (1:1)</SelectItem>
                <SelectItem value="4:3">Landscape (4:3)</SelectItem>
                <SelectItem value="16:9">Widescreen (16:9)</SelectItem>
                <SelectItem value="9:16">Portrait (9:16)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Image Description</label>
            <Textarea
              placeholder="Describe the image you want to generate..."
              className="h-32 resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Detail Level</label>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className="gap-2"
            >
              {isGenerating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ImagePlus className="h-4 w-4" />
              )}
              {isGenerating ? 'Generating...' : 'Generate Image'}
            </Button>
          </div>
        </div>

        {generatedImage && (
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border">
              <Image
                src={generatedImage}
                alt="Generated image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-end">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Image
              </Button>
            </div>
          </div>
        )}
      </Card>
    </ContentLayout>
  );
}