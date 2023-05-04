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
        {/* <label htmlFor="InputName" className={css.inputName}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="InputName"
          className={css.inputContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" */}
        {/* // required
          // onChange={handleChange}
          // value={newName}
        /> */}
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
        {/* <label htmlFor="InputNumber" className={css.inputName}>
          Number
        </label> */}
        <TextField
          type="number"
          name="number"
          id="outlined-basic"
          label="Number"
          variant="outlined"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          margin="normal"
          placeholder="Fill the number"
        />
        {/* <input
          type="tel"
          name="number"
          id="InputNumber"
          className={css.inputContact}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number} */}
        {/* /> */}
        <Button variant="contained" type="submit" margin="normal">
          Add contact
        </Button>
        {/* <button type="submit" className={css.submit}>
          Add contact
        </button> */}
      </div>
    </form>
  );
};
