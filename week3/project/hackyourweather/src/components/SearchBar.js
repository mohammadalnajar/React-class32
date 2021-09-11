import React, { useState } from 'react';

export const SearchBar = ({ setCities, setLoading, setError }) => {
  const [searchInput, setSearchInput] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  const searchCity = async (e) => {
    e.preventDefault();
    setLoading({ status: 'pending' });
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const weatherData = await response.json();
      if (weatherData.cod === 200) {
        setCities((prevState) => {
          return [weatherData, ...prevState];
        });
        setLoading({ status: 'done' });
        setSearchInput('');
      } else if (weatherData.cod === '404') {
        setError({ status: true, msg: weatherData.message });
        setLoading({ status: 'done' });
      }
      console.log(weatherData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='d-flex w-100 justify-content-center'>
        <form className={inputFocus ? 'wide' : ''} onSubmit={searchCity}>
          <input
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            value={searchInput}
            type='search'
            required
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
    </>
  );
};
