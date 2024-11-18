import { Metadata } from 'next';
import { ContentLayout } from '@/components/content/content-layout';
import { ContentGrid } from '@/components/content/content-grid';
import { ContentSection } from '@/components/content/content-section';
import { ServiceCard } from '@/components/service-card';

export const metadata: Metadata = {
  title: 'AI Services | AI Hub',
  description: 'Explore our curated collection of AI services and tools.',
};

const services = [
  {
    name: 'ChatGPT',
    description: 'Advanced language model for natural conversations and text generation.',
    rating: 4.5,
    logo: '/images/chatgpt-logo.png',
    model: 'GPT-4',
    isFree: false,
    url: 'https://chat.openai.com',
  },
  {
    name: 'DALL·E',
    description: 'AI-powered image generation from textual descriptions.',
    rating: 4.0,
    logo: '/images/dalle-logo.png',
    model: 'DALL·E 2',
    isFree: false,
    url: 'https://labs.openai.com',
  },
  // Add more services...
];

export default function AIServicesPage() {
  return (
    <ContentLayout
      header={{
        title: "AI Services",
        description: "Discover and compare the best AI services and tools for your needs.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
      }}
    >
      <ContentSection>
        <ContentGrid>
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              {...service}
            />
          ))}
        </ContentGrid>
      </ContentSection>
    </ContentLayout>
  );
}