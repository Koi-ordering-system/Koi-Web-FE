import { OrdersServiceResponse } from "@/domains/models/orders";
import { ColumnDef } from "@tanstack/react-table";

export const orderServiceColumn = (): ColumnDef<OrdersServiceResponse>[] => [
  {
    header: "Farm Name",
    accessorKey: "farmName",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Trip Status",
    accessorKey: "tripStatusEnum",
  },
  {
    header: "Start Date",
    accessorKey: "startDate",
  },
];
