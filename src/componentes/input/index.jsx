import React, { useState } from "react";

export const Input = ({ onAddTarea, nuevaT, setNuevaT }) => {
  const [valor, setValor] = useState("");

  const ingresart = (event) => {
    setNuevaT({
      id: +new Date(),
      taskName: event.target.value,
      completed: false,
    });
  };

  const enterFun = (event) => {
    if (event.key === "Enter") {
      onAddTarea(nuevaT);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="Input-update"
        name="tarea"
        value={nuevaT.taskName}
        onChange={ingresart}
        onKeyPress={enterFun}
        placeholder="Que tarea deseas agregar?"
      />
    </div>
  );
};

export default Input;
