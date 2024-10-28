import { OrderParams } from "@/domains/models/orders";
import { QueryKey } from "@/domains/query-key";
import { orderApi } from "@/domains/services/orders/orders.service";
import { useQuery } from "@tanstack/react-query";

interface OrderQuery {
  options?: OrderParams;
}

export const useOrderServiceQuery = ({ options }: OrderQuery) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_ORDERS_SERVICES, ...(options ? [options] : [])],
    queryFn: () => orderApi.getOrdersService(options),
  });

  return { data, isLoading, error, refetch };
};

export const useOrderUnapprovedQuery = ({ options }: OrderQuery) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_ORDERS_UNAPPROVED, ...(options ? [options] : [])],
    queryFn: () => orderApi.getOrderUnApproved(options),
  });

  return { data, isLoading, error, refetch };
};

export const useOrderPersonalQuery = ({ options }: OrderQuery) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_ORDERS_PERSONAL, ...(options ? [options] : [])],
    queryFn: () => orderApi.getOrdersPersonal(options),
  });

  return { data, isLoading, error, refetch };
};

export const useOrderDeliveredQuery = ({ options }: OrderQuery) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_ORDERS_DELIVERED, ...(options ? [options] : [])],
    queryFn: () => orderApi.getOrderDelivery(options),
  });

  return { data, isLoading, error, refetch };
};
