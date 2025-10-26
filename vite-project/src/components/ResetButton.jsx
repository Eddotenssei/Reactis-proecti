export default function ResetButton({ title, handleReset }) {
  return <button onClick={handleReset}>{title}</button>;
}
