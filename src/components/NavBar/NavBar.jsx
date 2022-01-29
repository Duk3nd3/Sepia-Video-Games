import './NavBar.css';
import { CartWidget } from '../cartWidget/cartWidget';

export const NavBar = () => {

    return (

        <header className="header">
            <h1>S3PiA</h1>
            <nav className="header-nav">
                <p className="header-link">Consolas</p>
                <p className="header-link">Cartuchos</p>
                <p className="header-link">Arcades</p>
                <p className="header-link">Remates</p>
                <p className="header-link">Coleccionables</p>
                <CartWidget/>
            </nav>
        </header>

    )

}