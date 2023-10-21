import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/thunk';
import { selectFilteredByName } from '../../redux/contacts/selectors';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 10px;
  max-width: 800px;
  margin: 10px auto;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  background: #333; 
  color: #fff; 
  padding: 20px;
  border: 1px solid #444; 
  border-radius: 5px;
  margin-bottom: 20px;
  transition: background-color 0.3s;
  &:hover {
    background: #444; 
  }
`;

const ContactInfo = styled.div`
  
`;

const ContactName = styled.p`
  font-weight: bold;


`;

const ContactNumber = styled.p`
  
  
`;

const DeleteButton = styled.button`
  background-color: #ff5733;
  margin-left: 20px;
  color: #fff; 
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background: #ff4500; 
  }
`;

export const ContactList = () => {
  const contacts = useSelector(selectFilteredByName);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <ListContainer>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactInfo>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
          </ContactInfo>
          <DeleteButton onClick={() => handleDeleteContact(id)}>Delete</DeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};
