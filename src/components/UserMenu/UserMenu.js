import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import styled from 'styled-components';

const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333; /* Темний сірий фон, аналогічний Navigation */
  padding: 10px; /* Збережено внутрішній відступ */
  border-radius: 8px;
  width: 180px; /* Збільшено ширину контейнера */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const WelcomeText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
  color: #FFDAB9; /* Peach */
`;

const LogoutButton = styled.button`
  background-color: #4169E1; /* Royal blue */
  color: #FFDAB9; /* Peach */
  padding: 10px 20px; /* Збережено величину кнопки */
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #FFA500; /* Orange on hover */
  }
`;

const UserIcon = styled.span`
  font-size: 30px; /* Зменшено розмір іконки користувача */
  color: #FFD700; /* Золотий колір для іконки користувача */
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
