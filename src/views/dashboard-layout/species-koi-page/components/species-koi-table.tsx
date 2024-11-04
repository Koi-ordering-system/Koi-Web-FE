import { DataTable } from "@/components/common";
import { SpeciesKoisResponse } from "@/domains/models/species-kois";
import { speciesKoiApi } from "@/domains/services/species-koi/species-koi.service";
import { useToast } from "@/hooks";
import { SpeciesKoiColumn } from "@/views/dashboard-layout/species-koi-page/components/species-koi-column";
import { useNavigate } from "react-router-dom";

interface SpeciesKoiTableProps {
  data: SpeciesKoisResponse[];
  refetch: () => void;
}

const SpeciesKoiTable = ({ data, refetch }: SpeciesKoiTableProps) => {
  const navigation = useNavigate();
  const { toast } = useToast();

  const handleEdit = (data: SpeciesKoisResponse) => {
    navigation(`${data.id}/edit`, { state: data });
  };

  const handleDelete = async (id: string) => {
    const response = await speciesKoiApi.deleteSpeciesKoi(id);

    if (response === true) {
      toast({
        title: "Success",
        description: "Data deleted successfully",
      });
      refetch();
    } else {
      toast({
        title: "Failed",
        description: "Failed to delete data",
      });
    }
  };

  if (!data) return <div>No Data</div>;

  return (
    <div>
      <DataTable
        data={data}
        columns={SpeciesKoiColumn({
          getId: (id) => navigation(`${id}`),
          editData: handleEdit,
          deleteData: handleDelete,
        })}
      />
    </div>
  );
};

export default SpeciesKoiTable;
