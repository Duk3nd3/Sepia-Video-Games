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
	oferta
}) => {
	const [cantidad, setCantidad] = useState(0);

	const precioFinal = oferta ? precio * 0.8 : precio;

	const { AddtoCart, inTheShoppingCart } = useContext(CartContext);

	const handleAdd = () => {
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
				<Card.Text as='div'>
					<span>Código producto:</span>
					{id}
				</Card.Text>
				<Card.Text as='div'>
					<span>Descripción:</span>
					{desc}
				</Card.Text>
				<Card.Text as='div'>
					{oferta && (
						<>
							<Card.Title style={{ color: 'green' }}>20% OFF</Card.Title>
							<Card.Text as ='div'>Free shipping</Card.Text>
						</>
					)}
				</Card.Text>
				<Card.Text as='div'>Precio: ${precioFinal}</Card.Text>
				<Card.Text as='div'>
					<span>Categoria:</span>
					{categoria}
				</Card.Text>
			</Card.Body>

			{inTheShoppingCart(id) ? (
				<Link to='/cart'>
					<button className='border border-success m-2 p-2'>
						Ver productos en carrito
					</button>
				</Link>
			) : (
				<>
					<ItemCount
						maxStock={stock}
						counter={cantidad}
						setCounter={setCantidad}
					/>

					<button
						className='m-2 p-2'
						onClick={handleAdd}
						disabled={cantidad === 0}
					>
						Agregar al carrito
					</button>
				</>
			)}
		</Card>
	);
};
