//Función para crear el input para ingresar el nombre de la lista al presinar "Añadir lista"
function presionandoLista() {

    var tituloLista = document.getElementById('titulo-lista');
    var contenido = '<input class="input" type="text" name="input" placeholder="Añadir lista..."><br>' +
        '<button type="button" value="" class="button">' + 'Guardar' + '</button>';

    var funcionClick = tituloLista.addEventListener('click', function() {
        console.log('presionando');
        this.innerHTML = contenido;

    });
}


presionandoLista();