interface PetProps {
  animal: string;
  breed: string;
  name: string;
}

export const Pet = (props: PetProps) => {
  const { animal, breed, name } = props;

  return (
    <article>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </article>
  );
};
