import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from '../../redux/contacts/filterSlice';
import { selectFilteredContact } from '../../redux/contacts/selectors';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color:#4169E1; 
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom:20px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
  color: #FFDAB9; 
  font-weight: bold;
  font-size: 14px;
`;

const FilterInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 5px;
  padding: 8px;
  font-size: 16px;
  color: #333; 
`;

const FilterIcon = styled.span`
  font-size: 24px;
  color: ##FFDAB9; 
  cursor: pointer;
  margin-left:10px;
`;

export const Filter = () => {
  const nameFromFilter = useSelector(selectFilteredContact);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(contactsFilter(e.currentTarget.value));
  };

  const handleClearFilter = () => {
    dispatch(contactsFilter(''));
  };

  return (
    <FilterContainer>
      <FilterLabel>Filter by Name:</FilterLabel>
      <FilterInput
        placeholder="Search..."
        name="filter"
        value={nameFromFilter}
        onChange={handleFilterChange}
      />
      {nameFromFilter && (
        <FilterIcon onClick={handleClearFilter}>✕</FilterIcon>
      )}
    </FilterContainer>
  );
};
