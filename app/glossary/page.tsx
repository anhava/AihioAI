import { mockGlossaryTerms } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata = {
  title: 'AI Glossary - Essential Terms and Definitions',
  description: 'Comprehensive glossary of AI terms, concepts, and definitions for developers and practitioners.',
};

export default function GlossaryPage() {
  const categories = Array.from(new Set(mockGlossaryTerms.map(term => term.category)));

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">AI Glossary</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Essential terms and definitions in artificial intelligence and machine learning.
        </p>

        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="w-full justify-start mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6">
                {mockGlossaryTerms
                  .filter(term => term.category === category)
                  .map((term) => (
                    <Card key={term.id}>
                      <CardHeader>
                        <CardTitle>{term.title}</CardTitle>
                        <CardDescription>{term.content}</CardDescription>
                      </CardHeader>
                      {term.relatedTerms.length > 0 && (
                        <CardContent>
                          <div className="flex gap-2 text-sm text-muted-foreground">
                            <span className="font-medium">Related:</span>
                            <div className="flex gap-2">
                              {term.relatedTerms.map((related, index) => (
                                <span key={index}>
                                  {related}
                                  {index < term.relatedTerms.length - 1 && ', '}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}