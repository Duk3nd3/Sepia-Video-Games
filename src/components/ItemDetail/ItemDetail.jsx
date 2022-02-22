import { Card } from 'react-bootstrap';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({
	id,
	nombre,
	precio,
	img,
	desc,
	stock,
	categoria,
	oferta,
}) => {
	const [cantidad, setCantidad] = useState(0);

	const { AddtoCart } = useContext(CartContext);

	const handleAdd = (counterAdd) => {
		setCantidad(counterAdd);
		const Item = {
			item: {
				id,
				nombre,
				precio,
			},
			cantidad: counterAdd,
		};
		AddtoCart(Item);
	};
	return (
		<Card className='cardDetail'>
			<Card.Img variant='top' src={img} alt={nombre} />
			<Card.Body>
				<Card.Text as='div'>
					<span>Código producto:</span>
					{id}
				</Card.Text>
				<Card.Text as='div'>
					<span>Descripción:</span>
					{desc}
				</Card.Text>
				<Card.Text as='div'>Precio: ${precio}</Card.Text>
				<Card.Text as='div'>
					<span>Categoria:</span>
					{categoria}
				</Card.Text>
			</Card.Body>

			{cantidad > 0 ? (
				<Link to='/cart'>
					<button className='border border-success m-2 p-2'>
						Ver productos en carrito
					</button>
				</Link>
			) : (
				<>
					<ItemCount maxStock={stock} minStock={0} handleAdd={handleAdd} />
				</>
			)}
		</Card>
	);
};
