import { useState } from "react";
import QuizPage from "./components/QuizPage";
import { QUIZ_DATA } from "./quiz-questions";
import "./App.css";

export default function App() {
  const [questions, setQuestions] = useState(null);

  function getQuestions(difficulty) {
    setQuestions(QUIZ_DATA.filter((q) => q.difficulty === difficulty));
  }

  if (questions !== null) {
    return <QuizPage questions={questions} />;
  }

  return (
    <div className="app-container">
      <h1 className="title">Welcome to the Game 🎮</h1>

      <div className="difficulty-buttons">
        <button onClick={() => getQuestions("Easy")} className="easy">
          Easy
        </button>
        <button onClick={() => getQuestions("Medium")} className="medium">
          Medium
        </button>
        <button onClick={() => getQuestions("Hard")} className="hard">
          Hard
        </button>
      </div>
    </div>
  );
}
