import { useState } from "react";
import QuizPage from "./components/QuizPage";
import "./App.css";

export default function App() {
  const [difficulty, setDifficulty] = useState(null);

  if (difficulty !== null) {
    return <QuizPage />;
  }

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to the Quiz Game</h1>
      <p className="welcome-text">Choose your difficulty to start:</p>
      <div className="difficulty-buttons">
        <button
          className="difficulty-btn easy"
          onClick={() => setDifficulty("easy")}
        >
          Easy
        </button>
        <button
          className="difficulty-btn medium"
          onClick={() => setDifficulty("medium")}
        >
          Medium
        </button>
        <button
          className="difficulty-btn hard"
          onClick={() => setDifficulty("hard")}
        >
          Hard
        </button>
      </div>
    </div>
  );
}
