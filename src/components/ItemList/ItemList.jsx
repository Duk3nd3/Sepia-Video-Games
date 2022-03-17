import { Item } from '../Item/Item';
import { Contenedor } from '../Contenedor/Contenedor';
import { Navigate } from 'react-router-dom';

export const ItemList = ({ productos }) => {
	return (
		<Contenedor>
			<h2 style={{ marginTop: '50px', marginBottom: '50px' }}>
				<hr />
			</h2>

			{productos.length === 0 && <Navigate to='/' />}

			<div className='row'>
				{productos.map((elements) => (
					<Item key={elements.id} {...elements} />
				))}
			</div>
		</Contenedor>
	);
};
