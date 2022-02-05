import { Item } from '../Item/Item';

export const ItemList = ( {productos} ) => {

    return (

        <>
            { productos.map( (el) => <Item key={el.id} nombre={el.nombre} precio={el.precio} img={el.img} desc={el.desc}/>) }
        </>

    )


}