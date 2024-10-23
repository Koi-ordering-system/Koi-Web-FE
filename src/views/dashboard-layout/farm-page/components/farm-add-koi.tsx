import DialogCustom from "@/components/common/dialog";
import {
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  Button,
  Card,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import {
  farmAddKoiBodyArraySchema,
  FarmAddKoiBodySchema,
} from "@/domains/schemas/farms.schema";
import { farmApi } from "@/domains/services/farms/farms.service";
import { useSpeciesKoiQuery } from "@/domains/stores/hooks/species/use-species-kois";
import { useToast } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus, Save, Trash } from "lucide-react";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

interface FarmAddKoiProps {
  id: string;
}

const FarmAddKoi: React.FC<FarmAddKoiProps> = ({ id }) => {
  const [image, setImage] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);

  const { toast } = useToast();
  const { state: FarmKoi } = useLocation();
  const { data: KoiList } = useSpeciesKoiQuery({
    options: {
      pageIndex: 1,
      pageSize: 100,
    },
  });

  const form = useForm<{ kois: FarmAddKoiBodySchema[] }>({
    resolver: zodResolver(z.object({ kois: farmAddKoiBodyArraySchema })),
    defaultValues: {
      kois: FarmKoi?.kois || [{ id: "", quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "kois",
  });

  const onSubmit = async (data: { kois: FarmAddKoiBodySchema[] }) => {
    const response: boolean | undefined = await farmApi.pacthAddKoiFarm(
      data.kois,
      id
    );

    if (response) {
      toast({
        title: "Koi added",
        description: "Koi has been successfully added to the farm",
      });
    } else {
      toast({
        title: "Failed to add Koi",
        description: "Failed to add Koi to the farm",
      });
    }

    setTimeout(() => {
      setActive(true);
    }, 1000);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="container relative w-full py-5 overflow-y-auto border border-dashed h-[550px] rounded-xl border-foreground ">
            <Button
              type="button"
              className="sticky top-0 z-10 w-full mb-4 space-x-2"
              onClick={() => append({ id: "", quantity: 1 })}
            >
              <CirclePlus className="size-5" />
              <span className="hidden">Add more</span>
            </Button>
            <div className="flex flex-col-reverse">
              {fields.map((field, index) => (
                <Card
                  key={field.id}
                  className="flex items-center justify-between px-4 py-4 mb-4"
                >
                  <div className="flex items-center gap-4">
                    {image[field.id] && <img src={image[field.id]} alt="" />}
                    <FormField
                      control={form.control}
                      name={`kois.${index}.id`}
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              const selectedKoi = KoiList?.data?.items.find(
                                (item) => item.id === value
                              );
                              if (selectedKoi) {
                                setImage((prev) => {
                                  return {
                                    ...prev,
                                    [field.value]: selectedKoi.imageUrls[0],
                                  };
                                });
                              }
                            }}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-[400px]">
                                <SelectValue placeholder="Select Koi" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {KoiList?.data?.items.map((item) => (
                                <SelectItem key={item.id} value={item.id}>
                                  {item.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`kois.${index}.quantity`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Quantity"
                              min={1}
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseInt(e.target.value, 10))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button variant="ghost" onClick={() => remove(index)}>
                    <Trash className="size-5" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="space-x-2" type="submit">
              <Save className="size-5" />
              <span>Save changes</span>
            </Button>
          </div>
        </form>
      </Form>
      <DialogCustom
        isOpen={active}
        onClose={() => setActive(false)}
        children={
          <>
            <AlertDialogTitle>
              Back to the detail page to see the changes
            </AlertDialogTitle>
            <AlertDialogDescription>
              Please move to the detail page to see the changes.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => navigate(`/dashboard/farm/${id}`)}
              >
                <span>Accept</span>
              </AlertDialogAction>
            </AlertDialogFooter>
          </>
        }
      />
    </>
  );
};

export default FarmAddKoi;
