import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentLayout } from '@/components/content/content-layout';
import { ContentGrid } from '@/components/content/content-grid';
import { ContentSection } from '@/components/content/content-section';
import { ArticleCard } from '@/components/content/article-card';
import { getTagData, getAllTags } from '@/lib/tags';

interface Props {
  params: { tag: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = getTagData(params.tag);
  if (!tag) return { title: 'Tag Not Found' };

  return {
    title: `${tag.name} | AI Hub`,
    description: tag.description,
  };
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag.slug,
  }));
}

export default function TagPage({ params }: Props) {
  const tag = getTagData(params.tag);
  if (!tag) notFound();

  // Mock articles - replace with actual data fetching
  const articles = [
    {
      title: 'Introduction to ' + tag.name,
      description: `A comprehensive guide to understanding ${tag.name} concepts and applications.`,
      slug: `/articles/${params.tag}-introduction`,
      category: 'Guides',
      author: {
        name: 'Sarah Chen',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      },
      publishedAt: '2024-03-15',
      readingTime: '8 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    },
    {
      title: `Advanced ${tag.name} Techniques`,
      description: `Deep dive into advanced ${tag.name} methodologies and best practices.`,
      slug: `/articles/${params.tag}-advanced`,
      category: 'Advanced',
      author: {
        name: 'Alex Kumar',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      },
      publishedAt: '2024-03-14',
      readingTime: '12 min',
      image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
    },
  ];

  return (
    <ContentLayout
      header={{
        title: tag.name,
        description: tag.description,
        image: tag.image,
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