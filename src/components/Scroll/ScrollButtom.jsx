import { useEffect, useState } from 'react';
import './ScrollButtom.css';
import lvlup_arrow from '../assets/ScrollUp/lvlup_arrow.png';

export const ScrollButtom = () => {
	// OCULTAMOS LA FLECHA SI ESTAMOS AL INICIO DE LA PAGINA
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 300) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	// CON ESTA FUNCION VOLVEMOS AL TOP
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			{showButton && (
				<button onClick={scrollToTop}>
					<img className='back-to-top' src={lvlup_arrow} alt='scroll up' />
				</button>
			)}
		</>
	);
};
