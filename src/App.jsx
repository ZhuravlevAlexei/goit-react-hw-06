import { Toaster } from 'react-hot-toast';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import css from './App.module.css';

const App = () => {
  return (
    <div className={css.phonebookArea}>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <h3 className={css.mainTitle}>Phonebook</h3>
      <ContactForm />
      <h3>Contacts</h3>
      <SearchBox />
      <ul className={css.contListArea}>{<ContactList />}</ul>
    </div>
  );
};

export default App;
