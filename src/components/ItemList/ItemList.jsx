import { Item } from '../Item/Item';
import { Contenedor } from '../Contenedor/Contenedor';
import { Navigate } from 'react-router-dom';

export const ItemList = ({ productos }) => {

	//CONTROLAMOS LA MANIPULACION DE LA URL DURANTE EL FILTRADO DE LOS PRODUCTOS
	if(productos.length === 0) {
		return <Navigate to='/' />
	}

	return (
		<Contenedor>
			<h2 style={{ marginTop: '50px', marginBottom: '50px' }}>
				<hr />
			</h2>

			<div className='row'>
				{productos.map((elements) => (
					<Item key={elements.id} {...elements} />
				))}
			</div>
		</Contenedor>
	);
};
