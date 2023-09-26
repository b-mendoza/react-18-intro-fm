import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().trim().url(),
});

export const { VITE_API_URL } = envSchema.parse(import.meta.env);
