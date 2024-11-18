import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started with Machine Learning | AI Hub',
  description: 'A comprehensive introduction to machine learning concepts and practical implementations.',
};

export default function MachineLearningGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}