export async function generateStaticParams() {
  // Mock data - replace with actual data fetching
  const slugs = [
    'openai-gpt5-development',
    'ai-regulation-eu',
    'latest-typescript-features'
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}