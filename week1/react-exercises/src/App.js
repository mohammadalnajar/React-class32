import './App.css';
import React from 'react';
import HobbyList from './hobbyList';
import Guarantee from './guarantee';
import chat from './assets/chat.png'
import coin from './assets/coin.png'
import delivery from './assets/f-delivery.png'

function App() {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ];
  const description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis eos repudiandae quasi dolorem, porro fuga minima praesentium perferendis eum voluptatibus?'
  return (
    <div className='App'>
      <HobbyList hobbies={hobbies} />
      <div className='flex'>

      <Guarantee img={chat} title='Online support 24/7' description={description}/>
      <Guarantee img={coin} title='100% Money back' description={description}/>
      <Guarantee img={delivery} title='Free shipping' description={description}/>
      </div>
    </div>
  );
}

export default App;
