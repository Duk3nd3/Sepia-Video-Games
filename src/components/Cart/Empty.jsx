import { CgGames } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export const Empty = () => {
	return (
		<div className='container my-4'>
			<div>Aun no has comprado nada</div>
			<Link to='/'>
				<CgGames
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
