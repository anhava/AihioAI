import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TableOfContentsProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Sisällysluettelo</h2>
      <nav className="space-y-1">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            className={cn(
              "w-full justify-start text-left font-normal",
              "hover:bg-muted"
            )}
            asChild
          >
            <a href={`#${section.id}`}>{section.title}</a>
          </Button>
        ))}
      </nav>
    </Card>
  );
}