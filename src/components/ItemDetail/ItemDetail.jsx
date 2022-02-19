import { Card } from 'react-bootstrap';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Boton } from '../Button/Boton';
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
}) => {
	const [cantidad, setCantidad] = useState(0);

	const { AddtoCart, inTheShoppingCart } = useContext(CartContext);

	const handleAdd = () => {
		if (cantidad === 0) return;

		if (!inTheShoppingCart(id)) {
			const addItem = {
				id,
				nombre,
				precio,
				stock,
				cantidad,
			};
			AddtoCart(addItem);
		}
	};

	return (
		<Card className='cardDetail'>
			<Card.Img variant='top' src={img} alt={nombre} />
			<Card.Body>
				<Card.Text>
					<span>Código producto:</span>
					{id}
				</Card.Text>
				<Card.Text>
					<span>Descripción:</span>
					{desc}
				</Card.Text>
				<Card.Text>
					<span>Precio:</span>
					{precio}
				</Card.Text>
				<Card.Text>
					<span>Categoria:</span>
					{categoria}
				</Card.Text>
			</Card.Body>

			{inTheShoppingCart(id) ? (
				<Link to='/cart'>
					<Boton>Ver productos en carrito</Boton>
				</Link>
			) : (
				<>
					<ItemCount
						maxStock={stock}
						counter={cantidad}
						setCounter={setCantidad}
					/>

					<Boton click={handleAdd}>Agregar al carrito</Boton>
				</>
			)}
		</Card>
	);
};
