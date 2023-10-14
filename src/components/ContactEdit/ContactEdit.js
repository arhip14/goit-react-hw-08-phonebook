import React, { useState } from 'react';

const formStyles = {
  textAlign: 'center',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyles = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
};

export const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() !== '' && number.trim() !== '') {
      console.log('Name:', name);
      console.log('Number:', number);
      setName('');
      setNumber('');
    } else {
      alert('Name and number cannot be empty. Enter some text!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyles}
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={inputStyles}
      />
      <button type="submit" style={buttonStyles}>
        Add contact
      </button>
    </form>
  );
};
