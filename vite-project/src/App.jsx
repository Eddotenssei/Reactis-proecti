import { useState } from "react";

import CounterDisplay from "./components/CounterDisplay.jsx";
import Header from "./components/Header.jsx";
import CounterButton from "./components/CounterButton.jsx";
import Message from "./components/Message.jsx";

function App() {
  const [counter, setCounter] = useState(0);
  const projectName = "Counter App";
  return (
    <>
      <Header projectName={projectName}/>
      <CounterDisplay counter={counter}/>
      <Message count={counter}/>



      <CounterButton
        title={"Increase"}
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />
      <CounterButton
        title={"Decrease"}
        handleClick={() => {
          setCounter(counter - 1);
        }}
      />
    </>
  );
}

export default App;
