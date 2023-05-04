import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'redux/servises/authentification';

export const AuthorizationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            default:
                console.log('hi!');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const userAuthData = {
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
        };
        dispatch(signIn(userAuthData))
            // .then(() => {
            //     console.log("user logged in");
        navigate('/');
    // })
            // .catch((error)=>console.log(error));
            
        setEmail('');
        setPassword('');
    }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', justifyContent: 'center', margin: 30 }}
    >
      <div style={{ display: 'inline-grid' }}>
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
          Log in
        </Button>
      </div>
    </form>
  );
};
