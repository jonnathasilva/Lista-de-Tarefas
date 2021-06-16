const elemetoListe = document.querySelector('ul');
const elementoInput = document.querySelector('input');
const elementobotao = document.querySelector('button');

let lista = []

function mostraTarefas() {

    elemetoListe.innerHTML = ''

    for (tarefas of lista) {
        const elementoUl = document.createElement('li');
        const elementoTexte = document.createTextNode(tarefas);

        const elementoLink = document.createElement('a');
        const pos = lista.indexOf(tarefas)
        
        const textLink = document.createTextNode('X');
        elementoLink.appendChild(textLink)

        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`);

        elementoUl.appendChild(elementoTexte);
        elemetoListe.appendChild(elementoUl);
        elementoUl.appendChild(elementoLink);
    }
}

mostraTarefas()

function addtarefa(){
    const textoTarefa = elementoInput.value;
    lista.push(textoTarefa);
    elementoInput.value = ''

    mostraTarefas()
}

elementobotao.setAttribute('onclick', 'addtarefa()');

function deletaTarefa(pos){
    lista.splice(pos, 1);
    mostraTarefas();
}