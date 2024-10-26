import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Trip {
  id: string;
  farmId: string;
  farmName: string;
  days: number;
  price: number;
}

interface FarmTripCardProps {
  trip: Trip;
}

export function FarmTripCard({ trip }: FarmTripCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <h3 className="font-semibold">{trip.farmName}</h3>
          <p className="text-sm text-muted-foreground">{trip.days} days</p>
        </div>
        <div className="text-right">
          <p className="font-bold">${trip.price}</p>
          <Button size="sm">Book Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}
