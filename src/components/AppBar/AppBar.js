import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const styles = {
    appBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      background: 'linear-gradient(to right, #4287f5, #0c54c2)',
    },
    navIcon: {
      cursor: 'pointer',
      fontSize: '24px',
      color: '#fff',
    },
    logo: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#fff',
    },
    greetingIcon: {
      fontSize: '24px',
    },
  };

  return (
    <header style={styles.appBar}>
      <Navigation />
      <div>
        <span style={styles.logo}>Phonebook</span>{' '}
        <span style={styles.greetingIcon} role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
