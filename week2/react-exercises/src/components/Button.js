import React from 'react';

export default function Button({ getFriend }) {
  return (
    <div>
      <button className='btn btn-primary' onClick={getFriend}>
        Get a Friend!
      </button>
    </div>
  );
}
