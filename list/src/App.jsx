import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
export default function App() {
  
  const [todos, setTodos] = useState([])
  
  const presetTodos = [
    { id: 1, text: "Preset 1" },
    { id: 2, text: "Preset 2" },
    { id: 3, text: "Preset 3" }
  ];


  addTodo = ()=>{
      const newTodo = {
      id: nanoid(),
      text: todoText,
    };
  }
  
  deleteTodo = (id) => {
     const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  }




    setTodos([...todos, newTodo])
  }

  return(
    <>
    
    </>
  );

