import React from 'react';

function City({ city }) {
  const tempMinC = city.main['temp_min'] - 273.15;
  const tempMaxC = city.main['temp_max'] - 273.15;
  const { lat, lon } = city.coord;
  return (
    <li className='city'>
      <h2>
        {city.name}, {city.sys.country}
      </h2>
      <strong>{city.weather[0].main}</strong>
      <p>{city.weather[0].description}</p>
      <ul>
        <li>min temp: {tempMinC.toFixed(1)}</li>
        <li>max temp: {tempMaxC.toFixed(1)}</li>
        <li>
          location: {lat}, {lon}
        </li>
      </ul>
    </li>
  );
}
export default City;
