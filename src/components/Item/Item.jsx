import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ id, nombre, precio, img, desc, categoria, oferta }) => {
	const precioConDescuento = oferta ? precio * 0.8 : precio;

	return (
		<Card style={{ width: '17rem', margin: '12px', padding: '15px' }}>
			<Card.Img variant='top' src={img} />
			<Card.Body>
				<Card.Title>{nombre}</Card.Title>
				<Card.Text as='div'>{categoria}</Card.Text>
				<Card.Text as='div'>{desc}</Card.Text>
				<Card.Text as='div'>
					{oferta && (
						<>
							<Card.Title style={{ color: 'green' }}>20% OFF</Card.Title>
							<Card.Text as ='div'>Free shipping</Card.Text>
						</>
					)}
				</Card.Text>
				<Card.Text as='div'>Precio: ${precioConDescuento}</Card.Text>
				<Link to={`/detalle/${id}`}>
					<button className='itemButtom'>Ver más</button>
				</Link>
			</Card.Body>
		</Card>
	);
};
