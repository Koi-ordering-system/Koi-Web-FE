import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FarmTripCard } from "@/views/dashboard-layout/farm-page/components/farm-trip-card";

interface Trip {
  id: string;
  farmId: string;
  farmName: string;
  days: number;
  price: number;
}

interface TripSectionProps {
  trips: Trip[];
}

export function TripSection({ trips }: TripSectionProps) {
  const [showAllTrips, setShowAllTrips] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Trips</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trips.slice(0, showAllTrips ? undefined : 3).map((trip) => (
            <FarmTripCard key={trip.id} trip={trip} />
          ))}
        </div>
        {trips.length > 3 && (
          <Button
            variant="link"
            onClick={() => setShowAllTrips(!showAllTrips)}
            className="mt-4"
          >
            {showAllTrips ? "Show Less" : "Show All Trips"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
