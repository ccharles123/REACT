import React from 'react';
import './css/TodoSeach.css'

function TodoSearch({
  searchValue, 
  setSearchValue
}) {
    return(
      <input 
      placeholder="Cortar Cebolla" 
      className='TodoSearch'
      value={searchValue}
      onChange={(evento) =>{
        setSearchValue(evento.target.value);
      }}
      />
    )
  }

export {TodoSearch};