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
        <Link to='/productos/consolas' className='header-link'>Consolas</Link>
        <Link to='/productos/cartuchos' className='header-link'>Cartuchos</Link>
        <Link to='/productos/arcades' className='header-link'>Arcades</Link>
        <Link to='/esteEsUnErrorAdrede/' className='header-link'>Contacto</Link>
      </nav>

      <CartWidget />
    </header>

  );
};