import { useFarmsDetail } from "@/domains/stores/hooks/farms/use-farm-detail";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Skeleton } from "@/components/ui/skeleton";
import { CircleUser, MapPin, Pencil, Star, Trash } from "lucide-react";
import { Button } from "@/components/ui";

const FarmDetails = () => {
  const { id } = useParams<{ id: string }>();

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="">
      <div className="container relative grid grid-cols-1 gap-6 p-6 rounded-lg shadow-lg bg-background md:grid-cols-2">
        {/* Hình ảnh farm với Swiper */}
        <div className="relative h-80">
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="w-full h-full"
          >
            {farm?.farmImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Farm image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thông tin chi tiết farm */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-foreground">
            {farm?.name}
          </h1>

          <p className="text-lg text-muted-foreground">{farm?.description}</p>

          {/* Đánh giá 5 sao */}
          <div className="flex items-center gap-1">
            {renderStars(farm?.rating || 0)}
            <span className="ml-2 text-lg text-muted-foreground">
              {farm?.rating?.toString().slice(0, 5) || "No rating"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="size-5" />
            <span>{farm?.address}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-800">
            <CircleUser className="size-5" />
            <span>{farm?.owner}</span>
          </div>

          <div className="absolute z-10 space-x-3 right-4 bottom-4">
            {/* Nút Edit với icon Pencil */}
            <Button>
              <Pencil className="w-4 h-4 mr-2" /> Edit Details
            </Button>

            {/* Nút Delete với icon Trash và biến thể outline */}
            <Button variant="outline">
              <Trash className="w-4 h-4 mr-2" /> Delete Farm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmDetails;
