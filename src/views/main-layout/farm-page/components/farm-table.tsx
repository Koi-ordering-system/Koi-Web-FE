import { DataTable } from "@/components/common";
import { FarmsResponse } from "@/domains/models/farms";
import { farmColumns } from "./farm-columns";
import React from "react";

interface FarmTableProps {
  data: FarmsResponse[];
  isLoading: boolean;
}

const FarmTable: React.FC<FarmTableProps> = ({ data }) => {

  return (
    <div>
      <DataTable
        columns={farmColumns()}
        data={data}
      />
    </div>
  );
};

export default FarmTable;
