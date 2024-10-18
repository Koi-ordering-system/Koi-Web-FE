import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

interface ImageSliderProps {
  imageUrls: string[];
}

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {imageUrls.map((url, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Koi image ${index + 1}`}
              className="rounded-lg size-96"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
