import { Button } from "@/components/ui";
import PlanList from "@/views/main-layout/home-page/components/plan-list";
import { useNavigate } from "react-router-dom";

const PlanTrip = () => {
  const navigate = useNavigate();

  return (
    <section className="container mb-28">
      <div className="flex items-center justify-between">
        <div>
          <h1 className=" text-destructive">Plan your perfect trip</h1>
          <h6 className="font-semibold text-muted-foreground">
            Search farm you want to try most
          </h6>
        </div>

        <Button onClick={() => navigate("/service")}>
          <span>Start Planning</span>
        </Button>
      </div>

      <PlanList />
    </section>
  );
};

export default PlanTrip;
