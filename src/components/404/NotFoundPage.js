import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#000', /* Темний фон */
    color: '#FFF', /* Білий текст */
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#ffa765', /* Оранжевий колір для заголовку */
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  message: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#ccc', /* Сірий колір для повідомлення */
  },
  returnButton: {
    background: 'linear-gradient(135deg, #ff6b6b, #ffa765)',
    color: '#FFF',
    padding: '15px 30px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    transition: 'background 0.3s ease-in',
  },
};

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>404 - Page Not Found</h2>
      <p style={styles.message}>The page you are looking for does not exist.</p>
      <Link to="/contacts" style={styles.returnButton}>
        Return to Contacts
      </Link>
    </div>
  );
};

export default NotFoundPage;
