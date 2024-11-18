import { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';

// Mock data - replace with actual data fetching
const articles = [
  {
    slug: 'ethical-ai-systems',
    title: 'Building Ethical AI Systems',
    description: 'A comprehensive guide to implementing ethical considerations in AI development.',
    author: {
      name: 'Sarah Chen',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      role: 'AI Ethics Researcher'
    },
    date: '2024-03-15',
    readingTime: '8 min',
    difficulty: 'intermediate' as const,
  },
  {
    slug: 'optimizing-llm',
    title: 'Optimizing Large Language Models',
    description: 'Advanced techniques for improving LLM performance and efficiency.',
    author: {
      name: 'Alex Kumar',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      role: 'ML Engineer'
    },
    date: '2024-03-14',
    readingTime: '12 min',
    difficulty: 'advanced' as const,
  },
];

export async function generateStaticParams() {
  // Return all possible slug values
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | AI Hub',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} | AI Hub Blog`,
    description: article.description,
  };
}

const tableOfContents = {
  items: [
    { title: 'Introduction', id: 'introduction' },
    { title: 'Key Principles', id: 'principles' },
    { title: 'Implementation', id: 'implementation' },
    { title: 'Best Practices', id: 'best-practices' },
    { title: 'Conclusion', id: 'conclusion' },
  ],
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    return null; // Next.js will show the closest error boundary
  }

  return (
    <ArticleLayout
      type="blog"
      title={article.title}
      description={article.description}
      author={article.author}
      date={article.date}
      readingTime={article.readingTime}
      difficulty={article.difficulty}
      tableOfContents={tableOfContents}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          As artificial intelligence continues to evolve and become more integrated into our daily lives,
          the importance of building ethical AI systems cannot be overstated. This article explores the
          key principles and practical approaches to developing AI systems that are both powerful and
          ethically sound.
        </p>
      </section>

      <section id="principles">
        <h2>Key Principles</h2>
        <ul>
          <li>Transparency and explainability</li>
          <li>Fairness and bias mitigation</li>
          <li>Privacy and data protection</li>
          <li>Accountability and responsibility</li>
        </ul>
      </section>

      <section id="implementation">
        <h2>Implementation</h2>
        <p>
          Implementing ethical considerations in AI development requires a systematic approach:
        </p>
        <pre><code>{`// Example: Implementing fairness metrics
function calculateFairnessMetrics(predictions, demographics) {
  const groupOutcomes = {};
  
  // Calculate outcomes for each demographic group
  demographics.forEach((demo, index) => {
    if (!groupOutcomes[demo]) {
      groupOutcomes[demo] = {
        positive: 0,
        total: 0
      };
    }
    groupOutcomes[demo].total++;
    if (predictions[index] === 1) {
      groupOutcomes[demo].positive++;
    }
  });
  
  // Calculate disparate impact ratio
  const rates = Object.values(groupOutcomes)
    .map(g => g.positive / g.total);
  const disparateImpact = Math.min(...rates) / Math.max(...rates);
  
  return disparateImpact;
}`}</code></pre>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <p>
          Follow these best practices to ensure ethical AI development:
        </p>
        <ul>
          <li>Regular auditing of AI systems for bias</li>
          <li>Comprehensive documentation of model decisions</li>
          <li>Continuous monitoring of system impacts</li>
          <li>Inclusive development practices</li>
        </ul>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Building ethical AI systems is not just about following guidelines—it's about creating
          technology that benefits society while minimizing potential harm. By implementing these
          principles and best practices, we can develop AI systems that are both powerful and
          responsible.
        </p>
      </section>
    </ArticleLayout>
  );
}