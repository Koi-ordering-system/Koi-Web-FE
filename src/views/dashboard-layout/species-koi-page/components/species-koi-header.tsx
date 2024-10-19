import {
  Button,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui";
import { SpeciesKoiDetailResponse } from "@/domains/models/species-kois";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface KoiHeaderProps {
  id: string;
  name: string;
  description: string;
  data: SpeciesKoiDetailResponse;
}

export function KoiHeader({ name, description, data }: KoiHeaderProps) {
  const navigate = useNavigate();
  return (
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="text-3xl font-bold">{name}</CardTitle>
          <CardDescription className="w-[80%]">{description}</CardDescription>
        </div>
        <Button
          className="space-x-2"
          onClick={() => navigate(`edit`, { state: data })}
        >
          <Pencil className="size-4" />
          <span className="text-sm">Edit</span>
        </Button>
      </div>
    </CardHeader>
  );
}
