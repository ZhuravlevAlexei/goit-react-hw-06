import { Toaster } from 'react-hot-toast';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import css from './App.module.css';

const App = () => {
  return (
    <div className={css.phonebookArea}>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <h3 className={css.mainTitle}>Phonebook</h3>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      <ul className={css.contListArea}>
        <ContactList />
      </ul>
    </div>
  );
};

export default App;
