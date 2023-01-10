import React, { useContext, useState } from "react";
import { DataContext } from "./data/DataContext";

export default function TaskForm() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const {CrearTask,eliminartodas}=useContext(DataContext);



    function handlerSubmit(e){

        e.preventDefault();


        CrearTask(title,description)
        setTitle(" ");
        setDescription(" ")
       
    }

 
  return (
    <>
     
      <form onSubmit={handlerSubmit} className="formulario">
        <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="titulo de la tarea" value={title} autoFocus className="input_title"/>
        <textarea type="text" onChange={(e)=>setDescription(e.target.value)}placeholder="titulo de la descripcion" value={description} />
       
        <button className="input_button">Crear</button>
        
        </form>
        <button onClick={eliminartodas}className="boton_deleteAll">Eliminar todas</button>
    </>
  );
}
