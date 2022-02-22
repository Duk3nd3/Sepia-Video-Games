import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ddbb } from '../../Firebase/Config';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';

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
				<Loader />
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
