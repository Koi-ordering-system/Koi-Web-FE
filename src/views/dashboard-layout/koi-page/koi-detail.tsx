import { useKoiDetail } from "@/domains/stores/hooks/kois/use-koi-detail";
import { useParams } from "react-router-dom";

const KoiDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid ID</div>;
  }

  const { data, isLoading, error } = useKoiDetail({ id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  return <div>KoiDetail</div>;
};

export default KoiDetail;
