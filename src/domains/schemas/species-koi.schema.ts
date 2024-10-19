import { z } from "zod";

export const speciesSchema = z.object({});

export type SpeciesBodySchema = z.infer<typeof speciesSchema>;
