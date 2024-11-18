import { Metadata } from 'next';
import { ContentLayout } from '@/components/content/content-layout';
import { ContentGrid } from '@/components/content/content-grid';
import { ContentSection } from '@/components/content/content-section';
import { ArticleCard } from '@/components/content/article-card';

export const metadata: Metadata = {
  title: 'AI News & Updates | AI Hub',
  description: 'Latest news and updates from the world of artificial intelligence.',
};

const articles = [
  {
    title: 'OpenAI Announces GPT-5 Development',
    description: 'The next generation of language models promises unprecedented capabilities in natural language understanding and generation.',
    slug: '/uutiset/openai-gpt5-development',
    category: 'AI Development',
    author: {
      name: 'Maria Johnson',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    },
    publishedAt: '2024-03-15',
    readingTime: '4 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
  {
    title: 'AI Regulation Framework Proposed in EU',
    description: 'New guidelines aim to ensure responsible AI development while fostering innovation.',
    slug: '/uutiset/ai-regulation-eu',
    category: 'Policy',
    author: {
      name: 'Thomas Anderson',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
    },
    publishedAt: '2024-03-14',
    readingTime: '6 min',
    image: 'https://images.unsplash.com/photo-1669824774762-65ddf29bee56',
  },
  // Add more articles...
];

export default function NewsPage() {
  return (
    <ContentLayout
      header={{
        title: "AI News & Updates",
        description: "Stay informed about the latest developments in artificial intelligence, machine learning, and related technologies.",
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