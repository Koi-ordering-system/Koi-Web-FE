import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Koi {
  id: string;
  name: string;
  quantity: number;
  imageUrls: string[];
}

interface FarmKoiCardProps {
  koi: Koi;
}

export function FarmKoiCard({ koi }: FarmKoiCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{koi.name}</CardTitle>
        <CardDescription>Quantity: {koi.quantity}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 overflow-x-auto">
          <img
            src={koi.imageUrls[0]}
            alt={`${koi.name} image `}
            className="object-cover rounded-md size-10"
          />
        </div>
      </CardContent>
    </Card>
  );
}
