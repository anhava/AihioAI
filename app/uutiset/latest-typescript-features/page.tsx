import { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';

export const metadata: Metadata = {
  title: 'Latest TypeScript Features | AI Hub',
  description: 'Explore the newest features and improvements in TypeScript 5.4.',
};

const tableOfContents = {
  items: [
    { title: 'TypeScript 5.4 Overview', id: 'overview' },
    { title: 'Key Features', id: 'features' },
    { title: 'Performance Improvements', id: 'performance' },
    { title: 'Migration Guide', id: 'migration' },
    { title: 'Community Impact', id: 'community' },
  ],
};

export default function LatestTypeScriptFeatures() {
  return (
    <ArticleLayout
      type="news"
      title="Latest TypeScript Features"
      description="A detailed look at the new features and improvements in TypeScript 5.4"
      author={{
        name: "Alex Kumar",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        role: "Technical Writer"
      }}
      date="2024-03-15"
      readingTime="8 min"
      tableOfContents={tableOfContents}
    >
      <section id="overview">
        <h2>TypeScript 5.4 Overview</h2>
        <p>
          TypeScript 5.4 brings significant improvements to type inference, 
          developer experience, and performance. This release focuses on 
          making the language more intuitive and powerful for developers.
        </p>
      </section>

      <section id="features">
        <h2>Key Features</h2>
        <h3>Improved Type Inference</h3>
        <pre><code>{`// Before TypeScript 5.4
type Result<T> = T extends Promise<infer U> ? U : T;

// New in TypeScript 5.4
type Result<T> = T extends Promise<infer U> 
  ? Result<U>  // Recursively unwrap promises
  : T;`}</code></pre>

        <h3>New Utility Types</h3>
        <pre><code>{`// New utility type for object values
type Values<T> = T[keyof T];

const colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
} as const;

type ColorValues = Values<typeof colors>;
// type ColorValues = '#ff0000' | '#00ff00' | '#0000ff'`}</code></pre>
      </section>

      <section id="performance">
        <h2>Performance Improvements</h2>
        <p>
          TypeScript 5.4 includes several performance optimizations:
        </p>
        <ul>
          <li>Faster type checking for large unions</li>
          <li>Improved incremental build times</li>
          <li>Reduced memory usage for type inference</li>
        </ul>
      </section>

      <section id="migration">
        <h2>Migration Guide</h2>
        <p>
          To upgrade to TypeScript 5.4, update your package.json:
        </p>
        <pre><code>{`{
  "devDependencies": {
    "typescript": "^5.4.0"
  }
}`}</code></pre>
      </section>

      <section id="community">
        <h2>Community Impact</h2>
        <p>
          The TypeScript community has responded positively to these changes, 
          with many developers already adopting the new features in their projects.
        </p>
      </section>
    </ArticleLayout>
  );
}