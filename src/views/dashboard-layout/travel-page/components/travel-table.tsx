import { DataTable } from "@/components/common";
import { TravelsResponse } from "@/domains/models/travels/travels.response";
import { travelApi } from "@/domains/services/travel/travel.service";
import { useToast } from "@/hooks";
import { TravelColumns } from "@/views/dashboard-layout/travel-page/components/travel-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface TravelTableProps {
  data: TravelsResponse[];
}

const TravelTable: React.FC<TravelTableProps> = ({ data }) => {
  const { toast } = useToast();
  const navigation = useNavigate();

  const handleDelete = async (id: string) => {
    const response: boolean | undefined = await travelApi.deleteTravel(id);

    if (response === true) {
      toast({
        title: "Delete Travel",
        description: "Delete Travel successfully",
      });
    } else {
      toast({
        title: "Delete Travel",
        description: "Delete Travel failed",
      });
    }
  };

  return (
    <>
      <DataTable
        data={data}
        columns={TravelColumns({
          getId: (id: string) => navigation(`/dashboard/travel/${id}`),
          deleteData: (id: string) => handleDelete(id),
          editData: (data: TravelsResponse) =>
            navigation(`${data.id}/edit`, { state: data }),
        })}
      />
    </>
  );
};

export default TravelTable;
