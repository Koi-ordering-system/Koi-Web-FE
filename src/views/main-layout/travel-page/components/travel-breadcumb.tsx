import { Separator } from "@/components/ui";
import { useNavigate } from "react-router-dom";

const TravelBreadcumb = ({ travelName }: { travelName?: string }) => {
  const navigator = useNavigate();

  return (
    <div>
      <div className="flex items-center ">
        <div className="flex items-center">
          <span
            className="text-2xl font-bold text-muted-foreground hover:cursor-pointer hover:text-muted-foreground/70 hover:underline"
            onClick={() => navigator("/")}
          >
            Home
          </span>
          <span className="mx-2 text-2xl text-muted-foreground ">/</span>
        </div>
        {travelName ?
          <div className="flex items-center">
            <span
              onClick={() => navigator("/travel")}
              className="text-2xl font-bold text-muted-foreground hover:cursor-pointer hover:text-muted-foreground/70 hover:underline">
              Travel
            </span>
            <span className="mx-2 text-2xl text-muted-foreground ">/</span>
            <span className="text-2xl font-bold text-primary hover:cursor-pointer hover:text-primary/70 hover:underline">
              {travelName}
            </span>
          </div> :
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary hover:cursor-pointer hover:text-primary/70 hover:underline">
              Travel
            </span>
          </div>
        }
      </div>
      <Separator className="w-[10%] mt-4 border border-primary rounded-sm" />
    </div>
  );
};

export default TravelBreadcumb;
