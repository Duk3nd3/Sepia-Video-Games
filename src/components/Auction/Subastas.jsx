import './Subastas.css';
import Auction from '../assets/Auction/auction.png'
import { Countdown } from '../Countdown/Countdown';

export const Subastas = () => {

	return (
		<>
			<div className="subastas">
				<h1 className='tittle'>Subastas</h1>
				<img className='img-subasta' src={Auction} alt="subastas" />
				<hr />
				<h3 className='subTittle'>Proxima subasta en. . .</h3>
				<Countdown />
			</div>
		</>
	);
};
