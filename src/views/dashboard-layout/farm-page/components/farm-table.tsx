import { DataTable } from "@/components/common";
import { FarmsResponse } from "@/domains/models/farms";
import { farmColumns } from "@/views/dashboard-layout/farm-page/components/farm-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface FarmTableProps {
  data: FarmsResponse[];
  isLoading: boolean;
}

const FarmTable: React.FC<FarmTableProps> = ({ data }) => {
  const navigation = useNavigate();

  const handleGetId = (id: string) => {
    navigation(`/dashboard/farm/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const handleEdit = (data: FarmsResponse) => {
    console.log(data);
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
