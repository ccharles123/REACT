import React from 'react';
import './TodoSeach.css';
import {TodoContext} from '../TodoContext'

function TodoSearch() {
  const { searchValue, setSearchValue} = React.useContext(TodoContext);
    return(
      <input 
      placeholder="Ingresa la ToDo a buscar..." 
      className='TodoSearch'
      value={searchValue}
      onChange={(evento) =>{
        setSearchValue(evento.target.value);
      }}
      />
    )
  }

export {TodoSearch};