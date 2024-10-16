import Search from "@/components/common/search";
import { Button } from "@/components/ui";
import { FarmsParams } from "@/domains/models/farms";
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import FarmTable from "@/views/dashboard-layout/farm-page/components/farm-table";
import { useMemo } from "react";

const FarmPage = () => {
  const { search } = useSearchStore();

  const options: FarmsParams = useMemo(() => {}, []);

  const { data, isLoading } = UseFarmsQuery({});

  return (
    <div className="px-5 py-10 mx-auto">
      <div className="flex justify-between mb-5">
        <Search placeholder="Search farm" keyObject="farm" />
        <Button>
          <span className="text-sm">Create New Farm</span>
        </Button>
      </div>
      <FarmTable data={data?.data.items ?? []} isLoading={isLoading} />
    </div>
  );
};

export default FarmPage;
