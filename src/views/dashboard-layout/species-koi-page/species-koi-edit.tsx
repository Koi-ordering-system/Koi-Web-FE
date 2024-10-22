import { FileInput } from "@/components/common/input-file";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/components/ui";
import {
  SpeciesKoiBodySchema,
  speciesKoiSchema,
} from "@/domains/schemas/species-koi.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, PlusCircle, Save, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";

const MAX_IMAGES = 8;

const SpeciesKoiEdit = () => {
  const { id } = useParams<{ id: string }>();
  const { state: FarmState } = useLocation();
  const [imageFiles, setImageFiles] = useState<string[]>(
    FarmState?.koiImages || []
  );

  const form = useForm<SpeciesKoiBodySchema>({
    resolver: zodResolver(speciesKoiSchema),
    defaultValues: {
      name: FarmState?.name || "",
      description: FarmState?.description || "",
      minSize: FarmState?.minSize || 0,
      maxSize: FarmState?.maxSize || 0,
      price: FarmState?.price || 0,
      koiImages: FarmState?.koiImages || [],
      color: FarmState?.color || "",
    },
  });

  useEffect(() => {
    if (FarmState?.imageUrls) {
      setImageFiles(FarmState.imageUrls);
    }
  }, [FarmState]);

  const onSubmit = async (data: SpeciesKoiBodySchema) => {
    const formDataWithImages = {
      ...data,
      koiImages: imageFiles,
    };

    console.log(formDataWithImages);
  };

  const handleFilesSelected = (files: File[]) => {
    const newFiles = [
      ...imageFiles,
      ...files.map((file) => URL.createObjectURL(file)),
    ].slice(0, MAX_IMAGES);
    setImageFiles(newFiles);
    form.setValue("koiImages", newFiles, { shouldValidate: true });
  };

  const removeImage = (index: number) => {
    const newFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(newFiles);
    form.setValue("koiImages", newFiles, { shouldValidate: true });
  };

  return (
    <div className="container">
      <Card className="my-10 ">
        <CardHeader className="text-3xl font-semibold ">
          <CardTitle>
            {id ? "Edit Koi Species" : "Create Koi Species"}
          </CardTitle>
          <CardDescription>
            {id
              ? "Edit the details of the koi species."
              : "Add a new koi species to the farm."}
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent className="grid grid-cols-10 gap-4">
              <div className="col-span-4 space-y-2">
                <FormField
                  control={form.control}
                  name="koiImages"
                  render={() => (
                    <FormItem>
                      <FormLabel>Koi Images</FormLabel>
                      <FormControl>
                        <FileInput
                          onFilesSelected={handleFilesSelected}
                          maxFiles={MAX_IMAGES - imageFiles.length}
                          disabled={imageFiles.length >= MAX_IMAGES}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload images of the koi species (max {MAX_IMAGES}).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {imageFiles.length >= MAX_IMAGES && (
                  <Alert variant="warning">
                    <AlertCircle className="w-4 h-4" />
                    <AlertTitle>Image limit reached</AlertTitle>
                    <AlertDescription>
                      You have reached the maximum of {MAX_IMAGES} images.
                      Remove some images to add more.
                    </AlertDescription>
                  </Alert>
                )}
                {imageFiles.length > 0 && (
                  <div className="grid grid-cols-4 gap-2 ">
                    {imageFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={file}
                          alt={`Koi ${index + 1}`}
                          className="object-cover w-full h-24 rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute flex items-center justify-center w-6 h-6 text-white transition-opacity bg-red-500 rounded-full opacity-0 top-1 right-1 group-hover:opacity-100"
                          aria-label={`Remove image ${index + 1}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="col-span-6 space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Species" {...field} />
                      </FormControl>
                      <FormDescription>
                        The name of the koi species.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="The koi species is a beautiful fish..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a brief description of the koi species.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="minSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Minimum Size (cm)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="maxSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Maximum Size (cm)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price ($)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <Input placeholder="White and Red" {...field} />
                      </FormControl>
                      <FormDescription>
                        The primary colors of the koi species.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="grid place-content-end">
              <Button type="submit" className="w-[200px]">
                {id ? (
                  <Save className="w-4 h-4 mr-2" />
                ) : (
                  <PlusCircle className="w-4 h-4 mr-2" />
                )}
                {id ? "Save Changes" : "Create Species"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SpeciesKoiEdit;
