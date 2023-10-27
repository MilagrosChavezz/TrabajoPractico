var guardadoDeUsuario=localStorage.getItem("usuario");

if(guardadoDeUsuario){
    let textoACambiar=document.getElementById('nombre-usuario');
    textoACambiar.textContent=guardadoDeUsuario;
}
  