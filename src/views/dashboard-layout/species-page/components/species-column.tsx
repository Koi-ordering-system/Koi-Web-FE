import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { SpeciesResponse } from "@/domains/models/species";
import FormatUtils, { FormatType } from "@/lib/format";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";

interface SpeciesColumnProps {
  editData: (data: SpeciesResponse) => void;
  deleteData: (id: string) => void;
}

export const SpeciesColumn = ({
  editData,
  deleteData,
}: SpeciesColumnProps): ColumnDef<SpeciesResponse>[] => [
  {
    header: "No.",
    accessorFn: (_row, index) => index + 1,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Year of Discovery",
    accessorKey: "yearOfDiscovery",
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
    cell: ({ row }) => {
      return FormatUtils.formatISOString(
        row.original.createdAt,
        FormatType.DATETIME
      );
    },
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
                onClick={() => editData(row.original)}
              >
                <Pencil className="size-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="space-x-4"
                onClick={() => deleteData(row.original.id)}
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
