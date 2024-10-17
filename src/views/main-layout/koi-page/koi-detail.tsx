import { ShoppingCart } from "lucide-react";
import KoiBreadcumb from "./components/koi-breadcumb";
import { Button, Separator } from "@/components/ui";
import { useParams } from "react-router-dom";
import { useKoiDetail } from "@/domains/stores/hooks/kois/use-koi-detail";
import { Loading } from "@/components/common";

const KoiDetail = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid ID</div>;
  }

  const { data, isLoading, error } = useKoiDetail({ id });

  if (isLoading) {
    return <Loading/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container flex flex-wrap gap-6 justify-center items-start p-8">
      {/* Breadcrumb */}
      <div className="w-full">
        <KoiBreadcumb koiName={data?.data.name} />
      </div>

      <div className="w-4/5 grid grid-cols-2 gap-8 my-10">
        {/* Image Section */}
        <div className="w-[100%] flex justify-center">
          <img
            src={data?.data.imageUrls}
            alt="Ginrin Kohaku"
            className="w-[50%] h-auto object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-[100%]">
          {/* Title */}
          <h1 className="text-3xl font-bold text-orange-500">
            {data?.data.name}
          </h1>
          <Separator className="w-[100%] my-4 border text-muted-foreground rounded-sm" />
          {/* Fish Details */}
          <div className="space-y-2">
            <p>
              <span className="font-bold">Size:</span> {data?.data.minSize} - {data?.data.maxSize} cm
            </p>
            <p>
              <span className="font-bold">Type:</span> Hiranshin, Marudo, Ogata
            </p>
            <p>
              <span className="font-bold">Gender:</span> 
              {data?.data.isMale? <span className="text-blue-500">♂️</span> : <span className="text-pink-400">♀️</span>}
            </p>
            <p>
              <span className="font-bold">Colour:</span>{" "}
              <span className="inline-block bg-red-500 w-4 h-4 rounded-full mr-1"></span>
              <span className="inline-block bg-white w-4 h-4 rounded-full border"></span>
            </p>
            <p>
              <span className="font-bold">From farm:</span> {data?.data.farms?.map(farm => farm.name).join(', ')}
            </p>
            <p>
              <span className="font-bold">Description:</span> {data?.data.description}
            </p>
          </div>
          <Separator className="w-[100%] my-4 border text-muted-foreground rounded-sm" />
          {/* Price */}
          <div className="text-3xl my-4 font-bold text-red-500">{data?.data.price.toLocaleString('vi-VN')} VND</div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button>
              <ShoppingCart className="size-5 mr-3" />
              <span className="font-semibold">Add to cart</span>
            </Button>
            <Button>
              <ShoppingCart className="size-5 mr-3" />
              <span className="font-semibold">Buy now</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoiDetail;
