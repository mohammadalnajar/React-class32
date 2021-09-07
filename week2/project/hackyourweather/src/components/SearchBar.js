import React, { useState } from 'react';

export const SearchBar = ({ setCity, setLoading }) => {
  const [searchInput, setSearchInput] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  const searchCity = (e) => {
    e.preventDefault();
    setLoading({ status: 'pending' });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => res.json())
      .then((weatherData) => {
        setCity([weatherData]);

        // this timeout is only to let show the loading spinner
        setTimeout(() => {
          setLoading({ status: 'done' });
        }, 500);

        setSearchInput('');
      })
      .catch((err) => console.log(err));
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
