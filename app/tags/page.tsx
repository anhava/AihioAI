import { Metadata } from 'next';
import { ContentLayout } from '@/components/content/content-layout';
import { getAllTags } from '@/lib/tags';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Tags | AI Hub',
  description: 'Browse all topics and categories in AI Hub',
};

export default function TagsPage() {
  const tags = getAllTags();
  
  return (
    <ContentLayout
      header={{
        title: "Browse Topics",
        description: "Explore our content organized by topics and categories",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
      }}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tags.map((tag, index) => (
          <motion.div
            key={tag.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/tags/${tag.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {tag.weight >= 4 ? 'Popular' : 'Topic'}
                  </Badge>
                  <CardTitle>{tag.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {tag.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </ContentLayout>
  );
}