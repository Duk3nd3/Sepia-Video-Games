import { MdRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Empty = () => {
	return (
		<div className='container my-4'>
			<h2>Tu Compra</h2>
			<hr />
			<div>Aun no has comprado nada</div>
			<Link to='/'>
				<MdRemoveShoppingCart
					style={{
						color: 'green',
						fontSize: '40px',
						marginRight: '50px',
						marginBottom: '25px',
						marginTop: '25px',
						marginLeft: '5px',
					}}
				/>
				{'Click aca para ver nuestros clasicos'}
			</Link>
		</div>
	);
};
