

import "./App.css";
import TaskForm from "./components/TaskForm";
import { useContext, useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import {DataContext} from "./components/data/DataContext";

function App() {

const {tasks, setTask,CrearTask,deleteTask,eliminartodas}=useContext(DataContext);
  
 

 

  return (
    <div className="App">
      <h2 className="title">Tareas</h2>
      
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
