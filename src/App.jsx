import "./App.css";
import Table from "./componentes/table";
import { Input } from "./componentes/input/";
import { useState } from "react";
import { FaAddressBook } from "react-icons/fa";

function App() {
  const [tasks, settask] = useState([]);

  const [nuevaT, setNuevaT] = useState("");

  /* <div className='conter'>
<span className='c'>
  Tareas Completas:{cuentaCompleta} {""}
  </span>
  </div>
  const cuentaCompleta = tasks.filter(
    (tasks) => tasks.isComplete === true).length; */

  function addTarea(nuevaTar) {
    console.log(nuevaTar.taskName);

    if (nuevaTar.taskName.trim() !== "") {
      const tareaActu = tasks.slice();
      tareaActu.push(nuevaTar);
      settask(tareaActu);
    }
  }

  function deleteTarea(index) {
    const actutareas = [];

    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        actutareas.push(tasks[i]);
      }
    }

    settask(actutareas);
    console.log(tasks);
  }

  const validarcheck = (id) => {
    settask(
      tasks.map((task) => {
        console.log(task);
        return task.id === Number(id)
          ? { ...task, completed: !task.completed }
          : { ...task };
      })
    );
  };

  const calcularCompletados = () => {
    let contador = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        contador += 1;
      }
    });
    return contador;
  };

  const completed = calcularCompletados();
  return (
    <div className="div">
      <h3>ListToDo Susana </h3>
      <h3>Tareas Completadas</h3>
      <p>{completed}</p>
      <Input onAddtarea={addTarea} nuevaT={nuevaT} setNuevaT={setNuevaT} />
      <button onClick={() => addTarea(nuevaT)}>
        {" "}
        <FaAddressBook />{" "}
      </button>
      <Table
        tasks={tasks}
        deleteTarea={deleteTarea}
        validarcheck={validarcheck}
      />
    </div>
  );
}

export default App;
