import { useEffect } from 'react';
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { ddbb } from '../../Firebase/Config';

export const Products = (categoryId) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		const stockRef = collection(ddbb, 'stock');
		const q = categoryId
			? query(stockRef, where('categoria', '==', categoryId))
			: stockRef;

		getDocs(q)
			.then((respuesta) => {
				setProductos(
					respuesta.docs.map((doc) => {
						return {
							id: doc.id,
							...doc.data(),
						};
					})
				);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);

	return { loading, productos };
};
