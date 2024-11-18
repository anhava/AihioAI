import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { term: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Koneoppiminen (Machine Learning) | AI Sanasto',
    description: 'Kattava selitys koneoppimisesta ja sen käyttötarkoituksista tekoälyssä.',
  };
}

export default function GlossaryTermPage({ params }: Props) {
  // Mock term data - replace with actual data fetching
  const term = {
    title: 'Koneoppiminen',
    englishTitle: 'Machine Learning',
    shortDescription: 'Tekoälyn osa-alue, jossa järjestelmät oppivat ja kehittyvät kokemuksen perusteella.',
    detailedDescription: `
      Koneoppiminen on tekoälyn osa-alue, joka keskittyy algoritmien ja tilastollisten mallien kehittämiseen. 
      Nämä mallit mahdollistavat tietokonejärjestelmien suorituskyvyn parantamisen kokemuksen ja datan avulla 
      ilman eksplisiittistä ohjelmointia.
    `,
    categories: ['Perusteet', 'Teknologia'],
    examples: [
      'Kuvantunnistus valvontakameroissa',
      'Suosittelujärjestelmät verkkokaupassa',
      'Sähköpostin roskapostisuodatus',
      'Luonnollisen kielen käsittely chatboteissa'
    ],
    relatedTerms: [
      { title: 'Syväoppiminen', slug: 'syvaoppiminen' },
      { title: 'Neuroverkot', slug: 'neuroverkot' },
      { title: 'Ohjattu oppiminen', slug: 'ohjattu-oppiminen' }
    ],
    resources: [
      {
        title: 'Introduction to Machine Learning',
        url: 'https://example.com/ml-intro',
        type: 'Course'
      },
      {
        title: 'Machine Learning Algorithms',
        url: 'https://example.com/ml-algorithms',
        type: 'Article'
      }
    ]
  };

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/sanasto" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Takaisin sanastoon
          </Link>
        </Button>

        <article className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{term.title}</h1>
            <p className="text-xl text-muted-foreground">{term.englishTitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {term.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>

          <Card className="p-6">
            <p className="text-lg leading-relaxed">{term.shortDescription}</p>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Tarkempi kuvaus</h2>
            <div className="prose prose-neutral dark:prose-invert">
              {term.detailedDescription}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Esimerkkejä käytöstä</h2>
            <ul className="list-disc list-inside space-y-2">
              {term.examples.map((example, index) => (
                <li key={index} className="text-muted-foreground">
                  {example}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Liittyvät termit</h2>
            <div className="flex flex-wrap gap-2">
              {term.relatedTerms.map((relatedTerm) => (
                <Button
                  key={relatedTerm.slug}
                  variant="outline"
                  asChild
                >
                  <Link href={`/sanasto/${relatedTerm.slug}`}>
                    {relatedTerm.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Lisäresurssit</h2>
            <div className="grid gap-4">
              {term.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <div className="font-medium">{resource.title}</div>
                    <div className="text-sm text-muted-foreground">{resource.type}</div>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}