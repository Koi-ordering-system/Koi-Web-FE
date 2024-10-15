import assert from "@/assets";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui";

interface ListContent {
  image: string;
  description: string;
}

const listContent: ListContent[] = [
  {
    image: assert.trip,
    description: "Consultants and scheduling support",
  },
  {
    image: assert.trip,
    description: "Checking in at the airport",
  },
  {
    image: assert.trip,
    description: "Visiting and purchasing fish at the farm",
  },
  {
    image: assert.trip,
    description: "Flying back, and we will deliver the fish to you",
  },
];

const TripItinerary = () => {
  return (
    <div className="container overflow-hidden my-36">
      <div className="relative h-1 overflow-visible bg-primary">
        <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2 ">
          <span className="px-2 text-5xl font-semibold bg-background text-destructive">
            Trip Itinerary
          </span>
        </div>
      </div>
      <div className="my-10 font-semibold text-center">
        Here, we will outline the milestones of your trip to the farm in Japan.
      </div>
      <div className="relative w-full ">
        <img src={assert.trip} alt="trip" />
        <div className="absolute flex flex-1">
          {listContent.map((content, index) => (
            <Card key={index}>
              <CardHeader></CardHeader>
              <CardContent>
                <CardDescription>{content.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripItinerary;
