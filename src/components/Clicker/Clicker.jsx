import { useState } from "react";
import { Boton } from "../Button/Boton";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import './Clicker.css';

export const Clicker = () => {

    const [clicks, setClick] = useState(0);

    const incrementar = () => {

        clicks < 10 && setClick(clicks +1, 0);

    }

    const decrementar = () => {

        clicks > 0 && setClick(clicks - 1, 0);

    }

return (

    <>

        <Boton click={incrementar}>
            <BsCartPlusFill />
        </Boton>
        <Boton click={decrementar}>
            <BsCartDashFill />
        </Boton>
        <p className='cartStyle'>Agregado al carrito</p>
        <p className='countStyle'>{clicks}</p>

        <p className='styleDate'> Fecha: { new Date().toLocaleString() }</p>

    </>

)

}