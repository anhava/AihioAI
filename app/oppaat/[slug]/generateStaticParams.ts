export async function generateStaticParams() {
  // Mock data - replace with actual data fetching
  const slugs = [
    'machine-learning-intro',
    'advanced-neural-networks',
    'getting-started-react'
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}