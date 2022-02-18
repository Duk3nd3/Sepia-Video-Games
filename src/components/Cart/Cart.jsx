import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { FcDoNotInsert } from 'react-icons/fc';

export const Cart = () => {

    const { cart, totalInCartPrice, cleanCart, deleteProduct } = useContext(CartContext);

    console.log(totalInCartPrice());
    console.log(typeof totalInCartPrice());

    return (
        <div className="container my-4">
            <h2>Tus Compras</h2>
            <hr />

            {
                cart.map( (item) => (
                    <div key={item.id} className="row m-4">
                        <div className="col-md-4">
                            {item.nombre}
                        </div>
                        <div className="col-md-2">
                            <p className='text-danger'>Precio Unitario</p>
                            ${item.precio}
                        </div>
                        <div className="col-md-2">
                            <p className='text-danger'>Cantidad:</p>
                            {item.cantidad}
                        </div>
                        <div className="col-md-2">
                            <p className='text-danger'>Precio Total</p>
                            ${item.cantidad * item.precio}
                        </div>
                        <div className="col-md-1">
                        <button onClick={() => deleteProduct(item.id)}>
                        <FcDoNotInsert size="25px"/>
                        </button>
                        </div>
                    </div>
                ))
            }

            <hr />
            <h2 className="text-danger">Total: ${ totalInCartPrice() }</h2>

            <div className="my-2">
                <button className="p-1 m-1" onClick={cleanCart}>
                    {
                        cart.length > 0 ? 'Limpiar Carrito' : 'Carrito Vacio'
                    }
                </button>

                <button className="mx-2 p-1 m-1" >
                    {
                        cart.length > 0 ? 'Finalizar Compra' : <button disabled>Finalizar Compra</button>
                    }
                </button>
            </div>

        </div>
    )
}