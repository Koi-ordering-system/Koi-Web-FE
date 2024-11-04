import { UserParamsRequest } from "@/domains/models/users";
import { QueryKey } from "@/domains/query-key";
import { UserApi } from "@/domains/services/users/users.service";
import { useQuery } from "@tanstack/react-query";

interface UseUsersQuery {
  options?: UserParamsRequest;
}

export const useUsersQuery = ({ options }: UseUsersQuery) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [QueryKey.LIST_USERS, ...(options ? [options] : [])],
    queryFn: () => UserApi.getUsers(options),
  });

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};
