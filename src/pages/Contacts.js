
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/thunk';
import { ContactEditor } from 'components/ContactEdit/ContactEdit';
import {ContactList } from 'components/Contacts/Contacts'
import {Filter} from 'components/Filter/Filter'


export default function Contacts() {
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
    </>
  );
}

