import { DataTable } from "@/components/common";
import { KoisResponse } from "@/domains/models/kois";
import { koiColumns } from "@/views/dashboard-layout/koi-page/components/koi-column";
import React from "react";
import { useNavigate } from "react-router-dom";

interface KoiTableProps {
  data: KoisResponse[];
}

const KoiTable: React.FC<KoiTableProps> = ({ data }) => {
  const navigation = useNavigate();

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const handleEdit = (data: KoisResponse) => {
    navigation(`${data.id}/edit`);
  };

  return (
    <div>
      <DataTable
        data={data}
        columns={koiColumns({
          getId: (id) => navigation(`/dashboard/koi/${id}`),
          editData: handleEdit,
          deleteData: handleDelete,
        })}
      />
    </div>
  );
};

export default KoiTable;
