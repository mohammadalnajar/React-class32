import { useState } from 'react';
import './App.css';
import CityList from './components/CityList';
import { SearchBar } from './components/SearchBar';

function App() {
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState({ status: 'ready' });

  return (
    <div className='container'>
      <h1 className='mt-4'>Weather App</h1>
      <SearchBar setLoading={setLoading} setCity={setCity} />
      {loading.status === 'pending' || loading.status === 'done' ? (
        <CityList loading={loading} cityState={city} />
      ) : (
        <h2 className='text-center mt-5'>
          Please search for a{' '}
          <strong className='text-decoration-underline'>
            {'city'.toUpperCase()}
          </strong>{' '}
          to get its weather data
        </h2>
      )}
    </div>
  );
}

export default App;
