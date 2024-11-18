interface Section {
  id: string;
  title: string;
  content: string;
}

interface GuideContentProps {
  sections: Section[];
}

export function GuideContent({ sections }: GuideContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-m-20">
          <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4">
            {section.title}
          </h2>
          <div className="space-y-4">
            {section.content.split('\n').map((paragraph, index) => (
              <p key={index} className="leading-7 [&:not(:first-child)]:mt-6">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}