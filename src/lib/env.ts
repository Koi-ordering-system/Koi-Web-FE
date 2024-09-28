import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL_BE: z.string(),
  VITE_DOMAIN_AUTH0: z.string(),
  VITE_CLIENT_ID_AUTH0: z.string(),
  VITE_CLIENT_SECRET_AUTH0: z.string(),
});

export const env = envSchema.parse({
  VITE_API_URL_BE: import.meta.env.VITE_API_URL_BE,
  VITE_DOMAIN_AUTH0: import.meta.env.VITE_DOMAIN_AUTH0,
  VITE_CLIENT_ID_AUTH0: import.meta.env.VITE_CLIENT_ID_AUTH0,
  VITE_CLIENT_SECRET_AUTH0: import.meta.env.VITE_CLIENT_SECRET_AUTH0,
});
