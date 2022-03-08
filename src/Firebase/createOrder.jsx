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
	cleanCart,
	setOrderId
) => {
	const order = {
		buyer: values,
		items: cart,
		total: totalInCartPrice(),
		purchaseDate: Timestamp.fromDate(new Date()),
	};

	console.log(order);
	console.log(typeof order);

	const batch = writeBatch(ddbb);

	const stockReference = collection(ddbb, 'stock');

	

	const ordersReference = collection(ddbb, 'orders');
	
	console.log(stockReference);
	console.log(typeof stockReference);

	const stockQuery = query(
		stockReference,
		where(
			documentId(),
			'in',
			cart.map((element) => element.id))
			);

	const stock = await getDocs(stockQuery);
	const outOfStock = [];

	stock.documents.forEach((document) => {
		const itemToUpdate = cart.find((element) => element.id === document.id);

		if (document.data().stock >= itemToUpdate.quantity) {
			batch.update(document.ref, {
				stock: document.data().stock - itemToUpdate.quantity,
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
				title: 'Su orden ha sido registrada',
				text: `Su número de orden es: ${document.id}`,
			});
			setOrderId(document.id);
			cleanCart();
		});
	} else {
		Swal.fire({
			icon: 'error',
			title: 'No hay stock de los siguientes productos:',
			text: outOfStock.map((element) => element.name).join(', '),
			confirmButtonText: 'Ok',
		});
	}
};
