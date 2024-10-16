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
import { SpeciesParams } from "@/domains/models/species";
import { useSpeciesQuery } from "@/domains/stores/hooks/species/use-species";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import SpeciesTable from "@/views/dashboard-layout/species-page/components/species-table";
import { useMemo } from "react";

const SpeciesPage = () => {
  const { search } = useSearchStore();
  const { updatePageIndex, pagination, updatePageSize } = usePaginationStore();

  const options = useMemo(() => {
    const searchValue = search["species"]?.searchValue || undefined;

    const newOptions: SpeciesParams = {
      pageIndex: pagination["species"]?.pageIndex || 1,
      pageSize: pagination["species"]?.pageSize || 10,
    };

    if (searchValue?.trim()) {
      newOptions.keyword = searchValue;
    }

    return newOptions;
  }, [search, pagination]);
  const { data } = useSpeciesQuery({ options });

  return (
    <div className="px-5 py-10 mx-auto">
      <div className="flex justify-between mb-5">
        <Search placeholder="Search koi" keyObject="species" />
        <Button>
          <span className="text-sm">Create New Farm</span>
        </Button>
      </div>
      <SpeciesTable data={data?.data.items ?? []} />
      <div className="flex items-center justify-between mt-6">
        <div></div>
        <Pagination
          totalPages={data?.data.totalPages ?? 0}
          currentPage={data?.data.pageNumber ?? 0}
          onPageChange={(page) => updatePageIndex("species", page)}
        />

        <Select
          onValueChange={(value) => {
            updatePageSize("species", Number(value));
            updatePageIndex("species", 1);
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
                    updatePageSize("species", pageSize);
                  }}
                >
                  {pageSize} rows
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SpeciesPage;
