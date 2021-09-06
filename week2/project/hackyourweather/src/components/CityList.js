import React from 'react';
import City from './City';
function CityList({ cityState }) {
  return (
    <ul className='city-list mt-5'>
      {cityState.map((item) => (
        <City key={item.id} city={item} />
      ))}
    </ul>
  );
}
export default CityList;
