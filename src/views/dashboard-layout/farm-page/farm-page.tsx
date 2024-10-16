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
import { FarmsParams } from "@/domains/models/farms";
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import FarmTable from "@/views/dashboard-layout/farm-page/components/farm-table";
import { useMemo } from "react";

const FarmPage = () => {
  const { search } = useSearchStore();
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

  return (
    <div className="px-5 py-10 mx-auto">
      <div className="flex justify-between mb-5">
        <Search placeholder="Search farm" keyObject="farm" />
        <Button>
          <span className="text-sm">Create New Farm</span>
        </Button>
      </div>
      <FarmTable data={data?.data.items ?? []} isLoading={isLoading} />
      <div className="flex items-center justify-between mt-6">
        <div></div>
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
