import { Item } from '../Item/Item';
import { Contenedor } from '../Contenedor/Contenedor';

export const ItemList = ( {productos} ) => {

    return (

        <Contenedor>

            <h2 style={{ marginTop: '50px', marginBottom: '50px' }}>Nuestros Productos</h2>

            <hr/>

            <div className="row">

                { productos.map( (elements) => <Item key={elements.id} {...elements}/> )}

            </div>

        </Contenedor>

    )


}