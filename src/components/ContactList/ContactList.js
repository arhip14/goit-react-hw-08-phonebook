import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/thunks';

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#f5f5f5',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: '#ff5733',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export const ContactList = () => {
  const contacts = useSelector(selectTotalContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div style={containerStyle}>
      <ul style={listStyle}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} style={listItemStyle}>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{name}</p>
              <p>{number}</p>
            </div>
            <button
              onClick={() => handleDeleteContact(id)}
              style={buttonStyle}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};