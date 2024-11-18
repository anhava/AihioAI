import { GlossaryTerm } from '@/lib/wordpress-types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface GlossaryListProps {
  terms: GlossaryTerm[];
}

export function GlossaryList({ terms }: GlossaryListProps) {
  // Group terms by category
  const groupedTerms = terms.reduce((acc, term) => {
    const category = term.acf.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedTerms).map(([category, categoryTerms]) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {categoryTerms.map((term) => (
              <AccordionItem key={term.id} value={term.id} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{term.title}</span>
                      <span className="text-sm text-muted-foreground">
                        ({term.acf.englishTerm})
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">{term.content}</p>
                  
                  {term.acf.examples.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Esimerkkejä:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {term.acf.examples.map((example, index) => (
                          <li key={index} className="text-muted-foreground">
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {term.acf.relatedTerms.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Liittyvät termit:</h4>
                      <div className="flex flex-wrap gap-2">
                        {term.acf.relatedTerms.map((relatedTerm) => (
                          <Badge key={relatedTerm} variant="secondary">
                            {relatedTerm}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}