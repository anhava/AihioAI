# GraphQL Query Examples

## Fetching Articles
```graphql
query FetchArticles($first: Int!, $category: String) {
  posts(
    first: $first,
    where: { categoryName: $category }
  ) {
    nodes {
      id
      title
      slug
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      acf {
        difficulty
        readingTime
        aiModel
        serviceProvider
      }
    }
  }
}
```

## Fetching AI Services
```graphql
query FetchServices($first: Int!) {
  aiServices(first: $first) {
    nodes {
      id
      title
      slug
      content
      acf {
        rating
        serviceProvider
        pricingTiers {
          tierName
          price
        }
        features
        useCases
      }
    }
  }
}
```

## Fetching Glossary Terms
```graphql
query FetchGlossaryTerms($first: Int!, $category: String) {
  glossaryTerms(
    first: $first,
    where: { termCategory: $category }
  ) {
    nodes {
      id
      title
      content
      acf {
        englishTerm
        category
        examples
        relatedTerms
      }
    }
  }
}
```