import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, User } from "lucide-react";

interface GuideCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  author: string;
  date: string;
}

export function GuideCard({
  id,
  title,
  description,
  category,
  readingTime,
  author,
  date,
}: GuideCardProps) {
  return (
    <Link href={`/oppaat/${id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{category}</Badge>
          </div>
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(date).toLocaleDateString("fi-FI")}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}