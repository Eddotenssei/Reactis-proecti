import { useState } from "react";
import DiceGame from "./components/PlayerDisplay";

function App() {

  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);


  const rollDice =  () => {
    const randomNumber =  Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1(randomNumber);
      setCurrentPlayer(2);
    }else{
      setPlayer2(randomNumber);
      setCurrentPlayer(1);
    }

  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          margin: 0,
        }}
      >
        <h2>2-Player Dice game</h2>

        <div>
          <div>
            <DiceGame PlayerCount="Player1" index={player1} handleClick={rollDice} isDisabled={currentPlayer === 2}/>

            <div>VS</div>

            <DiceGame PlayerCount="Player2" index={player2} handleClick={rollDice} isDisabled={currentPlayer === 1}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
