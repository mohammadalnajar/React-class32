import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

export default function Friend() {
  const [friend, setFriend] = useState({});
  function getFriend() {
    fetch('https://www.randomuser.me/api?results=1')
      .then((res) => res.json())
      .then((res) => setFriend(res.results[0]));
  }
  return (
    <div className='mt-4'>
      <Button getFriend={getFriend} />
      {friend.name && <FriendProfile friend={friend} />}
    </div>
  );
}
