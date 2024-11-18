'use client';

import { useState } from 'react';
import { ContentLayout } from '@/components/content/content-layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wand2 } from 'lucide-react';

export default function TextToolPage() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState('rewrite');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = async () => {
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setOutputText(`Processed: ${inputText}`);
    setIsProcessing(false);
  };

  return (
    <ContentLayout
      header={{
        title: "AI Text Tools",
        description: "Enhance your writing with AI-powered text processing tools.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
      }}
    >
      <Card className="p-6">
        <Tabs defaultValue="rewrite" className="space-y-6">
          <TabsList>
            <TabsTrigger value="rewrite">Rewrite</TabsTrigger>
            <TabsTrigger value="summarize">Summarize</TabsTrigger>
            <TabsTrigger value="expand">Expand</TabsTrigger>
          </TabsList>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Select defaultValue="formal">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="en">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Input Text</label>
                <Textarea
                  placeholder="Enter your text here..."
                  className="min-h-[300px] resize-none"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Output</label>
                <Textarea
                  placeholder="Processed text will appear here..."
                  className="min-h-[300px] resize-none"
                  value={outputText}
                  readOnly
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleProcess}
                disabled={!inputText || isProcessing}
                className="gap-2"
              >
                <Wand2 className="h-4 w-4" />
                {isProcessing ? 'Processing...' : 'Process Text'}
              </Button>
            </div>
          </div>
        </Tabs>
      </Card>
    </ContentLayout>
  );
}