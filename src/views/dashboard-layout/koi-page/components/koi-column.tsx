import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { KoisResponse } from "@/domains/models/kois";
import { ColumnDef } from "@tanstack/react-table";
import { Book, MoreHorizontal, Pencil, Trash } from "lucide-react";

interface KoiColumnProps {
  getId: (id: string) => void;
  editData: (data: KoisResponse) => void;
  deleteData: (id: string) => void;
}

export const koiColumns = ({
  getId,
  editData,
  deleteData,
}: KoiColumnProps): ColumnDef<KoisResponse>[] => [
  {
    accessorFn: (_row, index) => index + 1,
    header: "No.",
  },
  {
    header: "Image",
    accessorKey: "imageUrls",
    cell: ({ row }) => {
      const koi = row.original;

      return (
        <img
          src={koi.imageUrls[0]}
          alt={koi.name}
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
    header: "Species",
    accessorKey: "speciesName",
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
      const koi = row.original;

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
                onClick={() => getId(koi.id)}
              >
                <Book className="size-4" />
                <span>Detail</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="space-x-4"
                onClick={() => editData(koi)}
              >
                <Pencil className="size-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="space-x-4"
                onClick={() => deleteData(koi.id)}
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
