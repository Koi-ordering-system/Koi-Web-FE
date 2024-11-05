import { FileSchema } from "@/domains/schemas/file.schema";
import { z } from "zod";

const MAX_IMAGES = 8;

export const speciesKoiSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  minSize: z.number().min(1, "Minimum size must be positive"),
  maxSize: z.number().min(2, "Maximum size must be positive"),
  price: z.number().min(0, "Price must be positive"),
  koiImages: z
    .array(FileSchema)
    .max(MAX_IMAGES, `Maximum of ${MAX_IMAGES} images allowed`),
  colors: z.string().min(2, "Color must be at least 2 characters"),
});

export type SpeciesKoiBodySchema = z.infer<typeof speciesKoiSchema>;
