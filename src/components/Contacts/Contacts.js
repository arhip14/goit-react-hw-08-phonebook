import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/thunk';
import { selectFilteredByName } from '../../redux/contacts/selectors';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333; /* Темний сірий фон */
  color: #fff; /* Білий текст */
  padding: 10px;
  border: 1px solid #444; /* Темно-сірий бордюр */
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background-color 0.3s;
  &:hover {
    background: #444; /* Змінюйте колір при наведенні */
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ContactNumber = styled.p`
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #ff5733;
  color: #fff; /* Білий текст */
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background: #ff4500; /* Змінюйте колір при наведенні */
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
