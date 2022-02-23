import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { CgGames } from 'react-icons/cg';
import Swal from 'sweetalert2';
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
	const { cart, totalInCartPrice, cleanCart, deleteProduct, onAdd, onRemove } =
		useContext(CartContext);

	return (
		<div className='container my-4'>
			<h2>Tu Compra</h2>
			<hr />

			{!cart.length ? (
				<div>
					<div>Carrito Vacio</div>
					<Link to='/'>
						<CgGames style={{ color: 'green', fontSize: '40px' }} />
						{' Click aca para ver mas clasicos!'}
					</Link>
				</div>
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
				<button
					className='mx-2 p-2 m-2'
					onClick={() =>
						Swal.fire({
							title: 'Compra finalizada con exito!',
							text: 'Se envio correo con los datos de la factura',
							icon: 'success',
							confirmButtonText: '<a href="/">Aceptar</a>',
							confirmButtonColor: 'white',
							allowOutsideClick: false,
							allowEscapeKey: false,
							allowEnterKey: false,
						})
					}
					disabled={cart.length === 0}
				>
					Finalizar Compra
				</button>
			</div>
		</div>
	);
};
