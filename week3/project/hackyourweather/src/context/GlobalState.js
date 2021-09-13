import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

// starting state
const initialState = {
  cities: [],
  error: { status: false, msg: '' },
  loading: { status: 'ready' },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // fetching city weather data
  async function searchCity(input) {
    errorHandler(false); // reset error
    loadingHandler('pending');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const weatherData = await response.json();
      if (weatherData.cod === 200) {
        console.log(weatherData);
        dispatch({
          type: 'GET_CITY',
          payload: weatherData,
        });
        loadingHandler('done'); // => data already fetched correctly
      } else if (weatherData.cod === '404') {
        errorHandler(true, weatherData.message);
        loadingHandler('done'); // loading done after response is received
      }
    } catch (error) {
      console.log(error);
    }
  }

  // del one city
  function delCity(id) {
    dispatch({ type: 'DEL_CITY', payload: id });
  }

  // loading spinner
  function loadingHandler(status) {
    dispatch({ type: 'LOADING_SET', payload: status });
  }

  // error manage
  function errorHandler(boolean, msg) {
    if (boolean) {
      dispatch({ type: 'ERROR_SET', payload: msg });
    } else if (!boolean) {
      dispatch({ type: 'ERROR_REMOVE' });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        cities: state.cities,
        error: state.error,
        loading: state.loading,
        searchCity,
        errorHandler,
        delCity,
        loadingHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
