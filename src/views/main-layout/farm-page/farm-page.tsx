import Pagination from "@/components/common/pagination";
import Search from "@/components/common/search";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { FarmsParams } from "@/domains/models/farms";
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import FarmTable from "./components/farm-table";
import { useEffect, useMemo } from "react";

const FarmPage = () => {
  const { search, setSearch } = useSearchStore();
  const { updatePageIndex, pagination, updatePageSize } = usePaginationStore();

  const options = useMemo(() => {
    const searchValue = search["farm"]?.searchValue || undefined;

    const newOptions: FarmsParams = {
      pageIndex: pagination["farm"]?.pageIndex || 1,
      pageSize: pagination["farm"]?.pageSize || 10,
    };

    if (searchValue?.trim()) {
      newOptions.search = searchValue;
    }

    return newOptions;
  }, [search, pagination]);

  const { data, isLoading } = UseFarmsQuery({
    options,
  });

  useEffect(() => {
    if (pagination["farm"]?.pageIndex !== 1) {
      updatePageIndex("farm", 1);
    }
    if (search["farm"]?.searchValue !== "") {
      setSearch("farm", "");
    }
  }, []);

  return (
    <div className="px-5 py-10 mx-auto">
      <div className="flex justify-between mb-5">
        <Search placeholder="Search farm" keyObject="farm" />
       
      </div>
      <FarmTable data={data?.data.items ?? []} isLoading={isLoading} />
      <div className="flex items-center justify-between mt-6">
        <Pagination
          totalPages={data?.data.totalPages ?? 0}
          currentPage={data?.data.pageNumber ?? 0}
          onPageChange={(page) => updatePageIndex("farm", page)}
        />

        <Select
          onValueChange={(value) => {
            updatePageSize("farm", Number(value));
            updatePageIndex("farm", 1);
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
                    updatePageSize("farm", pageSize);
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

export default FarmPage;
