import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/thunk';

const formStyle = {
  maxWidth: '300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  margin: '5px 0',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#ff5733',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '16px',
};

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() !== '' && number.trim() !== '') {
      try {
        await dispatch(addNewContact({ name, number }));
        setName('');
        setNumber('');
      } catch (error) {
        alert('An error occurred while adding the contact.');
      }
    } else {
      alert('Enter Name and Number !!!');
    }
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={inputStyle}
        type="text"
        name="number"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button style={buttonStyle} type="submit">
        Add Contact
      </button>
    </form>
  );
};
