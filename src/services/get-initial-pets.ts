import { apiResponseSchema } from '../constants/schemas.ts';
import { API_URL } from '../constants/shared.ts';

export const getInitialPets = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  return apiResponseSchema.parse(data);
};

export type GetInitialPets = Awaited<ReturnType<typeof getInitialPets>>;
