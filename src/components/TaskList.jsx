import React, { useContext } from "react";
import { DataContext } from "./data/DataContext";

export default function TaskList() {

  const {tasks,deleteTask,}=useContext(DataContext);
  if (tasks.length === 0) {
    return <h1 className="titulo_no_tarea">No hay Tareas</h1>;
  }



  return (
    <div className="cards_container">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="cards">
          
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={()=>deleteTask(task.id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
}
