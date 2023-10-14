import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'lightgray',
      padding: '20px',
      borderRadius: '5px',
      width:'60px'
    },
    welcomeText: {
      fontSize: '14px', // Smaller font size
      fontWeight: 'bold',
      margin: '10px 0',
    },
    logoutButton: {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.welcomeText}>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        style={styles.logoutButton}
      >
        Logout
      </button>
    </div>
  );
};
