var cancionGuardada=sessionStorage.getItem("cancion-sonando");

if(cancionGuardada){
    let textoACambiar = document.getElementById('song-playing-name');
    textoACambiar.textContent = cancionGuardada;
}
