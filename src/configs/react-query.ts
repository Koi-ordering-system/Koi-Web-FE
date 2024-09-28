import { useQuery, useQueryClient } from "@tanstack/react-query";

export function createGlobalState<T, K extends [string, unknown]>(
  queryKey: K,
  queryFn: () => Promise<T>,
  initialData: T | null = null
) {
  return function () {
    const queryClient = useQueryClient();

    const { data, error, isLoading } = useQuery({
      queryFn: queryFn,
      initialData: initialData,
      staleTime: Infinity,
      refetchInterval: false,
      queryKey: [queryKey] as [K],
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    });

    function setData(newData: Partial<T>) {
      queryClient.setQueryData([queryKey] as [K], (prevData: T) => {
        return { ...prevData, ...newData };
      });
    }

    function resetData() {
      queryClient.invalidateQueries({ queryKey: [queryKey] as [K] });
      queryClient.refetchQueries({ queryKey: [queryKey] as [K] });
    }

    return { data, setData, resetData, error, isLoading };
  };
}
