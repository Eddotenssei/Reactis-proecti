export default function ResetButton({ title, handleReset }) {
  return (
    <button
      style={{
        margin: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "8px",
      }}
      onClick={handleReset}
    >
      {title}
    </button>
  );
}
