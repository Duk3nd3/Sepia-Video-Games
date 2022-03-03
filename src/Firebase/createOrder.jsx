import { Timestamp, collection, writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore';
import { ddbb } from './Config';
import Swal from 'sweetalert2';

export const createOrder = async (values, cart, totalInCartPrice, cleanCart, setOrderId) => {

    const order = {
        buyer: values,
        items: cart,
        total: totalInCartPrice(),
        purchaseDate: Timestamp.fromDate(new Date()),
    };
    
    const batch = writeBatch(ddbb);
    const purchaseReference = collection(ddbb, 'orders')
    const stockReference = collection(ddbb, 'stock')

    const q = query(stockReference, where(documentId(), 'in', cart.map((element) => element.id)));
    const stock = await getDocs(q);		
    const outofStock = [];

    stock.docs.forEach((document) => {
        const itemToUpdate = cart.find((element) => element.id === document.id);
        if (document.data().stock >= itemToUpdate.quantity) {
            batch.update(document.ref, {
                stock: document.data().stock - itemToUpdate.quantity,
            });
        }else{
            outofStock.push(itemToUpdate);
        }
    })

    if(outofStock.length === 0){

        addDoc(purchaseReference, order)
            .then((document) => {
                batch.commit()
                setOrderId(document.id);
                cleanCart();
            })

    } else {

        Swal.fire({
            title: 'Error',
            text: 'No hay stock suficiente para la compra',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

}