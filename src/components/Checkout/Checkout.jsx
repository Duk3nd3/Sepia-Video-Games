import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { createOrder } from '../../Firebase/createOrder';
import { validateFormCheckout } from './ValidateFormCheckout';
import { Navigate } from 'react-router-dom';
import './Checkout.css';
import sonic_coin from '../assets/Checkout/sonic_coin.gif';

export const Checkout = () => {
	const { cart, totalInCartPrice, cleanCart } = useContext(CartContext);

	const [values, setValues] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		validateFormCheckout(values) &&
			createOrder(values, cart, totalInCartPrice, cleanCart);
	};

	//CARRITO VACIO REDIRECCIONA A MAIN
	if (cart.length === 0) {
		return <Navigate to='/' />;
	}

	return (
		<>
			<div className='footerStyle'>
				<img className='img-sonic_coin' src={sonic_coin} alt='checkout' />
				<h2 className='container'>Checkout</h2>
				<hr className='container' />
				<form className='container col-md-6' onSubmit={handleSubmit}>
					<input
						className='form-control my-4'
						type='text'
						placeholder='Tu nombre'
						value={values.name}
						onChange={handleInputChange}
						name='name'
					/>
					<input
						className='form-control my-4'
						type='email'
						placeholder='Tu email'
						value={values.email}
						onChange={handleInputChange}
						name='email'
					/>
					<input
						className='form-control my-4'
						type='phone'
						placeholder='Tu telefono'
						value={values.phone}
						onChange={handleInputChange}
						name='phone'
					/>

					<button
						className='mx-2 p-2 m-4'
						disabled={
							cart.length === 0 ||
							values.name === '' ||
							values.email === '' ||
							values.phone === ''
						}
					>
						Enviar
					</button>
				</form>
			</div>
		</>
	);
};
