import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const { searchCity } = useContext(GlobalContext);

  const searchCityForm = async (e) => {
    e.preventDefault();
    await searchCity(searchInput);
    setSearchInput('');
  };

  return (
    <>
      <div className='d-flex w-100 justify-content-center'>
        <form className={inputFocus ? 'wide' : ''} onSubmit={searchCityForm}>
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
