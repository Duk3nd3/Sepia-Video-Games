import { Clicker } from '../Clicker/Clicker';
import { Card } from 'react-bootstrap';

export const ItemDetail = ({ id, nombre, precio, img, desc, categoria }) => {
	return (
		<Card
			style={{
				width: '25rem',
				margin: '12px',
				marginLeft: '800px',
				marginTop: '25px',
			}}
		>
			<Card.Img variant='top' src={img} alt={nombre} />
			<Card.Body>
				<Card.Text>Código producto: {id}</Card.Text>
				<Card.Title>Nombre: {nombre}</Card.Title>
				<Card.Text>Descripción: {desc}</Card.Text>
				<Card.Text>Precio: {precio}</Card.Text>
				<Card.Text>Categoria: {categoria}</Card.Text>
			</Card.Body>

			<Clicker />
		</Card>
	);
};
