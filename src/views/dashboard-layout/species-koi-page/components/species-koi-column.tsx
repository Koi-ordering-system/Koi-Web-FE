import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { SpeciesKoisResponse } from "@/domains/models/species-kois";
import { ColumnDef } from "@tanstack/react-table";
import { BookAudio, MoreHorizontal, Pencil, Trash } from "lucide-react";

interface SpeciesKoiColumnProps {
  getId: (id: string) => void;
  editData: (data: SpeciesKoisResponse) => void;
  deleteData: (id: string) => void;
}

export const SpeciesKoiColumn = ({
  getId,
  editData,
  deleteData,
}: SpeciesKoiColumnProps): ColumnDef<SpeciesKoisResponse>[] => [
  {
    header: "No.",
    accessorFn: (_row, index) => index + 1,
  },
  {
    accessorKey: "imageUrls",
    header: "Image",
    cell: ({ row }) => {
      const value = row.original.imageUrls[0];
      return (
        <img
          src={value}
          alt="koi"
          className="object-cover rounded-lg size-20"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "minSize",
    header: "Min Size",
  },
  {
    accessorKey: "maxSize",
    header: "Max Size",
  },
  {
    accessorKey: "price",
    header: "Price",
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
                <BookAudio className="size-4" />
                <span>Detail</span>
              </DropdownMenuItem>
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
