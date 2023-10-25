import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h1 className="TodoCounter">
        {totalTodos === 0 ? (
          "¡No tienes ninguna tarea!"
        ) : completedTodos === totalTodos ? (
          "¡Felicidades, completaste todas tus tareas!"
        ) : (
          <>
            Has completado <strong>{completedTodos}</strong> de <strong>{totalTodos}</strong> TODOs
          </>
        )}
      </h1>
    )
  }

export {TodoCounter};