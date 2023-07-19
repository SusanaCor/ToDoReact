import React from "react";
import {FaRegTrashAlt } from 'react-icons/fa';

function Table({ tasks, deleteTarea, validarcheck }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="TablaColor"> </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                checked={tasks.completed}
                onChange={() => validarcheck(task.id)}
              />

              {task.taskName}
            </td>

            <td>
              <button onClick={() => deleteTarea(index)}><FaRegTrashAlt/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
