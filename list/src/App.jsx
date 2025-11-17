export default function App() {
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 105 },
    { name: "Cherry", calories: 50 },
    { name: "Pineapple", calories: 452 },
    { name: "Elderberry", calories: 73 },
  ];

  const modified = fruits.map((f) => (
    <li>
      fruit {f.name} has {f.calories} calories.
    </li>
  ));
  return <ol>{modified}</ol>;
}
