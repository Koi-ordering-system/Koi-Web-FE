import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import usePaginationStore from "@/domains/stores/zustand/pagination/use-pagination-store";
import { useOrderPersonalQuery } from "@/domains/stores/hooks/orders/use-order-query";
import { OrderTripList } from "@/views/main-layout/history-page/components/OrderTripList";
import { OrderKoiList } from "@/views/main-layout/history-page/components/OrderKoiList";
import { useMemo } from "react";
import { OrderParams } from "@/domains/models/orders";

const HistoryPage = () => {
  const { pagination } = usePaginationStore();

  console.log("pagination", pagination);

  const options = useMemo(() => {
    const travelPagination = pagination["travel"] || {
      pageIndex: 1,
      pageSize: 10,
    };
    const option: OrderParams = {
      pageIndex: travelPagination.pageIndex,
      pageSize: travelPagination.pageSize,
    };

    return option;
  }, [pagination]);

  const { data, isLoading, error } = useOrderPersonalQuery({
    options: options,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="w-full m-10 ">
      <Tabs defaultValue="Trip" className="w-full">
        <TabsList className="w-40">
          <TabsTrigger className="w-40" value="Trip">
            Trip
          </TabsTrigger>
          <TabsTrigger className="w-40" value="Koi">
            Koi
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Trip">
          <OrderTripList data={data} />
        </TabsContent>
        <TabsContent value="Koi">
          <OrderKoiList data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HistoryPage;
