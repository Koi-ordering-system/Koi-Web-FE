import { DataTable } from "@/components/common";
import { OrdersServiceResponse } from "@/domains/models/orders";
import { orderServiceColumn } from "@/views/dashboard-layout/order-page/components/order-columns";
import React from "react";

interface OrderTableProps {
  data: OrdersServiceResponse[];
}

const OrderTable: React.FC<OrderTableProps> = ({ data }) => {
  return (
    <div>
      <DataTable data={data} columns={orderServiceColumn()} />
    </div>
  );
};

export default OrderTable;
