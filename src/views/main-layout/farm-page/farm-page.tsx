import { useEffect, useState } from "react";
import { farmApi } from "@/domains/services/farms/farms.service";
import { FarmsResponse } from "@/domains/models/farms";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Button,
} from "@/components/ui";
import FarmSearch from "@/components/input/search-input";
import StarRating from "@/components/rating/star-rating";

const FarmPage = () => {
  const [farms, setFarms] = useState<FarmsResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const pageSize = 8;

  useEffect(() => {
    const fetchFarms = async () => {
      const response = await farmApi.getFarmList({ pageIndex, pageSize });

      if (response) {
        setFarms(response.data.items);
        setTotalPages(response.data.totalPages);
        setHasPreviousPage(response.data.hasPreviousPage);
        setHasNextPage(response.data.hasNextPage);
      }
    };

    fetchFarms();
  }, [pageIndex]);

  const searchedFarms = farms.filter((farm) =>
    farm.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Farm List</h1>

      <FarmSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchedFarms.map((farm) => (
          <Card key={farm.id} className="shadow-md flex flex-col h-full">
            <CardHeader>
              <img
                src={farm.farmImages[0]?.url}
                alt={farm.name}
                className="w-full h-48 object-cover rounded"
              />
              <CardTitle>{farm.name}</CardTitle>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col items-center">
              <p className="mt-2">Owner: {farm.owner}</p>
              <p className="text-black">Address: {farm.address}</p>
              <StarRating rating={farm.rating} />
              <CardDescription>{farm.description}</CardDescription>
            </CardContent>

            <CardFooter className="flex justify-end">
              
              <Button className="py-2 px-4 rounded">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="pt-5">
        <Pagination>
          <PaginationPrevious
            onClick={() => setPageIndex((prev) => Math.max(prev - 1, 1))}
            isActive={!hasPreviousPage}
          />
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, index) => (
              <div className="px-1" key={index + 1}>
                <PaginationLink
                  isActive={index + 1 === pageIndex}
                  onClick={() => setPageIndex(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </div>
            ))}
          </PaginationContent>
          <PaginationNext
            onClick={() => setPageIndex((prev) => Math.min(prev + 1, totalPages))}
            isActive={hasNextPage}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default FarmPage;

