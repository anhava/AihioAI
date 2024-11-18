import { PageBackground } from '@/components/page-background';

export default function AIServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageBackground pattern="waves">
      {children}
    </PageBackground>
  );
}