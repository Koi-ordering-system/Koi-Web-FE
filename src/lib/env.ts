import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL_BE: z.string(),
  VITE_CLERK_PUBLISHABLE_KEY: z.string(),
});

export const env = envSchema.parse({
  VITE_API_URL_BE: import.meta.env.VITE_API_URL_BE,
  VITE_CLERK_PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
});
