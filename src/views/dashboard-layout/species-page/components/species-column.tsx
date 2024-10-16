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
import { MoreHorizontal, Book, Pencil, Trash } from "lucide-react";

export const SpeciesColumn: ColumnDef<SpeciesResponse>[] = [
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
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="space-x-4">
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
