import { z } from "zod";

export const farmsSchema = z.object({
  name: z.string().nonempty("Name is required"),
  owner: z.string().nonempty("Owner is required"),
  address: z.string().nonempty("Address is required"),
  description: z.string().optional(),
  farmImages: z.array(z.string()).optional(),
});
