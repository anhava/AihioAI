import { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';

export const metadata: Metadata = {
  title: 'Web Performance Best Practices | AI Hub',
  description: 'Learn how to optimize your web applications for maximum performance.',
};

const tableOfContents = {
  items: [
    { title: 'Introduction', id: 'introduction' },
    { title: 'Core Web Vitals', id: 'core-web-vitals' },
    { title: 'Image Optimization', id: 'images' },
    { title: 'JavaScript Performance', id: 'javascript' },
    { title: 'CSS Optimization', id: 'css' },
    { title: 'Caching Strategies', id: 'caching' },
    { title: 'Monitoring Tools', id: 'monitoring' },
  ],
};

export default function WebPerformanceBestPractices() {
  return (
    <ArticleLayout
      type="blog"
      title="Web Performance Best Practices"
      description="A comprehensive guide to optimizing web application performance"
      author={{
        name: "Maria Johnson",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
        role: "Performance Engineer"
      }}
      date="2024-03-15"
      readingTime="12 min"
      difficulty="intermediate"
      tableOfContents={tableOfContents}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Web performance is crucial for user experience and SEO. This guide covers 
          essential techniques and best practices for building fast, responsive web 
          applications.
        </p>
      </section>

      <section id="core-web-vitals">
        <h2>Core Web Vitals</h2>
        <p>
          Core Web Vitals are Google's metrics for measuring user experience:
        </p>
        <ul>
          <li>Largest Contentful Paint (LCP)</li>
          <li>First Input Delay (FID)</li>
          <li>Cumulative Layout Shift (CLS)</li>
        </ul>
      </section>

      <section id="images">
        <h2>Image Optimization</h2>
        <p>
          Optimize images using modern formats and responsive loading:
        </p>
        <pre><code>{`// Next.js Image component example
import Image from 'next/image';

function OptimizedImage() {
  return (
    <Image
      src="/example.jpg"
      alt="Example"
      width={800}
      height={600}
      loading="lazy"
      sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
    />
  );
}`}</code></pre>
      </section>

      <section id="javascript">
        <h2>JavaScript Performance</h2>
        <p>
          Implement code splitting and lazy loading:
        </p>
        <pre><code>{`// Dynamic import example
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});`}</code></pre>
      </section>

      <section id="css">
        <h2>CSS Optimization</h2>
        <p>
          Optimize CSS delivery and reduce unused styles:
        </p>
        <pre><code>{`// Tailwind CSS purge configuration
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
}`}</code></pre>
      </section>

      <section id="caching">
        <h2>Caching Strategies</h2>
        <p>
          Implement effective caching strategies:
        </p>
        <ul>
          <li>Browser caching</li>
          <li>CDN caching</li>
          <li>Service Worker caching</li>
        </ul>
      </section>

      <section id="monitoring">
        <h2>Monitoring Tools</h2>
        <p>
          Use these tools to monitor performance:
        </p>
        <ul>
          <li>Lighthouse</li>
          <li>Web Vitals</li>
          <li>Chrome DevTools</li>
          <li>PageSpeed Insights</li>
        </ul>
      </section>
    </ArticleLayout>
  );
}