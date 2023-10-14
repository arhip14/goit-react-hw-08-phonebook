import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const styles = {
  form: {
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    fontSize: '18px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#32cd32', // Green color
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" style={styles.form}>
      <label style={styles.label}>
        Username
        <input type="text" name="name" style={styles.input} />
      </label>
      <label style={styles.label}>
        Email
        <input type="email" name="email" style={styles.input} />
      </label>
      <label style={styles.label}>
        Password
        <input type="password" name="password" style={styles.input} />
      </label>
      <button type="submit" style={styles.button}>
        Register
      </button>
    </form>
  );
};
