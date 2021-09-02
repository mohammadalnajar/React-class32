import React from 'react';

export default function FriendProfile({ friend }) {
  const { name, location, phone, email } = friend != null ? friend : false;
  return (
    <div className='d-flex'>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <strong> Name: </strong>
          {name.first} {name.last}
        </li>
        <li className='list-group-item'>
          <strong> Address:</strong> {location.street.name}{' '}
          {location.street.number} in {location.city}
        </li>
        <li className='list-group-item'>
          <strong>Country: </strong> {location.country}
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
