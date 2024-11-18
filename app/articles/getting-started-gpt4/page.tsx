import { TableOfContents } from '@/components/table-of-contents';
import { ArticleContent } from '@/components/article-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started with GPT-4 | AI Hub',
  description: 'A comprehensive guide to getting started with GPT-4, including best practices, use cases, and implementation tips.',
};

export default function GettingStartedGPT4() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `GPT-4 represents a significant leap forward in artificial intelligence capabilities. 
      This guide will help you understand its features and how to effectively utilize them in your projects.`,
    },
    {
      id: 'key-features',
      title: 'Key Features',
      content: `GPT-4 introduces several groundbreaking capabilities:
      • Enhanced understanding of context and nuance
      • Improved reasoning abilities
      • Better handling of complex instructions
      • More reliable and accurate responses
      • Advanced code generation and analysis`,
    },
    {
      id: 'use-cases',
      title: 'Common Use Cases',
      content: `GPT-4 can be applied in various scenarios:
      • Content generation and editing
      • Code development and debugging
      • Language translation and localization
      • Educational assistance and tutoring
      • Research and analysis`,
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      content: `To get the most out of GPT-4:
      • Be specific and clear in your prompts
      • Provide relevant context
      • Use system messages effectively
      • Implement proper error handling
      • Monitor and optimize token usage`,
    },
    {
      id: 'implementation',
      title: 'Implementation Guide',
      content: `Follow these steps to integrate GPT-4:
      1. Sign up for API access
      2. Set up authentication
      3. Choose the appropriate model
      4. Implement rate limiting
      5. Handle responses effectively`,
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: `GPT-4 is a powerful tool that can significantly enhance your applications. 
      By following these guidelines and best practices, you can effectively leverage its capabilities 
      while maintaining reliability and cost-effectiveness.`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <article className="lg:col-span-3 rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <ArticleContent sections={sections} />
        </article>
        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <TableOfContents sections={sections} />
          </div>
        </aside>
      </div>
    </div>
  );
}