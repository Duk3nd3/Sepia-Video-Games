import { Boton } from '../Button/Boton';
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';
import './ItemCount.css';

export const ItemCount = ({ maxStock, minStock = 0, counter, setCounter }) => {
	const handleIncrementar = () => {
		counter < maxStock && setCounter(counter + 1);
	};

	const handleDecrementar = () => {
		counter > minStock && setCounter(counter - 1);
	};

	return (
		<>
			<Boton click={handleIncrementar}>
				<BsCartPlusFill />
			</Boton>

			<p className='countStyle'>{counter < 5 ? 'En Stock' : 'Sin Stock'}</p>
			<p className='countStyle'>{counter}</p>

			<Boton click={handleDecrementar}>
				<BsCartDashFill />
			</Boton>

			<span className='styleDate'> Fecha: {new Date().toLocaleString()}</span>
		</>
	);
};
