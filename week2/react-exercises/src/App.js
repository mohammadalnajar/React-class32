import './App.css';
import DogGallery from './components/DogGallery';
import Friend from './components/Friend';
import RandomJoke from './components/RandomJoke';

function App() {
  return (
    <div className='App'>
      <div className='my-4 pt-4 first-exercise'>
        <h1>Exercise 1</h1>
        <Friend />
        <hr />
      </div>
      <div className='pt-4 my-4 second-exercise'>
        <h1>Exercise 2</h1>
        <DogGallery />
        <hr />
      </div>
      <div className='pt-4 my-4 third-exercise'>
        <h1>Exercise 3</h1>
        <RandomJoke />
        <hr />
      </div>
    </div>
  );
}

export default App;
