import './App.css';
import CityList from './components/CityList';
import { GlobalProvider } from './context/GlobalState';
import { AlertComponent } from './components/AlertComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CityChart } from './components/CityChart';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className='container'>
          <AlertComponent />
          <h1 className='mt-4'>Weather App</h1>
          <Switch>
            <Route exact path='/' component={CityList} />
            <Route exact path='/:cityId/:cityName' component={CityChart} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
