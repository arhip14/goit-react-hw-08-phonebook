import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styled from 'styled-components';

const Form = styled.form`
  background-color: #4169E1; 
  color: #FFDAB9;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #FFDAB9; 
`;

const Input = styled.input`
  background-color: #333; 
  color: #fff; 
  border: 1px solid #444;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: #4169E1; 
  color: #FFDAB9; 
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #284D93; 
  }
`;

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
