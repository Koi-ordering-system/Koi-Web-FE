import { DataTable } from "@/components/common";
import { SpeciesKoisResponse } from "@/domains/models/species-kois";
import { SpeciesKoiColumn } from "@/views/dashboard-layout/species-koi-page/components/species-koi-column";
import { useNavigate } from "react-router-dom";

interface SpeciesKoiTableProps {
  data: SpeciesKoisResponse[];
}

const SpeciesKoiTable = ({ data }: SpeciesKoiTableProps) => {
  const navigation = useNavigate();

  const handleEdit = (data: SpeciesKoisResponse) => {
    navigation(`${data.id}/edit`, { state: data });
  };

  if (!data) return <div>No Data</div>;

  return (
    <div>
      <DataTable
        data={data}
        columns={SpeciesKoiColumn({
          getId: (id) => navigation(`${id}`),
          editData: handleEdit,
          deleteData: (id) => console.log({ id }),
        })}
      />
    </div>
  );
};

export default SpeciesKoiTable;
