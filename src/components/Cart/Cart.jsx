import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Swal from 'sweetalert2';
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';

export const Cart = () => {
	const { cart, totalInCartPrice, cleanCart, deleteProduct, onAdd, onRemove } =
		useContext(CartContext);

	return (
		<div className='container my-4'>
			<h2>Tus Compras</h2>
			<hr />

			<div>{cart.length === 0 && <div>Carrito Vacio</div>}</div>

			{cart.map((item) => (
				<div key={item.id} className='row m-4'>
					<div className='col-md-4'>{item.nombre}</div>
					<div className='col-md-2'>
						<p className='text-danger'>Precio Unitario</p>${item.precio}
					</div>
					<div className='col-md-2'>
						<p className='text-danger'>
							{item.cantidad === 5 ? 'Maximo Stock' : 'Cantidad: '}
						</p>
						{item.cantidad}
					</div>
					<div className='col-md-2'>
						<p className='text-danger'>Precio Total</p>$
						{item.cantidad * item.precio}
					</div>
					<div className='col-md-1'>
						<button className='w-50 p-1 m-1' onClick={() => onAdd(item)}>
							<BsCartPlusFill />
						</button>
						<button className='w-50 p-1 m-1' onClick={() => onRemove(item)}>
							<BsCartDashFill />
						</button>
					</div>
					<div className='col-md-1'>
						<button className='mt-3 p-2' onClick={() => deleteProduct(item.id)}>
							<MdRemoveShoppingCart
								style={{ color: 'red', fontSize: '20px' }}
							/>
						</button>
					</div>
				</div>
			))}

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
