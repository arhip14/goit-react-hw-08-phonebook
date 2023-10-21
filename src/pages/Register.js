import React from 'react';
import styled from 'styled-components';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Container = styled.div`
  background-color: #4169E1;
  color: #FFDAB9;
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-decoration: underline;
`;

const Register = () => {
  return (
    <Container>
      <Title>Registration</Title>
      <RegisterForm />
    </Container>
  );
};

export default Register;
