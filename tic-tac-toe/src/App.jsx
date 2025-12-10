import { use, useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length % 2 === 0 ? "X" : "O";
};

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);


  function handleSetPlayers(symbol, newName){ {
    setPlayers((prevPlayers) =>{
      return { ...prevPlayers, [symbol]: newName }
    })
  }}





  // const gameBoard = initialGameBoard;
  const gameBoard = [...initialGameBoard.map((r)=> [...r])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;
    gameBoard[rowIndex][colIndex] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleReset() {
    setGameTurns([]);

    // SECONDARY WAY TO RESET THE BOARD
    // initialGameBoard = [
    //   [null, null, null],
    //   [null, null, null],
    //   [null, null, null],
    // ];
    // setGameTurns([]);
  }

  function handleSquareSelect(rowIndex, colIndex) {
    setGameTurns((prevValue) => {
      let currentPlayer = deriveActivePlayer(prevValue);

      const newTurn = {
        square: { rowIndex, colIndex },
        player: currentPlayer,
      };
      return [newTurn, ...prevValue];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="Player 1"
            symbol="X"
            onPlayersChanged={handleSetPlayers}
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        {winner || hasDraw ? (
          <GameOver
            symbol={winner}
            hasDraw={hasDraw}
            handleReset={handleReset}
            onPlayersChanged={handleSetPlayers}
          />
        ) : null}

        <GameBoard onSquareSelect={handleSquareSelect} gameBoard={gameBoard} />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App; 