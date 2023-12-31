import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Pet } from '@/components/pet';
import {
  ALLOWED_ANIMALS,
  isAllowedAnimal,
  type AllowedAnimal,
} from '@/constants/animals';
import { type Pet as PetSchema } from '@/constants/schemas';
import { getInitialPets } from '@/services/get-initial-pets';
import { getPets } from '@/services/get-pets';

const FIELD_NAMES = {
  Animal: 'animal',
  Breed: 'breed',
  Location: 'location',
} as const;

const DEFAULT_FIELD_VALUES = {
  [FIELD_NAMES.Animal]: 'all',
  [FIELD_NAMES.Breed]: 'none',
} as const;

export const SearchParams = () => {
  const [petList, setPetList] = useState<PetSchema[]>([]);

  const hasFetchedPets = petList.length > 0;

  useEffect(() => {
    const fetchInitialPets = async () => {
      try {
        const petResponse = await getInitialPets();

        setPetList(petResponse.pets);

        toast.success(
          "Initial pets fetched. You can now select an animal and it's breed.",
        );
      } catch {
        toast.error("We couldn't fetch the pets. Please try again later.");
      }
    };

    fetchInitialPets().catch(console.error);
  }, []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const submittedAnimal = formData.get(FIELD_NAMES.Animal);

      let animal: AllowedAnimal | undefined;

      if (typeof submittedAnimal !== 'string') {
        toast.error('Please select a valid animal.');

        return;
      }

      if (submittedAnimal === DEFAULT_FIELD_VALUES.animal) {
        animal = undefined;
      } else {
        if (!isAllowedAnimal(submittedAnimal)) {
          toast.error('Please select a valid animal.');

          return;
        }

        animal = submittedAnimal;
      }

      const submittedBreed = formData.get(FIELD_NAMES.Breed);

      let breed: string | undefined;

      const willSubmitBreed =
        typeof submittedBreed === 'string' &&
        submittedBreed !== DEFAULT_FIELD_VALUES.breed;

      if (willSubmitBreed) {
        breed = submittedBreed;
      }

      const location = formData.get(FIELD_NAMES.Location);

      const petsResponse = await getPets({
        animal,
        breed,
        location: typeof location === 'string' ? location : undefined,
      });

      if (petsResponse.pets.length === 0) {
        toast.error(
          'We could not find any pets matching your search. Please try again.',
        );

        setPetList([]);

        return;
      }

      setPetList(petsResponse.pets);

      toast.success(
        `We found ${petsResponse.pets.length} pets for you. Check them out!`,
      );
    } catch {
      toast.error("We couldn't fetch new pets. Please try again later.");
    }
  };

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          handleFormSubmit(event).catch(console.error);
        }}
      >
        <label htmlFor={FIELD_NAMES.Location}>
          Location
          <input
            id={FIELD_NAMES.Location}
            name={FIELD_NAMES.Location}
            placeholder="Location"
          />
        </label>

        <label htmlFor={FIELD_NAMES.Animal}>
          Animal
          <select
            defaultValue={DEFAULT_FIELD_VALUES.animal}
            id={FIELD_NAMES.Animal}
            name={FIELD_NAMES.Animal}
          >
            <option value={DEFAULT_FIELD_VALUES.animal}>All</option>

            {ALLOWED_ANIMALS.map((allowedAnimal) => (
              <option key={allowedAnimal} value={allowedAnimal}>
                {allowedAnimal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor={FIELD_NAMES.Breed}>
          Breed
          <select
            disabled={!hasFetchedPets}
            id={FIELD_NAMES.Breed}
            name={FIELD_NAMES.Breed}
            defaultValue={DEFAULT_FIELD_VALUES.breed}
          >
            <option value={DEFAULT_FIELD_VALUES.breed} disabled hidden>
              {hasFetchedPets ? 'Select a breed' : 'No breeds available'}
            </option>

            {petList.map((animal) => (
              <option key={animal.id} value={animal.breed}>
                {animal.breed}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      <section>
        {petList.map((pet) => (
          <Pet
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            name={pet.name}
          />
        ))}
      </section>
    </div>
  );
};
