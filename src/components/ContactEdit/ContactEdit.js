import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/thunk'; // Adjust the path to your thunk file

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (name.trim() !== '' && number.trim() !== '') {
      try {
        // Dispatch the addNewContact thunk here
        await dispatch(addNewContact({ name, number }));
        form.reset();
      } catch (error) {
        alert('An error occurred while adding the contact.');
      }
    } else {
      alert('Enter Name and Number !!!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="number" placeholder="Number" />
      <button type="submit">Add Contact</button>
    </form>
  );
};
