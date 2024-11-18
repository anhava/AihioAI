import { Metadata } from 'next';
import { ContentLayout } from '@/components/content/content-layout';
import { ContentGrid } from '@/components/content/content-grid';
import { ContentSection } from '@/components/content/content-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenTool, Image, Bot } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Tools | AI Hub',
  description: 'Free AI tools for text and image processing.',
};

const tools = [
  {
    name: 'Text Rewriter',
    description: 'Edit and improve text using AI',
    icon: PenTool,
    href: '/tyokalut/teksti',
  },
  {
    name: 'Image Generator',
    description: 'Create images from text descriptions',
    icon: Image,
    href: '/tyokalut/kuvat',
  },
  {
    name: 'Chatbot',
    description: 'Interact with AI assistant',
    icon: Bot,
    href: '/tyokalut/chat',
  },
];

export default function ToolsPage() {
  return (
    <ContentLayout
      header={{
        title: "AI Tools",
        description: "Explore our collection of free AI-powered tools and utilities.",
        image: "https://images.unsplash.com/photo-1676277791608-ac54585e6876"
      }}
    >
      <ContentSection>
        <ContentGrid columns={3}>
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.name} className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{tool.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{tool.description}</p>
                  <Button asChild>
                    <Link href={tool.href}>Try now</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </ContentGrid>
      </ContentSection>
    </ContentLayout>
  );
}