import { Metadata } from 'next';
import { ContentLayout } from '@/components/content/content-layout';
import { ContentSection } from '@/components/content/content-section';
import { GlossaryList } from '@/components/glossary-list';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Glossary | AI Hub',
  description: 'Comprehensive glossary of AI terms and concepts.',
};

// Mock data - replace with actual data fetching
const glossaryTerms = [
  {
    id: '1',
    title: 'Koneoppiminen',
    content: 'Tekoälyn osa-alue, jossa järjestelmät oppivat ja kehittyvät kokemuksen perusteella.',
    acf: {
      category: 'Perusteet',
      relatedTerms: ['Syväoppiminen', 'Tekoäly'],
      englishTerm: 'Machine Learning',
      examples: [
        'Kuvantunnistus',
        'Suosittelujärjestelmät',
        'Ennustavat analytiikkamallit'
      ]
    }
  },
  {
    id: '2',
    title: 'Syväoppiminen',
    content: 'Koneoppimisen osa-alue, joka käyttää neuroverkkoja monimutkaisten mallien oppimiseen.',
    acf: {
      category: 'Teknologiat',
      relatedTerms: ['Koneoppiminen', 'Neuroverkot'],
      englishTerm: 'Deep Learning',
      examples: [
        'Kasvojentunnistus',
        'Kielen kääntäminen',
        'Puheen tunnistus'
      ]
    }
  }
];

export default function GlossaryPage() {
  return (
    <ContentLayout
      header={{
        title: "AI Glossary",
        description: "Explore and understand key artificial intelligence terms and concepts.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
        children: (
          <div className="mt-8 max-w-md mx-auto w-full">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search terms..."
                className="pl-9 bg-background/50 backdrop-blur-sm"
              />
            </div>
          </div>
        )
      }}
    >
      <ContentSection>
        <GlossaryList terms={glossaryTerms} />
      </ContentSection>
    </ContentLayout>
  );
}