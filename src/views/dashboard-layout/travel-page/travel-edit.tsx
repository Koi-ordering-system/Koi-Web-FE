import { Loading } from "@/components/common";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Form,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import {
  TravelBodySchema,
  travelSchema,
} from "@/domains/schemas/travel.schema";
import { travelApi } from "@/domains/services/travel/travel.service";
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
import { useToast } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";

const TravelEdit = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { state: TravelState } = useLocation();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { data, isLoading } = UseFarmsQuery({
    options: {
      pageIndex: 1,
      pageSize: 100,
    },
  });

  const form = useForm<TravelBodySchema>({
    resolver: zodResolver(travelSchema),
    defaultValues: {
      farmId: TravelState.farmId || "",
      days: TravelState.days || 0,
      price: TravelState.price || 0,
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (data: TravelBodySchema) => {
    setIsSubmitting(true);

    const response = id
      ? await travelApi.updateTravel(id, data)
      : await travelApi.createTravel(data);

    if (response === true) {
      toast({
        title: "Success",
        description: "Travel created successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "An error occurred while creating the travel",
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Create Travel</CardTitle>
          <CardDescription>
            Enter the details for a new travel package.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="farmId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose a Farm</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select farm " />
                        </SelectTrigger>
                        <SelectContent>
                          {data?.data?.items.map((farm) => (
                            <SelectItem key={farm.id} value={farm.id}>
                              {farm.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="days"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Days</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        placeholder="Enter price"
                        onBlur={field.onBlur}
                        value={field.value === 0 ? "" : field.value}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
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
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        placeholder="Enter price"
                        onBlur={field.onBlur}
                        value={field.value === 0 ? "" : field.value}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Travel"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TravelEdit;
