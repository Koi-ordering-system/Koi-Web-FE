import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
import FarmTable from "@/views/dashboard-layout/farm-page/components/farm-table";

const FarmPage = () => {
  const { data, isLoading } = UseFarmsQuery({});

  return (
    <div className="px-5 py-10 mx-auto">
      <FarmTable data={data?.data.items ?? []} isLoading={isLoading} />
    </div>
  );
};

export default FarmPage;
