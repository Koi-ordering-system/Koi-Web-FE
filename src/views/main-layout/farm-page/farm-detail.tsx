import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { farmApi } from "@/domains/services/farms/farms.service";
import StarRating from "@/components/rating/star-rating";
import { FarmDetailResponse } from "@/domains/models/farms/farm-detail.response";
import { Loading } from "@/components/common/loading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui";

const FarmDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [farmDetail, setFarmDetail] = useState<FarmDetailResponse>({
    id: "",
    name: "",
    owner: "",
    address: "",
    description: "",
    rating: 0,
    farmImages: [],
  });

  useEffect(() => {
    const fetchFarmDetail = async () => {
      setLoading(true);
      const result = await farmApi.getFarmDetail(id!);
      if (result) {
        setFarmDetail(result.data);
      }
      setLoading(false);
    };

    fetchFarmDetail();
  }, [id]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 pt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex-shrink-0">
        <Carousel orientation="horizontal" setApi={setApi}>
          <CarouselContent>
            {farmDetail.farmImages.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`Farm image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current}/{count}
        </div>
      </div>
      <div className="m-10">
        <h1 className="text-3xl font-bold mb-4">{farmDetail.name}</h1>
        <p className="text-lg font-semibold mb-2">Owner: {farmDetail.owner}</p>
        <p className="text-lg font-semibold mb-2">Address: {farmDetail.address}</p>
        <StarRating rating={farmDetail.rating} />
        <p className="mt-2 mb-4">{farmDetail.description}</p>
      </div>
    </div>
  );
};

export default FarmDetail;

