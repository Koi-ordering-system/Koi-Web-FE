import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
interface FarmImageGalleryProps {
  images: string[];
}

export function FarmImageGallery({ images }: FarmImageGalleryProps) {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="w-full h-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Farm image ${index + 1}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
