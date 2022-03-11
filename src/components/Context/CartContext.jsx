import { doc, getDoc } from 'firebase/firestore';
import { useState } from 'react';
import { createContext } from 'react';
import { ddbb } from '../../Firebase/Config';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const AddtoCart = ({ item, cantidad }) => {
		//Estoy consultando con el metodo inTheShoppingCart si el producto ya esta en el carrito
		if (inTheShoppingCart(item.id)) {
			//Filtrando el producto que se quiere agregar
			const repetido = cart.find((itemCart) => itemCart.item.id === item.id);
			//Sumando la cantidad que se quiere agregar al producto que ya esta en el carrito
			repetido.cantidad = repetido.cantidad + cantidad;
			//Separando el resto de productos que son distintos al que se quiere agregar.
			const filtrados = cart.filter((itemCart) => itemCart.item.id !== item.id);
			//Estamos uniendo los productos que ya estaban en el carrito junto al item/elementos/producto repetido que ya tiene la cantidad actualizada
			setCart([...filtrados, repetido]);
		} else {
			//Si el producto no esta en el carrito lo agregamos al carrito
			const newItem = {
				item,
				cantidad,
			};
			setCart([...cart, newItem]);
		}
	};

	const inTheShoppingCart = (id) => {
		return cart.some((item) => item.item.id === id);
	};

	const totalInCart = () => {
		return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
	};

	const totalInCartPrice = () => {
		return cart.reduce(
			(acc, prod) => acc + prod.item.precio * prod.cantidad,
			0
		);
	};

	//Vacia el carrito
	const cleanCart = () => {
		setCart([]);
	};

	//Elimina el producto por completo
	const deleteProduct = (id) => {
		setCart(cart.filter((prod) => prod.item.id !== id));
	};

	//Agregar prodcuctos y controla el stock en Firebase
	const onAdd = (id) => {
		const exist = cart.find((prod) => prod.item.id === id);

		const docRef = doc(ddbb, 'stock', id);

		getDoc(docRef).then((doc) => {
			if (exist.cantidad + 1 > doc.data().stock) {
				Swal.fire({
					icon: 'info',
					title: 'Te estas llevando todo!',
					footer: 'INFO: Para este producto no hay mas stock disponible',
					confirmButtonText: 'Obvio',
					confirmButtonColor: 'grey',
					allowOutsideClick: false,
					allowEscapeKey: false,
					allowEnterKey: false,
				});
			} else {
				setCart(
					cart.map((prod) =>
						prod.item.id === id
							? { ...exist, cantidad: exist.cantidad + 1 }
							: prod
					)
				);
			}
		});
	};

	//Descuenta productos
	const onRemove = (id) => {
		const exist = cart.find((prod) => prod.item.id === id);
		if (exist.cantidad === 1) {
			return false;
		} else {
			setCart(
				cart.map((prod) =>
					prod.item.id === id
						? { ...exist, cantidad: exist.cantidad - 1 }
						: prod
				)
			);
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				AddtoCart,
				inTheShoppingCart,
				totalInCart,
				totalInCartPrice,
				cleanCart,
				deleteProduct,
				onAdd,
				onRemove,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
