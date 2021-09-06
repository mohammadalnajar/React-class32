import React, { useState } from 'react';

export const SearchBar = ({ setCity }) => {
  const [searchInput, setSearchInput] = useState('');
  const searchCity = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => res.json())
      .then((weatherData) => {
        setCity([weatherData]);
        setSearchInput('');
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={searchCity}>
        <input
          value={searchInput}
          type='search'
          required
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type='submit'>
          <i className='fa fa-search'></i>
        </button>
      </form>
    </>
  );
};
