import { DataTable } from "@/components/common";
import { SpeciesResponse } from "@/domains/models/species";
import { SpeciesColumn } from "@/views/dashboard-layout/species-page/components/species-column";
import { useNavigate } from "react-router-dom";

interface SpeciesTableProps {
  data: SpeciesResponse[];
}

const SpeciesTable = ({ data }: SpeciesTableProps) => {
  const navigation = useNavigate();
  return (
    <div>
      <DataTable
        data={data}
        columns={SpeciesColumn({
          editData: (data) => navigation(`${data.id}/edit`),
          deleteData: (id) => console.log({ id }),
        })}
      />
    </div>
  );
};

export default SpeciesTable;
