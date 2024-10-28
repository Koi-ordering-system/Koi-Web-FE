import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import OrderList from "@/views/dashboard-layout/order-page/components/order-list";
import OrderTripList from "@/views/dashboard-layout/order-page/components/order-trip-list";

const OrderPage = () => {
  return (
    <main className="px-4">
      <Tabs defaultValue="Trip" className="w-full">
        <TabsList className="w-40">
          <TabsTrigger className="w-40" value="Trip">
            Trip
          </TabsTrigger>
          <TabsTrigger className="w-40" value="Order">
            Order
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Trip">
          <OrderTripList />
        </TabsContent>
        <TabsContent value="Order">
          <OrderList />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default OrderPage;
