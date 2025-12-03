import Log from "./components/Log";
import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleCurrentPlayerChange(rowIndex, colIndex) {
    setCurrentPlayer((prevValue) => (prevValue === "X" ? "O" : "X"));
    
    setGameTurns((prevGameTurns,) => { 
      
      let currentPlayer = "X";
      
      if(prevGameTurns.length > 0 && prevGameTurns[0] === "X") {
        currentPlayer = "O";
      }
      
      
      
      const updatedTurns = [{
        symbol: "X", square: {row: rowIndex, col: colIndex },
        ...prevGameTurns
      }];
      return
    });   
  }

  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            currentPlayer={currentPlayer}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            currentPlayer={currentPlayer}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        <GameBoard
  currentPlayer={currentPlayer}
  onSquareSelect={handleCurrentPlayerChange}
  gameTurns={gameTurns}
/>
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;