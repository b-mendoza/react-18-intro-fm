import { nanoid } from 'nanoid';

import { Pet } from '../pet';

const animals = [
  {
    animal: 'Dog',
    breed: 'Havanese',
    id: nanoid(),
    name: 'Luna',
  },
  {
    animal: 'Bird',
    breed: 'Cockatiel',
    id: nanoid(),
    name: 'Pepper',
  },
  {
    animal: 'Cat',
    breed: 'Mixed',
    id: nanoid(),
    name: 'Doink',
  },
] as const;

type AppProps = React.HTMLProps<HTMLDivElement>;

export const App = (props: AppProps) => {
  return (
    <div {...props}>
      <h1>Adopt Me!</h1>

      {animals.map((animal) => {
        return <Pet key={animal.id} {...animal} />;
      })}
    </div>
  );
};
