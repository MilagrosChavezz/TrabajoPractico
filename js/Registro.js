let submit = document.getElementById("submit");
let usuario = document.getElementById ("usuario");
let contraseña = document.getElementById ("contraseña");
let contraseñaConfirmacion = document.getElementById ("contraseña-confirmacion");
let email = document.getElementById ("email");
let fechaNacimiento = document.getElementById ("fecha-nacimiento");

submit.addEventListener("click", enviar);

function enviar(event){
    let expRegMail =  /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    let expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/;

    if (usuario.value.length < 4 || usuario.value.length > 8) {
        alert("Ingrese un nombre de usuario de entre 4 y 8 caracteres")
        event.preventDefault();
    }
    
    if (contraseña.value.length==0) {
        alert("Ingrese una contraseña valida")
        event.preventDefault();
    }

    if (contraseña.value != contraseñaConfirmacion.value) {
        alert("Las contraseñas deben ser iguales")
        event.preventDefault();
    }

    if (!(expRegMail.test(email.value))) {
    alert("Ingrese un email valido")
    event.preventDefault();
    }

    if (!(expRegFecha.test(fechaNacimiento.value))) {
        alert("Ingrese una fecha de nacimiento valida")
        event.preventDefault();
    }
}
