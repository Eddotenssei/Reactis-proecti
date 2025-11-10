import { useState } from "react";
import DiceGame from "./components/PlayerDisplay";
import WinnerDisplay from "./components/WinnerDisplay";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [rounds, setRound] = useState(1);
  const gameOverCount = 3;

  const isGameOver = rounds > gameOverCount;

  const currentPlayer = () => {
    if (player1 === null) {
      return 1;
    } else {
      return 2;
    }
  };
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer() === 1) {
      setPlayer1(randomNumber);
    } else {
      setPlayer2(randomNumber);

      setRound(rounds + 1);
      if (player1 > randomNumber) {
        setPlayer1Wins(player1Wins + 1);
      } else if (randomNumber > player1) {
        setPlayer2Wins(player2Wins + 1);
      }
    }
  };

  const winner = () => {
    if (player2 === null) {
      return null;
    }
    if (player1 > player2) return "Player1 Wins!";
    if (player2 > player1) return "Player2 Wins!";
    return "Tie!";
  };

  const playAgainNextRound = () => {
    setPlayer1(null);
    setPlayer2(null);
  };
  const playAgain = () => {
    setPlayer1(null);
    setPlayer2(null);
    setPlayer1Wins(0);
    setPlayer2Wins(0);
    setRound(1);
  };
  if (isGameOver) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px 0",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd 0%, #c8e6c9 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "24px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
            padding: "48px 60px",
            maxWidth: "460px",
            width: "100%",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "2.2rem",
              margin: "0 0 20px 0",
              fontWeight: "bold",
              color: "#333",
              letterSpacing: "1px",
              textShadow: "0 2px 10px rgba(76,175,80,0.08)",
            }}
          >
            player 1 wins the game
          </h1>
          <button
            onClick={playAgain}
            style={{
              marginTop: "18px",
              padding: "16px 40px",
              fontSize: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 18px rgba(33, 150, 243, 0.13)",
              letterSpacing: "2px",
            }}
          >
            🎲 Play Again
          </button>
        </div>
      </div>
    );
  }

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
          isDisabled={currentPlayer() !== 2 || player2 !== null}
        />
      </div>

      <div style={scoreStyle}>
        Player 1 Wins: {player1Wins} | Player 2 Wins: {player2Wins}
      </div>
      {winner() && (
        <WinnerDisplay winner={winner()} resetGame={playAgainNextRound} />
      )}
    </div>
  );
}

export default App;
