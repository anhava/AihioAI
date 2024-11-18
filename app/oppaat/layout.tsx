import { PageBackground } from '@/components/page-background';

export default function GuidesLayout({
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