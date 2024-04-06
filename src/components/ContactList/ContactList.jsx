import { useSelector } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts.map(elm => {
    return <Contact key={elm.id} deleteContact={deleteContact} {...elm} />;
  });
};

export default ContactList;
