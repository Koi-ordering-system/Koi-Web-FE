import assert from "@/assets";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui";
import useSequentialReveal from "@/hooks/use-sequential-reveal";

interface ListContent {
  image: string;
  description: string;
}

const listContent: ListContent[] = [
  {
    image: assert.logoIcon.friendly,
    description: "Consultants and scheduling support",
  },
  {
    image: assert.logoIcon.checkTicker,
    description: "Checking in at the airport",
  },
  {
    image: assert.logoIcon.farm,
    description: "Visiting and purchasing fish at the farm",
  },
  {
    image: assert.logoIcon.truck,
    description: "Flying back, and we will deliver the fish to you",
  },
];

const TripItinerary = () => {
  const visiable = useSequentialReveal(2);

  return (
    <div className="container relative py-12 my-8 overflow-visible">
      {visiable > 0 && (
        <div className="relative h-1 bg-muted animate-float-in">
          <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
            <span className="px-2 text-5xl font-semibold bg-background text-destructive">
              Trip Itinerary
            </span>
          </div>
        </div>
      )}
      {visiable > 0 && (
        <div className="my-10 font-semibold text-center animate-float-in">
          Here, we will outline the milestones of your trip to the farm in
          Japan.
        </div>
      )}
      <div className="relative">
        <div className="relative">
          {visiable > 0 && (
            <img
              src={assert.trip}
              alt="trip"
              className="object-cover w-full h-full rounded-lg animate-float-in"
            />
          )}

          <div className="absolute bottom-0 w-full -mb-16 transform -translate-x-1/2 left-1/2 md:w-4/5 lg:w-3/5 ">
            <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-4">
              {visiable > 0 &&
                listContent.map((content, index) => (
                  <Card key={index}>
                    <CardHeader className="grid place-content-center h-28">
                      <img
                        src={content.image}
                        alt="icon"
                        className="object-cover text-background bg-background size-20"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{content.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripItinerary;
