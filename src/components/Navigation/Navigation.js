import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  padding: 10px;
  border-bottom: 2px solid #4169E1; 
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px;
  color: #FFDAB9;
  font-size: 18px;
  transition: color 0.3s;
  &:hover {
    color: #FFA500; 
  }
`;

const CustomLogo = styled.span`
  font-size: 24px;
  margin-right: 10px;
  color: #4169E1;
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <CustomLogo>📞</CustomLogo>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </NavigationContainer>
  );
};
