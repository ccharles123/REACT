import React from 'react';
import './CreatTodoButton.css';
import { TodoContext } from '../TodoContext';


function CreateTodoButton() {
    const {
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext);

    return(
        <button 
        className="CreateTodoButton" 
        onClick={
            (e) =>
                {setOpenModal(!openModal)}
        }>+</button>
    )
};

export {CreateTodoButton};