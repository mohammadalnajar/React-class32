import { useState } from 'react';
import './App.css';
import CityList from './components/CityList';
import { SearchBar } from './components/SearchBar';
import Alert from '@material-ui/lab/Alert';
import { alertStyles } from './styles/StyledAlert';

function App() {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState({ status: false, msg: 'City not found' });
  const [loading, setLoading] = useState({ status: 'ready' });

  const { alertContainer, alert, alertMessage } = alertStyles();
  return (
    <div className='container'>
      {error.status && (
        <div className={alertContainer}>
          <Alert
            className={alert}
            severity='error'
            onClose={() => setError({ status: false })}
          >
            <p className={alertMessage}>{error.msg}</p>
          </Alert>
        </div>
      )}

      <h1 className='mt-4'>Weather App</h1>
      <SearchBar
        setLoading={setLoading}
        setCities={setCities}
        setError={setError}
      />
      {loading.status === 'pending' || loading.status === 'done' ? (
        <CityList loading={loading} cities={cities} />
      ) : (
        <h2 className='text-center mt-5'>
          Please search for a{' '}
          <strong className='text-decoration-underline'>CITY</strong> to get its
          weather data
        </h2>
      )}
    </div>
  );
}

export default App;
