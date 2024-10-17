import { QueryKey } from "@/domains/query-key";
import { KoisApi } from "@/domains/services/kois/kois.service";
import { useQuery } from "@tanstack/react-query";

interface UseKoiDetailProps {
  id: string;
}

export const useKoiDetail = ({ id }: UseKoiDetailProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.DETAIL_KOI, id],
    queryFn: () => KoisApi.getKoiDetail(id),
  });

  return {
    data,
    isLoading,
    error,
  };
};
