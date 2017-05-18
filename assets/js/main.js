// Función para crear el input
function createSetTitleInList() {
    // Seleccion del container
    var container = document.getElementById('container');
    // div
    var div = document.createElement('div');
    div.setAttribute("class", "remove-div");

    // input
    var input = document.createElement('input');

    input.setAttribute("class", "input-text");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Añadir lista...");

    // button
    var button = document.createElement('button');
    var texto = document.createTextNode('Guardar');

    button.setAttribute("type", "submit");
    button.setAttribute("class", "button");
    button.appendChild(texto);

    button.addEventListener('click', saveList);

    // Remover el titulo
    var remove = document.getElementsByClassName('btn-anadir-lista')[0];
    container.removeChild(remove);

    // Apendando al div
    div.appendChild(input);
    div.appendChild(button);
    container.appendChild(div);

}


function createAddList() {
    var container = document.getElementById('container');
    var btnAddList = document.createElement('div');

    btnAddList.setAttribute('class', 'btn-anadir-lista');
    btnAddList.appendChild(document.createTextNode('Añadir lista...'));
    container.appendChild(btnAddList);
    btnAddList.addEventListener('click', createSetTitleInList);
}


createAddList();

function saveList() {
    var container = document.getElementById('container');

    // Valor de lo ingresado en el input
    var inputValue = this.previousSibling.value;
    //console.log(this.previousSibling.value);
    var contenedor = '';

    // Crear el nuevo titulo
    var lista = document.createElement('div');
    var title = document.createElement('strong')
    var texto = document.createTextNode(inputValue);

    lista.setAttribute("class", "lista");


    // Remover el input y el boton
    var removeIB = document.getElementsByClassName('remove-div')[0];
    container.removeChild(removeIB);

    title.appendChild(texto);
    lista.appendChild(title);
    container.appendChild(lista);

    // Crear div añadir tarjeta
    var addCard = document.createElement('div');
    var addCardTexto = document.createTextNode('Añadir una tarjeta...');

    addCard.setAttribute("class", "add-card");

    // Una vez que se crea la lista doy la posibilidad a crear una nueva
    createAddList();

    addCard.appendChild(addCardTexto);
    lista.appendChild(addCard);

    addCard.addEventListener('click', createTask);

}

function createTask() {
    var listaIni = this.parentNode;
    var textArea = document.createElement('textarea');
    var buttonTextArea = document.createElement('button');

    textArea.setAttribute("id", "text-area")
    buttonTextArea.setAttribute("class", "button");

    var textoButton = document.createTextNode('Añadir');

    listaIni.appendChild(textArea);
    listaIni.appendChild(buttonTextArea);
    buttonTextArea.appendChild(textoButton);

    // Al hacer click en el boton obtengo la data ingresada en la tarjeta
    buttonTextArea.addEventListener('click', function() {
        var textAreaValue = document.getElementById('text-area').value;
        console.log(textAreaValue);

        listaIni.removeChild(textArea);
        listaIni.removeChild(buttonTextArea);

        var card = document.createElement('div');
        var cardText = document.createTextNode(textAreaValue);

        card.setAttribute("class", "card");

        card.appendChild(cardText);
        listaIni.appendChild(card);

        // Crear div añadir tarjeta
        var addCard = document.createElement('div');
        var addCardTexto = document.createTextNode('Añadir una tarjeta...');

        addCard.setAttribute("class", "add-card");

        addCard.appendChild(addCardTexto);
        listaIni.appendChild(addCard);

        addCard.addEventListener('click', createTask);
    });



}