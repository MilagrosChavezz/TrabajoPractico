let submit = document.getElementById("submit");
let usuario = document.getElementById ("usuario");
let contraseña = document.getElementById ("contraseña");

submit.addEventListener("click", enviar);

function enviar(event){
    if (usuario.value.length == 0) {
        alert("Ingrese un nombre de usuario")
        event.preventDefault();
    } else if (contraseña.value.length==0) {
        alert("Ingrese una contraseña")
        event.preventDefault();
    }
}