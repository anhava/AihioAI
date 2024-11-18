import { Metadata } from 'next';
import { ContentLayout } from '@/components/content/content-layout';
import { ContentGrid } from '@/components/content/content-grid';
import { ContentSection } from '@/components/content/content-section';
import { ArticleCard } from '@/components/content/article-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Guides & Tutorials | AI Hub',
  description: 'Comprehensive guides and tutorials for AI development and implementation.',
};

const guides = [
  {
    title: 'Getting Started with Machine Learning',
    description: 'A beginner-friendly introduction to machine learning concepts and implementation.',
    slug: '/oppaat/machine-learning-intro',
    category: 'Beginners',
    author: {
      name: 'David Wilson',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    },
    publishedAt: '2024-03-15',
    readingTime: '15 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
  {
    title: 'Advanced Neural Network Architectures',
    description: 'Deep dive into modern neural network designs and their applications.',
    slug: '/oppaat/advanced-neural-networks',
    category: 'Advanced',
    author: {
      name: 'Emily Zhang',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    },
    publishedAt: '2024-03-14',
    readingTime: '20 min',
    image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
  },
];

export default function GuidesPage() {
  return (
    <ContentLayout
      header={{
        title: "AI Guides & Tutorials",
        description: "Comprehensive resources to help you master artificial intelligence development.",
        image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2",
        children: (
          <div className="mt-8 max-w-md mx-auto w-full">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search guides..."
                className="pl-9 bg-background/50 backdrop-blur-sm"
              />
            </div>
          </div>
        ),
      }}
    >
      <ContentSection>
        <ContentGrid>
          {guides.map((guide, index) => (
            <ArticleCard
              key={guide.slug}
              {...guide}
              index={index}
            />
          ))}
        </ContentGrid>
      </ContentSection>
    </ContentLayout>
  );
}