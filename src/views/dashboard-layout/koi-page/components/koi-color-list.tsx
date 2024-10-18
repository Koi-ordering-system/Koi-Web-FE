import { Badge } from "@/components/ui/badge";

interface KoiColorsListProps {
  colors: string[];
}

export function KoiColorsList({ colors }: KoiColorsListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color, index) => (
        <Badge key={index} variant="secondary">
          {color}
        </Badge>
      ))}
    </div>
  );
}
