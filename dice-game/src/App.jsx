import { useState } from "react";
import DiceGame from "./components/PlayerDisplay";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
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

  const winnerStyle = {
    marginTop: "40px",
    fontSize: "1.5rem",
    animation: "pop 0.6s ease-in-out",
  };

  const buttonStyle = {
    backgroundColor: "#ffcc00",
    color: "#222",
    fontSize: "1rem",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
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
          isDisabled={currentPlayer === 2 || winner !== null}
        />

        <div style={vsStyle}>VS</div>

        <DiceGame
          PlayerCount="Player 2"
          index={player2}
          handleClick={rollDice}
          isDisabled={currentPlayer === 1 || winner !== null}
        />
      </div>

      {winner && (
        <div style={winnerStyle}>
          <h2>{winner}</h2>
          <button style={buttonStyle} onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
