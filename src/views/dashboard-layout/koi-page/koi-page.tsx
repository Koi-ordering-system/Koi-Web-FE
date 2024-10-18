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
import { KoisParams } from "@/domains/models/kois";
import { useKoiQuery } from "@/domains/stores/hooks/kois/use-koi";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import KoiTable from "@/views/dashboard-layout/koi-page/components/koi-table";
import { useMemo } from "react";

const KoiPage = () => {
  const { search } = useSearchStore();
  const { updatePageIndex, pagination, updatePageSize } = usePaginationStore();

  const options = useMemo(() => {
    const searchValue = search["kois"]?.searchValue || undefined;

    const newOptions: KoisParams = {
      pageIndex: pagination["kois"]?.pageIndex || 1,
      pageSize: pagination["kois"]?.pageSize || 10,
    };

    if (searchValue?.trim()) {
      newOptions.search = searchValue;
    }

    return newOptions;
  }, [search, pagination]);

  const { data } = useKoiQuery({
    options,
  });

  // usePageLeave(() => {
  //   if (pagination["kois"]?.pageIndex !== 1) {
  //     updatePageIndex("kois", 1);
  //   }
  //   if (search["kois"]?.searchValue !== "") {
  //     setSearch("kois", "");
  //   }
  // });

  return (
    <div className="px-5 py-10 mx-auto">
      <div className="flex justify-between mb-5">
        <Search placeholder="Search koi" keyObject="kois" />
        <Button>
          <span className="text-sm">Create New Farm</span>
        </Button>
      </div>
      {data && data.data && <KoiTable data={data.data.items} />}
      <div className="flex items-center justify-between mt-6">
        <div></div>
        <Pagination
          totalPages={data?.data.totalPages ?? 0}
          currentPage={data?.data.pageNumber ?? 0}
          onPageChange={(page) => updatePageIndex("kois", page)}
        />

        <Select
          onValueChange={(value) => {
            updatePageSize("kois", Number(value));
            updatePageIndex("kois", 1);
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
                    updatePageSize("kois", pageSize);
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

export default KoiPage;
