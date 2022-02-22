import { useContext } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './cartWidget.css';

export const CartWidget = () => {
	const {cart, totalInCart } = useContext(CartContext);

	return (
		<Link to='/cart' className={cart.length > 0 ? 'navCartShow text-decoration-none' : 'navCart'}>
			<BsFillCartCheckFill size='30px' className='shopping-cart' />
			<span className='m-2 p-1 span-color'>{totalInCart()}</span>
		</Link>
	);
};
