import React from 'react';
import './TodoSeach.css'

function TodoSearch({
  searchValue, 
  setSearchValue
}) {
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