import { useEffect } from 'react';
import { useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';

export const Products = (categoryId) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(false);

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

	return { loading, productos };
};
