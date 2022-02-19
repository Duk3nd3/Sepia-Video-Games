import { useContext } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './cartWidget.css';

export const CartWidget = () => {
	const { totalInCart } = useContext(CartContext);

	return (
		<Link className='text-decoration-none' to='/cart'>
			<BsFillCartCheckFill size='30px' className='shopping-cart' />
			<span className='m-2 p-1'>{totalInCart()}</span>
		</Link>
	);
};
