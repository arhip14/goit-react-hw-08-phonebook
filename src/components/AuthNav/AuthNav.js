import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    background: 'lightgray',
    padding: '10px',
  },
  link: {
    margin: '10px',
    textDecoration: 'none',
    color: 'blue', 
    fontSize: '16px', 
  },
};

export const AuthNav = () => {
  return (
    <div style={styles.container}>
      <NavLink to="/register" style={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" style={styles.link}>
        Log In
      </NavLink>
    </div>
  );
};
