import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import City from './City';
import { SearchBar } from './SearchBar';

function CityList() {
  const { cities, loading } = useContext(GlobalContext);
  return (
    <>
      <SearchBar />

      <ul className='city-list mt-5'>
        {loading.status === 'pending' ? (
          <div className='spinner mt-5'></div>
        ) : loading.status === 'done' && cities.length > 0 ? (
          cities.map((city) => <City key={city.id} city={city} />)
        ) : (
          <h2 className='text-center mt-5'>
            Please search for a{' '}
            <strong className='text-decoration-underline'>CITY</strong> to get
            its weather data
          </h2>
        )}
      </ul>
    </>
  );
}
export default CityList;
