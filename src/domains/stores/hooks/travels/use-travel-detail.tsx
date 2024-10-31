import { QueryKey } from "@/domains/query-key";
import { travelApi } from "@/domains/services/travel/travel.service";
import { useQuery } from "@tanstack/react-query";

interface UseTravelDetailProps {
  id: string;
}

export const useTravelDetail = ({ id }: UseTravelDetailProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.DETAIL_TRAVEL, id],
    queryFn: () => travelApi.getTravel(id),
  });

  return {
    data,
    isLoading,
    error,
  };
};
