import {
	collection,
	addDoc,
	Timestamp,
	updateDoc,
	doc,
	getDoc,
} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { SiRiotgames } from 'react-icons/si';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
// import Swal from 'sweetalert2';
import { ddbb } from '../../Firebase/Config';

export const Checkout = () => {
	const { cart, totalInCartPrice, cleanCart } = useContext(CartContext);

	const [orderId, setOrderId] = useState(null);

	const createOrder = () => {
		//Creamos el objeto order
		const order = {
			buyer: values,
			items: cart,
			total: totalInCartPrice(),
			purchaseDate: Timestamp.fromDate(new Date()),
		};

		//Armamos la referencia a la coleccion 'orders', sino existe, la crea
		const orderReference = collection(ddbb, 'orders');

		//Agregamos el documento a la coleccion en Firebase
		addDoc(orderReference, order).then((document) => {
			//Control sobre el stock de los productos
			cart.forEach((product) => {
				const documentReference = doc(ddbb, 'stock', product.id);
				//CON ESTE GET OBTENEMOS LA INFO DEL DOCUMENTO
				getDoc(documentReference).then((infoDataBaseDocument) => {
					//UNA VEZ OBTENIDA LA INFO, ACTUALIZAMOS EL STOCK
					updateDoc(documentReference, {
						stock: infoDataBaseDocument.data().stock - product.cantidad,
					});
				});
			});

			setOrderId(document.id);
			cleanCart();
		});
	};

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

		//VALIDAR FORMULARIO

		createOrder();
	};

	//SI TENEMOS UNA ORDEN DE COMPRA, EJECUTAMOS LO SIGUIENTE
	if (orderId) {
		return (
			<>
				<div className='container my-4'>
					<h2>Gracias por elegirnos</h2>
					<hr />
					<div>Tu numero de orden es: {orderId}</div>
				</div>
				<Link to='/'>
					<SiRiotgames
						style={{
							color: 'green',
							fontSize: '40px',
							marginRight: '50px',
							marginBottom: '25px',
							marginTop: '25px',
							marginLeft: '125px',
						}}
					/>
					{'Quiero seguir comprando!'}
				</Link>
			</>
		);
	}

	//CHECKOUT NO DEBE ESTAR VACIO
	if (cart.length === 0) {
		return (
			<div className='container my-4'>
				<h2>Tu Compra</h2>
				<hr />
				<div>Aun no has comprado nada</div>
				<Link to='/'>
					<MdRemoveShoppingCart
						style={{
							color: 'green',
							fontSize: '40px',
							marginRight: '50px',
							marginBottom: '25px',
							marginTop: '25px',
							marginLeft: '5px',
						}}
					/>
					{'Click aca para ver nuestros clasicos'}
				</Link>
			</div>
		);
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
				// className='mx-2 p-2 m-2'
				// onClick={() =>
				// 	Swal.fire({
				// 		title: 'Compra finalizada con exito!',
				// 		text: 'Se envio correo con los datos de la factura',
				// 		icon: 'success',
				// 		confirmButtonText: '<a href="/">Aceptar</a>',
				// 		confirmButtonColor: 'white',
				// 		allowOutsideClick: false,
				// 		allowEscapeKey: false,
				// 		allowEnterKey: false,
				// 	})
				// }
				// disabled={cart.length === 0}
				>
					Enviar
				</button>
			</form>
		</div>
	);
};
