import { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';

export const metadata: Metadata = {
  title: 'Getting Started with React | AI Hub',
  description: 'Learn the fundamentals of React and build your first application.',
};

const tableOfContents = {
  items: [
    { title: 'Introduction', id: 'introduction' },
    { title: 'Prerequisites', id: 'prerequisites' },
    { title: 'Setting Up Your Environment', id: 'setup', level: 1 },
    { title: 'Understanding Components', id: 'components' },
    { title: 'State and Props', id: 'state-and-props' },
    { title: 'Handling Events', id: 'events' },
    { title: 'Next Steps', id: 'next-steps' },
  ],
};

export default function GettingStartedReact() {
  return (
    <ArticleLayout
      type="guide"
      title="Getting Started with React"
      description="A comprehensive guide to help you start building applications with React."
      author={{
        name: "Sarah Chen",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        role: "Senior Frontend Developer"
      }}
      date="2024-03-15"
      readingTime="15 min"
      difficulty="beginner"
      tableOfContents={tableOfContents}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          React is a popular JavaScript library for building user interfaces. 
          This guide will help you understand the core concepts and get started 
          with your first React application.
        </p>
      </section>

      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <ul>
          <li>Basic understanding of HTML and CSS</li>
          <li>Familiarity with JavaScript fundamentals</li>
          <li>Node.js installed on your computer</li>
        </ul>
      </section>

      <section id="setup">
        <h2>Setting Up Your Environment</h2>
        <p>
          Let's start by creating a new React project using Vite:
        </p>
        <pre><code>{`npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install`}</code></pre>
      </section>

      <section id="components">
        <h2>Understanding Components</h2>
        <p>
          Components are the building blocks of React applications. Here's a simple component:
        </p>
        <pre><code>{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}`}</code></pre>
      </section>

      <section id="state-and-props">
        <h2>State and Props</h2>
        <p>
          React components can have state and receive props:
        </p>
        <pre><code>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code></pre>
      </section>

      <section id="events">
        <h2>Handling Events</h2>
        <p>
          React provides a straightforward way to handle user interactions:
        </p>
        <pre><code>{`function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return <button onClick={handleClick}>Click me</button>;
}`}</code></pre>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the basics, here are some topics to explore next:
        </p>
        <ul>
          <li>React Router for navigation</li>
          <li>Managing state with Context or Redux</li>
          <li>Working with APIs and data fetching</li>
          <li>Component styling approaches</li>
        </ul>
      </section>
    </ArticleLayout>
  );
}