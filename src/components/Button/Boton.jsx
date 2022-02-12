import { Button } from "react-bootstrap";
import './Boton.css';

export const Boton = ( {children, click}) => {

    return (

        <Button className='clickerStyle' variant="outline-dark" onClick={click} >
            {children}
        </Button>

    )

}