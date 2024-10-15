import assert from "@/assets";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import useSequentialReveal from "@/hooks/use-sequential-reveal";
import { ArrowBigRight } from "lucide-react";

const PlanCard = () => {
  const visiable = useSequentialReveal(1);

  if (visiable > 0)
    return (
      <Card className="relative flex items-center">
        <CardHeader>
          <img src={assert.fish} className="object-cover rounded-sm size-44" />
        </CardHeader>
        <CardContent>
          <CardTitle>Plan your perfect trip</CardTitle>
          <CardDescription>Search farm you want to try most</CardDescription>
        </CardContent>
        <CardFooter className="absolute bottom-0 right-0">
          <Button className="space-x-2">
            <span>View More</span>
            <ArrowBigRight />
          </Button>
        </CardFooter>
      </Card>
    );
};

export default PlanCard;
