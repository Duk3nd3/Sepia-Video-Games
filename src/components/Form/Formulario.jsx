import React, { useState } from 'react';
import './Form.css';
import { ddbb } from '../../Firebase/Config';

export const Formulario = () => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [mensaje, setMensaje] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			nombre,
			email,
			mensaje,
		};

		ddbb
			.collection('contacto')
			.add(data)
			.then(() => {
				setNombre('');
				setEmail('');
				setMensaje('');
			});
	};

	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<h1>Contactanos 🤳</h1>
				<hr />

				<label>Nombre</label>
				<input
					placeholder='Nombre'
					value={nombre}
					onChange={(event) => setNombre(event.target.value)}
				/>

				<label>Email</label>
				<input
					placeholder='Email'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>

				<label>Mensaje</label>
				<textarea
					placeholder='Mensaje'
					value={mensaje}
					onChange={(event) => setMensaje(event.target.value)}
				></textarea>

				<button type='submit'>Enviar</button>
			</form>
		</>
	);
};
