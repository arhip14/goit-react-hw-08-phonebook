import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from '../../redux/contacts/filterSlice';
import { selectFilteredContact } from '../../redux/contacts/selectors';

const filterStyle = {
  marginBottom: '20px',
  backgroundColor: 'transparent',
  boxShadow: '0px 2px 5px -1px rgba(0, 0, 0, 0.65)',
  borderRadius: '8px',
  transition: 'background-color 250ms ease-in, box-shadow 250ms ease-in',
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
};

const labelStyle = {
  marginRight: '10px',
  color: 'rgba(0, 0, 0, 0.8)',
  fontWeight: 'bold',
  fontSize: '14px',
};

const inputStyle = {
  flex: 1,
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  fontSize: '16px',
};

export const Filter = () => {
  const nameFromFilter = useSelector(selectFilteredContact);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(contactsFilter(e.currentTarget.value));
  };

  return (
    <div style={filterStyle}>
      <label style={labelStyle}>Filter by Name:</label>
      <input
        style={inputStyle}
        placeholder="Search..."
        name="filter"
        value={nameFromFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
