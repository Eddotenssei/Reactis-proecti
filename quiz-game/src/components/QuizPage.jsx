import { QUIZ_DATA } from "../quiz-questions";
import { useState } from "react";
import "../App.css";

export default function QuizPage() {
  const [index, setCurrentQuestion] = useState(0);
  // let rightAnswers = 0
  // let wrongAnswers = 0
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  
  const questionData = QUIZ_DATA[index];
  if (index >= QUIZ_DATA.length) {
    return(
       <div className="game-over-box">
      <h1>Game Over</h1>
      <h3>right answers = {rightAnswers * 100 / 10}%</h3>
      <h3>wrong Answers = {wrongAnswers * 100 / 10}%</h3>
    </div>
    )
      
    
  }

  return (
    <>
       <div className="quiz-container">
    <h1 className="quiz-question">{questionData.question}</h1>

    <div className="quiz-page-box">
      {questionData.answers.map((item, answerIndex) => {
        return (
          <button
            className="quiz-answer"
            key={answerIndex}
            onClick={() => {
              if (questionData.correct === answerIndex) {
                setRightAnswers(rightAnswers + 1);
              } else {
                setWrongAnswers(wrongAnswers + 1);
              }
              setCurrentQuestion((prev) => prev + 1);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  </div>
    </>
  );
}
