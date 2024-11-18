interface Section {
  id: string;
  title: string;
  content: string;
}

interface ArticleContentProps {
  sections: Section[];
}

export function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-8">Getting Started with GPT-4</h1>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="space-y-4">
            {section.content.split('\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}