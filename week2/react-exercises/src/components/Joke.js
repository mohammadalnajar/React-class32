import React from 'react';

export default function Joke({ setup, punchline }) {
  return (
    <div>
      <p className='h3'>{setup}</p>
      <p className='h5'>{punchline}</p>
    </div>
  );
}
