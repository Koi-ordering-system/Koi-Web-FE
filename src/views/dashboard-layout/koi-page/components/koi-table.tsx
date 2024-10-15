import { DataTable } from "@/components/common";
import { KoisResponse } from "@/domains/models/kois";
import { koiColumns } from "@/views/dashboard-layout/koi-page/components/koi-column";
import React from "react";

interface KoiTableProps {
  data: KoisResponse[];
}

const KoiTable: React.FC<KoiTableProps> = ({ data }) => {
  return (
    <div>
      <DataTable data={data} columns={koiColumns} />
    </div>
  );
};

export default KoiTable;
