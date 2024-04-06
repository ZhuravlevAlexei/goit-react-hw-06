import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts.map(elm => {
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
