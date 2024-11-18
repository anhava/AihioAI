import { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Star, ExternalLink, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { ServiceRating } from '@/components/service-rating';
import { CommentSection } from '@/components/comment-section';

interface Props {
  params: { service: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'ChatGPT | AI Hub',
    description: 'Comprehensive review and information about OpenAI\'s ChatGPT service.',
  };
}

export default function ServicePage({ params }: Props) {
  const service = {
    name: 'ChatGPT',
    provider: 'OpenAI',
    logo: '/images/chatgpt-logo.png',
    rating: 4.5,
    totalRatings: 1250,
    description: `
      ChatGPT on OpenAI:n kehittämä edistyksellinen kielimalli, joka tarjoaa monipuolisia 
      keskustelu- ja tekstintuottamispalveluita. Palvelu soveltuu niin yksityishenkilöille 
      kuin yrityksillekin.
    `,
    features: [
      'Luonnollinen keskustelu',
      'Koodin generointi ja analysointi',
      'Monikielinen tuki',
      'Kontekstin ymmärrys',
      'API-integraatio mahdollisuus'
    ],
    pricing: {
      free: {
        name: 'Free',
        features: [
          'GPT-3.5 malli',
          'Rajoitettu käyttö',
          'Perustoiminnallisuudet'
        ]
      },
      paid: {
        name: 'Plus',
        price: '20€/kk',
        features: [
          'GPT-4 malli',
          'Prioriteetti käyttö',
          'Laajemmat toiminnallisuudet',
          'Nopeammat vastaukset'
        ]
      }
    },
    useCases: [
      {
        title: 'Sisällöntuotanto',
        description: 'Artikkeleiden, blogitekstien ja somepostausten luonti'
      },
      {
        title: 'Ohjelmointi',
        description: 'Koodin kirjoitus, debuggaus ja optimointi'
      },
      {
        title: 'Opetus',
        description: 'Henkilökohtainen tuutorointi ja oppimisen tuki'
      }
    ],
    comments: [
      {
        id: 1,
        author: 'Mikko Virtanen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mikko',
        content: 'Erinomainen työkalu päivittäiseen käyttöön. Plus-versio on hintansa arvoinen.',
        date: '2024-01-15',
        rating: 5
      }
    ]
  };

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/tekoalypalvelut" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Takaisin palveluihin
          </Link>
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">{service.name}</h1>
              <p className="text-xl text-muted-foreground">by {service.provider}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="font-medium">{service.rating}</span>
                  <span className="text-muted-foreground">
                    ({service.totalRatings} arvostelua)
                  </span>
                </div>
                <Button>Kokeile nyt</Button>
              </div>
            </div>
            <div className="relative h-24 w-24">
              <Image
                src={service.logo}
                alt={service.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <Card className="p-6">
            <p className="text-lg leading-relaxed">{service.description}</p>
          </Card>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Ominaisuudet</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 rounded-lg border bg-card"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Hinnoittelu</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.pricing.free.name}</h3>
                <ul className="space-y-2">
                  {service.pricing.free.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" variant="outline">
                  Aloita ilmaiseksi
                </Button>
              </Card>
              <Card className="p-6 border-primary">
                <h3 className="text-xl font-semibold mb-2">{service.pricing.paid.name}</h3>
                <p className="text-2xl font-bold mb-4">{service.pricing.paid.price}</p>
                <ul className="space-y-2">
                  {service.pricing.paid.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6">
                  Aloita Plus
                </Button>
              </Card>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Käyttökohteet</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.useCases.map((useCase, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Rating Section */}
          <ServiceRating serviceId={params.service} currentRating={service.rating} />

          {/* Comments */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Arvostelut ja kommentit</h2>
            <CommentSection comments={service.comments} />
          </div>
        </div>
      </div>
    </div>
  );
}