import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui";
import { useOrderServiceQuery } from "@/domains/stores/hooks/orders/use-order-query";
import OrderTable from "@/views/dashboard-layout/order-page/components/order-table";

const OrderList = () => {
  const { data, isLoading, error } = useOrderServiceQuery({
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

  const dataOrderKoiFiltered = data.data?.items.filter(
    (order) => order.trip === null && order.kois.length > 0
  );

  const dataOrderTripFiltered = data.data?.items.filter(
    (order) => order.trip !== null && order.kois.length === 0
  );

  if (!dataOrderKoiFiltered || !dataOrderTripFiltered) {
    return <div>No data</div>;
  }

  return (
    <div className="px-4 space-y-3">
      <Card className="text-xl font-semibold ">
        <CardHeader>Order Trips</CardHeader>
        <CardContent>
          <OrderTable data={dataOrderTripFiltered} />
        </CardContent>
        <CardFooter>
          {/* <Button>
            <span>Approve</span>
          </Button> */}
        </CardFooter>
      </Card>

      <Card className="text-xl font-semibold ">
        <CardHeader>Order Kois</CardHeader>
        <CardContent>
          <OrderTable data={dataOrderKoiFiltered} />
        </CardContent>
        <CardFooter>
          {/* <Button>
            <span>Approve</span>
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderList;
