import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/servises/authentification';

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
        dispatch(logIn(userAuthData))
        navigate('/phonebook');
    
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
