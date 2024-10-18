import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Farm {
  farmKoiId: string;
  farmId: string;
  name: string;
}

interface FarmsListProps {
  farms: Farm[];
}

export function FarmsList({ farms }: FarmsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Associated Farms</CardTitle>
        <CardDescription>Farms where this Koi can be found</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {farms.map((farm) => (
              <div key={farm.farmKoiId} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>
                    {farm.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {farm.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Farm ID: {farm.farmId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
