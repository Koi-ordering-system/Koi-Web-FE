import { useOrderUnapprovedQuery } from "@/domains/stores/hooks/orders/use-order-query";
import OrderTripItem from "@/views/dashboard-layout/order-page/components/order-trip-item";

const OrderTripList = () => {
  const { data, isLoading, error, refetch } = useOrderUnapprovedQuery({
    options: {
      pageIndex: 1,
      pageSize: 10,
    },
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
    <div className="grid grid-cols-1 gap-5 my-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2">
      {data.data?.items.map((order) => (
        <OrderTripItem key={order.id} data={order} refetch={refetch} />
      ))}
    </div>
  );
};

export default OrderTripList;
