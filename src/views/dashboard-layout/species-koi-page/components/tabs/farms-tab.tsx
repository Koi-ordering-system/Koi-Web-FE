import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ScrollArea,
  Separator,
} from "@/components/ui";
import { Map } from "lucide-react";

interface Farm {
  name: string;
}

interface FarmsTabProps {
  farms: Farm[];
  name: string;
}

export function FarmsTab(props: FarmsTabProps) {
  const { farms, name } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Farms</CardTitle>
        <CardDescription>Farms that breed {name}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {farms.map((farm, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <Map className="w-4 h-4 mr-2" />
                <p>{farm.name}</p>
              </div>
              {index < farms.length - 1 && <Separator className="my-2" />}
            </React.Fragment>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
