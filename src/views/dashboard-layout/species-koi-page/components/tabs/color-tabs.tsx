import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
} from "@/components/ui";
import { Color } from "@/domains/models/species-kois";

interface ColorTabProps {
  colors: Color[];
  name: string;
}

export function ColorTab(props: ColorTabProps) {
  const { colors, name } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Varieties</CardTitle>
        <CardDescription>Available colors for {name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <Badge key={index} variant="secondary">
              {color.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
