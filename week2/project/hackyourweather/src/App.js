import { useState } from 'react';
import './App.css';
import CityList from './components/CityList';
import { SearchBar } from './components/SearchBar';

function App() {
  const [city, setCity] = useState([]);
  return (
    <div className='container'>
      <h1 className='mt-4'>Weather</h1>
      <SearchBar city={city} setCity={setCity} />
      <CityList cityState={city} />
    </div>
  );
}

export default App;
