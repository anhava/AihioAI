import { HeroSection } from '@/components/hero-section';
import { FeaturedArticles } from '@/components/featured-articles';
import { CategoryGrid } from '@/components/category-grid';
import { SearchSection } from '@/components/search-section';
import { SectionDivider } from '@/components/section-divider';
import { TagCloud } from '@/components/tag-cloud';
import { LatestTools } from '@/components/latest-tools';
import { CommunitySection } from '@/components/community-section';
import { NewsletterCTA } from '@/components/newsletter-cta';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <div className="relative">
        <div className="bg-gradient-to-b from-background to-muted/50">
          <SearchSection />
          <SectionDivider type="wave" className="transform rotate-180" />
        </div>
        
        <div className="bg-muted/50">
          <FeaturedArticles />
          <SectionDivider type="dots" />
        </div>
        
        <div className="bg-gradient-to-b from-muted/50 to-background">
          <CategoryGrid />
          <SectionDivider type="gradient" />
        </div>

        <div className="bg-background">
          <TagCloud />
          <SectionDivider type="wave" />
        </div>

        <div className="bg-muted/50">
          <LatestTools />
          <SectionDivider type="dots" />
        </div>

        <div className="bg-gradient-to-b from-muted/50 to-background">
          <CommunitySection />
          <SectionDivider type="gradient" />
        </div>

        <div className="bg-background">
          <NewsletterCTA />
        </div>
      </div>
    </div>
  );
}