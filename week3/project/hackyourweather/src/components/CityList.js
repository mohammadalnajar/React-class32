import React from 'react';
import City from './City';
function CityList({ cities, loading }) {
  return (
    <>
      <ul className='city-list mt-5'>
        {loading.status === 'pending' ? (
          <div className='spinner mt-5'></div>
        ) : (
          cities.map((city) => <City key={city.id} city={city} />)
        )}
      </ul>
    </>
  );
}
export default CityList;
