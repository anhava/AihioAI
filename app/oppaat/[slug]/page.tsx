import { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';
import { GuideRating } from '@/components/guides/guide-rating';
import { RelatedGuides } from '@/components/guides/related-guides';
import { GuideNavigation } from '@/components/guides/guide-navigation';
import { CommentSection } from '@/components/comment-section';

// Mock data - replace with actual data fetching
const guides = [
  {
    slug: 'machine-learning-intro',
    title: 'Getting Started with Machine Learning',
    description: 'A beginner-friendly introduction to machine learning concepts and implementation.',
    author: {
      name: 'David Wilson',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      role: 'ML Engineer'
    },
    date: '2024-03-15',
    readingTime: '15 min',
    difficulty: 'beginner' as const,
    rating: 4.5,
    totalRatings: 128,
    allowComments: true,
    relatedGuides: [
      {
        title: 'Advanced Neural Networks',
        description: 'Deep dive into neural network architectures and implementations.',
        slug: 'advanced-neural-networks',
        image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
        category: 'Advanced'
      },
      {
        title: 'Data Preprocessing Guide',
        description: 'Learn essential data preprocessing techniques for machine learning.',
        slug: 'data-preprocessing',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
        category: 'Intermediate'
      }
    ],
    nextGuide: {
      title: 'Understanding Neural Networks',
      slug: 'neural-networks-basics'
    }
  },
  // Add more guides...
];

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const guide = guides.find(g => g.slug === params.slug);
  
  if (!guide) {
    return {
      title: 'Guide Not Found | AI Hub',
      description: 'The requested guide could not be found.',
    };
  }

  return {
    title: `${guide.title} | AI Hub Guides`,
    description: guide.description,
  };
}

const tableOfContents = {
  items: [
    { title: 'Introduction', id: 'introduction' },
    { title: 'Key Concepts', id: 'concepts' },
    { title: 'Getting Started', id: 'getting-started' },
    { title: 'Best Practices', id: 'best-practices' },
    { title: 'Next Steps', id: 'next-steps' },
  ],
};

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find(g => g.slug === params.slug);

  if (!guide) {
    return null; // Next.js will show the closest error boundary
  }

  return (
    <ArticleLayout
      type="guide"
      title={guide.title}
      description={guide.description}
      author={guide.author}
      date={guide.date}
      readingTime={guide.readingTime}
      difficulty={guide.difficulty}
      tableOfContents={tableOfContents}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to our comprehensive guide on machine learning fundamentals. This guide will help you
          understand the core concepts and get started with practical implementations.
        </p>
      </section>

      {/* Guide content sections... */}

      <GuideRating
        guideId={guide.slug}
        initialRating={guide.rating}
        totalRatings={guide.totalRatings}
      />

      {guide.allowComments && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Discussion</h2>
          <CommentSection comments={[]} />
        </div>
      )}

      <RelatedGuides
        guides={guide.relatedGuides}
        currentGuideId={guide.slug}
      />

      <GuideNavigation
        nextGuide={guide.nextGuide}
      />
    </ArticleLayout>
  );
}