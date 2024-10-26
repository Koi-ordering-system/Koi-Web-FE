import Pagination from "@/components/common/pagination";
import Search from "@/components/common/search";
import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { TravelsParamsRequest } from "@/domains/models/travels/travels-params.resquest";
import { useTravelsQuery } from "@/domains/stores/hooks/travels/use-travels";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import TravelTable from "@/views/dashboard-layout/travel-page/components/travel-table";
import { PlusCircle } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const TravelPage = () => {
  const navigator = useNavigate();
  const { search } = useSearchStore();
  const { updatePageIndex, pagination, updatePageSize } = usePaginationStore();

  const options = useMemo(() => {
    const searchValue = search["travels"]?.searchValue || undefined;

    const newOptions: TravelsParamsRequest = {
      pageIndex: pagination["travels"]?.pageIndex || 1,
      pageSize: pagination["travels"]?.pageSize || 10,
    };

    if (searchValue?.trim()) {
      newOptions.keyword = searchValue;
    }

    return newOptions;
  }, [search, pagination]);
  const { data } = useTravelsQuery({ options });

  return (
    <div className="px-5 py-10 mx-auto">
      <div className="flex justify-between mb-5">
        <Search placeholder="Search koi" keyObject="travels" />
        <Button className="space-x-2" onClick={() => navigator("create")}>
          <PlusCircle className="size-5" />
          <span className="text-sm">Create New Farm</span>
        </Button>
      </div>
      <TravelTable data={data?.data?.items ?? []} />

      {data?.data?.items.length !== 0 && (
        <div className="flex items-center justify-between mt-6">
          <div></div>
          <Pagination
            totalPages={data?.data?.totalPages ?? 0}
            currentPage={data?.data?.pageNumber ?? 0}
            onPageChange={(page) => updatePageIndex("travels", page)}
          />

          <Select
            onValueChange={(value) => {
              updatePageSize("travels", Number(value));
              updatePageIndex("travels", 1);
            }}
          >
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Select a page" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Page</SelectLabel>
                {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem
                    key={pageSize}
                    value={pageSize.toString()}
                    onSelect={() => {
                      updatePageSize("travels", pageSize);
                    }}
                  >
                    {pageSize} rows
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default TravelPage;
