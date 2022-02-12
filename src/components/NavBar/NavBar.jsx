import logo from '../assets/Logo/logo.png';
import { CartWidget } from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {

  return (

    <header className="header">

      <Link to='/' style={{ color: '#fff' }}>
        <img src={logo} alt="logo" />
      </Link>

      <nav className='header-nav'>
        <Link className='header-link' to='/productos/consolas'>Consolas</Link>
        <Link className='header-link' to='/productos/cartuchos'>Cartuchos</Link>
        <Link className='header-link' to='/productos/arcades'>Arcades</Link>
        <Link className='header-link' to='/productos/contacto'>Contacto</Link>
      </nav>

      <CartWidget />
    </header>

  );
};