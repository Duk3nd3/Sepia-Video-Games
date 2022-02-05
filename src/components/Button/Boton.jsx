import Button from '@material-ui/core/Button';

export const Boton = ( {children, click}) => {

    return (

        <Button onClick={click} >
            {children}
        </Button>

    )

}