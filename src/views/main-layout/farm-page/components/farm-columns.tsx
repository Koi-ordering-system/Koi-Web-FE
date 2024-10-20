import { FarmsResponse } from "@/domains/models/farms";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import StarRating from "@/components/common/star-rating"; 

export const farmColumns = (): ColumnDef<FarmsResponse>[] => {
  const navigate = useNavigate();

  return [
    {
      header: "No.",
      accessorFn: (_row, index) => index + 1,
    },
    {
      header: "Image",
      accessorKey: "farmImages",
      cell: ({ row }) => {
        const image = row.original.farmImages[0];
        const id = row.original.id;

        if (image) {
          return (
            <img
              src={image.url}
              alt={image.id}
              className="object-cover rounded-lg w-20 h-20 cursor-pointer"
              onClick={() => navigate(`/farm/${id}`)}
            />
          );
        }

        return (
          <div
            className="grid rounded-lg w-20 h-20 place-content-center bg-muted-foreground text-background cursor-pointer"
            onClick={() => navigate(`/farm/${id}`)}
          >
            No Image
          </div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "name",
      cell: ({ row }) => {
        const name = row.original.name;
        const id = row.original.id;

        return (
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() => navigate(`/farm/${id}`)}
          >
            {name}
          </span>
        );
      },
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
      cell: ({ row }) => {
        const rating = row.original.rating;
        return <StarRating rating={rating} />;
      },
    },
  ];
};
