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
  return (
    <div {...props}>
      <h1>Adopt Me!</h1>

      {animals.map((animal) => {
        return <Pet {...animal} />;
      })}
    </div>
  );
};
