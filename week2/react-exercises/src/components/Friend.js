import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

export default function Friend() {
  const [friend, setFriend] = useState({
    name: '',
    location: {
      street: { name: '', number: 0 },
      city: '',
      country: '',
    },
    phone: '',
    email: '',
  });
  async function getFriend() {
    const response = await fetch('https://www.randomuser.me/api?results=1');
    const data = await response.json();
    setFriend(data.results[0]);
  }
  return (
    <div className='mt-4'>
      <Button getFriend={getFriend} />
      {friend.name && <FriendProfile friend={friend} />}
    </div>
  );
}
