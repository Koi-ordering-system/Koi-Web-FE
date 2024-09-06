import { userApi } from "@/constants/domains/user.api";
import { UserResponse } from "@/models/response/user.response";
import { QueryKey } from "@/stores/query-key";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type useUsersOptions = Omit<
  UseQueryOptions<UserResponse[]>,
  "queryKey" | "queryFn"
>;

export const useUsers = (
  options?: useUsersOptions[],
  params?: Record<string, unknown>
) => {
  return useQuery({
    ...options,
    queryKey: [QueryKey.USER_LIST],
    queryFn: () => userApi.listUsers(params),
  });
};
