import ImageSlider from "@/components/common/image-swiper";
import { useKoiDetail } from "@/domains/stores/hooks/kois/use-koi-detail";
import { useParams } from "react-router-dom";

const KoiManageDetail = () => {
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

  if (!data) {
    return <div>Data not found</div>;
  }

  return (
    <div className="w-full p-4">
      <div className="w-96">
        {data && data.data && <ImageSlider imageUrls={data.data.imageUrls} />}
      </div>
    </div>
  );
};

export default KoiManageDetail;
