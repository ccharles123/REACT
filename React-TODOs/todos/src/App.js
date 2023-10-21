import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';

import { CreateTodoButton } from './CreateTodoButton';

/*
const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar el curso introducción React.js", completed: false},
  {text: "Llorar con la Llorona", completed: false},
  {text: "LALALALALA", completed: true},
  {text: "Llamar por telefono", completed: true},
  {text:"Levantarte en la mañana", completed: false}
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1')*/

//hagamos un custom huge del local storage

function useLocalStorage(itemName, initialValue) {

   // manejo del local storage:
   const localStorageItems = localStorage.getItem(itemName); //obtenemos los valores del local storage.

   let parsedItem;
 
   if (!localStorageItems){//si está vacio, entonces creamos en el local Storage un String vacio y un parsedTodos vacio.
     localStorage.setItem(itemName, JSON.stringify(initialValue)); 
     parsedItem = initialValue;
   } else {
    parsedItem = JSON.parse(localStorageItems);//sino parseamos el local storage para que lo lea la app. 
   }
  
   // creamos un estado para enviarle a la fumcion de la app las variables:

  const [item, setItem] = React.useState(parsedItem);

  // con esta funcion vamos a actualizar el local storage y el estado al mismo tiempo.
   const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem]

}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText);     
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);// eliminamos el todo seleccionado
    saveTodos(newTodos);
  }


  return (

    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
