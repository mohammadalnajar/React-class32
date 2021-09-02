import React, { useState } from 'react';
import DogButton from './DogButton';
import DogPhoto from './DogPhoto';

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  function getDogPhoto() {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then((res) => res.json())
      .then((res) => {
        setDogPhotos((prevPhotos) => {
          return [...prevPhotos, res[0].url];
        });
      });
  }

  return (
    <div>
      <DogButton getDogPhoto={getDogPhoto} />
      <div className='p-3 my-3 dog-gallery'>
        {dogPhotos.length > 0 ? (
          dogPhotos.map((url, idx) => {
            return <DogPhoto url={url} key={idx} />;
          })
        ) : (
          <p className='my-3'>Get your first dog by clicking the button!</p>
        )}
      </div>
    </div>
  );
}
