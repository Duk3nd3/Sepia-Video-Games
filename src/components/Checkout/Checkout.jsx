import { useContext, useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
// import Swal from 'sweetalert2';


export const Checkout = () => {

    const {cart, totalInCartPrice} = useContext(CartContext);

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();       

        //VALIDAR FORMULARIO

        const purchaseOrder = {

            buyer:{
                name: values.name,
                email: values.email,
                phone: values.phone
            },
            items: cart,
            total: totalInCartPrice(),
        }

        console.log(purchaseOrder)
    }

    //CHECKOUT NO  DEBE STAR VACIO
    if (cart.length === 0) {
        return (
            <div className="container my-4">
                <h2>Tu Compra</h2>
                <hr />
                <div>Aun no has comprado nada</div>
                <Link to="/">
                    <MdRemoveShoppingCart style={{ color: 'green', fontSize: '40px', marginTop: '10px' }} />
                    {'Click aca para ver nuestros clasicos'}
                </Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.name}
                    onChange={handleInputChange}
                    name='name'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="form-control my-2"
                    type='phone'
                    placeholder="Tu telefono"
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
    )
}