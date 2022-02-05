import './NavBar.css';
import '../assets/Logo/logo.css';
import { CartWidget } from '../cartWidget/cartWidget';
import logo from '../assets/Logo/logo.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
import { Button, Link } from '@material-ui/core';



const LinkButton = (props) => <Button component={Link} {...props} />;

export const NavBar = () => {

  return (

    <Container>
      <AppBar position="fixed">
        <Toolbar>
          <header className="header">
            <img className='logoStyle' src={logo} alt="logo" />
              <LinkButton to='/'>
                  Home
              </LinkButton>
              <LinkButton to='/Consolas'>
                  Consolas
              </LinkButton>
              <LinkButton to='/Remates'>
                  Remates
              </LinkButton>
              <LinkButton to='/Coleccionables'>
                  Coleccionables
              </LinkButton>
              <LinkButton to='/Miscellaneous'>
                Miscellaneous
              </LinkButton>
            <CartWidget/>
          </header>
        </Toolbar>
      </AppBar>
    </Container>

  );
};