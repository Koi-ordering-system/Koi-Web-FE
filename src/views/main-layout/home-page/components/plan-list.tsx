import PlanCard from "@/views/main-layout/home-page/components/plan-card";

const PlanList = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <PlanCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default PlanList;
