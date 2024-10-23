import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
} from "@/components/ui";

interface FarmHeaderProps {
  name: string;
  address: string;
  rating: number;
  owner: string;
  description: string;
}

export function FarmHeader({
  name,
  address,
  rating,
  owner,
  description,
}: FarmHeaderProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{address}</CardDescription>
          </div>
          <Badge variant="outline" className="flex items-center p-4">
            <Star className="w-4 h-4 mr-1 fill-yellow-400 stroke-yellow-400" />
            {rating.toFixed(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-sm text-muted-foreground">Owner: {owner}</p>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
