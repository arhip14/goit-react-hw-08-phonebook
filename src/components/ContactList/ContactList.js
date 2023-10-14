import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectTotalContacts);

  console.log(contacts);  

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{ name}</p>
          <p>{ number}</p>
        </li>
      ))}
    </ul>
  );
};
