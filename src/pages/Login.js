import React from 'react';
import styled from 'styled-components';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Container = styled.div`
  background-color: #4169E1; /* Royal blue */
  color: #FFDAB9; /* Peach */
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

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <LoginForm />
    </Container>
  );
};

export default Login;
