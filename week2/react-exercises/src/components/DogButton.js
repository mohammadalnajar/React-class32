import React from 'react';

export default function DogButton({ getDogPhoto }) {
  return (
    <div>
      <button className='btn btn-danger mt-3' onClick={getDogPhoto}>
        Get A Dog!
      </button>
    </div>
  );
}
