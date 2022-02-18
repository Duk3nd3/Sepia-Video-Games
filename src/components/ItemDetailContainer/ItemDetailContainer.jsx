import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
	const [loading, setLoading] = useState(false);
	const [item, setItem] = useState(null);

	const { itemId } = useParams();

	useEffect(() => {
		setLoading(true);

		pedirDatos()
			.then((res) => {
				setItem(res.find((elements) => elements.id === Number(itemId)));
			})
			.finally(() => {
				setLoading(false);
			});
	}, [itemId]);

	return (
		<>
			{loading ? (
				<PacmanLoader
					size={75}
					color={'#007A78'}
					loading={loading}
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '15vh',
						width: '15vw',
						marginTop: '375px',
						marginBottom: '375px',
						marginLeft: '800px',
					}}
				/>
			) : (
				<>
					<h2
						style={{
							textAlign: 'center',
							margin: '50px',
							marginBottom: '50px',
						}}
					>
						{item?.nombre ? item.nombre.toUpperCase() : 'Detalle del producto'}
						<ItemDetail {...item} />
					</h2>
				</>
			)}
		</>
	);
};
