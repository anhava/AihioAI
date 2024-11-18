import { Metadata } from 'next';
import { ContentLayout } from '@/components/content/content-layout';
import { ContentGrid } from '@/components/content/content-grid';
import { ContentSection } from '@/components/content/content-section';
import { ArticleCard } from '@/components/content/article-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'AI Blog | AI Hub',
  description: 'Expert insights, tutorials, and best practices in AI development.',
};

const articles = [
  {
    title: 'Building Ethical AI Systems',
    description: 'A comprehensive guide to implementing ethical considerations in AI development.',
    slug: '/blogi/ethical-ai-systems',
    category: 'Best Practices',
    author: {
      name: 'Sarah Chen',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    publishedAt: '2024-03-15',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
  {
    title: 'Optimizing Large Language Models',
    description: 'Advanced techniques for improving LLM performance and efficiency.',
    slug: '/blogi/optimizing-llm',
    category: 'Technical',
    author: {
      name: 'Alex Kumar',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    },
    publishedAt: '2024-03-14',
    readingTime: '12 min',
    image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
  },
];

const categories = [
  'All',
  'Technical',
  'Best Practices',
  'Case Studies',
  'Tutorials',
];

export default function BlogPage() {
  return (
    <ContentLayout
      header={{
        title: "AI Blog",
        description: "Expert insights, tutorials, and best practices from our community of AI developers and researchers.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
        children: (
          <div className="mt-8">
            <Tabs defaultValue="All" className="justify-center">
              <TabsList className="bg-background/50 backdrop-blur-sm">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        ),
      }}
    >
      <ContentSection>
        <ContentGrid>
          {articles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              {...article}
              index={index}
            />
          ))}
        </ContentGrid>
      </ContentSection>
    </ContentLayout>
  );
}