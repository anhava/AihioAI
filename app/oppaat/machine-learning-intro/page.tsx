'use client';

import { ArticleLayout } from '@/components/content/article-layout';
import { GuideRating } from '@/components/guides/guide-rating';
import { RelatedGuides } from '@/components/guides/related-guides';
import { GuideNavigation } from '@/components/guides/guide-navigation';
import { CommentSection } from '@/components/comment-section';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const tableOfContents = {
  items: [
    { title: 'Introduction', id: 'introduction' },
    { title: 'Key Concepts', id: 'key-concepts' },
    { title: 'Types of Machine Learning', id: 'types', level: 1 },
    { title: 'Supervised Learning', id: 'supervised', level: 2 },
    { title: 'Unsupervised Learning', id: 'unsupervised', level: 2 },
    { title: 'Reinforcement Learning', id: 'reinforcement', level: 2 },
    { title: 'The ML Pipeline', id: 'pipeline' },
    { title: 'Data Preparation', id: 'data-prep', level: 1 },
    { title: 'Model Training', id: 'training', level: 1 },
    { title: 'Evaluation', id: 'evaluation', level: 1 },
    { title: 'Best Practices', id: 'best-practices' },
    { title: 'Next Steps', id: 'next-steps' },
  ],
};

const relatedGuides = [
  {
    title: 'Deep Learning Fundamentals',
    description: 'Explore neural networks and deep learning architectures.',
    slug: 'deep-learning-fundamentals',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Advanced'
  },
  {
    title: 'Data Preprocessing Guide',
    description: 'Learn essential techniques for preparing ML training data.',
    slug: 'data-preprocessing',
    image: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876',
    category: 'Intermediate'
  }
];

export default function MachineLearningGuide() {
  return (
    <ArticleLayout
      type="guide"
      title="Getting Started with Machine Learning"
      description="A comprehensive introduction to machine learning concepts, algorithms, and practical implementations."
      author={{
        name: "David Wilson",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        role: "ML Engineer"
      }}
      date="2024-03-15"
      readingTime="15 min"
      difficulty="beginner"
      tableOfContents={tableOfContents}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Machine Learning (ML) is a subset of artificial intelligence that enables systems to learn and 
          improve from experience without being explicitly programmed. This guide will introduce you to 
          the fundamental concepts, techniques, and practical applications of machine learning.
        </p>
        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="Machine Learning Concept Visualization"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      <section id="key-concepts">
        <h2>Key Concepts</h2>
        <p>
          Before diving into specific ML types and techniques, let's understand some key concepts:
        </p>
        <ul>
          <li>Models: Mathematical representations of patterns in data</li>
          <li>Features: Input variables used for prediction</li>
          <li>Labels: Output variables we want to predict</li>
          <li>Training: Process of teaching the model using data</li>
          <li>Inference: Using the trained model to make predictions</li>
        </ul>
      </section>

      <section id="types">
        <h2>Types of Machine Learning</h2>
        <p>
          Machine learning can be categorized into three main types, each suited for different kinds of problems:
        </p>
      </section>

      <section id="supervised">
        <h3>Supervised Learning</h3>
        <Card className="p-6 my-4">
          <h4 className="font-semibold mb-2">Key Characteristics:</h4>
          <ul className="space-y-2">
            <li>Uses labeled training data</li>
            <li>Clear input-output pairs</li>
            <li>Examples: Classification, Regression</li>
          </ul>
        </Card>
        <pre><code>{`# Simple classification example
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train the model
model = LogisticRegression()
model.fit(X_train, y_train)`}</code></pre>
      </section>

      <section id="unsupervised">
        <h3>Unsupervised Learning</h3>
        <Card className="p-6 my-4">
          <h4 className="font-semibold mb-2">Key Characteristics:</h4>
          <ul className="space-y-2">
            <li>No labeled training data</li>
            <li>Finds patterns and structures in data</li>
            <li>Examples: Clustering, Dimensionality Reduction</li>
          </ul>
        </Card>
      </section>

      <section id="reinforcement">
        <h3>Reinforcement Learning</h3>
        <Card className="p-6 my-4">
          <h4 className="font-semibold mb-2">Key Characteristics:</h4>
          <ul className="space-y-2">
            <li>Agent learns through interaction with environment</li>
            <li>Rewards and penalties guide learning</li>
            <li>Examples: Game AI, Robotics</li>
          </ul>
        </Card>
      </section>

      <section id="pipeline">
        <h2>The ML Pipeline</h2>
        <p>
          A typical machine learning pipeline consists of several key stages:
        </p>
        <div className="grid gap-4 md:grid-cols-2 my-6">
          <Card className="p-4">
            <h4 className="font-semibold">1. Data Collection</h4>
            <p className="text-sm text-muted-foreground">
              Gathering relevant data from various sources
            </p>
          </Card>
          <Card className="p-4">
            <h4 className="font-semibold">2. Data Preprocessing</h4>
            <p className="text-sm text-muted-foreground">
              Cleaning and preparing data for training
            </p>
          </Card>
          <Card className="p-4">
            <h4 className="font-semibold">3. Feature Engineering</h4>
            <p className="text-sm text-muted-foreground">
              Creating meaningful features from raw data
            </p>
          </Card>
          <Card className="p-4">
            <h4 className="font-semibold">4. Model Training</h4>
            <p className="text-sm text-muted-foreground">
              Training the model on prepared data
            </p>
          </Card>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <ul>
          <li>Start with simple models and gradually increase complexity</li>
          <li>Always split data into training, validation, and test sets</li>
          <li>Monitor for overfitting and underfitting</li>
          <li>Document your process and decisions</li>
          <li>Version control your code and data</li>
        </ul>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the basics, here are some recommended next steps:
        </p>
        <ul>
          <li>Practice with simple datasets (e.g., scikit-learn built-in datasets)</li>
          <li>Explore different algorithms and their use cases</li>
          <li>Join ML communities and forums</li>
          <li>Work on personal projects</li>
        </ul>
      </section>

      <GuideRating
        guideId="machine-learning-intro"
        initialRating={4.5}
        totalRatings={128}
      />

      <RelatedGuides
        guides={relatedGuides}
        currentGuideId="machine-learning-intro"
      />

      <GuideNavigation
        nextGuide={{
          title: "Understanding Neural Networks",
          slug: "neural-networks-basics"
        }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Discussion</h2>
        <CommentSection comments={[]} />
      </div>
    </ArticleLayout>
  );
}