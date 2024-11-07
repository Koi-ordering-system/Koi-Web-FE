import { DataTable } from "@/components/common";
import { FarmsResponse } from "@/domains/models/farms";
import { farmApi } from "@/domains/services/farms/farms.service";
import { useToast } from "@/hooks";
import { farmColumns } from "@/views/dashboard-layout/farm-page/components/farm-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface FarmTableProps {
  data: FarmsResponse[];
  isLoading: boolean;
  refetch: () => void;
}

const FarmTable: React.FC<FarmTableProps> = ({ data, refetch }) => {
  const navigation = useNavigate();
  const { toast } = useToast();

  const handleGetId = (id: string) => {
    navigation(`/dashboard/farm/${id}`);
  };

  const handleDelete = async (id: string) => {
    const response = await farmApi.deleteFarm(id);

    if (response === true) {
      toast({
        title: "Success",
        description: "Farm deleted successfully",
      });

      refetch();
    } else {
      toast({
        title: "Error",
        description: "Failed to delete farm",
      });
    }
  };

  const handleEdit = (data: FarmsResponse) => {
    navigation(`${data.id}/edit`, { state: data });
    return;
  };

  return (
    <div>
      <DataTable
        columns={farmColumns({
          getId: handleGetId,
          deleteData: handleDelete,
          editData: handleEdit,
        })}
        data={data}
      />
    </div>
  );
};

export default FarmTable;
