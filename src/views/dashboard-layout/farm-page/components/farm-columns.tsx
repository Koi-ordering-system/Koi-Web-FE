import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { FarmsResponse } from "@/domains/models/farms";
import { ColumnDef } from "@tanstack/react-table";
import { Book, MoreHorizontal, Pencil, Trash } from "lucide-react";

interface FarmColumnsProps {
  getId: (id: string) => void;
}

export const farmColumns = ({
  getId,
}: FarmColumnsProps): ColumnDef<FarmsResponse>[] => [
  {
    header: "ID",
  },
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
    header: "Rating",
    accessorKey: "rating",
  },

  {
    id: "actions",
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
              <DropdownMenuItem className="space-x-4">
                <Pencil className="size-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="space-x-4">
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
