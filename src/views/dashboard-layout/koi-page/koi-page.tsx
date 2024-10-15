import { useKoiQuery } from "@/domains/stores/hooks/kois/use-koi";
import KoiTable from "@/views/dashboard-layout/koi-page/components/koi-table";

const KoiPage = () => {
  const { data: koiData } = useKoiQuery({});

  return (
    <div className="px-10">
      <KoiTable data={koiData?.data.items ?? []} />
    </div>
  );
};

export default KoiPage;
