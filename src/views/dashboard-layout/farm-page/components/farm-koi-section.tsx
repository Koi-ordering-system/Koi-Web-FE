import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FarmKoiCard } from "@/views/dashboard-layout/farm-page/components/farm-koi-card";

interface Koi {
  id: string;
  name: string;
  quantity: number;
  imageUrls: string[];
}

interface KoiSectionProps {
  kois: Koi[];
}

export function KoiSection({ kois }: KoiSectionProps) {
  const [showAllKois, setShowAllKois] = useState(false);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Kois</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kois.slice(0, showAllKois ? undefined : 3).map((koi) => (
            <FarmKoiCard key={koi.id} koi={koi} />
          ))}
        </div>
        {kois.length > 3 && (
          <Button
            variant="link"
            onClick={() => setShowAllKois(!showAllKois)}
            className="mt-4"
          >
            {showAllKois ? "Show Less" : "Show All"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
