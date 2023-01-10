import React, { createContext, useEffect, useState } from 'react'

import { tareas } from "../tareas";

export const DataContext = createContext()


  function DataProvider(props) {

    const [tasks, setTask] = useState(tareas);


  
    
useEffect(()=>{
  const tasks=JSON.parse(localStorage.getItem("tareas"));

    setTask(tasks)
 
 

},[])

useEffect(()=>{
localStorage.setItem("tareas",JSON.stringify(tasks))

},[tasks])

function CrearTask(taskTitle, taskDescription) {
  setTask([
    ...tasks,
    {
      title: taskTitle,
      description: taskDescription,
      id: tasks.length,
    },
  ]);
}
function deleteTask(taskId) {
  let asegurar = confirm("Desea eliminar la tarea");

  if (asegurar === true) {
    const changedTask = tasks.filter((tasks) => tasks.id != taskId);
    setTask(changedTask);
  } else {
    setTask(tasks);
  }
}

function eliminartodas(){

  let asegurar=confirm("Seguro desea eliminar todas las tareas")
  if(asegurar===true){
if(tasks.length!=0){

setTask([])

}else{
alert("No hay tareas que eliminar")
}
  }

}


  return (
   <DataContext.Provider value={{tasks, setTask,CrearTask,deleteTask,eliminartodas}}>

    {props.children}
   </DataContext.Provider>
  )
}


export default DataProvider;