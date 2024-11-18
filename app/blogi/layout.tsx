import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | AI Hub',
  description: 'Expert insights, tutorials, and best practices in AI development.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}