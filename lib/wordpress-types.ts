export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
  acf: {
    difficulty?: string;
    readingTime?: string;
    aiModel?: string;
    serviceProvider?: string;
    rating?: number;
    isFree?: boolean;
    toolUrl?: string;
    prerequisites?: string[];
    relatedResources?: string[];
  };
}

export interface AIService {
  id: string;
  title: string;
  slug: string;
  content: string;
  acf: {
    rating: number;
    model: string;
    isFree: boolean;
    serviceUrl: string;
    logo: {
      url: string;
      alt: string;
    };
    features: string[];
    pricing: {
      free: string[];
      paid: string[];
    };
  };
}

export interface GlossaryTerm {
  id: string;
  title: string;
  content: string;
  acf: {
    category: string;
    relatedTerms: string[];
    englishTerm: string;
    examples: string[];
  };
}</content></file>

<boltAction type="start">
<command>npm run dev</command>