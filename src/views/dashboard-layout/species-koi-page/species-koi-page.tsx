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
import { SpeciesKoisParams } from "@/domains/models/species-kois";
import { useSpeciesKoiQuery } from "@/domains/stores/hooks/species/use-species-kois";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import SpeciesKoiTable from "@/views/dashboard-layout/species-koi-page/components/species-koi-table";
import { PlusCircle } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const SpeciesKoiPage = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useSearchStore();
  const { updatePageIndex, pagination, updatePageSize } = usePaginationStore();

  const options = useMemo(() => {
    const searchValue = search["species-koi"]?.searchValue || undefined;

    const newOptions: SpeciesKoisParams = {
      pageIndex: pagination["species-koi"]?.pageIndex || 1,
      pageSize: pagination["species-koi"]?.pageSize || 10,
    };

    if (searchValue?.trim()) {
      newOptions.search = searchValue;
    }

    return newOptions;
  }, [search, pagination]);
  const { data } = useSpeciesKoiQuery({ options });

  console.log(data);

  useEffect(() => {
    if (pagination["species-koi"]?.pageIndex !== 1) {
      updatePageIndex("species-koi", 1);
    }
    if (search["species-koi"]?.searchValue !== "") {
      setSearch("species-koi", "");
    }
  });

  return (
    <div className="px-5 py-10 mx-auto">
      <div className="flex justify-between mb-5">
        <Search placeholder="Search species koi" keyObject="species-koi" />
        <Button onClick={() => navigate("create")} className="space-x-2">
          <PlusCircle size={16} />
          <span className="text-sm">Create New Species Koi</span>
        </Button>
      </div>

      {data && <SpeciesKoiTable data={data.data.items} />}
      <div className="flex items-center justify-between mt-6">
        <div></div>
        <Pagination
          totalPages={data?.data.totalPages ?? 0}
          currentPage={data?.data.pageNumber ?? 0}
          onPageChange={(page) => updatePageIndex("species-koi", page)}
        />

        <Select
          onValueChange={(value) => {
            updatePageSize("species-koi", Number(value));
            updatePageIndex("species-koi", 1);
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
                    updatePageSize("species-koi", pageSize);
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

export default SpeciesKoiPage;
