// export default GameScreen({playersContainer, appStyle, index, handleClick, isDisabled, player1Wins, player2Wins,currentPlayer, resetGame  });{
//     return (
//     <div style={appStyle}>
//       <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>
//         2-Player Dice Game
//       </h2>
//       <div style={playersContainer}>
//         <DiceGame
//           PlayerCount="Player 1"
//           index={player1}
//           handleClick={rollDice}
//           isDisabled={currentPlayer() !== 1}
//         />
//         <div style={vsStyle}>VS</div>
//         <DiceGame
//           PlayerCount="Player 2"
//           index={player2}
//           handleClick={rollDice}
//           isDisabled={currentPlayer() !== 2 || player2 !== null}
//         />
//       </div>

//       <div style={scoreStyle}>
//         Player 1 Wins: {player1Wins} | Player 2 Wins: {player2Wins}
//       </div>
//       {winner() && (
//         <WinnerDisplay winner={winner()} resetGame={playAgainNextRound} />
//       )}
//     </div>
//   );
// }