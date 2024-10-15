import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { FarmsResponse } from "@/domains/models/farms";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const farmColumns: ColumnDef<FarmsResponse>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Owner",
    accessorKey: "owner",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Rating",
    accessorKey: "rating",
  },

  {
    id: "actions",
    cell: (row) => {
      console.log(row);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup></DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
