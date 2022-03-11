import Swal from 'sweetalert2';

export const validateFormCheckout = (values) => {
	const errors = {
		name: '',
		email: '',
		phone: '',
	};

	if (!values.name) {
		errors.name = Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Nombre requerido',
			footer: 'Campo vacio',
			allowEscapeKey: true,
			allowOutsideClick: false,
			allowEnterKey: false,
		});
		return false;
	} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
		errors.name = Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Nombre invalido',
			footer: 'Solo se permiten letras',
			allowEscapeKey: false,
			allowOutsideClick: false,
			allowEnterKey: false,
		});
		return false;
	}

	if (!values.email) {
		errors.email = Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'El email es requerido',
			footer: 'Campo vacio',
			allowEscapeKey: false,
			allowOutsideClick: false,
			allowEnterKey: false,
		});
		return false;
	} else if (
		!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
	) {
		errors.email = Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Verifique email ingresado',
			footer: 'Formato incorrecto',
			allowEscapeKey: false,
			allowOutsideClick: false,
			allowEnterKey: false,
		});
		return false;
	}

	if (!values.phone) {
		errors.phone = Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'El telefono es requerido',
			footer: 'Campo vacio',
			allowEscapeKey: false,
			allowOutsideClick: false,
			allowEnterKey: false,
		});
		return false;
	} else if (!/^\d{10,14}$/.test(values.phone)) {
		errors.phone = Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Numero invalido',
			footer: 'Solo se permiten numeros',
			allowEscapeKey: false,
			allowOutsideClick: false,
			allowEnterKey: false,
		});
		return false;
	}

	return errors;
};
