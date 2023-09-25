import { createElement } from 'react';

interface PetProps {
  animal: string;
  breed: string;
  name: string;
}

export const Pet = (props: PetProps) => {
  const { animal, breed, name } = props;

  return createElement(
    'div',
    null,
    createElement('h2', null, name),
    createElement('h3', null, animal),
    createElement('h3', null, breed),
  );
};
