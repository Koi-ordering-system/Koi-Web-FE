import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
} from "@/components/ui";

interface ColorTabProps {
  colors: string[];
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
              {color}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
