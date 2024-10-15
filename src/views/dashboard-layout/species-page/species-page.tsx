import { useSpeciesQuery } from "@/domains/stores/hooks/species/use-species";
import SpeciesTable from "@/views/dashboard-layout/species-page/components/species-table";

const SpeciesPage = () => {
  const { data } = useSpeciesQuery({});

  return (
    <div className="px-10">
      <SpeciesTable data={data?.data.items ?? []} />
    </div>
  );
};

export default SpeciesPage;
