import React, { useEffect, useState } from 'react';
import Joke from './Joke';

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const response = await fetch(
          'https://official-joke-ai.appspot.com/random_joke'
        );
        const data = await response.json();
        setJoke(data);
      })();
    }, 2000);
  });
  return (
    <div>
      <Joke setup={joke.setup} punchline={joke.punchline} />
    </div>
  );
}
