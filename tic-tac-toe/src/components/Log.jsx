export default function Log({ gameTurns }) {
  return (<ol id="log">{gameTurns.map((turn, index) => <li key={index}>
    {turn.symbol} selected {turn.square.row + 1}, {turn.square.col + 1}
  </li>)}
  </ol>);
}