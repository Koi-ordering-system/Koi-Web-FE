import { QueryKey } from "@/domains/query-key";
import { apiCart } from "@/domains/services/carts/carts.service";
import { useQuery } from "@tanstack/react-query";

interface CartHook {
  
}

export const useCarts = ({}: CartHook) => {
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
