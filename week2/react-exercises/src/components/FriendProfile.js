import React from 'react';

export default function FriendProfile({ friend }) {
  const {
    name,
    phone,
    email,
    location: { street, city, country },
  } = friend;
  return (
    <div className='d-flex'>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <strong> Name: </strong>
          {name.first} {name.last}
        </li>
        <li className='list-group-item'>
          <strong> Address:</strong> {street.name} {street.number} in {city}
        </li>
        <li className='list-group-item'>
          <strong>Country: </strong> {country}
        </li>
        <li className='list-group-item'>
          <strong>Email: </strong> {email}
        </li>

        <li className='list-group-item'>
          <strong>Phone: </strong>
          {phone}
        </li>
      </ul>
    </div>
  );
}
