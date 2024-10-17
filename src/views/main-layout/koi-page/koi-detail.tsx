import { ShoppingCart } from "lucide-react";
import KoiBreadcumb from "./components/koi-breadcumb";
import { Button, Separator } from "@/components/ui";

const KoiDetail = () => {
  return (
    <div className="container flex flex-wrap gap-6 justify-center items-start p-8">
      {/* Breadcrumb */}
      <div className="w-full">
        <KoiBreadcumb koiName="Ginrin Kohaku" />
      </div>

      <div className="w-4/5 grid grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="w-[100%] flex justify-center">
          <img
            src="https://selectivekoisales.co.uk/cdn/shop/files/Koi26_480x.jpg?v=1722428484"
            alt="Ginrin Kohaku"
            className="w-[50%] h-auto object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-[100%] ">
          {/* Title */}
          <h1 className="text-3xl font-bold text-orange-500">
            KGR30999 - Ginrin Kohaku
          </h1>
          <Separator className="w-[100%] my-4 border text-muted-foreground rounded-sm" />
          {/* Fish Details */}
          <div className="space-y-2">
            <p>
              <span className="font-bold">Size:</span> 10 - 13 cm
            </p>
            <p>
              <span className="font-bold">Type:</span> Hiranshin, Marudo, Ogata
            </p>
            <p>
              <span className="font-bold">Gender:</span> <span className="text-blue-500">♂️</span>
            </p>
            <p>
              <span className="font-bold">Colour:</span>{" "}
              <span className="inline-block bg-red-500 w-4 h-4 rounded-full mr-1"></span>
              <span className="inline-block bg-white w-4 h-4 rounded-full border"></span>
            </p>
            <p>
              <span className="font-bold">From farm:</span> Maruhiro Koi Farm
            </p>
            <p>
              <span className="font-bold">Born in:</span> 2023
            </p>
          </div>
          <Separator className="w-[100%] my-4 border text-muted-foreground rounded-sm" />
          {/* Price */}
          <div className="text-3xl my-4 font-bold text-red-500">36.000.000 VND</div>

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
