import { useState } from 'react';
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';
import './ItemCount.css';

export const ItemCount = ({ maxStock, minStock = 0, handleAdd }) => {
	const [counter, setCounter] = useState(minStock);

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
					? <span>En Stock</span>
					: 'Stock maximo disponible'}
			</div>
			<div className='countStyle'>{counter}</div>

			<button className='w-25 m-2 p-2' onClick={handleDecrementar}>
				<BsCartDashFill />
			</button>
			<button
				className='m-2 p-2'
				onClick={() => handleAdd(counter)}
				disabled={counter === 0}
			>
				Agregar al carrito
			</button>
			<span className='styleDate'> Fecha: {new Date().toLocaleString()}</span>
		</>
	);
};
