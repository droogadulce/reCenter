import React from 'react';

const Description = ({ name, description }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
};

export default Description;
