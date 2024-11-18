import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles | AI Hub',
  description: 'Explore our collection of articles about artificial intelligence, machine learning, and related technologies.',
};

const articles = [
  {
    slug: 'getting-started-gpt4',
    title: 'Getting Started with GPT-4',
    description: 'Learn how to effectively use GPT-4 in your projects with this comprehensive guide.',
    category: 'Guides',
    date: '2024-01-15',
  },
  // More articles can be added here
];

export default function ArticlesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Articles</h1>
        <p className="text-lg text-muted-foreground">
          Explore our collection of articles about AI and machine learning
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  {article.category} • {article.date}
                </div>
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-muted-foreground">{article.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}