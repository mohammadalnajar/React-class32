import React from 'react';

export default function DogPhoto({ url }) {
  return (
    <img className='m-1' src={url} alt='dog' width='100px' height='100px' />
  );
}
