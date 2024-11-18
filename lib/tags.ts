interface Tag {
  slug: string;
  name: string;
  description: string;
  image: string;
  weight: number;
}

const tags: Tag[] = [
  {
    slug: 'machine-learning',
    name: 'Machine Learning',
    description: 'Explore machine learning concepts, algorithms, and practical implementations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    weight: 5
  },
  {
    slug: 'deep-learning',
    name: 'Deep Learning',
    description: 'Dive into neural networks, architectures, and deep learning applications.',
    image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
    weight: 4
  },
  {
    slug: 'neural-networks',
    name: 'Neural Networks',
    description: 'Understanding artificial neural networks and their applications.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    weight: 4
  },
  {
    slug: 'computer-vision',
    name: 'Computer Vision',
    description: 'Explore image processing, object detection, and visual AI applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    weight: 4
  },
  {
    slug: 'nlp',
    name: 'NLP',
    description: 'Natural Language Processing techniques and applications.',
    image: 'https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2',
    weight: 5
  },
  {
    slug: 'gpt',
    name: 'GPT',
    description: 'Everything about GPT models, fine-tuning, and implementations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    weight: 5
  },
  {
    slug: 'transformers',
    name: 'Transformers',
    description: 'Understanding transformer architectures and their applications.',
    image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
    weight: 4
  },
  {
    slug: 'reinforcement-learning',
    name: 'Reinforcement Learning',
    description: 'Learn about RL algorithms, environments, and applications.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    weight: 3
  },
  {
    slug: 'ai-ethics',
    name: 'AI Ethics',
    description: 'Exploring ethical considerations in AI development and deployment.',
    image: 'https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2',
    weight: 4
  },
  {
    slug: 'data-science',
    name: 'Data Science',
    description: 'Data analysis, visualization, and machine learning applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    weight: 5
  },
  {
    slug: 'pytorch',
    name: 'PyTorch',
    description: 'PyTorch tutorials, best practices, and implementations.',
    image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
    weight: 3
  },
  {
    slug: 'tensorflow',
    name: 'TensorFlow',
    description: 'TensorFlow guides, tutorials, and practical examples.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    weight: 3
  },
  {
    slug: 'bert',
    name: 'BERT',
    description: 'Understanding and implementing BERT models.',
    image: 'https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2',
    weight: 3
  },
  {
    slug: 'robotics',
    name: 'Robotics',
    description: 'AI applications in robotics and automation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    weight: 3
  },
];

export function getAllTags(): Tag[] {
  return tags;
}

export function getTagData(slug: string): Tag | undefined {
  return tags.find(tag => tag.slug === slug);
}

export function getPopularTags(limit: number = 10): Tag[] {
  return [...tags]
    .sort((a, b) => b.weight - a.weight)
    .slice(0, limit);
}