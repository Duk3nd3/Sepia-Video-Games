import {
	Timestamp,
	collection,
	writeBatch,
	query,
	where,
	documentId,
	getDocs,
	addDoc,
} from 'firebase/firestore';
import { ddbb } from './Config';
import Swal from 'sweetalert2';

export const createOrder = async (
	values,
	cart,
	totalInCartPrice,
	cleanCart
) => {
	const order = {
		buyer: values,
		items: cart,
		total: totalInCartPrice(),
		purchaseDate: Timestamp.fromDate(new Date()),
	};

	const batch = writeBatch(ddbb);

	const stockReference = collection(ddbb, 'stock');

	const ordersReference = collection(ddbb, 'orders');

	const stockQuery = query(
		stockReference,
		where(
			documentId(),
			'in',
			cart.map(({ item }) => item.id)
		)
	);

	const stock = await getDocs(stockQuery);
	const outOfStock = [];

	stock.docs.forEach((document) => {
		const itemToUpdate = cart.find(({ item }) => item.id === document.id);
		if (document.data().stock >= itemToUpdate.cantidad) {
			batch.update(document.ref, {
				stock: document.data().stock - itemToUpdate.cantidad,
			});
		} else {
			outOfStock.push(itemToUpdate);
		}
	});

	if (outOfStock.length === 0) {
		addDoc(ordersReference, order).then((document) => {
			batch.commit();
			Swal.fire({
				icon: 'success',
				title: 'Compra registrada con exito',
				html: `Numero de orden generado ${document.id}`,
				confirmButtonText: 'Genial!',
				confirmButtonColor: 'rgba(113, 66, 20, 1)',
				allowOutsideClick: false,
				allowEnterKey: false,
				allowEscapeKey: false,
				footer: 'No pierda este numero.Gracias.',
			});
			cleanCart();
		});
	}
};
