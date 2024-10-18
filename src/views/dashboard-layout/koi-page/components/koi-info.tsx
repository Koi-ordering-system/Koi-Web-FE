import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KoiColorsList } from "@/views/dashboard-layout/koi-page/components/koi-color-list";

interface KoiInfoProps {
  name: string;
  description: string;
  speciesName: string;
  isMale: boolean;
  minSize: number;
  maxSize: number;
  price: number;
  colors: string[];
}

export function KoiInfo({
  name,
  description,
  speciesName,
  isMale,
  minSize,
  maxSize,
  price,
  colors,
}: KoiInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Details</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Species:</span> {speciesName}
              </li>
              <li>
                <span className="font-medium">Gender:</span>{" "}
                {isMale ? "Male" : "Female"}
              </li>
              <li>
                <span className="font-medium">Size Range:</span> {minSize} -{" "}
                {maxSize} cm
              </li>
              <li>
                <span className="font-medium">Price:</span> $
                {price.toLocaleString()}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Colors</h3>
            <KoiColorsList colors={colors} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
