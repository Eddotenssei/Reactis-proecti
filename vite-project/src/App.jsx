import { useState } from "react";
import CounterButton from "./components/CounterButton.jsx";

function App() {
  const [counter, setCounter] = useState(0);
  const projectName = "Clicker-Game";

  return (
    <>
      <h1>{projectName}</h1>
      <h2>Counter: {counter}</h2>
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
