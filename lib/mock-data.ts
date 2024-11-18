export const mockGlossaryTerms = [
  {
    id: 1,
    title: 'Artificial Intelligence (AI)',
    content: 'The simulation of human intelligence by machines, particularly computer systems.',
    category: 'fundamentals',
    relatedTerms: ['Machine Learning', 'Deep Learning']
  },
  {
    id: 2,
    title: 'Machine Learning (ML)',
    content: 'A subset of AI that enables systems to learn and improve from experience without explicit programming.',
    category: 'fundamentals',
    relatedTerms: ['Deep Learning', 'Neural Networks']
  },
  {
    id: 3,
    title: 'Neural Networks',
    content: 'Computing systems inspired by biological neural networks, forming the basis of deep learning algorithms.',
    category: 'technical',
    relatedTerms: ['Deep Learning', 'Artificial Intelligence']
  },
  {
    id: 4,
    title: 'Natural Language Processing (NLP)',
    content: 'A branch of AI that helps computers understand, interpret, and manipulate human language.',
    category: 'technical',
    relatedTerms: ['Machine Learning', 'Deep Learning']
  },
  {
    id: 5,
    title: 'Deep Learning',
    content: 'A subset of machine learning based on artificial neural networks with multiple layers.',
    category: 'technical',
    relatedTerms: ['Neural Networks', 'Machine Learning']
  }
];

export const mockWordPressData = {
  posts: {
    nodes: [
      {
        id: '1',
        title: 'Getting Started with GPT-4',
        slug: 'getting-started-gpt4',
        excerpt: 'Learn how to integrate and utilize OpenAI\'s GPT-4 in your applications.',
        date: '2024-03-15T10:00:00',
        featuredImage: {
          node: {
            sourceUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
            altText: 'AI Language Model Visualization'
          }
        },
        categories: {
          nodes: [
            {
              name: 'Tutorials',
              slug: 'tutorials'
            }
          ]
        },
        acf: {
          difficulty: 'Beginner',
          readingTime: '5 minutes',
          aiModel: 'GPT-4',
          serviceProvider: 'OpenAI'
        }
      },
      {
        id: '2',
        title: 'Advanced AI Model Fine-tuning',
        slug: 'advanced-ai-model-fine-tuning',
        excerpt: 'Deep dive into the process of fine-tuning language models for specific use cases.',
        date: '2024-03-14T14:30:00',
        featuredImage: {
          node: {
            sourceUrl: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
            altText: 'Neural Network Visualization'
          }
        },
        categories: {
          nodes: [
            {
              name: 'Advanced',
              slug: 'advanced'
            }
          ]
        },
        acf: {
          difficulty: 'Advanced',
          readingTime: '15 minutes',
          aiModel: 'Multiple',
          serviceProvider: 'Various'
        }
      }
    ]
  }
};