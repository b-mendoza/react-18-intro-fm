import { z } from 'zod';

export const petSchema = z.object({
  animal: z.string(),
  breed: z.string(),
  id: z.number(),
  name: z.string(),

  /**
   * Possibly will need to access the values of these fields later, but as of
   * now, they are not needed.
   */
  // city: z.string(),
  // description: z.string(),
  // images: z.array(z.string()),
  // state: z.string(),
});

export type Pet = z.infer<typeof petSchema>;

export const apiResponseSchema = z.object({
  endIndex: z.number(),
  hasNext: z.boolean(),
  numberOfResults: z.number(),
  pets: z.array(petSchema),
  startIndex: z.number(),
});

export type APIResponse = z.infer<typeof apiResponseSchema>;
