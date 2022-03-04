import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Cart.css';
import { Empty } from './Empty';

export const Cart = () => {
	const { cart, totalInCartPrice, cleanCart, deleteProduct, onAdd, onRemove } =
		useContext(CartContext);

	return (
		<div className='container my-4'>
			<h2>Tu Compra</h2>
			<hr />

			{!cart.length ? (
				<Empty />
			) : (
				<>
					{cart.map((item) => (
						<div key={item.item.id} className='row m-4'>
							<div className='col-md-4'>{item.item.nombre}</div>
							<div className='col-md-2'>
								<div className='text-danger'>Precio Unitario</div>$
								{item.item.precio}
							</div>
							<div className='col-md-2'>
								<div className='text-danger'>
									{item.cantidad === 5 ? 'Maximo Stock' : 'Cantidad: '}
								</div>
								{item.cantidad}
							</div>
							<div className='col-md-2'>
								<div className='text-danger'>Precio Total</div>$
								{item.cantidad * item.item.precio}
							</div>
							<div className='col-md-1'>
								<button
									className='w-50 p-1 m-1'
									onClick={() => onAdd(item.item.id)}
								>
									<BsCartPlusFill />
								</button>
								<button
									className='w-50 p-1 m-1'
									onClick={() => onRemove(item.item.id)}
								>
									<BsCartDashFill />
								</button>
							</div>
							<div className='col-md-1'>
								<button
									className='mt-3 p-2'
									onClick={() => deleteProduct(item.item.id)}
								>
									<MdRemoveShoppingCart
										style={{ color: 'red', fontSize: '20px' }}
									/>
								</button>
							</div>
						</div>
					))}
				</>
			)}
			<hr />
			<h2 className='text-danger'>Total: ${totalInCartPrice()}</h2>

			<div className='my-2'>
					<button
						className='p-2 m-2'
						onClick={cleanCart}
						disabled={cart.length === 0}
					>
						Limpiar Carrito
					</button>
					<Link to= '/Checkout' className={cart.length > 0 ? 'endPayment active-link' : 'emptyCart'}>
						Finalizar Compra
					</Link>
			</div>
		</div>
	);
};
