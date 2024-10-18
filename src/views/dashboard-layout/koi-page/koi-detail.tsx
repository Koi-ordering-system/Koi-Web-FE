import ImageSlider from "@/components/common/image-swiper";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { useKoiDetail } from "@/domains/stores/hooks/kois/use-koi-detail";
import { FarmsList } from "@/views/dashboard-layout/koi-page/components/koi-farms-list";
import { KoiInfo } from "@/views/dashboard-layout/koi-page/components/koi-info";
import { Pencil, Trash } from "lucide-react";
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
    <div className="container p-4 mx-auto space-y-6">
      <Tabs defaultValue="images" className="relative">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="farms">Associated Farms</TabsTrigger>
        </TabsList>
        <TabsContent value="farms">
          <FarmsList farms={data.data.farms} />
        </TabsContent>
        <TabsContent value="images" className="flex justify-between gap-6 ">
          <div className="size-96">
            <ImageSlider imageUrls={data.data.imageUrls} />
          </div>
          <KoiInfo
            name={data.data.name}
            description={data.data.description}
            speciesName={data.data.speciesName}
            isMale={data.data.isMale}
            minSize={data.data.minSize}
            maxSize={data.data.maxSize}
            price={data.data.price}
            colors={data.data.colors}
          />
        </TabsContent>
        <div className="absolute space-x-2 right-5 top-16">
          <Button className="space-x-2">
            <Pencil className="size-4" />
            <span>Edit Details</span>
          </Button>
          <Button className="space-x-2" variant="outline">
            <Trash className="size-4" />
            <span>Delete Koi</span>
          </Button>
        </div>
      </Tabs>
    </div>
  );
};

export default KoiManageDetail;
