import React from "react";
import {useLocalStorage} from './useLocalStorage'
import swal from "sweetalert";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    const addTodo = (text) => {
        if (text.trim() === '') {
            swal({
                text: "Favor ingresar la nueva TODO",
                icon: "warning",
                button: "Aceptar",
            });
            
            return;
        }
        const newTodos = [...todos];
        newTodos.push({text, completed: false,});
        saveTodos(newTodos);  
    };

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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };