import { SiRiotgames } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ThanksforPurchasing = ({ order }) => {
	<>
		<div className='container my-4'
			onClick={ () =>
					Swal.fire({
						title: 'Compra finalizada con exito!',
						text: 'Se envio correo con los datos de la factura',
						icon: 'success',
						confirmButtonText: 'Aceptar',
						confirmButtonColor: 'white',
						allowOutsideClick: false,
						allowEscapeKey: false,
						allowEnterKey: false,
					})
				}
		>
			<h2>Por favor guarda esta informacion como referencia en caso de tener inconvenientes con tu compra</h2>
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
			{'Quiero seguir comprando'}
		</Link>
	</>;
};
