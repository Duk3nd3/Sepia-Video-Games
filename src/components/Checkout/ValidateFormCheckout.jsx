



export const validateFormCheckout = (values) => {

    if (values.name.length < 5) {
        alert('name', 'El nombre debe tener al menos 5 caracteres');
        return false;
    }

    if (values.email.length < 7) {
        alert('email', 'El email es invalido');
        return false;
    }

    if (values.phone.length < 8) {
        alert('phone', 'El telefono es invalido');
        return false;
    }

    return true;

}