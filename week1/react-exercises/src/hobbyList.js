import React from 'react';
import Hobby from './hobby';

function HobbyList({ hobbies }) {
  return hobbies.map((hobby, index) => {
    return <Hobby hobby={hobby} index={index} />;
  });
}

export default HobbyList;
