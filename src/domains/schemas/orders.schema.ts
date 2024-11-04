import { z } from "zod";

export const koiSchema = z
  .object({
    farmKoiId: z.string().min(1, "Farm Koi ID is required"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    color: z.string().min(1, "Color is required"),
    minSize: z.number().min(0, "Minimum size must be non-negative"),
    maxSize: z.number().min(0, "Maximum size must be non-negative"),
  })
  .refine((data) => data.maxSize >= data.minSize, {
    message: "Maximum size must be greater than or equal to minimum size",
    path: ["maxSize"],
  });

export const orderKoiSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  farmId: z.string().min(1, "Farm ID is required"),
  kois: z.array(koiSchema).min(1, "At least one koi is required"),
  prePaidPrice: z.number().min(0, "Pre-paid price must be non-negative"),
});

export type OrderKoiFormValues = z.infer<typeof orderKoiSchema>;
