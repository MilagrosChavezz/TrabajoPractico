
/* ALMACENAR CANCION REPRODUCIENDO */
cancionSonando = document.getElementById('song-playing-name').textContent;
sessionStorage.setItem('cancion-sonando', cancionSonando);



/* FILTRAR CANCIONES */
let botonFiltro = document.getElementById('filtrar');
let filtroAlbum = document.getElementById('filtro-album');
let filtroDuracion = document.getElementById('filtro-duracion');
let filtroReproducciones = document.getElementById('filtro-reproducciones');

botonFiltro.addEventListener('click', () => {
    const selectedAlbum = filtroAlbum.value;
    const selectedReproducciones = filtroReproducciones.value;
    const selectedDuracion = filtroDuracion.value;

    const canciones = document.querySelectorAll('.cancion');

    canciones.forEach((cancion) => {
        let album = cancion.getAttribute('data-album');
        let reproducciones = cancion.getAttribute('data-reproducciones');
        let duracion = cancion.getAttribute('data-duracion');

        if (
            (selectedAlbum == 'Todos' || selectedAlbum == album) &&
            (selectedReproducciones == 'Cualquiera' || parseInt(reproducciones) > parseInt(selectedReproducciones)) &&
            (selectedDuracion == 'Cualquiera' || parseInt(duracion) > parseInt(selectedDuracion))
        ) {
            cancion.style.display = 'grid';
        } else {
            cancion.style.display = 'none';
        }
    });
});
