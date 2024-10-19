import { KoisParams } from "@/domains/models/species-kois";
import { QueryKey } from "@/domains/query-key";
import { KoisApi } from "@/domains/services/kois/kois.service";
import { useQuery } from "@tanstack/react-query";

interface KoiQuery {
  options?: KoisParams;
}

export const useKoiQuery = ({ options }: KoiQuery) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_KOIS, ...(options ? [options] : [])],
    queryFn: () => KoisApi.getKoisList(options),
  });

  return { data, isLoading, error };
};
