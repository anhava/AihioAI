'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DashboardTabs() {
  return (
    <Tabs defaultValue="recent" className="space-y-4">
      <TabsList>
        <TabsTrigger value="recent">Recent Activity</TabsTrigger>
        <TabsTrigger value="saved">Saved Items</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
      </TabsList>
      <TabsContent value="recent">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Activity {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Description of activity {i}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="saved">
        <Card>
          <CardHeader>
            <CardTitle>Saved Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your saved items will appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="comments">
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your recent comments will appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}