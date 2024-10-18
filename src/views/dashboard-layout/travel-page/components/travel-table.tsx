import { DataTable } from "@/components/common";
import { TravelsResponse } from "@/domains/models/travels/travels.response";
import { TravelColumns } from "@/views/dashboard-layout/travel-page/components/travel-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface TravelTableProps {
  data: TravelsResponse[];
}

const TravelTable: React.FC<TravelTableProps> = ({ data }) => {
  const navigation = useNavigate();

  return (
    <>
      <DataTable
        data={data}
        columns={TravelColumns({
          getId: (id: string) => navigation(`/dashboard/travel/${id}`),
          deleteData: (id: string) => console.log(`Delete ${id}`),
          editData: (data: TravelsResponse) => console.log(`Edit ${data.id}`),
        })}
      />
    </>
  );
};

export default TravelTable;
