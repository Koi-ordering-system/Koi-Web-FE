import { FarmsBody, FarmsParams } from "@/domains/models/farms";
import { QueryKey } from "@/domains/query-key";
import { farmApi } from "@/domains/services/farms/farms.service";
import { useToast } from "@/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface UseFarmsQuery {
  options?: FarmsParams;
}

const UseFarmsQuery = ({ options }: UseFarmsQuery) => {
  const { toast } = useToast();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_FARMS, ...(options ? [options] : [])],
    queryFn: () => farmApi.getFarmList(options),
  });

  const createFarm = useMutation({
    mutationKey: [QueryKey.CREATE_FARM],
    mutationFn: (data: FarmsBody) => farmApi.createFarm(data),

    onSuccess: () => {
      toast({
        title: "Farm created successfully",
        description: "Farm has been created successfully",
      });
    },

    onError: () => {
      toast({
        title: "Error creating farm",
        description: "There was an error creating the farm",
      });
    },
  });

  const updateFarm = useMutation({
    mutationKey: [QueryKey.UPDATE_FARM],
    mutationFn: ({ id, data }: { id: string; data: FarmsBody }) =>
      farmApi.updateFarm(id, data),

    onSuccess: () => {
      toast({
        title: "Farm updated successfully",
        description: "Farm has been updated successfully",
      });
    },

    onError: () => {
      toast({
        title: "Error updating farm",
        description: "There was an error updating the farm",
      });
    },
  });

  return {
    data,
    isLoading,
    error,
    createFarm,
    updateFarm,
    refetch,
  };
};

export default UseFarmsQuery;
