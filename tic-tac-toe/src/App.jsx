import PlayerDisplay from "./components/PlayerDispay";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerDisplay name={"Player 1"} symbol={"O"} />
          VS
          <PlayerDisplay namer={"Player 2"} symbol={"X"} />
        </ol>
      </div>
    </main>
  );
}

export default App;
