import { farmApi } from "@/domains/services/farms/farms.service";
import { RootResponse } from "@/domains/models/root/root.response";
import { FarmEditResponse } from "@/domains/models/farms";
import { useToast } from "@/hooks";
import { useLocation, useParams } from "react-router-dom";
import {
  Button,
  CardContent,
  CardFooter,
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
import { FarmsBodySchema, farmsSchema } from "@/domains/schemas/farms.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileInput } from "@/components/common/input-file";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Show from "@/lib/show";

interface FarmFormProps {
  nextStep: (step: number) => void;
  getId: (id: string) => void;
}

const FarmForm: React.FC<FarmFormProps> = ({ nextStep, getId }) => {
  const { id } = useParams<{ id: string }>();

  const { toast } = useToast();
  const { state: FarmState } = useLocation();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<FarmsBodySchema>({
    resolver: zodResolver(farmsSchema),
    defaultValues: FarmState || {},
  });

  useEffect(() => {
    const image = form.getValues("farmImages") as unknown as {
      id: string;
      url: string;
    }[];

    if (FarmState) {
      setImages(image.map((img) => img.url));
    }
  }, [form]);

  const convertFileToDataURL = (file: File | Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFilesSelected = async (files: File[] | Blob[]) => {
    try {
      const newImages = await Promise.all(files.map(convertFileToDataURL));
      setImages((prevImages) => [...prevImages, ...newImages]);
      form.setValue("farmImages", [...files]);
    } catch (error) {
      console.error("Error converting files to data URLs:", error);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index) as any);
    (form.getValues("farmImages") as Blob[]).filter((_, i) => i !== index);
  };

  // This function is used to submit the form data to the server
  const onSubmit = async (data: FarmsBodySchema) => {
    const value = data;

    const response: RootResponse<FarmEditResponse> | undefined = id
      ? await farmApi.updateFarm(id, value)
      : await farmApi.createFarm(value);

    if (response!.succeeded) {
      toast({
        title: "Success",
        description: "Farm has been saved successfully.",
      });

      getId(response?.data?.id || "");
      nextStep(1);
    } else {
      toast({
        title: "Error",
        description: response!.message || "An error occurred.",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid grid-cols-10 gap-10 ">
            <div className="col-span-4 space-y-3">
              <div>
                <span className="text-sm ">Farm Images</span>
              </div>
              {images.length < 8 && (
                <FileInput onFilesSelected={handleFilesSelected} />
              )}
              <Show>
                <Show.When isTrue={images.length > 0}>
                  <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3 md:grid-cols-4">
                    {images.map((image, index) => {
                      return (
                        <div
                          key={index}
                          className="relative group aspect-square"
                        >
                          <img
                            src={image}
                            alt={`Uploaded ${index + 1}`}
                            className="object-cover w-full h-full transition-transform rounded-md group-hover:scale-105"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute transition-opacity opacity-0 top-2 right-2 group-hover:opacity-100"
                            onClick={() => handleRemoveImage(index)}
                          >
                            <X className="w-4 h-4" />
                            <span className="sr-only">Remove image</span>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </Show.When>
              </Show>
            </div>
            <div className="col-span-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Farm Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your farm name"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Name of the farm or business.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="owner"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Farm Owner</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Farm owner"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Name of the farm owner or contact person.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" type="text" {...field} />
                    </FormControl>
                    <FormDescription>
                      Address of the farm or business.
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
                        placeholder="Enter a brief description."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter a brief description.
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Form>
    </>
  );
};

export default FarmForm;
