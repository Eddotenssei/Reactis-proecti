import { useState } from "react";

import CounterDisplay from "./components/CounterDisplay";
import Header from "./components/Header";
import CounterButton from "./components/CounterButton";
import Message from "./components/Message";
import ResetButton from "./components/ResetButton";

function App() {
  const [counter, setCounter] = useState(0);
  const projectName = "Counter App";
  return (
    <>
      <Header projectName={projectName} />
      <CounterDisplay counter={counter} />
      <Message count={counter} />

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
      <ResetButton
        title={"Reset"}
        handleReset={() => {
          setCounter(counter * 0);
        }}
      />
    </>
  );
}

export default App;
