import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { OrdersUnApprovedResponse } from "@/domains/models/orders";
import { travelApi } from "@/domains/services/travel/travel.service";
import { useToast } from "@/hooks";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface OrderTripItemProps {
  data: OrdersUnApprovedResponse;
  refetch?: () => void;
}

const OrderTripItem: React.FC<OrderTripItemProps> = ({ data, refetch }) => {
  const { toast } = useToast();

  const handleChangeStatusTrip = async (
    id: string,
    key: "approve" | "deny"
  ) => {
    // Approve order
    const response =
      key === "approve"
        ? await travelApi.patchTravelApprove(id)
        : await travelApi.patchTravelDeny(id);

    if (response === true) {
      toast({
        title: "Success",
        description: `Order has been ${key}`,
      });
      refetch && refetch();
    } else {
      toast({
        title: "Error",
        description: `Failed to ${key} order`,
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <img
          src={data.images[0]}
          alt={data.farmName}
          className="object-cover w-full rounded-md h-52"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{data.farmName}</CardTitle>
        <CardDescription>{data.price}</CardDescription>
      </CardContent>
      <CardFooter className="space-x-2 place-content-end">
        <Button onClick={() => handleChangeStatusTrip(data.id, "approve")}>
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>Approve</span>
        </Button>
        <Button
          onClick={() => handleChangeStatusTrip(data.id, "deny")}
          className="bg-destructive hover:bg-destructive/50"
        >
          <XCircle className="w-4 h-4 mr-2" />
          <span>Deny</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrderTripItem;
