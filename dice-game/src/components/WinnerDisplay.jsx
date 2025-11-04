export default function WinnerDisplay({ winner, resetGame }) {
  const WinnerButtonStyle = {
    backgroundColor: "#ffcc00",
    color: "#222",
    fontSize: "1rem",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
  };
  const winnerStyle = {
    marginTop: "40px",
    fontSize: "1.5rem",
    animation: "pop 0.6s ease-in-out",
  };

  return (
    <div style={winnerStyle}>
      <h2>{winner}</h2>
      <button style={WinnerButtonStyle} onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}
