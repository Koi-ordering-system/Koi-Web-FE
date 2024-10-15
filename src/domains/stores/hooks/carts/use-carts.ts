import { QueryKey } from "@/domains/query-key";
import { apiCart } from "@/domains/services/carts/carts.service";
import { useQuery } from "@tanstack/react-query";

interface CardHook {}

export const useCards = (): CardHook => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_CARTS],
    queryFn: () => apiCart.getCartList(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
