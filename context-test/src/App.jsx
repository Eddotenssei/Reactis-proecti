import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'


import { useState, createContext } from 'react'
import './App.css'

export  const UserContext = createContext()

function App() {

  const [user, setUser] = useState()

  return (
    <>
    <div classname="box">
      <h1>Component1</h1>
      <h2>{`hello ${user}`}</h2>
        
        <UserContext.Provider value={user}>
        
        <ComponentA user={user} />
        
        </UserContext.Provider>
        
        <ComponentB />
    </div>
    </>
  )
}

export default App
