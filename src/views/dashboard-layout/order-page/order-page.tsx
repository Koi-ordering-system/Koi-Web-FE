import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import OrderList from "@/views/dashboard-layout/order-page/components/order-list";
import OrderTripList from "@/views/dashboard-layout/order-page/components/order-trip-list";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  return (
    <main className="px-4">
      <Tabs defaultValue="Trip" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="w-40">
            <TabsTrigger className="w-40" value="Trip">
              Trip
            </TabsTrigger>
            <TabsTrigger className="w-40" value="Order">
              Order
            </TabsTrigger>
          </TabsList>
          <div>
            <Button
              className="flex items-center"
              onClick={() => navigate("/dashboard/order/koi")}
            >
              <PlusCircle />
              <span>Create Koi Order</span>
            </Button>
          </div>
        </div>
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
