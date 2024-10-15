import { DataTable } from "@/components/common";
import { SpeciesResponse } from "@/domains/models/species";
import { SpeciesColumn } from "@/views/dashboard-layout/species-page/components/species-column";

interface SpeciesTableProps {
  data: SpeciesResponse[];
}

const SpeciesTable = ({ data }: SpeciesTableProps) => {
  return (
    <div>
      <DataTable data={data} columns={SpeciesColumn} />
    </div>
  );
};

export default SpeciesTable;
