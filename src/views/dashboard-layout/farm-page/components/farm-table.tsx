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

  return (
    <div>
      <DataTable columns={farmColumns({ getId: handleGetId })} data={data} />
    </div>
  );
};

export default FarmTable;
