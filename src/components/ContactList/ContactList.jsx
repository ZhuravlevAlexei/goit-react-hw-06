import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return contacts.map(elm => {
    return (
      <li key={elm.id} className={css.contItem}>
        {elm.name}: {elm.number}
        <button
          className={css.delButton}
          type="button"
          onClick={() => dispatch(deleteContact(elm.id))}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactList;
