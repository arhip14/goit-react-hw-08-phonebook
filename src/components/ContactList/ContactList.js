import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/thunks';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #121212; 
  color: #fff; 
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  gap:20px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactName = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;

const ContactNumber = styled.p`
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #ff0000; 
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff4500; 
  }
`;

export const ContactList = () => {
  const contacts = useSelector(selectTotalContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Container>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ContactInfo>
              <ContactName>{name}</ContactName>
              <ContactNumber>{number}</ContactNumber>
            </ContactInfo>
            <DeleteButton onClick={() => handleDeleteContact(id)}>Delete</DeleteButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
