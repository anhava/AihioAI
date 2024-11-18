import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, BookOpen, MessageSquare, Star } from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '2,853',
    description: 'Active users this month',
    icon: Users,
  },
  {
    title: 'Articles Read',
    value: '1,234',
    description: 'Articles viewed this week',
    icon: BookOpen,
  },
  {
    title: 'Comments',
    value: '456',
    description: 'New comments this week',
    icon: MessageSquare,
  },
  {
    title: 'Rating',
    value: '4.8',
    description: 'Average user rating',
    icon: Star,
  },
];

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}