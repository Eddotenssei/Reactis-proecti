import DiceGame from "./components/PlayerDisplay";

function App() {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

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
            <DiceGame PlayerCount="Player1" />

            <div>VS</div>

            <DiceGame PlayerCount="Player2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
