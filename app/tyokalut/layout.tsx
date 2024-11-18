import { PageBackground } from '@/components/page-background';

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageBackground pattern="grid">
      {children}
    </PageBackground>
  );
}