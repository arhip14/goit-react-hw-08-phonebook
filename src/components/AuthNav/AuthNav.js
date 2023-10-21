import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavContainer = styled.div`
  display: flex;
  justify-content: center; /* Відцентрувати горизонтально */
  background: #333; /* Темний сірий фон, аналогічний Navigation та UserMenu */
  padding: 10px;
`;

const AuthNavLink = styled(NavLink)`
  margin: 10px;
  text-decoration: none;
  color: #4169E1; /* Royal blue, аналогічний Navigation */
  font-size: 16px;
  transition: color 0.3s;
  &:hover {
    color: #FFDAB9; /* Peach on hover, аналогічний Navigation */
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
