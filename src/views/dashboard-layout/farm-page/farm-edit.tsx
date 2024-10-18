import { useLocation, useParams } from "react-router-dom";

import { Form } from "@/components/ui";
import { farmsSchema } from "@/domains/schemas/farms.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FarmEdit = () => {
  const { id } = useParams<{ id: string }>();
  const { state: FarmState } = useLocation();

  const form = useForm<z.infer<typeof farmsSchema>>({
    resolver: zodResolver(farmsSchema),
    defaultValues: FarmState || {},
  });

  const onSubmit = async (data: z.infer<typeof farmsSchema>) => {
    console.log(data);
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}></form>
      </Form>
    </section>
  );
};

export default FarmEdit;
