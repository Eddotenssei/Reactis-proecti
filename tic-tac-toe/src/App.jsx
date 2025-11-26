import PlayerDisplay from "./components/PlayerDispay";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerDisplay initialName={"Player 2"} symbol={"O"} />
          VS
          <PlayerDisplay  initialName={"Player 2"} symbol={"X"} />
        </ol>
        <GameBoard />
      </div>

      
    </main>
  );
}

export default App;
