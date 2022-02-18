import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { BsBagPlusFill } from 'react-icons/bs';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { IoBagRemove } from 'react-icons/io5';

export const Cart = () => {

    const { cart, totalInCartPrice, cleanCart, deleteProduct, onAdd, onRemove } = useContext(CartContext);

    return (
        <div className="container my-4">
            <h2>Tus Compras</h2>
            <hr />

            <div>{cart.length=== 0 && <div>Carrito Vacio</div>}</div>

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
                            <button className="p-1 m-1" onClick={() => onAdd(item)}>
                            <BsBagPlusFill style={{color: 'green', fontSize: '20px'}}/>
                            </button>
                            <button className="p-1 m-1" onClick={() => onRemove(item)}>
                            <IoBagRemove style={{color: 'green', fontSize: '20px'}}/>
                            </button>
                        </div>
                        <div className="col-md-1">
                        <button className="p-1 m-1" onClick={() => deleteProduct(item.id)}>
                        <MdRemoveShoppingCart style={{color: 'red', fontSize: '20px'}}/>
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
                        cart.length > 0 ? 'Limpiar Carrito' : <button disabled>Limpiar Carrito</button>
                    }
                </button>

                <button className="mx-2 p-1 m-1" onClick={() => alert('Incorporar metodo de pago!')} >
                    {
                        cart.length > 0 ? 'Finalizar Compra' : <button disabled>Finalizar Compra</button>
                    }
                </button>
            </div>

        </div>
    )
}