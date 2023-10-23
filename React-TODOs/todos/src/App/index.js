import { AppUi } from './AppUi';
import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';


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

function App() {

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
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
  };

  return (
    <AppUi
      loading ={loading}
      error ={error}
      completedTodos ={completedTodos}
      totalTodos ={totalTodos}
      searchValue ={searchValue} 
      setSearchValue ={setSearchValue} 
      searchedTodos ={searchedTodos} 
      completeTodo ={completeTodo} 
      deleteTodo ={deleteTodo} 
    />
  );
}

export default App;
