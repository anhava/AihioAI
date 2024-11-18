export async function generateStaticParams() {
  // Mock data - replace with actual data fetching
  const services = [
    'chatgpt',
    'dalle',
    'stable-diffusion'
  ];

  return services.map((service) => ({
    service,
  }));
}