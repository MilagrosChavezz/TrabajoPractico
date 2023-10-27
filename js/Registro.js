let submit = document.getElementById('submit');
let usuario = document.getElementById('usuario');
let contraseña = document.getElementById('contraseña');
let contraseñaConfirmacion = document.getElementById('contraseña-confirmacion');
let email = document.getElementById('email');
let fechaNacimiento = document.getElementById('fecha-nacimiento');
let error = document.getElementById('error');
let mensaje;

submit.addEventListener('click', enviar);

function enviar(event) {
    let expRegMail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    let expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/;

    if (usuario.value.length < 4 || usuario.value.length > 8) {
        event.preventDefault();
        mensaje = '<p>Ingrese un nombre de usuario de entre 4 y 8 caracteres<p>';
        error.innerHTML = mensaje;
    } else if (contraseña.value.length == 0) {
        event.preventDefault();
        mensaje = '<p>Ingrese una contraseña valida<p>';
        error.innerHTML = mensaje;
    } else if (contraseña.value != contraseñaConfirmacion.value) {
        event.preventDefault();
        mensaje = '<p>Las contraseñas deben ser iguales<p>';
        error.innerHTML = mensaje;
    } else if (!expRegMail.test(email.value)) {
        event.preventDefault();
        mensaje = '<p>Ingrese un email valido<p>';
        error.innerHTML = mensaje;
    } else if (!expRegFecha.test(fechaNacimiento.value)) {
        event.preventDefault();
        mensaje = '<p>Ingrese una fecha de nacimiento valida<p>';
        error.innerHTML = mensaje;
    }
}
