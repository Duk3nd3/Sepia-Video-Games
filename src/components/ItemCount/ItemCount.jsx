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
			<button className='w-25 m-2 p-2' onClick={handleIncrementar}>
				<BsCartPlusFill />
			</button>

			<div className='countStyle'>
				{counter < 5
					? 'En Stock'
					: 'Stock maximo disponible para este producto'}
			</div>
			<div className='countStyle'>{counter}</div>

			<button className='w-25 m-2 p-2' onClick={handleDecrementar}>
				<BsCartDashFill />
			</button>

			<span className='styleDate'> Fecha: {new Date().toLocaleString()}</span>
		</>
	);
};
