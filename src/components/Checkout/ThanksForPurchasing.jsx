import { SiRiotgames } from 'react-icons/si';
import { Link } from 'react-router-dom';

export const ThanksforPurchasing = ({ order }) => {
	<>
		<div className='container my-4'>
			<h2>Gracias por elegirnos</h2>
			<hr />
			<div>Tu numero de orden es: {order}</div>
		</div>
		<Link to='/'>
			<SiRiotgames
				style={{
					color: 'green',
					fontSize: '40px',
					marginRight: '50px',
					marginBottom: '25px',
					marginTop: '25px',
					marginLeft: '125px',
				}}
			/>
			{'Quiero seguir comprando!'}
		</Link>
	</>;
};
