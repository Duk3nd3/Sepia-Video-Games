import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { ddbb } from '../../Firebase/Config';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
	const [loading, setLoading] = useState(false);
	const [item, setItem] = useState(null);

	const { itemId } = useParams();

	useEffect(() => {
		setLoading(true);

		const docRef = doc(ddbb, 'stock', itemId);
		getDoc(docRef)
			.then((doc) => {
				setItem({
					id: doc.id,
					...doc.data(),
				});
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
