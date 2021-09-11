import React from 'react';
import City from './City';
function CityList({ cityState, loading }) {
  return (
    <>
      <ul className='city-list mt-5'>
        {loading.status === 'pending' ? (
          <div className='spinner mt-5'></div>
        ) : loading.status === 'done' && cityState.cod === 200 ? (
          <City key={cityState.id} city={cityState} />
        ) : cityState.cod === '404' ? (
          <h2 className='mt-5'>City not found</h2>
        ) : (
          <h2 className='mt-5'>Something went wrong</h2>
        )}
      </ul>
    </>
  );
}
export default CityList;
