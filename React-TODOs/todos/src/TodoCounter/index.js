import "./TodoCounter.css";

function TodoCounter({ total, completed}) {
    return(
        <h1 className="TodoCounter">
        {total === 0 ? (
          "¡No tienes ninguna tarea!"
        ) : completed === total ? (
          "¡Felicidades, completaste todas tus tareas!"
        ) : (
          <>
            Has completado <strong>{completed}</strong> de <strong>{total}</strong> TODOs
          </>
        )}
      </h1>
    )
  }

export {TodoCounter};