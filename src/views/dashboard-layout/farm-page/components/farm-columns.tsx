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
  editData: (data: FarmsResponse) => void;
  deleteData: (id: string) => void;
}

export const farmColumns = ({
  getId,
  editData,
  deleteData,
}: FarmColumnsProps): ColumnDef<FarmsResponse>[] => [
  {
    header: "No.",
    accessorFn: (_row, index) => index + 1,
  },
  {
    header: "Image",
    accessorKey: "farmImages",
    cell: ({ row }) => {
      const image = row.original.farmImages;

      if (image.length > 0) {
        return (
          <img
            src={image[0].url}
            alt={image[0].id}
            className="object-cover rounded-lg size-20"
          />
        );
      }

      return (
        <div className="grid rounded-lg size-20 place-content-center bg-muted-foreground text-background">
          No Image
        </div>
      );
    },
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
