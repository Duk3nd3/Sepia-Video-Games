import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const AddtoCart = (item) => {
		setCart([...cart, item]);
	};

	const inTheShoppingCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const totalInCart = () => {
		return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
	};

	const totalInCartPrice = () => {
		return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
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
