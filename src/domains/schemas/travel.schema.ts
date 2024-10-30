import { z } from "zod";

export const travelSchema = z.object({
  farmId: z.string().min(1, "Farm is required"),
  days: z
    .number()
    .min(1, "Days must be at least 1")
    .max(20, "Days must be less than 20"),
  price: z
    .number()
    .min(0, "Price must be non-negative")
    .max(90000, "Price must be less than 90000"),
});

export type TravelBodySchema = z.infer<typeof travelSchema>;
