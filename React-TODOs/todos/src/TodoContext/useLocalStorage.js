import React from "react";

function useLocalStorage(itemName, initialValue) {

    // creamos un estado para enviarle a la fumcion de la app las variables:
    const [item, setItem] = React.useState(initialValue);

    // creamos un estado para indicar que estanos cargando y cuando hay error:
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
      // manejo del local storage:
      setTimeout(() => {
        try{
          const localStorageItems = localStorage.getItem(itemName); //obtenemos los valores del local storage.
          let parsedItem;
          if (!localStorageItems){//si está vacio, entonces creamos en el local Storage un String vacio y un parsedTodos vacio.
            localStorage.setItem(itemName, JSON.stringify(initialValue)); 
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItems);//sino parseamos el local storage para que lo lea la app. 
            setItem(parsedItem);
          }
          setLoading(false);
        } catch{
          setLoading(false);
          setError(true);
        }
    }, 1000); 
    }, []);

   // con esta funcion vamos a actualizar el local storage y el estado al mismo tiempo.
    const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item, 
    saveItem, 
    loading, 
    error
  }; 
}

export { useLocalStorage };

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