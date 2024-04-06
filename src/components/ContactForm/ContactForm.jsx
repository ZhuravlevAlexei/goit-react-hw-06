import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addContact,
  sortContacts,
  selectContacts,
} from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

import { toast } from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortContacts());
  }, [dispatch]);

  const onSubmit = evt => {
    evt.preventDefault();

    const tempName = contactName.toLowerCase();
    const foundContact = contacts.find(
      cont => cont.name.toLowerCase() === tempName.toLowerCase()
    );
    if (foundContact) {
      toast.error(`${foundContact.name} is already in contact list.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };

    dispatch(addContact(newContact));
    dispatch(sortContacts());

    setContactName('');
    setContactNumber('');
  };

  const handleNameChange = evt => {
    setContactName(evt.currentTarget.value.trim());
  };
  const handleNumberChange = evt => {
    setContactNumber(evt.currentTarget.value.trim());
  };

  return (
    <form className={css.contactForm} onSubmit={onSubmit}>
      <label className={css.contactLabel}>
        Name
        <input
          className={css.contactInput}
          type="text"
          name="name"
          autoComplete="on"
          value={contactName}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
        />
      </label>
      <label className={css.contactLabel}>
        Number
        <input
          className={css.contactInput}
          type="tel"
          name="number"
          autoComplete="on"
          value={contactNumber}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumberChange}
        />
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
