import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/graphql';

export const graphqlClient = new GraphQLClient(endpoint);

export async function fetchPosts(first: number = 10) {
  const query = `
    query FetchPosts($first: Int!) {
      posts(first: $first) {
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
  `;

  return graphqlClient.request(query, { first });
}

export async function fetchPost(slug: string) {
  const query = `
    query FetchPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        date
        modified
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
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
          codeExamples
          apiEndpoints
          prerequisites
          relatedResources
        }
      }
    }
  `;

  return graphqlClient.request(query, { slug });
}