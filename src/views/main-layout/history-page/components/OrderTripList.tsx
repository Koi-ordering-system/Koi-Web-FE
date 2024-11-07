import Pagination from "@/components/common/pagination";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { OrdersPersonalResponse } from "@/domains/models/orders";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import Show from "@/lib/show";
import OrderTable from "@/views/main-layout/history-page/components/order-table";

interface OrderTripListProps {
  data: RootResponse<Data<OrdersPersonalResponse[]>>;
}

export const OrderTripList = ({ data }: OrderTripListProps) => {
  const { updatePageIndex, updatePageSize } = usePaginationStore();

  const dataOrderTripFiltered = data.data?.items.filter(
    (order) => order.trip !== null && order.kois.length === 0
  );

  //   if (dataOrderTripFiltered!.length === 0) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="w-full ">
      <Card className="w-full text-xl font-semibold ">
        <CardHeader>Order Trips</CardHeader>
        <CardContent>
          <OrderTable data={dataOrderTripFiltered!} />
        </CardContent>
        <CardFooter className="flex items-center justify-between mt-6">
          <Show>
            <Show.When isTrue={data.data?.items.length !== 0}>
              <div></div>
              <Pagination
                totalPages={data?.data?.totalPages ?? 0}
                currentPage={data?.data?.pageNumber ?? 0}
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
            </Show.When>
          </Show>
        </CardFooter>
      </Card>
    </div>
  );
};
