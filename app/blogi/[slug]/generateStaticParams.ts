export async function generateStaticParams() {
  // Mock data - replace with actual data fetching
  const slugs = [
    'ethical-ai-systems',
    'optimizing-llm',
    'web-performance-best-practices'
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}