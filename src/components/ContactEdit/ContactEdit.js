import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/thunk';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formStyle = {
  maxWidth: '300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  margin: '5px 0',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#ff5733',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '16px',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Name is not valid')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Number is not valid')
    .required('Number is required'),
});

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { name, number } = values;

    if (name && number) {
      try {
        await dispatch(addNewContact({ name, number }));
      } catch (error) {
        alert('An error occurred while adding the contact.');
      }
    } else {
      alert('Enter a valid Name and Number.');
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form style={formStyle}>
        <Field
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Name"
        />
        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        <Field
          style={inputStyle}
          type="text"
          name="number"
          placeholder="Number"
        />
        <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
        <button style={buttonStyle} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
