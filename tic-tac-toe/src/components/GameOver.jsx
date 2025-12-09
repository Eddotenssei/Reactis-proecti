export default function GameOver({ symbol, hasDraw, handleReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>

      {hasDraw ? <p>It's a draw!</p> : <p>{symbol} won!</p>}

      <p>
        <button onClick={handleReset}>Rematch!</button>
      </p>
    </div>
  );
}
