import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/service';

export const Contact = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <div>
      <p>{text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
