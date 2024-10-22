import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface GalleryTabProps {
  images: string[];
  name: string;
}

export function GalleryTab({ images, name }: GalleryTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Photo Gallery</CardTitle>
        <CardDescription>Images of {name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((url, index) => (
            <div key={index} className="relative aspect-square">
              <img
                src={url}
                alt={`${name} - Image ${index + 1}`}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
