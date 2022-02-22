import { useState } from 'react';
import { createContext } from 'react';

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
			//Volvemos a armar el objeto con sus respectivas propiedades
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

	const cleanCart = () => {
		setCart([]);
	};

	const deleteProduct = (id) => {
		setCart(cart.filter((prod) => prod.id !== id));
	};

	const onAdd = (product) => {
		const exist = cart.find((prod) => prod.id === product.id);
		if (exist.cantidad >= 5) {
			return false;
		} else {
			setCart(
				cart.map((prod) =>
					prod.id === product.id
						? { ...exist, cantidad: exist.cantidad + 1 }
						: prod
				)
			);
		}
	};

	const onRemove = (product) => {
		const exist = cart.find((prod) => prod.id === product.id);
		if (exist.cantidad === 1) {
			return false;
		} else {
			setCart(
				cart.map((prod) =>
					prod.id === product.id
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
