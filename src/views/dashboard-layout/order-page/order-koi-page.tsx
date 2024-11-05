"use client";

import { useMemo, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Separator,
} from "@/components/ui";
import {
  OrderKoiFormValues,
  orderKoiSchema,
} from "@/domains/schemas/orders.schema";
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
import { useSpeciesKoiQuery } from "@/domains/stores/hooks/species/use-species-kois";
import { useUsersQuery } from "@/domains/stores/hooks/users/use-user-query";
import { SpeciesKoisParams } from "@/domains/models/species-kois";
import Show from "@/lib/show";
import { orderApi } from "@/domains/services/orders/orders.service";
import { useToast } from "@/hooks";

const prepaid = [
  { id: 1, name: "30%", value: 0.3 },
  { id: 2, name: "50%", value: 0.5 },
  { id: 3, name: "70%", value: 0.7 },
  { id: 4, name: "100%", value: 1 },
];

export default function OrderKoiPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [farmID, setFarmID] = useState<string>();
  const [koiID, setKoiID] = useState<string>();

  const optionsFarm: SpeciesKoisParams = useMemo(() => {
    const options: SpeciesKoisParams = {
      id: farmID,
      pageIndex: 1,
      pageSize: 100,
    };

    return options;
  }, [farmID]);

  const { data: users } = useUsersQuery({
    options: { pageIndex: 1, pageSize: 100 },
  });

  const { data: farms } = UseFarmsQuery({
    options: { pageIndex: 1, pageSize: 100 },
  });

  const { data: speciesKois } = useSpeciesKoiQuery({
    options: optionsFarm,
  });

  const form = useForm<OrderKoiFormValues>({
    resolver: zodResolver(orderKoiSchema),
    defaultValues: {
      userId: "",
      farmId: "",
      kois: [{ koiId: "", quantity: 1, color: "", minSize: 0, maxSize: 0 }],
      prePaidPrice: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "kois",
  });

  const onSubmit = async (data: OrderKoiFormValues) => {
    setIsSubmitting(true);

    const response = await orderApi.postOrdersKoi(data);

    if (response) {
      window.location.href = response.payOSUrl;
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <div className="container py-10 mx-auto">
      <Card className="w-full ">
        <CardHeader>
          <CardTitle className="text-2xl">Create Koi Order</CardTitle>
          <CardDescription>
            Enter the details for your koi order below.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="userId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Email</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a user" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {users?.data?.items.map((user) => (
                            <SelectItem key={user.id} value={user.id}>
                              {user.email}
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
                  name="farmId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Farm</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          setFarmID(value);
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a farm" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {farms?.data?.items.map((farm) => (
                            <SelectItem key={farm.id} value={farm.id}>
                              {farm.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator />
              <Show>
                <Show.When isTrue={speciesKois?.data?.items.length !== 0}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Koi Details</h3>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          append({
                            koiId: "",
                            quantity: 1,
                            color: "",
                            minSize: 0,
                            maxSize: 0,
                          })
                        }
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Koi
                      </Button>
                    </div>
                    {fields.map((field, index) => (
                      <div className="flex w-full gap-3 ">
                        <Card key={field.id} className="w-full">
                          <CardContent className="pt-6">
                            <div className="flex items-center justify-between gap-4">
                              <FormField
                                control={form.control}
                                name={`kois.${index}.koiId`}
                                render={({ field }) => (
                                  <FormItem className="w-full">
                                    <FormLabel>Koi Species</FormLabel>
                                    <Select
                                      onValueChange={(value) => {
                                        field.onChange(value);
                                        setKoiID(value);
                                      }}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select a koi" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {speciesKois?.data?.items.map((koi) => (
                                          <SelectItem
                                            key={koi.id}
                                            value={koi.id}
                                          >
                                            {koi.name}
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
                                  <FormItem className="w-full">
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) =>
                                          field.onChange(
                                            parseInt(e.target.value)
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`kois.${index}.color`}
                                render={({ field }) => (
                                  <FormItem className="w-full">
                                    <FormLabel>Color</FormLabel>
                                    <Select
                                      disabled={!farmID || !koiID}
                                      onValueChange={(value) => {
                                        field.onChange(value);
                                      }}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select a koi" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {farms?.data?.items
                                          .find((farm) => farm.id === farmID)
                                          ?.kois.find((koi) => koi.id === koiID)
                                          ?.colors.map((color) => (
                                            <SelectItem
                                              key={color.id}
                                              value={color.id}
                                            >
                                              {color.name}
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
                                name={`kois.${index}.minSize`}
                                render={({ field }) => (
                                  <FormItem className="w-full">
                                    <FormLabel>Minimum Size (cm)</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) =>
                                          field.onChange(
                                            parseFloat(e.target.value)
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`kois.${index}.maxSize`}
                                render={({ field }) => (
                                  <FormItem className="w-full">
                                    <FormLabel>Maximum Size (cm)</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) =>
                                          field.onChange(
                                            parseFloat(e.target.value)
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </CardContent>
                        </Card>
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="px-4 rounded-lg bg-destructive"
                        >
                          <Trash2 className="w-4 h-4 text-destructive-foreground" />
                        </button>
                      </div>
                    ))}
                  </div>
                </Show.When>
                <Show.Else>
                  <Card>
                    <CardHeader></CardHeader>
                    <CardContent>
                      <p className="text-center">
                        No koi species available for this farm.
                      </p>
                    </CardContent>
                  </Card>
                </Show.Else>
              </Show>
              <Separator />
              <FormField
                control={form.control}
                name="prePaidPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pre-paid Price</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(parseFloat(value));
                      }}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a pre-paid price" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {prepaid.map((item) => (
                          <SelectItem
                            key={item.id}
                            value={item.value.toString()}
                          >
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Order"
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
