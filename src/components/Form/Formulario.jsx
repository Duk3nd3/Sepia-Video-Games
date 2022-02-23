import React from 'react';

export const Formulario = () => {
	return (
		<>
			<div className='container m-4 p-4'>
				<h1>Contacto</h1>
				<form>
					<div className='form-group p-2 m-2'>
						<label htmlFor='nombre'>Nombre</label>
						<input type='text' className='form-control' id='nombre' />
					</div>
					<div className='form-group p-2 m-2'>
						<label htmlFor='email'>Email</label>
						<input type='email' className='form-control' id='email' />
					</div>
					<div className='form-group p-2 m-2'>
						<label htmlFor='mensaje'>Mensaje</label>
						<textarea
							className='form-control'
							id='mensaje'
							rows='3'
							placeholder='Escribe tu mensaje...'
						></textarea>
					</div>
					<button type='submit' className='btn btn-primary p-2 m-2'>
						Enviar
					</button>
				</form>
			</div>

		</>
		);
};
