import { Metadata } from 'next';
import { DashboardShell } from '@/components/dashboard/shell';
import { DashboardCards } from '@/components/dashboard/cards';
import { DashboardChart } from '@/components/dashboard/chart';
import { DashboardTabs } from '@/components/dashboard/tabs';

export const metadata: Metadata = {
  title: 'Dashboard | AI Hub',
  description: 'Manage your AI Hub account and view analytics',
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-8">
        <DashboardCards />
        <DashboardChart />
        <DashboardTabs />
      </div>
    </DashboardShell>
  );
}