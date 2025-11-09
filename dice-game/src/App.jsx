import { useState } from "react";
import DiceGame from "./components/PlayerDisplay";
import WinnerDisplay from "./components/WinnerDisplay";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [rounds, setRounds] = useState(0);

  const currentPlayer = () => {
    if (player1 !== null) return 2;

    return 1;
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer() === 1) {
      setPlayer1(randomNumber);
    } else {
      setPlayer2(randomNumber);
      setRounds(rounds + 1);
    }
  };

  const winner = () => {
    if (player2 === null) {
      return null;
    }
    if (player1 > player2) {
      return "Player1";
    } else if (player2 > player1) {
      return "Player2";
    } else {
      return "Tie";
    }
  };

  const resetGame = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRounds(0);
  };

  const appStyle = {
    textAlign: "center",
    padding: "40px",
    background: "linear-gradient(135deg, #2b5876, #4e4376)",
    minHeight: "100vh",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
  };

  const vsStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ffcc00",
    textShadow: "0 0 10px rgba(255, 204, 0, 0.5)",
    margin: "0 20px",
  };

  const playersContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  };

  return (
    <div style={appStyle}>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>
        2-Player Dice Game
      </h2>
      <div style={playersContainer}>
        <DiceGame
          PlayerCount="Player 1"
          index={player1}
          handleClick={rollDice}
          isDisabled={currentPlayer() !== 1}
        />

        <div style={vsStyle}>VS</div>

        <DiceGame
          PlayerCount="Player 2"
          index={player2}
          handleClick={rollDice}
          isDisabled={currentPlayer() !== 2}
        />
      </div>
      {winner() && <WinnerDisplay winner={winner()} resetGame={resetGame} />}
    </div>
  );
}

export default App;
