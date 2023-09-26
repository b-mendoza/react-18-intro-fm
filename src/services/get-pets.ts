import { type AllowedAnimal } from '@/constants/animals.ts';
import { apiResponseSchema } from '@/constants/schemas.ts';
import { API_URL } from '@/constants/shared.ts';

type GetPetsArgs = Partial<{
  animal: AllowedAnimal;
  breed: string;
  location: string;
}>;

export const getPets = async (args: GetPetsArgs) => {
  const { animal, breed, location } = args;

  const apiURL = new URL(API_URL);

  Object.entries({ animal, breed, location }).forEach(([key, value]) => {
    if (value == null) return;

    apiURL.searchParams.append(key, value);
  });

  const response = await fetch(apiURL);

  const data = await response.json();

  return apiResponseSchema.parse(data);
};

export type GetPets = Awaited<ReturnType<typeof getPets>>;
