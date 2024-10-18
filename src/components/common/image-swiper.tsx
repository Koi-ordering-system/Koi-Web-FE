import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, EffectFade } from "swiper/modules";

interface ImageSliderProps {
  imageUrls: string[];
}

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="min-w-full mySwiper"
    >
      {imageUrls.map((url, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={url} alt={`Koi image ${index + 1}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
