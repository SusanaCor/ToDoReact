import React from 'react'
import {FaEdit } from 'react-icons/fa';

export const CargarTareas = () => {
  return (
<form>
     <input type="text"
     className="Input-update"
     name="tarea"
     value={""}
     placeholder="Que tarea deseas agregar?"
    
    
    />
<button className='btnadd' type="submit">
     <FaEdit />
</button>

</form>
  )
}
