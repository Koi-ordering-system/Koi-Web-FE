import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import OrderTripList from "./components/OrderTripList";
import OrderKoiList from "./components/OrderKoiList";

const HistoryPage = () => {
  return (
    <div className="m-10 w-full  ">
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
          <OrderTripList />
        </TabsContent>
        <TabsContent value="Order">
          <OrderKoiList />
        </TabsContent>
      </Tabs>
    </div>
  )
};

export default HistoryPage;
