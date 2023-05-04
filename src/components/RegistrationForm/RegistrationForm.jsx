import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'redux/servises/authentification';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'email':
        setEmail(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;
      case 'name':
        setName(target.value);
        break;
      default:
        console.log('hi!');
    }
  };
  const handleSubmit = e => {
      e.preventDefault();
      const createUser = {
          name: e.target.elements.name.value,
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
      }
    //   signUp(createUser)
    //       .then((data) => {
    //           console.log('user created');
              dispatch(signUp(createUser))
            //   console.log(data);
              navigate('/login');
        //   })
        //   .catch((error)=>console.log(error));
    //   console.log(data);
    setEmail('');
    setPassword('');
    setName('');
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', margin: 30 }}>
      <div style={{ display: 'inline-grid' }}>
        <TextField
          type="text"
          name="name"
          id="outlined-basic"
          label="name"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          margin="normal"
          placeholder="Fill the name"
        />
        <TextField
          type="email"
          name="email"
          id="outlined-basic"
          label="e-mail"
          variant="outlined"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={email}
          margin="normal"
          placeholder="Fill the email"
        />
        <TextField
          type="password"
          name="password"
          id="outlined-basic"
          label="password"
          variant="outlined"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={password}
          margin="normal"
          placeholder="Fill the password"
        />
        <Button variant="contained" type="submit" margin="normal">
          Sign up
        </Button>
      </div>
    </form>
  );
};
