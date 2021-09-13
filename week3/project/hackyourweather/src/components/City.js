import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { delIconStyles } from '../styles/StylesDelIcon';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import 'weather-icons/css/weather-icons.min.css';
import weatherIcons from '../assets/weatherIcons.json';

function City({ city }) {
  const { delIcon } = delIconStyles();
  const tempMinC = city.main['temp_min'] - 273.15;
  const tempMaxC = city.main['temp_max'] - 273.15;
  const { lat, lon } = city.coord;
  const { delCity } = useContext(GlobalContext);
  const icon = weatherIcons[city.weather[0].id].icon;
  return (
    <li className='city'>
      <DeleteIcon className={delIcon} onClick={() => delCity(city.id)} />
      <h2>
        {city.name}, {city.sys.country}
      </h2>{' '}
      <i className={`wi wi-day-${icon} display-1`}></i>
      <strong>{city.weather[0].main}</strong>
      <p>{city.weather[0].description}</p>
      <ul>
        <li>min temp: {tempMinC.toFixed(1)}&deg;</li>
        <li>max temp: {tempMaxC.toFixed(1)}&deg;</li>
        <li>
          location: {lat}, {lon}
        </li>
      </ul>
      <Link to={`/${city.id}/${city.name}`}>Chart</Link>
    </li>
  );
}
export default City;
