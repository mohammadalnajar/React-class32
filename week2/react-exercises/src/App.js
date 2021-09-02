import './App.css';
import DogGallery from './components/DogGallery';
import Friend from './components/Friend';

function App() {
  return (
    <div className='App'>
      <div className='my-4 first-exercise'>
        <h1>Exercise 1</h1>
        <Friend />
        <hr />
      </div>
      <div className='py-4 second-exercise'>
        <h1>Exercise 2</h1>
        <DogGallery />
        <hr />
      </div>
    </div>
  );
}

export default App;
