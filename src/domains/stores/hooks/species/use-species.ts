import { SpeciesParams } from "@/domains/models/species";
import { QueryKey } from "@/domains/query-key";
import { speciesApi } from "@/domains/services/species/species.service";
import { useQuery } from "@tanstack/react-query";

interface SpeciesQuery {
  options?: SpeciesParams;
}

export const useSpeciesQuery = ({ options }: SpeciesQuery) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_SPECIES, ...(options ? [options] : [])],
    queryFn: () => speciesApi.getSpeciesList(options),
  });

  return { data, isLoading, error };
};
