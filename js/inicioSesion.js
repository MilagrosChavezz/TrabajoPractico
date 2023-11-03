let submit = document.getElementById("submit");
let usuario = document.getElementById("usuario");
let contraseña = document.getElementById("contraseña");
let error = document.getElementById("error");
let mensaje;

submit.addEventListener("click", enviar);

function enviar(event) {
  if (usuario.value.length === 0) {
    event.preventDefault();
    mensaje = "<p>Ingrese un nombre de usuario</p>";
    error.innerHTML = mensaje;
    usuario.classList.add("errorInput");
  } else if (contraseña.value.length === 0) {
    event.preventDefault();
    mensaje = "<p>Ingrese una contraseña</p>";
    error.innerHTML = mensaje;
    contraseña.classList.add("errorInput");
  } else {
    // Si ambos campos están llenos, puedes almacenar el nombre de usuario en el localStorage
    sessionStorage.setItem('usuario', usuario.value);
  }
}
