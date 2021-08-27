import './App.css';
import HobbyList from './hobbyList';

function App() {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ];
  return (
    <div className='App'>
      <HobbyList hobbies={hobbies} />
    </div>
  );
}

export default App;
