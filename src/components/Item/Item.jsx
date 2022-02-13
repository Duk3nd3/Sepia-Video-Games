import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ id, nombre, precio, img, desc, categoria }) => {
	return (
		<Card style={{ width: '17rem', margin: '12px', padding: '15px' }}>
			<Card.Img variant='top' src={img} />
			<Card.Body>
				<Card.Title>{nombre}</Card.Title>
				<Card.Text>{categoria}</Card.Text>
				<Card.Text>{desc}</Card.Text>
				<Card.Text>Precio: {precio}</Card.Text>
				<Link to={`/detalle/${id}`}>
					<button className='itemButtom'>Ver más</button>
				</Link>
			</Card.Body>
		</Card>
	);
};
