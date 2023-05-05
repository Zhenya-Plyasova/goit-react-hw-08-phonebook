import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { getNewsThunk } from '../../store/news/thunk';
// import { logOut } from '../../store/auth/slice';
// import { dellToken } from '../../services/auth-service';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { clearToken, logOut } from 'redux/servises/authentification';

export const Header = () => {
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();

  const [ setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleHome = () => {
      navigate('/'); 
    };
    
    const handlePhoneBook = () => {
        navigate('/phonebook');
    }

    const handleLogin = () => {
        navigate('/login');
    }
    const handleSignUp = () => {
        navigate('/signup')
    }
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut());
        clearToken();
    }
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            {user && (
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Welcome, {user.name}!
              </Typography>
            )}

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            {user && (
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Welcome, {user.name}!
              </Typography>
            )}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                role="link"
                onClick={handleHome}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              {user && (
                <Button
                  role="link"
                  onClick={handlePhoneBook}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Phonebook
                </Button>
              )}

              {!user && (
                <Button
                  role="link"
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                  }}
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              )}
              {/* {user && (
                // <p>Welcome, {user.name}</p>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                > */}
              {/* Welcome, {user.name} */}
              {/* </Typography> */}
              {/* )} */}
              <Button
                role="link"
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
                onClick={handleLogin}
              >
                 LogIn
              </Button>
              <Button
                role="link"
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
                onClick={handleLogOut}
              >
LogOut
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}