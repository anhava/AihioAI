import { PageBackground } from '@/components/page-background';

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageBackground pattern="dots">
      {children}
    </PageBackground>
  );
}