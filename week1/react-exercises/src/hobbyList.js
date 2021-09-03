import React from 'react';
import Hobby from './hobby';

function HobbyList({ hobbies }) {
  return hobbies.map((hobby, index) => {
    return <Hobby hobby={hobby} key={index} />;
  });
}

export default HobbyList;
