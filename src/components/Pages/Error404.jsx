import './Error404.css';
import React from 'react';

export const Error404 = () => {
	return (
		<body className='body404'>
			<section className='notFound'>
				<div className='img'>
					<img
						src='https://assets.codepen.io/5647096/backToTheHomepage.png'
						alt='Back to the Homepage'
					/>
					<img
						src='https://assets.codepen.io/5647096/Delorean.png'
						alt='El Delorean, El Doc y Marti McFly'
					/>
				</div>
				<div className='text'>
					<h1>404</h1>
					<h2>PAGINA NO ENCONTRADA</h2>
					<h3>VOLVER AL INICIO?</h3>
					<a href='/' className='yes'>
						SI
					</a>
					<a href='https://github.com/Duk3nd3'>NO</a>
				</div>
			</section>
		</body>
	);
};
