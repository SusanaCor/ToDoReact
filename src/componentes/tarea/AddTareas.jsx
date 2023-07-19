import React from 'react';
import {FaRegTrashAlt } from 'react-icons/fa';
import { CargarTareas } from '../CargarTareas';






export const AddTareas = () => {
  return (
 <li>
    <span >
        <label htmlFor="" className="tabla"></label>
    </span>
  <CargarTareas />

<button className="btnEliminar"> <FaRegTrashAlt/></button>


</li>

  );

};
