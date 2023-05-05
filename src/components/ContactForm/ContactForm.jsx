import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/servises/operations';
import { getContacts } from 'redux/selectors';
import { TextField, Button } from '@mui/material';

export const ContactForm = () => {
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const prevContacts = useSelector(getContacts);

  const createContact = (newName, number) => {
    const checkNewContact = prevContacts.items.find(
      ({ name }) => name === newName
    );
    if (checkNewContact) {
      return alert(`${newName} is already in contacts`);
    }
    dispatch(addContact({ name: newName, number: number }));
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setNewName(target.value);
        break;

      case 'number':
        setNumber(target.value);
        break;
      default:
        console.log('hi');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    createContact(newName, number);

    setNewName('');
    setNumber('');
  };
  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <div className={css.formContainer}>
        <TextField
          type="text"
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={newName}
          margin="normal"
          placeholder="Fill the name"
        />
        <TextField
          type="number"
          name="number"
          id="outlined-basic"
          label="Number"
          variant="outlined"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          required
          onChange={handleChange}
          value={number}
          margin="normal"
          placeholder="Fill the number"
        />
        <Button variant="contained" type="submit" margin="normal">
          Add contact
        </Button>
      </div>
    </form>
  );
};
