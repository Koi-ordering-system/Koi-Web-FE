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
  },
  {
    header: "Image",
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
