import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import styled from 'styled-components';

const AppBarContainer = styled.header`
  background: #333; /* Темний сірий фон, аналогічний іншим компонентам */
  color: #FFDAB9; /* Peach */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Logo = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
  font-weight: bold;
`;

const GreetingIcon = styled.span`
  font-size: 1.5rem;
  margin-left: 10px;
`;

const SpecialMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
`;

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarContainer>
      <Navigation />
      <div>
        <SpecialMessage>Welcome to</SpecialMessage>
        <Logo>Phonebook</Logo>
        <GreetingIcon role="img" aria-label="Greeting icon">
          💁‍♀️
        </GreetingIcon>
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarContainer>
  );
};
