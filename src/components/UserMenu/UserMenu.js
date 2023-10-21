import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import styled from 'styled-components';

const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333; 
  padding: 10px; 
  border-radius: 8px;
  width: 180px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const WelcomeText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
  color: #FFDAB9; 
`;

const LogoutButton = styled.button`
  background-color: #4169E1; 
  color: #FFDAB9; 
  padding: 10px 20px; 
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #FFA500; 
  }
`;

const UserIcon = styled.span`
  font-size: 30px; 
  color: #FFD700; 
  margin-bottom: 10px;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserIcon>👤</UserIcon>
      <WelcomeText>Welcome, {user.name}</WelcomeText>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </UserMenuContainer>
  );
};
