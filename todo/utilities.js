// //DOM manipulator
// 'use strict';
// function addTask(){
//     if(document.getElementById('entry').value != "")
//     {
//         const taskName = document.getElementById('entry').value;
//         let newTask = document.createElement('tr');
//         let checkbox = document.createElement('input');
//         checkbox.setAttribute("type", "checkbox");
//         checkbox.onclick = markCompleted;
//         let taskNameEl = document.createElement('td');
//         taskNameEl.setAttribute('class', 'taskName');
//         taskNameEl.textContent = taskName;
//         let handleEl = document.createElement('td');
//         handleEl.textContent = "Grab me!";
//         handleEl.setAttribute('class', 'grapple');
//         let deleteEl = document.createElement('td');
//         let button = document.createElement('button');
//         button.textContent = 'X';
//         button.setAttribute('class', 'trash');
//         button.onclick = deleteTask;
//         deleteEl.appendChild(button);
//         newTask.appendChild(document.createElement('td').appendChild(checkbox));
//         newTask.appendChild(document.createElement('td').appendChild(taskNameEl));
//         newTask.appendChild(document.createElement('td').appendChild(handleEl));
//         newTask.appendChild(document.createElement('td').appendChild(deleteEl));
//         document.getElementsByTagName('tbody')[0].appendChild(newTask);
//         document.getElementById('entry').value = "";
//         const number = document.getElementById('numTasksRemaining');
//         number.textContent = parseInt(number.textContent) +1;
//     }
// }
// function markCompleted(event){
//     let parent = event.target.parentElement;
//     let taskName;
//     for(let i = 0; i < parent.childElementCount;i++) {
//         if (event.target.parentElement.childNodes[i].className == "taskName") {
//             taskName = parent.childNodes[i];
//             alert(taskName.classList);
//             if(taskName.classList.contains('completed'))
//             {
//                 taskName.classList.remove('completed');
//             } else {
//                 taskName.classList.add('completed');
//             }  
//         } 
//     }
    
// }
// function deleteTask(event){
//     event.target.parentElement.parentElement.remove();
//     const number = document.getElementById('numTasksRemaining');
//         number.textContent = parseInt(number.textContent) -1;
// }
// function toggleFilter(event){
//     const target = event.target.getAttribute('id');
//     if(target == 'showAll') {
//         //display all in the list
//     }
//     else if(target == 'showActive') {

//     }
//     else if(target == "showCompleted") {

//     }
// }
function activeFilter(toDos) {
    return toDos.filter(toDo => {
        return !toDo.completed
    })
}
function completedFilter(toDos) {
    return toDos.filter(toDo => {
        return toDo.completed
    })
}
export default {
    activeFilter, completedFilter
}