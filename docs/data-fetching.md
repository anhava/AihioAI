# Data Fetching Implementation Guide

## Setting Up Environment Variables

```env
WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
WORDPRESS_AUTH_TOKEN=your_auth_token_if_needed
```

## Implementing Data Fetching

1. Create a reusable GraphQL client:

```typescript
// lib/wordpress.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WORDPRESS_API_URL!;
const token = process.env.WORDPRESS_AUTH_TOKEN;

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});
```

2. Implement type-safe fetching functions:

```typescript
// lib/api.ts
import { graphqlClient } from './wordpress';
import { ArticleQuery, ServiceQuery, GlossaryQuery } from './queries';
import { Article, Service, GlossaryTerm } from './types';

export async function fetchArticles(category?: string): Promise<Article[]> {
  const { posts } = await graphqlClient.request(ArticleQuery, {
    first: 100,
    category,
  });
  return posts.nodes;
}

export async function fetchServices(): Promise<Service[]> {
  const { aiServices } = await graphqlClient.request(ServiceQuery, {
    first: 100,
  });
  return aiServices.nodes;
}

export async function fetchGlossaryTerms(category?: string): Promise<GlossaryTerm[]> {
  const { glossaryTerms } = await graphqlClient.request(GlossaryQuery, {
    first: 100,
    category,
  });
  return glossaryTerms.nodes;
}
```

3. Use in Next.js pages:

```typescript
// app/articles/page.tsx
import { fetchArticles } from '@/lib/api';

export default async function ArticlesPage() {
  const articles = await fetchArticles();
  // Render articles...
}
```

## Error Handling and Caching

```typescript
// lib/api.ts
import { cache } from 'react';

export const fetchArticles = cache(async (category?: string) => {
  try {
    const { posts } = await graphqlClient.request(ArticleQuery, {
      first: 100,
      category,
    });
    return posts.nodes;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw new Error('Failed to fetch articles');
  }
});
```