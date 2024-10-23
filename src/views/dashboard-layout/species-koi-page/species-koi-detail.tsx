import {
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { useSpeciesKoiDetailQuery } from "@/domains/stores/hooks/species/use-species-kois-details";
import { KoiHeader } from "@/views/dashboard-layout/species-koi-page/components/species-koi-header";
import { InfoCard } from "@/views/dashboard-layout/species-koi-page/components/species-koi-info";
import { ColorTab } from "@/views/dashboard-layout/species-koi-page/components/tabs/color-tabs";
import { FarmsTab } from "@/views/dashboard-layout/species-koi-page/components/tabs/farms-tab";
import { GalleryTab } from "@/views/dashboard-layout/species-koi-page/components/tabs/gallery-tabs";
import { CircleDollarSign, Fish, PaintBucket } from "lucide-react";
import { useParams } from "react-router-dom";

const SpeciesKoiDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    throw new Error("ID is required");
  }
  const { data, isLoading, error } = useSpeciesKoiDetailQuery({ id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="container p-4 mx-auto space-y-4">
      <Card>
        <KoiHeader
          id={id}
          name={data?.data!.name}
          description={data?.data!.description}
          data={data.data!}
        />
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <InfoCard
              title="Size Range"
              value={`${data.data!.minSize}" - ${data.data!.maxSize}"`}
              icon={<Fish className="w-4 h-4" />}
            />
            <InfoCard
              title="Price"
              value={`$${data.data!.price.toLocaleString()}`}
              icon={<CircleDollarSign className="w-4 h-4" />}
            />
            <InfoCard
              title="Color Varieties"
              value={data.data!.colors.length.toString()}
              icon={<PaintBucket className="w-4 h-4" />}
            />
          </div>
        </CardContent>
      </Card>
      <Tabs defaultValue="colors">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="farms">Farms</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>
        <TabsContent value="colors">
          <ColorTab colors={data.data!.colors} name={data.data!.name} />
        </TabsContent>
        <TabsContent value="farms">
          <FarmsTab farms={data.data!.farms} name={data.data!.name} />
        </TabsContent>
        <TabsContent value="gallery">
          <GalleryTab images={data.data!.imageUrls} name={data.data!.name} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpeciesKoiDetail;
