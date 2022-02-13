import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(false);

	const { categoryId } = useParams();

	useEffect(() => {
		setLoading(true);

		pedirDatos()
			.then((res) => {
				if (categoryId) {
					setProductos(
						res.filter((elements) => elements.categoria === categoryId)
					);
				} else {
					setProductos(res);
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);

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
				<ItemList productos={productos} />
			)}
		</>
	);
};
