// // import React, { useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { Helmet } from 'react-helmet';
// import { ContactList } from '../components/ContactList/ContactList';
// // import { fetchContacts } from '../redux/contacts/service';
// // import {ContactForm } from '../components/ContactForm/ContactForm';

// export default function Contacts() {
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchContacts());
//   // }, [dispatch]);

//   return (
//     <>

//        <title>Your contacts</title>
//       {/* <ContactForm /> */}
//       <ContactList /> 
//     </>
//   );
// }


import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/thunk';
import { selectTotalContacts } from 'redux/contacts/selectors';
import { ContactEditor } from 'components/ContactEdit/ContactEdit';
import {ContactList } from 'components/Contacts/Contacts'
import {Filter} from 'components/Filter/Filter'


export default function Contacts() {
  const contacts = useSelector(selectTotalContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <>
      <div>
        <title>Your contacts</title>
      </div>
                  <Filter/>
      <ContactEditor />

      <ContactList />

    
      <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{ name}</p>
          <p>{ number}</p>
        </li>
      ))}
    
    </ul>
    </>
  );
}

