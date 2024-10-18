import { useLocation, useParams } from "react-router-dom";

import {
  Button,
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
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const FarmEdit = () => {
  const { id } = useParams<{ id: string }>();
  const { state: FarmState } = useLocation();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<FarmsBodySchema>({
    resolver: zodResolver(farmsSchema),
    defaultValues: FarmState || {},
  });

  useEffect(() => {
    if (FarmState) {
      setImages(form.getValues("farmImages"));
    }
  }, [form]);

  const handleFilesSelected = (files: File[]) => {
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: FarmsBodySchema) => {
    console.log(data);
  };

  return (
    <section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="container grid grid-cols-10 gap-10 px-10 mt-10"
        >
          <div className="col-span-4">
            <FileInput onFilesSelected={handleFilesSelected} />
            {images.length > 0 ?? (
              <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3 md:grid-cols-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group aspect-square">
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
                ))}
              </div>
            )}
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
                          <Input placeholder="shadcn" type="" {...field} />
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
                        <Input placeholder="shadcn" type="" {...field} />
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
                    <Input placeholder="shadcn" type="" {...field} />
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
                      placeholder="Placeholder"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Enter a brief description.</FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default FarmEdit;
