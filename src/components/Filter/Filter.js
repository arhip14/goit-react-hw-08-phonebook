import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterContainer } from './Filter.styles';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const newValue = event.target.value;
    dispatch(selectFilter(newValue));
  };

  return (
    <FilterContainer>
      <label>Filter contacts by name:</label>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name to filter"
      />
    </FilterContainer>
  );
};
