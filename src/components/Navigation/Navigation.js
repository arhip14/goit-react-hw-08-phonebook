import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const navigationStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'lightgray',
  padding: '10px',
};

const linkStyles = {
  textDecoration: 'none',
  margin: '0 10px',
  color: 'blue',
  fontSize: '16px',
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav style={navigationStyles}>
      <NavLink to="/" style={linkStyles}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={linkStyles}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
