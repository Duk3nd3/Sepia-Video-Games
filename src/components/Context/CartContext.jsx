import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();


export const CartProvider =  ({children}) => {

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

        console.log(JSON.stringify(totalInCartPrice()));
        console.log(typeof totalInCartPrice());

        const cleanCart = () => {
            setCart([]);
        };

        const deleteProduct = (id) => {
            setCart(cart.filter((prod) => prod.id !== id));
        };

    return (

        <CartContext.Provider value={{
            cart,
            AddtoCart,
            inTheShoppingCart,
            totalInCart,
            totalInCartPrice,
            cleanCart,
            deleteProduct,
        }}>
            {children}
        </CartContext.Provider>

    )

}