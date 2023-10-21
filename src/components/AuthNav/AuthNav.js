import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #333; 
  padding: 10px;
`;

const AuthNavLink = styled(NavLink)`
  margin: 10px;
  text-decoration: none;
  color: #4169E1; 
  font-size: 16px;
  transition: color 0.3s;
  &:hover {
    color: #FFDAB9;
  }
`;

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </AuthNavContainer>
  );
};
