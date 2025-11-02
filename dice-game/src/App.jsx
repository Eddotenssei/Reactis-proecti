import { useState } from "react";
import DiceGame from "./components/PlayerDisplay";

function App() {
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [round, setRound] = useState(0);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1) {
      setPlayer1(randomNumber);
      setCurrentPlayer(2);
      setRound(round + 1);
    } else {
      setPlayer2(randomNumber);
      setCurrentPlayer(1);
      setRound(round + 1);
    }
  };

  if (round === 2 && winner === null) {
    if (player1 > player2) {
      setWinner("Player 1 Wins!");
    } else if (player2 > player1) {
      setWinner("Player 2 Wins!");
    } else {
      setWinner("It's a Draw!");
    }
  }

  const resetGame = () => {
    setPlayer1(1);
    setPlayer2(1);
    setCurrentPlayer(1);
    setWinner(null);
    setRound(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>2-Player Dice Game</h2>

      <div>
        <DiceGame
          PlayerCount="Player 1"
          index={player1}
          handleClick={rollDice}
          isDisabled={currentPlayer === 2 || winner !== null}
        />

        <div style={{ margin: "20px", fontSize: "24px" }}>VS</div>

        <DiceGame
          PlayerCount="Player 2"
          index={player2}
          handleClick={rollDice}
          isDisabled={currentPlayer === 1 || winner !== null}
        />
      </div>

      {winner && (
        <div style={{ marginTop: "30px", fontSize: "24px" }}>
          <h2>{winner}</h2>
          <div>
            <button onClick={resetGame}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
