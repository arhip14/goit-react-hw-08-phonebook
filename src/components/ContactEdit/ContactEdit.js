import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/thunk';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { selectTotalContacts } from 'redux/contacts/selectors';
import styled from 'styled-components';

const ContactEditorContainer = styled.div`
  background-color: #4169E1; /* Royal blue */
  color: #FFDAB9; /* Peach */
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ContactEditorTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  margin: 10px 0;
`;

const InputField = styled(Field)`
  background-color: #f0f0f0; /* Light gray input background */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
`;

const ErrorMessageText = styled(ErrorMessage)`
  color: red;
`;

const AddContactButton = styled.button`
  background-color: #ff5733; /* Orange */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
`;

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
  const contacts = useSelector(selectTotalContacts);

  const handleSubmit = async (values, { resetForm }) => {
    const { name, number } = values;

    if (name && number) {
      const isNameAlreadyTaken = contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isNameAlreadyTaken) {
        alert('Contact with the same name already exists.');
        return;
      }

      try {
        await dispatch(addNewContact({ name, number }));
        resetForm();
      } catch (error) {
        alert('An error occurred while adding the contact.');
      }
    } else {
      alert('Enter a valid Name and Number.');
    }
  };

  return (
    <ContactEditorContainer>
      <ContactEditorTitle>Contact Editor</ContactEditorTitle>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <Form>
              <FormField>
                <label>Name</label>
                <InputField type="text" name="name" placeholder="Name" />
                <ErrorMessageText name="name" />
              </FormField>
              <FormField>
                <label>Number</label>
                <InputField type="text" name="number" placeholder="Number" />
                <ErrorMessageText name="number" />
              </FormField>
              <AddContactButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Add Contact'}
              </AddContactButton>
            </Form>
          </FormContainer>
        )}
      </Formik>
    </ContactEditorContainer>
  );
};
