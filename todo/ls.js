//local storage helper functions
function saveToDo(toDo) {
    const toDoList = getToDoList();
    toDoList.push(toDo)
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}
function deleteToDo(id) {
    const toDoList = getToDoList();
    const updatedToDos = toDoList.filter( toDo => toDo.id != id);
    localStorage.setItem('toDoList', JSON.stringify(updatedToDos));
}
function getToDoList() {
    const toDoListString = localStorage.getItem('toDoList');
    let toDoList = [];
    if(toDoListString) {
        toDoList = JSON.parse(toDoListString);
    }
    return toDoList;
}
export default {
    saveToDo, getToDoList, deleteToDo
}
// if( typeof(Storage) === 'undefined' ) {
//     console.warn('Sorry! No Web Storage support.');
// }
// else {
//     export default class lsHelper {
//     getToDos(ToDoList) {
//         let allToDos = [];
//         for(toDo in ToDoList) {
//             allToDos.push(localStorage.getItem(key));
//         }
//         return allToDos;
//     }
//     }
// }

//Taken from https://gist.github.com/scrubmx/a240a912a475ab0a2c43
//   /**
//    * Check if key exists in local storage
//    * @param  string key
//    * @return boolean
//    */
//   function localStorageHas (key) {
//     var item = localStorage.getItem(key);
  
//     return ( item !== null );
//   }
  
//   /**
//    * Retrive an object from local storage.
//    * @param  string key
//    * @return mixed
//    */
//   function localStorageGet (key) {
//     var item = localStorage.getItem(key);
  
//     if ( ! item ) return;
  
//     if ( item[0] === '{' || item[0] === '[' ) return JSON.parse(item);
  
//     return item;
//   }
  
//   /**
//    * Save some value to local storage.
//    * @param string key    
//    * @param string value
//    */
//   function localStorageSave (key, value) {
//     if ( value === undefined ) $.error("Can't store undefined value");
  
//     if ( typeof(value) === 'object' || typeof(value) === 'array' ) {
//       value = JSON.stringify(value);
//     }
  
//     if ( typeof(value) !== 'string' ) $.error("Can't store unrecognized format value");
  
//     localStorage.setItem(key, value);
//   }
  
//   /**
//    * Remove element from local storage.
//    * @param string key 
//    */
//   function localStorageRemove (key) {
//     localStorage.removeItem(key);
//   }