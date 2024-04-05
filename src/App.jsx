// import { useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from './Redux/contactsAndFilterSlice';

//!!! import './App.css';
import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';

// import Filter from './Filter/Filter';
// ???now import css from './Filter.module.css';
// import ContactList from './ContactList/ContactList';
// import ContactElement from './ContactElement/ContactElement';
import { Toaster } from 'react-hot-toast';

const App = () => {
  // let contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);

  // const loFilter = filter.toLowerCase();
  // contacts = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(loFilter);
  // });

  return (
    <div className={css.phonebookArea}>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <h3 className={css.mainTitle}>Phonebook</h3>
      <ContactForm />
      <h3>Contacts</h3>
      {/* <Filter /> */}
      {/* <ContactList> */}
      {/* <ContactElement contacts={contacts} /> */}
      {/* </ContactList> */}
    </div>
  );
};

export default App;
