import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NewsletterForm } from '@/components/newsletter-form';
import { 
  Github, 
  Twitter, 
  Linkedin,
  BookOpen,
  Code,
  Bot,
  Users
} from 'lucide-react';

const footerLinks = {
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Guides', href: '/oppaat' },
    { name: 'Blog', href: '/blogi' },
    { name: 'API Reference', href: '/docs/api' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/partners' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'License', href: '/license' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  ],
};

const features = [
  {
    name: 'Comprehensive Guides',
    description: 'Detailed tutorials and documentation',
    icon: BookOpen,
  },
  {
    name: 'Code Examples',
    description: 'Ready-to-use implementation samples',
    icon: Code,
  },
  {
    name: 'AI Services',
    description: 'Curated list of AI tools and services',
    icon: Bot,
  },
  {
    name: 'Community',
    description: 'Join our growing developer community',
    icon: Users,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <div className="grid gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-muted-foreground">
                Get the latest updates on AI development and tools
              </p>
            </div>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="flex gap-3">
                  <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{feature.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="grid gap-8 border-t py-8 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow us</h3>
            <div className="mt-4 flex gap-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}