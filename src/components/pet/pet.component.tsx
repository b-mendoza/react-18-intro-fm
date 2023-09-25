import * as React from 'react';

type PetProps = {
  animal: string;
  breed: string;
  name: string;
};

export const Pet = (props: PetProps) => {
  const { animal, breed, name } = props;

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, name),
    React.createElement('h3', null, animal),
    React.createElement('h3', null, breed),
  );
};
