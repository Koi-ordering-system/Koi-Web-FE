import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { TravelsResponse } from "@/domains/models/travels/travels.response";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Book, Pencil, Trash } from "lucide-react";

interface TravelColumnProps {
  getId: (id: string) => void;
  editData: (data: TravelsResponse) => void;
  deleteData: (id: string) => void;
}

export const TravelColumns = ({
  getId,
  editData,
  deleteData,
}: TravelColumnProps): ColumnDef<TravelsResponse>[] => [
  {
    header: "No",
    cell: ({ row, table }) => {
      return table.getSortedRowModel().flatRows.indexOf(row) + 1;
    },
  },
  {
    header: "Image",
    cell: ({ row }) => {
      return row.original.farmImages && row.original.farmImages.length > 0 ? (
        <img
          src={row.original.farmImages[0]}
          alt={row.original.farmName}
          className="object-cover w-12 h-12 rounded-md"
        />
      ) : (
        <span>No Image</span>
      );
    },
  },
  {
    header: "Farm Name",
    accessorKey: "farmName",
  },
  {
    header: "Days",
    accessorKey: "days",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    id: "action",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="space-x-4"
                onClick={() => getId(row.original.id)}
              >
                <Book className="size-4" />
                <span>Detail</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="space-x-4"
                onClick={() => {
                  editData(row.original);
                }}
              >
                <Pencil className="size-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="space-x-4"
                onClick={() => {
                  deleteData(row.original.id);
                }}
              >
                <Trash className="size-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
