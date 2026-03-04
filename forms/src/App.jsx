import "./App.css";
import { useState } from "react";
function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <>
    <form onSubmit={(ev)=>{
      ev.preventDefault();
      console.log(name, email, password);
      
    }}>
      <input type="text" nmae="name" placeholder="eneter your name" onChange={(e)=>{
          setName(e.target.value)
      }}
      value={name}
      />
      <input type="email" nmae="email" placeholder="eneter your email" 
      onChange={(e)=>{
          setEmail(e.target.value)
      }}
      value={email}
      />
      <input type="password" nmae="password" placeholder="eneter your password"
      onChange={(e)=>{
          setPassword(e.target.value)
      }}
      value={password}
       />
       <button type="submit">
          log in
       </button>
    </form>
    </>
  )
}

export default App
