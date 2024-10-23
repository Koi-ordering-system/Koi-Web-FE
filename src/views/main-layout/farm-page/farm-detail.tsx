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
    name: "",
    owner: "",
    address: "",
    description: "",
    rating: 0,
    farmImages: [],
    kois: [],
    trips: [],
  });

  useEffect(() => {
    const fetchFarmDetail = async () => {
      setLoading(true);
      const result = await farmApi.getFarmDetail(id!);
      if (result) {
        setFarmDetail(result.data!);
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
    <div className="grid max-w-6xl grid-cols-1 gap-4 p-4 pt-10 mx-auto md:grid-cols-2">
      <div className="flex-shrink-0">
        <Carousel orientation="horizontal" setApi={setApi}>
          <CarouselContent>
            {farmDetail.farmImages.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`Farm image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2 text-sm text-center text-muted-foreground">
          {current}/{count}
        </div>
      </div>
      <div className="m-10">
        <h1 className="mb-4 text-3xl font-bold">{farmDetail.name}</h1>
        <p className="mb-2 text-lg font-semibold">Owner: {farmDetail.owner}</p>
        <p className="mb-2 text-lg font-semibold">
          Address: {farmDetail.address}
        </p>
        <StarRating rating={farmDetail.rating} />
        <p className="mt-2 mb-4">{farmDetail.description}</p>
      </div>
    </div>
  );
};

export default FarmDetail;
