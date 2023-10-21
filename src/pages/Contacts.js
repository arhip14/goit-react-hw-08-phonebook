import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/thunk';
import { ContactEditor } from 'components/ContactEdit/ContactEdit';
import { ContactList } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import styled from 'styled-components';

const Container = styled.div`
  background: #28211c;
  color: #c2bf98;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 20px 0;
`;

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Title>Your contacts</Title>
      <Filter />
      <ContactEditor />
      <ContactList />
    </Container>
  );
}
