import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { ThanksforPurchasing } from './ThanksForPurchasing';
import { createOrder } from '../../Firebase/createOrder';
import { validateFormCheckout } from './ValidateFormCheckout';



export const Checkout = () => {
	const { cart, totalInCartPrice, cleanCart } = useContext(CartContext);

	const [orderId, setOrderId] = useState(null);

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
			createOrder(values, cart, totalInCartPrice, cleanCart, setOrderId);
	};

	//SI TENEMOS UNA ORDEN DE COMPRA, EJECUTAMOS LO SIGUIENTE
	if (orderId) {
		return <ThanksforPurchasing order={orderId} />;
	}

	return (
		
		<div className='container my-5'>
			<h2>Checkout</h2>
			<hr />

			<form onSubmit={handleSubmit}>
				<input
					className='form-control my-2'
					type='text'
					placeholder='Tu nombre'
					value={values.name}
					onChange={handleInputChange}
					name='name'
				/>
				<input
					className='form-control my-2'
					type='email'
					placeholder='Tu email'
					value={values.email}
					onChange={handleInputChange}
					name='email'
				/>
				<input
					className='form-control my-2'
					type='phone'
					placeholder='Tu telefono'
					value={values.phone}
					onChange={handleInputChange}
					name='phone'
				/>

				<button
				className='mx-2 p-2 m-2'
				disabled={cart.length === 0 || values.name === '' || values.email === '' || values.phone === ''}
				>
					Enviar
				</button>
			</form>
		</div>
	);
};
