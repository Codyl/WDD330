
//import helper function
import utils from './utilities.js';
import lsHelper from './ls.js';

//Load the list
loadToDos();

//Add event listeners
document.querySelector('#addTask').onclick = newToDo;
document.querySelector('#showActive').onclick = applyFilter;
document.querySelector('#showAll').onclick = applyFilter;
document.querySelector('#showCompleted').onclick = applyFilter;

function loadToDos() {
    const toDoList = lsHelper.getToDoList();

    toDoList.forEach(toDo => {
        const el = createToDoElement(toDo);
       addToList(el); 
    });
}

function newToDo() {
    const toDo = createToDo();
    const toDoDiv = createToDoElement(toDo);
    addToList(toDoDiv);
    lsHelper.saveToDo();
}

function createToDo() {
    const input = document.querySelector('#entry');
    const newToDo = { id: Date.now(), content: input.value, completed: false}
    input.value = '';
    return newToDo;
}

function createToDoElement(toDo) {
    //todo div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');

    //complete btn
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');

    //toDo content
    const toDoContent = document.createElement('div');
    //toDoContent.innerText = toDo.content;
    toDoContent.classList.add('toDo-content');

    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', toDo.id);
    deleteBtn.classList.add('toDo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteToDo;

    toDoDiv.appendChild(completeBtn);
    toDoDiv.appendChild(toDoContent);
    toDoDiv.appendChild(deleteBtn);

    return toDoDiv;
}

function addToList(toDoDiv) {
    document.querySelector('#toDos').appendChild(toDoDiv);
}

function deleteToDo(e) {
    const btn = e.currentTarget;
    ls.deleteToDo(btn.getAttribute('data-id'));
    document.querySelector('#toDos').innerHTML = '';
    loadToDos();
}

function toggleComplete(e) {
    //Find the taskNameEl in the parent tr
    const task = e.currentTarget;
    task.classList.remove('completed');
}

function applyFilter(e) {
    //Clear the list
    document.querySelector('#toDos').innerHTML = '';

    //Declare variables
    let filteredToDos = [];
    const allToDos = lsHelper.getToDoList();

    //Check which filter to apply
    if(e.currentTarget.id == 'showActive') {
        filteredToDos = utilities.activeFilter(allToDos);
    }
    else if(e.currentTarget.id == 'showAll') {
        filteredToDos = allToDos;
    }
    else if(e.currentTarget.id == 'showCompleted') {
        filteredToDos = utilities.completedFilter(allToDos);
    }

    //Draw the list
    filteredToDos.forEach(toDo => {
        const el = createToDoElement(toDo);
        addToList(el);
    })
}