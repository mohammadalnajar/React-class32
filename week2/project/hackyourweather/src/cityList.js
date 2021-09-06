import React from 'react';
import City from './city';
import data from './city-weather.json';
function CityList() {
  return (
    <ul className='city-list'>
      {data.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </ul>
  );
}
export default CityList;
