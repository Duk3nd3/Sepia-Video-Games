import { Badge } from '@material-ui/core';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import { Boton } from "../Button/Boton";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';



export const Clicker = () => {

    const [clicks, setClick] = useState(0);

    const incrementar = () => {

        clicks < 15 && setClick(clicks +1, 0);

    }

    const decrementar = () => {

        clicks > 0 && setClick(clicks - 1, 0);

    }

return (

    <>

        <Boton click={incrementar}>
            <AddBoxIcon />
        </Boton>
        <Boton click={decrementar}>
            <RemoveIcon fontSize="small"/>
        </Boton>
        <Badge color="secondary" badgeContent={clicks}>
            <AddShoppingCartSharpIcon />
        </Badge>

        <Boton> Fecha: { new Date().toLocaleString() }</Boton>
    </>

)

}