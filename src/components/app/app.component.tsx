import { createElement } from 'react';

import { Pet } from '../pet';

const animals = [
  {
    animal: 'Dog',
    breed: 'Havanese',
    name: 'Luna',
  },
  {
    animal: 'Bird',
    breed: 'Cockatiel',
    name: 'Pepper',
  },
  {
    animal: 'Cat',
    breed: 'Mixed',
    name: 'Doink',
  },
];

type AppProps = React.HTMLProps<HTMLDivElement>;

export const App = (props: AppProps) => {
  return createElement(
    'div',
    props,
    createElement('h1', null, 'Adopt Me!'),
    animals.map((animal) => createElement(Pet, animal)),
  );
};
