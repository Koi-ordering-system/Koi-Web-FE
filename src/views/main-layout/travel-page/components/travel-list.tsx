import { Loading } from "@/components/common";
import Pagination from "@/components/common/pagination";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui";
import { TravelsParamsRequest } from "@/domains/models/travels";
import { useTravelsQuery } from "@/domains/stores/hooks/travels/use-travels";
import useFilterStore from "@/domains/stores/zustand/filter/use-filter-store";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom"


export default function TravelList() {
  const navigation = useNavigate();
  const { search } = useSearchStore();
  const { updatePageIndex, pagination, updatePageSize } = usePaginationStore();
  const { filters } = useFilterStore();

  const options = useMemo(() => {
    const searchValue = search["travel"]?.searchValue || undefined;
    const farmFilter = filters["travel"]?.farm || "";
    const priceRangeFilter = filters["travel"]?.priceRange || [0, 1000000];


    const newOptions: TravelsParamsRequest = {
      pageIndex: pagination["travel"]?.pageIndex || 1,
      pageSize: pagination["travel"]?.pageSize || 5,
    };

    if (searchValue?.trim()) {
      newOptions.keyword = searchValue;
    }

    if(farmFilter) {
      newOptions.farmId = farmFilter;
    }

    if(priceRangeFilter) {
      newOptions.minPrice = priceRangeFilter[0];
      newOptions.maxPrice = priceRangeFilter[1];
    }

    return newOptions;
  }, [search, pagination, filters]);

  const { data, isLoading } = useTravelsQuery({ options })
  // console.log(data);


  return (
    (isLoading ? <Loading /> : (
      (data && data.data && data.data.items.length > 0) ? (
        <div>
          <div>
            <p className="font-bold">Show <span className="text-pink-300">{data.data.totalCount} trips</span></p>
          </div>

          {data.data.items.map((trip) => (
            <div key={trip.id} className="w-full flex bg-secondary p-4 rounded-lg shadow-md mb-6">
              {/* Hình ảnh */}
              <img
                src={trip.farmImages.length > 0 ? trip.farmImages[0] : "https://via.placeholder.com/150"}
                alt="Place"
                className="rounded-md w-32 h-32 object-cover"
              />

              {/* Nội dung */}
              <div className="ml-4 w-full grid grid-cols-4">
                {/* Nội dung chi tiết */}
                <div className="col-span-3">
                  {/* Tiêu đề */}
                  <h2 className="text-orange-600 text-lg font-bold mb-1">{trip.farmName}</h2>

                  {/* Thông tin chi tiết */}
                  <div className="text-gray-600 text-sm mb-4">
                    <div className="flex">
                      <div className="mr-8">
                        <p className="font-bold text-gray-600">{trip.days} Days</p>
                        <p className="text-gray-500">Address: {trip.farmName}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Giá và nút */}
                <div className="col-span-1 text-end">
                  <p className="text-gray-500 text-md m-0">starting from</p>
                  <p className="text-pink-300 text-2xl font-bold">{trip.price.toLocaleString("vi-VN")} VND</p>
                </div>

                <div className="col-start-1 col-end-5 border-t border-gray-300 my-2"></div>

                <button
                  onClick={() => { navigation(`/travel/${trip.id}`) }}
                  className="col-start-1 col-end-5 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 mt-4">
                  View Deals
                </button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between mt-6">
            <div></div>
            <Pagination
              totalPages={data?.data.totalPages ?? 0}
              currentPage={data?.data.pageNumber ?? 0}
              onPageChange={(page) => updatePageIndex("travel", page)}
            />

            <Select
              onValueChange={(value) => {
                updatePageSize("travel", Number(value));
                updatePageIndex("travel", 1);
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
                        updatePageSize("travel", pageSize);
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
      ) : (
        <div>There are no trips now</div>
      )
    ))
  )
}
