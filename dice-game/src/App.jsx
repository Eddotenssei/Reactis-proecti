import { useState } from "react";
import DiceGame from "./components/PlayerDisplay";
import WinnerDisplay from "./components/WinnerDisplay";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [turn, setTurn] = useState(1);
  const [showWinner, setShowWinner] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (turn === 1) {
      setPlayer1(randomNumber);
      setTurn(2);
    } else {
      setPlayer2(randomNumber);
      setShowWinner(true);

      if (player1 > randomNumber) {
        setPlayer1Wins(player1Wins + 1);
      } else if (randomNumber > player1) {
        setPlayer2Wins(player2Wins + 1);
      }
    }
  };

  const winner = () => {
    if (player1 > player2) return "Player1 Wins!";
    if (player2 > player1) return "Player2 Wins!";
    return "Tie!";
  };

  const resetGame = () => {
    setPlayer1(null);
    setPlayer2(null);
    setTurn(1);
    setShowWinner(false);
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

  const scoreStyle = {
    marginTop: "30px",
    fontSize: "1.2rem",
  };

  let winnerBanner = null;
  if (showWinner) {
    winnerBanner = <WinnerDisplay winner={winner()} resetGame={resetGame} />;
  }

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
          isDisabled={turn !== 1 || showWinner}
        />
        <div style={vsStyle}>VS</div>
        <DiceGame
          PlayerCount="Player 2"
          index={player2}
          handleClick={rollDice}
          isDisabled={turn !== 2 || showWinner}
        />
      </div>

      <div style={scoreStyle}>
        Player 1 Wins: {player1Wins} | Player 2 Wins: {player2Wins}
      </div>

      {winnerBanner}
    </div>
  );
}

export default App;
