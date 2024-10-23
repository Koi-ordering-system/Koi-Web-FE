import { Button } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { useFarmsDetail } from "@/domains/stores/hooks/farms/use-farm-detail";
import { FarmHeader } from "@/views/dashboard-layout/farm-page/components/farm-header";
import { FarmImageGallery } from "@/views/dashboard-layout/farm-page/components/farm-image-gallery";
import { KoiSection } from "@/views/dashboard-layout/farm-page/components/farm-koi-section";
import { TripSection } from "@/views/dashboard-layout/farm-page/components/farm-trip-section";
import { Pencil } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const FarmDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return <div>Not found Id</div>;
  }

  const { data, isLoading, error } = useFarmsDetail({ id });

  if (isLoading) {
    return <Skeleton className="w-full h-72" />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const farm = data?.data;

  return (
    <div className="container px-4 py-8 mx-auto space-y-3">
      <div className="grid place-content-end">
        <Button
          className="space-x-2"
          onClick={() => {
            navigate("edit", { state: farm });
          }}
        >
          <Pencil size={16} />
          <span>Edit Farm</span>
        </Button>
      </div>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-4">
          <FarmImageGallery images={farm?.farmImages || []} />
        </div>
        <div className="col-span-6">
          <FarmHeader
            name={farm?.name || ""}
            address={farm?.address || ""}
            rating={farm?.rating || 0}
            owner={farm?.owner || ""}
            description={farm?.description || ""}
          />
        </div>
      </div>
      <KoiSection kois={farm?.kois || []} />
      <TripSection trips={farm?.trips || []} />
    </div>
  );
};

export default FarmDetails;
