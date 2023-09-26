export const ALLOWED_ANIMALS = [
  'bird',
  'cat',
  'dog',
  'rabbit',
  'reptile',
] as const;

export type AllowedAnimal = (typeof ALLOWED_ANIMALS)[number];

export const isAllowedAnimal = (
  animal: string,
): animal is (typeof ALLOWED_ANIMALS)[number] => {
  return Array.from<string>(ALLOWED_ANIMALS).includes(animal);
};
